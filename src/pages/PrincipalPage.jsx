import { useEffect } from 'react';
import PrincipalMessage from '../components/PrincipalMessage';
import { ChevronRight, ArrowRight, Quote, Heart, Target, Users, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from '../components/SplitTitle';

const philosophy = [
  {
    icon: <Heart size={28} />,
    title: 'Child-First Approach',
    desc: 'Every decision we make — from curriculum design to infrastructure planning — starts with a single question: "What is best for the child?"',
  },
  {
    icon: <Target size={28} />,
    title: 'Purpose-Driven Education',
    desc: 'We believe education must go beyond marks and ranks. Our goal is to develop purposeful, empathetic individuals ready to contribute to society.',
  },
  {
    icon: <Users size={28} />,
    title: 'Community Partnership',
    desc: 'A child\'s growth is a shared journey. We actively involve parents, teachers, and the community as co-creators of every student\'s success.',
  },
  {
    icon: <Star size={28} />,
    title: 'Celebrating Every Win',
    desc: 'Whether it is a first place trophy or mastering reading — every milestone matters. We celebrate effort as much as achievement.',
  },
  {
    icon: <BookOpen size={28} />,
    title: 'Lifelong Love of Learning',
    desc: 'Our deepest measure of success is not board results — it is sending students into the world who are curious, passionate, and never stop learning.',
  },
  {
    icon: <ArrowRight size={28} />,
    title: 'Forward-Looking Vision',
    desc: 'We continuously revise our methods, adopt new pedagogies, and embrace technology to ensure our students are always prepared for tomorrow.',
  },
];

const initiatives = [
  { title: 'Zero-Dropout Initiative', desc: 'Dedicated counselors and academic support ensure no student is left behind or disengaged.', year: '2021' },
  { title: 'Green Campus Drive', desc: 'Led our school\'s transition to solar energy, planted 500+ trees, and introduced eco-curriculum.', year: '2022' },
  { title: 'Digital Equity Program', desc: 'Provided tablets and internet access to 120 students from economically weaker backgrounds.', year: '2022' },
  { title: 'Skill India Partnership', desc: 'Partnered with national vocational programs to give Grade X and XII students certified skill training.', year: '2023' },
  { title: 'Parent Academy', desc: 'Monthly workshops to help parents support their children\'s learning journey at home.', year: '2023' },
  { title: 'Teacher Excellence Fund', desc: 'Established a scholarship program for teachers to pursue advanced certifications and international training.', year: '2024' },
];

const quotes = [
  { text: '"A school that knows its students by name, not just by number, is a school that truly cares."', source: 'Dr. Evelyn Vance, Principal' },
  { text: '"We don\'t just teach subjects. We nurture souls, sharpen minds, and prepare hearts for a better world."', source: 'Mr. Arjun Sharma, Vice Principal' },
];

const PrincipalPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
      });
    };
    const observer = new IntersectionObserver(revealCallback, { root: null, rootMargin: '0px', threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Page Hero Banner */}
      <div className="page-hero principal-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Principal's Message</span>
          </nav>
          <h1 className="page-hero-title"><SplitTitle text="Principal's Message" /></h1>
          <p className="page-hero-subtitle">Inspiration, Philosophy & Vision from Our School Leadership</p>
        </div>
      </div>

      {/* Core PrincipalMessage component */}
      <PrincipalMessage />

      {/* ── Our Philosophy ────────────────────────── */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Core Beliefs</span>
            <h2 className="section-title"><SplitTitle text="Our Educational Philosophy" /></h2>
            <p className="section-desc">These six principles guide everything we do — from classroom conversations to campus policy — at The Academy of Excellence.</p>
          </div>
          <div className="philosophy-grid">
            {philosophy.map((p, i) => (
              <div key={i} className={`phil-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="phil-icon">{p.icon}</div>
                <h4 className="phil-title">{p.title}</h4>
                <p className="phil-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Quotes ─────────────────────── */}
      <section className="leadership-quotes-section">
        <div className="container">
          <div className="quotes-grid">
            {quotes.map((q, i) => (
              <div key={i} className={`leader-quote-card reveal reveal-delay-${i + 1}`}>
                <Quote size={36} className="lq-icon" />
                <blockquote className="lq-text">{q.text}</blockquote>
                <cite className="lq-source">{q.source}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Initiatives Under Current Leadership ─ */}
      <section className="initiatives-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Impact</span>
            <h2 className="section-title"><SplitTitle text="Leadership Initiatives" /></h2>
            <p className="section-desc">Under Dr. Vance's leadership, the school has launched several transformative programs that have directly impacted student and community outcomes.</p>
          </div>
          <div className="initiatives-list">
            {initiatives.map((item, i) => (
              <div key={i} className={`init-item reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="init-year">{item.year}</div>
                <div className="init-content">
                  <h4 className="init-title">{item.title}</h4>
                  <p className="init-desc">{item.desc}</p>
                </div>
                <div className="init-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────── */}
      <section className="principal-cta-section">
        <div className="container">
          <div className="principal-cta-card reveal">
            <div className="pcta-left">
              <h3 className="pcta-title">Connect With Our Leadership</h3>
              <p className="pcta-sub">We welcome families to schedule a personal meeting with our Principal or Vice Principal to discuss their child's needs, goals, and aspirations.</p>
            </div>
            <div className="pcta-right">
              <Link to="/admissions" className="btn btn-accent pcta-btn">
                Schedule a Meeting <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Shared Page Hero ── */
        .page-hero {
          position: relative;
          height: 380px;
          background-color: var(--primary);
          display: flex;
          align-items: flex-end;
          padding-top: var(--header-height);
          padding-bottom: 60px;
          overflow: hidden;
        }
        .page-hero-overlay { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 28px 28px; }
        .page-hero-content { position: relative; z-index: 5; max-width: var(--container-max-width); width: 100%; margin: 0 auto; padding: 0 24px; }
        .page-breadcrumb { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
        .breadcrumb-link { font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.2s; }
        .breadcrumb-link:hover { color: var(--accent); }
        .breadcrumb-sep { color: rgba(255,255,255,0.35); flex-shrink: 0; }
        .breadcrumb-current { font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; color: var(--accent); }
        .page-hero-title { font-family: var(--font-sans); font-size: 3.25rem; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 12px; text-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .page-hero-subtitle { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 400; color: rgba(255,255,255,0.7); }

        /* ── Philosophy ── */
        .philosophy-section { background: var(--bg-secondary); padding: 100px 24px; }
        .philosophy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 20px; }
        .phil-card { background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 16px; padding: 36px 28px; transition: all 0.35s ease; }
        .phil-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(217,119,6,0.2); }
        .phil-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(10,25,47,0.06); color: var(--primary); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: all 0.3s; }
        .phil-card:hover .phil-icon { background: var(--primary); color: #fff; }
        .phil-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px; }
        .phil-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65; }

        /* ── Leadership Quotes ── */
        .leadership-quotes-section { background: var(--primary); padding: 80px 24px; }
        .quotes-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 1000px; margin: 0 auto; }
        .leader-quote-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 48px 40px; position: relative; transition: all 0.3s ease; }
        .leader-quote-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-4px); }
        .lq-icon { color: rgba(217,119,6,0.4); margin-bottom: 24px; }
        .lq-text { font-family: var(--font-serif); font-size: 1.25rem; font-style: italic; color: #fff; line-height: 1.6; margin-bottom: 24px; }
        .lq-source { font-family: var(--font-sans); font-size: 0.88rem; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; display: block; }

        /* ── Initiatives ── */
        .initiatives-section { background: var(--bg-primary); padding: 100px 24px; }
        .initiatives-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 20px; }
        .init-item { display: flex; gap: 20px; align-items: flex-start; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 14px; padding: 28px 24px; transition: all 0.3s ease; }
        .init-item:hover { box-shadow: var(--shadow-md); border-color: rgba(217,119,6,0.2); transform: translateY(-3px); }
        .init-year { flex-shrink: 0; font-family: var(--font-sans); font-size: 0.8rem; font-weight: 800; color: var(--accent); background: rgba(217,119,6,0.1); padding: 6px 10px; border-radius: 6px; height: fit-content; }
        .init-content { flex: 1; }
        .init-title { font-family: var(--font-sans); font-size: 1.05rem; font-weight: 700; color: var(--primary); margin-bottom: 6px; }
        .init-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; }
        .init-dot { display: none; }

        /* ── Principal CTA ── */
        .principal-cta-section { background: var(--bg-secondary); padding: 60px 24px; }
        .principal-cta-card { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%); border-radius: 20px; padding: 52px 60px; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
        .pcta-title { font-family: var(--font-sans); font-size: 1.65rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
        .pcta-sub { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.55; max-width: 520px; }
        .pcta-btn { flex-shrink: 0; gap: 8px; }

        @media (max-width: 1024px) {
          .philosophy-grid { grid-template-columns: repeat(2, 1fr); }
          .initiatives-list { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .philosophy-grid { grid-template-columns: 1fr; }
          .quotes-grid { grid-template-columns: 1fr; }
          .principal-cta-card { flex-direction: column; text-align: center; padding: 40px 24px; }
          .pcta-sub { max-width: 100%; }
        }
      `}</style>
    </>
  );
};

export default PrincipalPage;
