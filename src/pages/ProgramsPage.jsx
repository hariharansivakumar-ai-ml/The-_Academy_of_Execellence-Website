import { useEffect } from 'react';
import SpecialPrograms from '../components/SpecialPrograms';
import { ChevronRight, ArrowRight, Star, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from '../components/SplitTitle';

const benefits = [
  { icon: <Star size={24} />, title: 'Builds Confidence', desc: 'Performing, competing, and collaborating in co-curriculars builds self-esteem that lasts a lifetime.' },
  { icon: <Users size={24} />, title: 'Teamwork & Leadership', desc: 'Working in groups, leading events, and managing projects develops real-world collaboration skills.' },
  { icon: <Award size={24} />, title: 'Competition Ready', desc: 'Students participate in zonal, state, and national level competitions across sports, arts, and academics.' },
  { icon: <Clock size={24} />, title: 'Time Management', desc: 'Balancing studies with activities teaches students to prioritise, plan, and manage their time effectively.' },
  { icon: <CheckCircle size={24} />, title: 'Holistic Growth', desc: 'Physical, creative, and intellectual programs ensure development across all areas — not just academics.' },
  { icon: <ArrowRight size={24} />, title: 'University Advantage', desc: 'A strong extracurricular profile gives our students a decisive edge in university and career applications.' },
];

const achievements = [
  { title: 'State Chess Championship', year: '2024', category: 'Chess & Strategy', medal: '🥇 Gold' },
  { title: 'National Science Olympiad', year: '2024', category: 'STEM', medal: '🥈 Silver' },
  { title: 'Inter-School Dance Festival', year: '2023', category: 'Performing Arts', medal: '🥇 Gold' },
  { title: 'Robotics Innovation Cup', year: '2023', category: 'Technology', medal: '🥇 Gold' },
  { title: 'State Athletics Meet', year: '2023', category: 'Sports', medal: '🥉 Bronze' },
  { title: 'Regional Music Competition', year: '2022', category: 'Music', medal: '🥇 Gold' },
];

const scheduleItems = [
  { time: 'Monday – Friday', activity: 'Core Academic Classes', note: '8:00 AM – 2:30 PM' },
  { time: 'Monday & Wednesday', activity: 'STEM / Robotics Club', note: '3:00 PM – 4:30 PM' },
  { time: 'Tuesday & Thursday', activity: 'Sports & Physical Training', note: '3:00 PM – 5:00 PM' },
  { time: 'Friday Evenings', activity: 'Music, Dance & Performing Arts', note: '3:00 PM – 5:00 PM' },
  { time: 'Saturday Morning', activity: 'Chess, Yoga & Wellness', note: '9:00 AM – 11:00 AM' },
  { time: 'Saturday Afternoon', activity: 'Leadership & Personality Dev.', note: '11:30 AM – 1:00 PM' },
];

const ProgramsPage = () => {
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
      <div className="page-hero programs-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Special Programs</span>
          </nav>
          <h1 className="page-hero-title"><SplitTitle text="Special Programs" /></h1>
          <p className="page-hero-subtitle">Beyond the Classroom — Where Passions Are Discovered and Talents Flourish</p>
        </div>
      </div>

      {/* Core Programs component */}
      <SpecialPrograms />

      {/* ── Why Co-Curriculars Matter ─────────────── */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Why It Matters</span>
            <h2 className="section-title"><SplitTitle text="The Power of Co-Curricular Activities" /></h2>
            <p className="section-desc">Research consistently shows that students engaged in structured co-curricular activities outperform their peers — academically, socially, and professionally.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="benefit-icon">{b.icon}</div>
                <h4 className="benefit-title">{b.title}</h4>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activity Schedule ─────────────────────── */}
      <section className="schedule-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Weekly Timetable</span>
            <h2 className="section-title"><SplitTitle text="Program Schedule" /></h2>
            <p className="section-desc">Our programs are carefully scheduled so students can participate fully without compromising academic responsibilities.</p>
          </div>
          <div className="schedule-table reveal">
            {scheduleItems.map((item, i) => (
              <div key={i} className={`schedule-row ${i % 2 === 0 ? 'row-alt' : ''}`}>
                <div className="sch-time"><Clock size={14} /> {item.time}</div>
                <div className="sch-activity">{item.activity}</div>
                <div className="sch-note">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competition Achievements ──────────────── */}
      <section className="achieve-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Hall of Fame</span>
            <h2 className="section-title"><SplitTitle text="Our Competition Achievements" /></h2>
            <p className="section-desc">Our students consistently shine on the state and national stage — a testament to the quality of our programs and the dedication of our coaches.</p>
          </div>
          <div className="achieve-grid">
            {achievements.map((a, i) => (
              <div key={i} className={`achieve-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="achieve-medal">{a.medal}</div>
                <h4 className="achieve-title">{a.title}</h4>
                <span className="achieve-cat">{a.category}</span>
                <div className="achieve-year">{a.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enrolment CTA ─────────────────────────── */}
      <section className="prog-cta-section">
        <div className="container">
          <div className="prog-cta-inner reveal">
            <h2 className="prog-cta-title"><SplitTitle text="Enrol Your Child in Our Programs Today" /></h2>
            <p className="prog-cta-sub">All special programs are included as part of the school's integrated curriculum. Enrolment begins with the admission process.</p>
            <Link to="/admissions" className="btn btn-accent prog-cta-btn">
              Apply for Admission <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .programs-hero {
          background: linear-gradient(135deg, var(--primary) 0%, rgba(217,119,6,0.25) 60%, var(--primary-dark) 100%);
        }
        /* ── Shared Page Hero ── */
        .page-hero {
          position: relative; height: 320px;
          display: flex; align-items: flex-end;
          padding-bottom: 60px; overflow: hidden; margin-top: var(--header-height);
        }
        .page-hero::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(217,119,6,0.12) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(13,148,136,0.08) 0%, transparent 50%);
        }
        .page-hero::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 80px;
          background: linear-gradient(to top, var(--bg-secondary), transparent);
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

        /* ── Benefits ── */
        .benefits-section { background: var(--bg-primary); padding: 100px 24px; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 20px; }
        .benefit-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 36px 28px; transition: all 0.35s ease; }
        .benefit-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(217,119,6,0.2); }
        .benefit-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(217,119,6,0.08); color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: all 0.3s; }
        .benefit-card:hover .benefit-icon { background: var(--accent); color: #fff; }
        .benefit-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px; }
        .benefit-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

        /* ── Schedule ── */
        .schedule-section { background: var(--bg-secondary); padding: 100px 24px; }
        .schedule-table { border-radius: 16px; overflow: hidden; border: 1px solid var(--border-color); margin-top: 20px; }
        .schedule-row { display: grid; grid-template-columns: 1.5fr 2fr 1fr; gap: 0; padding: 20px 28px; align-items: center; border-bottom: 1px solid var(--border-color); transition: background 0.2s ease; }
        .schedule-row:last-child { border-bottom: none; }
        .row-alt { background: var(--bg-primary); }
        .schedule-row:hover { background: rgba(217,119,6,0.04); }
        .sch-time { display: flex; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: 0.88rem; font-weight: 700; color: var(--accent); }
        .sch-activity { font-family: var(--font-sans); font-size: 1rem; font-weight: 600; color: var(--primary); }
        .sch-note { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; text-align: right; }

        /* ── Achievements ── */
        .achieve-section { background: var(--bg-primary); padding: 100px 24px; }
        .achieve-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 20px; }
        .achieve-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 36px 28px; text-align: center; transition: all 0.35s ease; position: relative; overflow: hidden; }
        .achieve-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, var(--accent), #fbbf24); opacity: 0; transition: opacity 0.3s; }
        .achieve-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
        .achieve-card:hover::before { opacity: 1; }
        .achieve-medal { font-size: 2rem; margin-bottom: 16px; }
        .achieve-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 8px; }
        .achieve-cat { font-size: 0.82rem; font-weight: 600; color: var(--secondary); background: rgba(13,148,136,0.08); padding: 4px 10px; border-radius: 20px; }
        .achieve-year { font-family: var(--font-sans); font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-top: 12px; }

        /* ── CTA ── */
        .prog-cta-section { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 80px 24px; }
        .prog-cta-inner { text-align: center; }
        .prog-cta-title { font-family: var(--font-sans); font-size: 2.5rem; font-weight: 800; color: #fff; margin-bottom: 16px; }
        .prog-cta-sub { font-size: 1.05rem; color: rgba(255,255,255,0.7); max-width: 600px; margin: 0 auto 36px; line-height: 1.6; }
        .prog-cta-btn { gap: 8px; }

        @media (max-width: 1024px) {
          .benefits-grid, .achieve-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .benefits-grid, .achieve-grid { grid-template-columns: 1fr; }
          .schedule-row { grid-template-columns: 1fr; gap: 6px; }
          .sch-note { text-align: left; }
          .prog-cta-title { font-size: 1.8rem; }
        }
      `}</style>
    </>
  );
};

export default ProgramsPage;
