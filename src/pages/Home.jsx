import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import QuoteSection from '../components/QuoteSection';
import SplitTitle from '../components/SplitTitle';
import {
  BookOpen, Users, Trophy, Cpu, Music, Heart,
  ArrowRight, CheckCircle, Star, GraduationCap, Shield, Lightbulb
} from 'lucide-react';

const exploreCards = [
  {
    path: '/about',
    tag: 'Our Story',
    title: 'About Us',
    desc: 'Discover the values, vision, and mission that drive everything we do at The Academy of Excellence.',
    icon: <BookOpen size={28} />,
    color: 'card-navy',
  },
  {
    path: '/academics',
    tag: 'Curriculum',
    title: 'Academics',
    desc: 'Explore our NEP-aligned curriculum, STEM labs, smart classrooms, and dedicated faculty.',
    icon: <GraduationCap size={28} />,
    color: 'card-teal',
  },
  {
    path: '/programs',
    tag: 'Co-Curricular',
    title: 'Special Programs',
    desc: 'From robotics to performing arts — 12+ unique programs designed for all-round growth.',
    icon: <Music size={28} />,
    color: 'card-gold',
  },
  {
    path: '/principal',
    tag: 'Leadership',
    title: "Principal's Message",
    desc: 'Hear directly from our Principal about the culture, values, and vision for every learner.',
    icon: <Shield size={28} />,
    color: 'card-navy',
  },
  {
    path: '/admissions',
    tag: 'Join Us',
    title: 'Admissions',
    desc: 'Learn about our step-by-step admission process and begin your child\'s journey today.',
    icon: <Users size={28} />,
    color: 'card-teal',
  },
];

const highlights = [
  { icon: <CheckCircle size={20} />, text: 'NEP 2020 fully aligned curriculum' },
  { icon: <CheckCircle size={20} />, text: 'Smart digital classrooms with interactive boards' },
  { icon: <CheckCircle size={20} />, text: 'STEM & Robotics innovation lab' },
  { icon: <CheckCircle size={20} />, text: '12+ co-curricular & special programs' },
  { icon: <CheckCircle size={20} />, text: 'Dedicated counseling & mental wellness support' },
  { icon: <CheckCircle size={20} />, text: 'Safe & inclusive campus environment' },
  { icon: <CheckCircle size={20} />, text: 'Trained & certified faculty team' },
  { icon: <CheckCircle size={20} />, text: '100% holistic development focus' },
];

