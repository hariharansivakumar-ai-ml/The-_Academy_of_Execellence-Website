import { useEffect } from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import { ChevronRight, ArrowRight, MapPin, Clock, Users, BookOpen, Cpu, Dumbbell, Music, Coffee, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from '../components/SplitTitle';
import aboutVideo from '../assets/Indian_students_in_modern_academy_202606101459.mp4';

const milestones = [
  { year: '2010', title: 'Founded', desc: 'The Academy of Excellence established with a vision to redefine quality education in the region.' },
  { year: '2013', title: 'First STEM Lab', desc: 'Launched our first dedicated Science & Technology Innovation Lab with modern equipment.' },
  { year: '2016', title: 'NEP-Aligned Upgrade', desc: 'Revamped our full curriculum framework ahead of the national NEP 2020 rollout.' },
  { year: '2019', title: 'Smart Campus', desc: 'Completed campus digitisation — interactive smart boards, Wi-Fi campus, and digital library.' },
  { year: '2022', title: 'Robotics Club', desc: 'Launched the Robotics & AI Innovation Club, producing state-level competition winners.' },
  { year: '2024', title: 'Excellence Award', desc: 'Recognised as Best Emerging School at the National Education Excellence Awards 2024.' },
];

const facilities = [
  { icon: <BookOpen size={28} />, name: 'Digital Library', desc: '10,000+ books and full digital access to journals, e-books, and academic databases.', colorClass: 'fac-library' },
  { icon: <Cpu size={28} />, name: 'STEM Innovation Lab', desc: 'Fully equipped science, coding, robotics, and 3D printing laboratory for hands-on learning.', colorClass: 'fac-stem' },
  { icon: <Dumbbell size={28} />, name: 'Sports Complex', desc: 'Indoor and outdoor sports areas with basketball, volleyball, athletics, and yoga zones.', colorClass: 'fac-sports' },
  { icon: <Music size={28} />, name: 'Performing Arts Hall', desc: 'Dedicated stage and rehearsal space for music, dance, drama, and cultural events.', colorClass: 'fac-arts' },
  { icon: <Users size={28} />, name: 'Counseling Centre', desc: 'Professional counselors available to support students\' mental health and academic guidance.', colorClass: 'fac-wellness' },
  { icon: <Coffee size={28} />, name: 'Modern Cafeteria', desc: 'Hygienic, nutritious meals prepared fresh daily with dietary options for all students.', colorClass: 'fac-cafeteria' },
];

const teamMembers = [
  { name: 'Dr. Evelyn Vance', role: 'Principal & Ed.D.', dept: 'Academic Leadership' },
  { name: 'Mr. Arjun Sharma', role: 'Vice Principal', dept: 'Curriculum & Pedagogy' },
  { name: 'Ms. Priya Nair', role: 'Head of Sciences', dept: 'Science Department' },
  { name: 'Mr. David Fernandez', role: 'Head of Arts', dept: 'Creative Arts' },
  { name: 'Ms. Shalini Rao', role: 'Head of Counseling', dept: 'Student Wellness' },
  { name: 'Mr. Rahul Mehta', role: 'STEM Coordinator', dept: 'Technology & Innovation' },
];

const AboutPage = () => {
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
      <section className="about-hero-section">
        {/* Background Video */}
        <div className="about-hero-video-bg">
          <video 
            src={aboutVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="about-hero-video-player"
          />
          <div className="about-hero-video-overlay"></div>
        </div>

        <div className="container about-hero-container">
          {/* Centered Content */}
          <div className="about-hero-content-center">
            <div className="about-hero-badge">
              <Sparkles size={16} className="badge-icon" />
              <span>About Us</span>
            </div>
            
            <h1 className="about-hero-title-large">
              <SplitTitle text="About The Academy Of Excellence" />
            </h1>
            
            <h3 className="about-hero-subtitle">
              A Place Where Excellence Meets Opportunity
            </h3>
            
            <p className="about-hero-desc">
              Empowering young minds through academic achievement, STEM innovation, and values-driven leadership since 2010.
            </p>

            <div className="about-hero-actions">
              <Link to="/admissions" className="btn btn-accent about-hero-btn">
                Apply for Admission <ArrowRight size={18} />
              </Link>
              <a href="#about" className="btn btn-outline-white about-hero-btn">
                Explore Our Story
              </a>
            </div>

            {/* Stats Row */}
            <div className="about-hero-stats-row">
              <div className="about-hero-stat-pill">
                <span className="ahsp-val">10+ Years</span>
                <span className="ahsp-label">Legacy</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="ahsp-val">1:15</span>
                <span className="ahsp-label">Teacher-Student Ratio</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="ahsp-val">100%</span>
                <span className="ahsp-label">Holistic Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core About + Vision Mission */}
      <About />
      <VisionMission />

      {/* ── Our Journey Timeline ──────────────────── */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Our History</span>
            <h2 className="section-title"><SplitTitle text="Journey of Excellence" /></h2>
            <p className="section-desc">Over a decade of growth, innovation, and unwavering commitment to every student's success.</p>
          </div>
          <div className="timeline-track">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'tl-left' : 'tl-right'} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="tl-connector" />
                <div className="tl-card">
                  <div className="tl-year">{m.year}</div>
                  <h4 className="tl-title">{m.title}</h4>
                  <p className="tl-desc">{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline-center-line" />
          </div>
        </div>
      </section>

      {/* ── Campus Facilities ─────────────────────── */}
      <section className="facilities-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Infrastructure</span>
            <h2 className="section-title"><SplitTitle text="World-Class Facilities" /></h2>
            <p className="section-desc">Our modern campus is designed to support every dimension of learning — academic, physical, creative, and emotional.</p>
          </div>
          <div className="facilities-grid reveal">
            {facilities.map((f, i) => (
              <div key={i} className={`fac-card ${f.colorClass} reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="fac-icon">{f.icon}</div>
                <h4 className="fac-name">{f.name}</h4>
                <p className="fac-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ───────────────────────── */}
      <section className="team-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Our People</span>
            <h2 className="section-title"><SplitTitle text="Meet Our Leadership" /></h2>
            <p className="section-desc">A passionate team of educators, innovators, and mentors committed to guiding every learner toward their best self.</p>
          </div>
          <div className="team-grid reveal">
            {teamMembers.map((m, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="team-avatar">
                  <svg viewBox="0 0 100 100" className="team-avatar-svg">
                    <defs>
                      <linearGradient id={`tgrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary-light)" />
                        <stop offset="100%" stopColor="var(--primary-dark)" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill={`url(#tgrad${i})`} />
                    <path d="M 50,20 C 58,20 65,27 65,35 C 65,43 58,50 50,50 C 42,50 35,43 35,35 C 35,27 42,20 50,20 Z M 15,85 C 15,67 31,55 50,55 C 69,55 85,67 85,85 Z" fill="rgba(255,255,255,0.25)" />
                  </svg>
                </div>
                <div className="team-info">
                  <h4 className="team-name">{m.name}</h4>
                  <p className="team-role">{m.role}</p>
                  <span className="team-dept">{m.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ─────────────────────────────── */}
      <section className="about-cta-strip">
        <div className="container">
          <div className="cta-strip-inner reveal">
            <div className="cta-strip-text">
              <h3 className="cta-strip-title"><SplitTitle text="Want to Experience TAE First-Hand?" /></h3>
              <p className="cta-strip-sub">Schedule a campus visit and see our facilities, meet our faculty, and feel the TAE difference.</p>
            </div>
            <Link to="/admissions" className="btn btn-accent cta-strip-btn">
              Book a Campus Visit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Page Hero (custom same as Home) ── */
        .about-hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: calc(var(--header-height) + 40px);
          padding-bottom: 80px;
          overflow: hidden;
          background-color: var(--primary);
        }
        .about-hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .about-hero-video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-hero-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.85) 0%, rgba(10, 25, 47, 0.75) 50%, rgba(10, 25, 47, 0.85) 100%);
          z-index: 1;
        }
        .about-hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .about-hero-content-center {
          max-width: 850px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ffffff;
          opacity: 0;
          animation: fadeInUpHero 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s forwards;
        }
        .about-hero-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
        }
        .about-breadcrumb-link {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }
        .about-breadcrumb-link:hover {
          color: var(--accent);
        }
        .about-breadcrumb-sep {
          color: rgba(255,255,255,0.35);
          flex-shrink: 0;
        }
        .about-breadcrumb-current {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
        }
        .about-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--accent);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }
        .about-hero-title-large {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-weight: 600;
          font-size: 3.75rem;
          line-height: 1.15;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .about-hero-subtitle {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 750px;
        }
        .about-hero-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 40px;
          max-width: 700px;
          line-height: 1.6;
        }
        .about-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-bottom: 48px;
        }
        .about-hero-btn {
          min-width: 180px;
        }
        .about-hero-stats-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }
        .about-hero-stat-pill {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 10px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }
        .about-hero-stat-pill:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .ahsp-val {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--accent);
        }
        .ahsp-label {
          font-family: var(--font-sans);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }
        @media (max-width: 992px) {
          .about-hero-title-large {
            font-size: 3rem;
          }
          .about-hero-subtitle {
            font-size: 1.2rem;
          }
        }
        @media (max-width: 768px) {
          .about-hero-section {
            padding-top: calc(var(--header-height) + 20px);
            padding-bottom: 60px;
          }
          .about-hero-title-large {
            font-size: 2.5rem;
          }
          .about-hero-desc {
            margin-bottom: 30px;
          }
          .about-hero-actions {
            width: 100%;
          }
          .about-hero-btn {
            width: 100%;
          }
          .about-hero-stats-row {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .about-hero-stat-pill {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }

        @keyframes fadeInUpHero {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Timeline ── */
        .timeline-section { background: var(--bg-primary); padding: 100px 24px; }
        .timeline-track {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin-top: 60px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }
        .timeline-center-line {
          position: absolute;
          top: 0; bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: linear-gradient(to bottom, var(--accent), var(--secondary));
          z-index: 0;
        }
        .timeline-item {
          display: flex;
          justify-content: flex-start;
          position: relative;
          padding-bottom: 40px;
          z-index: 1;
        }
        .tl-right { justify-content: flex-end; }
        .tl-connector {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 14px; height: 14px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.2);
          z-index: 2;
        }
        .tl-card {
          width: calc(50% - 40px);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px 28px;
          transition: all 0.3s ease;
        }
        .tl-card:hover { box-shadow: var(--shadow-md); border-color: rgba(var(--accent-rgb), 0.2); transform: translateY(-3px); }
        .tl-year { font-family: var(--font-sans); font-size: 0.8rem; font-weight: 800; color: var(--accent); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 8px; }
        .tl-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 8px; }
        .tl-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }

        /* ── Facilities ── */
        .facilities-section { background: var(--bg-secondary); padding: 100px 24px; }
        .facilities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 20px;
        }
        .fac-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 36px 28px;
          text-align: left;
          transition: all 0.35s ease;
          box-shadow: var(--shadow-sm);
        }
        .fac-icon { margin-bottom: 20px; padding: 14px; border-radius: 12px; display: inline-flex; transition: all 0.3s ease; }
        .fac-name { font-family: var(--font-sans); font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 10px; }
        .fac-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

        /* Individual colorful themes for facilities */
        /* 1. Digital Library - Indigo */
        .fac-library .fac-icon { color: #4f46e5; background: rgba(79, 70, 229, 0.1); }
        .fac-library:hover { border-color: rgba(79, 70, 229, 0.4); box-shadow: 0 12px 30px rgba(79, 70, 229, 0.15); transform: translateY(-6px); }
        .fac-library:hover .fac-icon { background: #4f46e5; color: #fff; }

        /* 2. STEM Innovation Lab - Amber/Gold */
        .fac-stem .fac-icon { color: #d97706; background: rgba(217, 119, 6, 0.1); }
        .fac-stem:hover { border-color: rgba(217, 119, 6, 0.4); box-shadow: 0 12px 30px rgba(217, 119, 6, 0.15); transform: translateY(-6px); }
        .fac-stem:hover .fac-icon { background: #d97706; color: #fff; }

        /* 3. Sports Complex - Emerald */
        .fac-sports .fac-icon { color: #059669; background: rgba(5, 150, 105, 0.1); }
        .fac-sports:hover { border-color: rgba(5, 150, 105, 0.4); box-shadow: 0 12px 30px rgba(5, 150, 105, 0.15); transform: translateY(-6px); }
        .fac-sports:hover .fac-icon { background: #059669; color: #fff; }

        /* 4. Performing Arts Hall - Rose */
        .fac-arts .fac-icon { color: #db2777; background: rgba(219, 39, 119, 0.1); }
        .fac-arts:hover { border-color: rgba(219, 39, 119, 0.4); box-shadow: 0 12px 30px rgba(219, 39, 119, 0.15); transform: translateY(-6px); }
        .fac-arts:hover .fac-icon { background: #db2777; color: #fff; }

        /* 5. Counseling Centre - Teal */
        .fac-wellness .fac-icon { color: #0d9488; background: rgba(13, 148, 136, 0.1); }
        .fac-wellness:hover { border-color: rgba(13, 148, 136, 0.4); box-shadow: 0 12px 30px rgba(13, 148, 136, 0.15); transform: translateY(-6px); }
        .fac-wellness:hover .fac-icon { background: #0d9488; color: #fff; }

        /* 6. Modern Cafeteria - Orange */
        .fac-cafeteria .fac-icon { color: #ea580c; background: rgba(234, 88, 12, 0.1); }
        .fac-cafeteria:hover { border-color: rgba(234, 88, 12, 0.4); box-shadow: 0 12px 30px rgba(234, 88, 12, 0.15); transform: translateY(-6px); }
        .fac-cafeteria:hover .fac-icon { background: #ea580c; color: #fff; }

        /* ── Team ── */
        .team-section { background: var(--bg-primary); padding: 100px 24px; }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 20px;
        }
        .team-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.35s ease;
        }
        .team-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(var(--accent-rgb), 0.2); }
        .team-avatar { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; margin: 0 auto 20px; border: 3px solid var(--accent); }
        .team-avatar-svg { width: 100%; height: 100%; }
        .team-name { font-family: var(--font-sans); font-size: 1.05rem; font-weight: 700; color: var(--primary); margin-bottom: 4px; }
        .team-role { font-size: 0.88rem; color: var(--accent); font-weight: 600; margin-bottom: 6px; }
        .team-dept { font-size: 0.8rem; color: var(--text-muted); font-weight: 500; background: var(--bg-tertiary); padding: 4px 10px; border-radius: 20px; display: inline-block; }

        /* ── CTA Strip ── */
        .about-cta-strip { background: var(--bg-secondary); padding: 60px 24px; }
        .cta-strip-inner {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: 20px;
          padding: 48px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .cta-strip-title { font-family: var(--font-sans); font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .cta-strip-sub { font-size: 1rem; color: rgba(255,255,255,0.7); line-height: 1.5; }
        .cta-strip-btn { flex-shrink: 0; gap: 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .timeline-center-line { display: none; }
          .timeline-item, .tl-right { justify-content: flex-start; }
          .tl-card { width: 100%; }
          .tl-connector { display: none; }
          .facilities-grid, .team-grid { grid-template-columns: 1fr; }
          .cta-strip-inner { flex-direction: column; text-align: center; padding: 40px 24px; }
        }
        @media (max-width: 1024px) {
          .facilities-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