const awards = [
  { year: '2024', title: 'Best Emerging School', body: 'Education Excellence Awards' },
  { year: '2023', title: 'Top NEP-Aligned School', body: 'National School Rankings' },
  { year: '2023', title: 'Innovation in STEM', body: 'State Education Board' },
  { year: '2022', title: 'Outstanding Infrastructure', body: 'EduLeaders Summit' },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(revealCallback, {
      root: null, rootMargin: '0px', threshold: 0.1
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <Hero />
      <Stats />

      {/* ── Explore Our School — Bento Grid ─────────── */}
      <section className="explore-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Explore TAE</span>
            <h2 className="section-title"><SplitTitle text="Everything You Need to Know" /></h2>
            <p className="section-desc">
              Navigate through our school's key sections — each crafted to give you a complete picture of life at The Academy of Excellence.
            </p>
          </div>

          <div className="bento-grid reveal">

            {/* ── Featured tall card – About Us ── */}
            <Link to="/about" className="bento-card bento-featured">
              <div className="bento-featured-bg" />
              <div className="bento-feat-tag">Our Story</div>
              <div className="bento-feat-icon">
                <BookOpen size={36} />
              </div>
              <h3 className="bento-feat-title">About Us</h3>
              <p className="bento-feat-desc">
                Discover the values, vision, and mission that drive everything we do at The Academy of Excellence — a school built on trust, character, and excellence.
              </p>
              <div className="bento-feat-cta">
                Discover More <ArrowRight size={16} />
              </div>
              <div className="bento-feat-badge">Est. 2010</div>
            </Link>

            {/* ── Top-right small cards ── */}
            <div className="bento-col-right">
              {exploreCards.slice(1, 3).map((card, i) => (
                <Link to={card.path} key={i} className={`bento-card bento-small ${card.color}`}>
                  <div className="bento-small-head">
                    <div className="bento-sm-icon">{card.icon}</div>
                    <span className="bento-sm-tag">{card.tag}</span>
                  </div>
                  <h4 className="bento-sm-title">{card.title}</h4>
                  <p className="bento-sm-desc">{card.desc}</p>
                  <div className="bento-sm-arrow"><ArrowRight size={15} /></div>
                </Link>
              ))}
            </div>

            {/* ── Bottom wide row – Principal + Admissions ── */}
            {exploreCards.slice(3).map((card, i) => (
              <Link to={card.path} key={i} className={`bento-card bento-wide ${card.color}`}>
                <div className="bento-wide-inner">
                  <div className="bento-wide-icon">{card.icon}</div>
                  <div className="bento-wide-text">
                    <span className="bento-wide-tag">{card.tag}</span>
                    <h4 className="bento-wide-title">{card.title}</h4>
                    <p className="bento-wide-desc">{card.desc}</p>
                  </div>
                </div>
                <div className="bento-wide-cta">Explore <ArrowRight size={14} /></div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ── School Highlights ───────────────────────── */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-inner">
            <div className="highlights-left reveal reveal-left">
              <span className="section-tag">What Sets Us Apart</span>
              <h2 className="section-title text-left-h"><SplitTitle text="Why Families Choose TAE" /></h2>
              <p className="hl-desc">
                We combine academic rigour with character development, modern infrastructure, and a deeply caring faculty — creating an environment where every child truly thrives.
              </p>
              <Link to="/admissions" className="btn btn-primary hl-cta">
                Start Admission Process <ArrowRight size={16} />
              </Link>
            </div>
            <div className="highlights-right reveal reveal-right">
              <div className="highlights-list">
                {highlights.map((item, i) => (
                  <div key={i} className={`hl-item reveal reveal-delay-${(i % 4) + 1}`}>
                    <span className="hl-check">{item.icon}</span>
                    <span className="hl-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Awards & Recognition ────────────────────── */}
      <section className="awards-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Recognition</span>
            <h2 className="section-title"><SplitTitle text="Awards & Accolades" /></h2>
            <p className="section-desc">Our dedication to excellence has been recognised by leading education bodies across the country.</p>
          </div>
          <div className="awards-grid reveal">
            {awards.map((a, i) => (
              <div key={i} className={`award-card reveal reveal-delay-${i + 1}`}>
                <div className="award-year">{a.year}</div>
                <div className="award-icon"><Trophy size={32} /></div>
                <h4 className="award-title">{a.title}</h4>
                <p className="award-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />

      {/* ── Final CTA Banner ────────────────────────── */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-card reveal">
            <Lightbulb size={40} className="cta-icon" />
            <h2 className="cta-heading"><SplitTitle text="Ready to Begin the Journey?" /></h2>
            <p className="cta-sub">
              Admissions for the upcoming academic year are now open. Take the first step towards your child's exceptional future.
            </p>
            <div className="cta-btns">
              <Link to="/admissions" className="btn btn-accent">Apply for Admission <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn btn-outline">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Explore Section — Bento Grid ── */
        .explore-section {
          background-color: var(--bg-secondary);
          padding: 100px 24px;
        }

        /* Outer grid: [featured | right-col] in row1, [wide wide] in row2 */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
          margin-top: 20px;
        }

        /* shared card base */
        .bento-card {
          display: block;
          text-decoration: none;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: transform 0.4s cubic-bezier(0.165,0.84,0.44,1),
                      box-shadow 0.4s ease;
        }
        .bento-card:hover { box-shadow: var(--shadow-premium); }

        /* ── Featured tall card ── */
        .bento-featured {
          grid-column: 1;
          grid-row: 1;
          background: linear-gradient(160deg, var(--accent) 0%, var(--accent-hover) 60%, #9c7a23 100%);
          padding: 52px 44px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 480px;
          border: 1px solid rgba(10, 25, 47, 0.08);
        }
        .bento-featured:hover { transform: translateY(-6px) scale(1.01); }
        .bento-featured-bg {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.25) 0%, transparent 55%),
            radial-gradient(circle at 10% 90%, rgba(10, 25, 47, 0.08) 0%, transparent 55%);
          pointer-events: none;
        }
        .bento-feat-tag {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--primary);
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        .bento-feat-icon {
          width: 72px; height: 72px;
          border-radius: 18px;
          background: rgba(10, 25, 47, 0.06);
          border: 1px solid rgba(10, 25, 47, 0.12);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          position: relative; z-index: 2;
          transition: all 0.35s ease;
        }
        .bento-featured:hover .bento-feat-icon {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          transform: rotate(-8deg) scale(1.08);
        }
        .bento-feat-title {
          font-family: var(--font-sans);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary);
          letter-spacing: -0.02em;
          margin-bottom: 14px;
          position: relative; z-index: 2;
          line-height: 1.15;
        }
        .bento-feat-desc {
          font-size: 0.95rem;
          color: rgba(10, 25, 47, 0.8);
          line-height: 1.65;
          margin-bottom: 28px;
          position: relative; z-index: 2;
          max-width: 340px;
        }
        .bento-feat-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary);
          position: relative; z-index: 2;
          transition: gap 0.2s ease;
        }
        .bento-featured:hover .bento-feat-cta { gap: 14px; }
        .bento-feat-badge {
          position: absolute;
          top: 32px; right: 32px;
          background: rgba(10, 25, 47, 0.06);
          border: 1px solid rgba(10, 25, 47, 0.12);
          color: rgba(10, 25, 47, 0.7);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 50px;
          letter-spacing: 0.08em;
          z-index: 2;
        }

        /* ── Right column (2 stacked cards) ── */
        .bento-col-right {
          grid-column: 2;
          grid-row: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .bento-small {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 32px 32px 28px;
          flex: 1;
          position: relative;
        }
        .bento-small::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          border-radius: 20px 20px 0 0;
          transition: height 0.3s ease;
        }
        .bento-small.card-teal::after  { background: linear-gradient(90deg, var(--secondary), #0ea5e9); }
        .bento-small.card-gold::after  { background: linear-gradient(90deg, var(--accent), #fbbf24); }
        .bento-small.card-navy::after  { background: linear-gradient(90deg, var(--primary), var(--accent)); }
        .bento-small:hover::after { height: 5px; }
        .bento-small:hover { transform: translateX(5px); box-shadow: var(--shadow-md); }
        .bento-small-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .bento-sm-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(10,25,47,0.05);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .bento-small:hover .bento-sm-icon { background: var(--primary); color: #fff; }
        .bento-sm-tag {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
        }
        .bento-sm-title {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }
        .bento-sm-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 16px;
        }
        .bento-sm-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: rgba(217,119,6,0.1);
          color: var(--accent);
          transition: all 0.25s ease;
        }
        .bento-small:hover .bento-sm-arrow {
          background: var(--accent);
          color: #fff;
          transform: translateX(3px);
        }

        /* ── Bottom wide cards ── */
        .bento-wide {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 28px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .bento-wide:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(217,119,6,0.2);
        }
        .bento-wide-inner { display: flex; align-items: center; gap: 24px; flex: 1; }
        .bento-wide-icon {
          width: 60px; height: 60px;
          border-radius: 14px;
          background: rgba(10,25,47,0.05);
          color: var(--primary);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        .bento-wide:hover .bento-wide-icon { background: var(--primary); color: #fff; transform: scale(1.08); }
        .bento-wide-text { flex: 1; }
        .bento-wide-tag {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          display: block;
          margin-bottom: 4px;
        }
        .bento-wide-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .bento-wide-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .bento-wide-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent);
          white-space: nowrap;
          padding: 10px 20px;
          border: 1.5px solid rgba(217,119,6,0.3);
          border-radius: 50px;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .bento-wide:hover .bento-wide-cta {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          gap: 10px;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: 1fr; }
          .bento-col-right { grid-column: 1; grid-row: auto; flex-direction: row; }
          .bento-featured { min-height: 380px; grid-column: 1; grid-row: auto; }
          .bento-wide { grid-column: 1; }
        }
        @media (max-width: 768px) {
          .bento-col-right { flex-direction: column; }
          .bento-wide { flex-direction: column; align-items: flex-start; }
          .bento-wide-inner { flex-direction: column; align-items: flex-start; }
          .bento-feat-title { font-size: 1.75rem; }
          .bento-featured { padding: 36px 28px; min-height: 360px; }
        }

        /* ── Highlights Section ── */
        .highlights-section {
          background-color: var(--bg-primary);
          padding: 100px 24px;
        }
        .highlights-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .text-left-h {
          text-align: left !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .hl-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 20px 0 32px;
        }
        .hl-cta { gap: 8px; }
        .highlights-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .hl-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-radius: 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          transition: all 0.25s ease;
        }
        .hl-item:hover {
          background: #fff;
          box-shadow: var(--shadow-sm);
          border-color: rgba(217,119,6,0.2);
          transform: translateY(-2px);
        }
        .hl-check { color: var(--secondary); flex-shrink: 0; margin-top: 2px; }
        .hl-text {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.4;
        }

        /* ── Awards Section ── */
        .awards-section {
          background: var(--bg-secondary);
          padding: 100px 24px;
        }
        .awards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 20px;
        }
        .award-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 36px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.35s ease;
          box-shadow: var(--shadow-sm);
        }
        .award-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(217,119,6,0.25);
        }
        .award-year {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .award-icon {
          color: var(--accent);
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .award-card:hover .award-icon { transform: scale(1.15) rotate(5deg); }
        .award-title {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .award-body {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* ── Home CTA Section ── */
        .home-cta-section {
          background: var(--bg-primary);
          padding: 100px 24px;
        }
        .home-cta-card {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 24px;
          padding: 80px 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .home-cta-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(217,119,6,0.12) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(13,148,136,0.08) 0%, transparent 50%);
        }
        .home-cta-card > * { position: relative; z-index: 2; }
        .cta-icon { color: var(--accent); margin-bottom: 24px; }
        .cta-heading {
          font-family: var(--font-sans);
          font-size: 2.75rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .cta-sub {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.75);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 40px;
        }
        .cta-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .explore-grid { grid-template-columns: repeat(2, 1fr); }
          .awards-grid { grid-template-columns: repeat(2, 1fr); }
          .highlights-inner { gap: 48px; }
        }
        @media (max-width: 768px) {
          .explore-grid { grid-template-columns: 1fr; }
          .highlights-inner { grid-template-columns: 1fr; gap: 40px; }
          .highlights-list { grid-template-columns: 1fr; }
          .awards-grid { grid-template-columns: 1fr 1fr; }
          .home-cta-card { padding: 50px 24px; border-radius: 16px; }
          .cta-heading { font-size: 2rem; }
        }
        @media (max-width: 480px) {
          .awards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};

export default Home;
