import { useEffect } from 'react';
import Academics from '../components/Academics';
import { ChevronRight, ArrowRight, CheckCircle, BookOpen, Award, BarChart2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from '../components/SplitTitle';
import academicsHeroBg from '../assets/Indian_students_and_teachers_learning_202606101559.jpeg';

const gradeGroups = [
  {
    level: 'Pre-Primary',
    grades: 'LKG & UKG',
    color: 'gp-teal',
    focus: 'Play-based learning, sensory development, phonics, numeracy basics, and social skills.',
    subjects: ['Phonics & Reading', 'Creative Arts', 'Motor Skills', 'Environmental Awareness', 'Social Play'],
  },
  {
    level: 'Primary',
    grades: 'Grades I – V',
    color: 'gp-gold',
    focus: 'Building strong literacy, numeracy, scientific thinking, and character development.',
    subjects: ['English Language', 'Mathematics', 'EVS / Science', 'Social Studies', 'Hindi / Tamil', 'Computer Basics'],
  },
  {
    level: 'Middle School',
    grades: 'Grades VI – VIII',
    color: 'gp-navy',
    focus: 'Critical thinking, subject specialisation, STEM exploration, and leadership programs.',
    subjects: ['Sciences (Physics/Chem/Bio)', 'Mathematics', 'Social Science', 'Languages', 'IT & Coding', 'Arts & Sports'],
  },
  {
    level: 'Secondary',
    grades: 'Grades IX – X',
    color: 'gp-teal',
    focus: 'Board examination preparation, analytical skills, and career-readiness foundations.',
    subjects: ['Science / Commerce / Humanities', 'Mathematics', 'Languages', 'Value Education', 'STEM Projects'],
  },
  {
    level: 'Senior Secondary',
    grades: 'Grades XI – XII',
    color: 'gp-gold',
    focus: 'Stream-specific depth, competitive exam support, and university application guidance.',
    subjects: ['Science / Commerce / Arts', 'Core Subject Mastery', 'Electives & Projects', 'Career Counseling'],
  },
];

const methodologies = [
  { icon: <BarChart2 size={26} />, title: 'Activity-Based Learning', desc: 'Hands-on experiments, group projects, and simulations replace rote memorisation with deep understanding.' },
  { icon: <BookOpen size={26} />, title: 'Inquiry-Driven Pedagogy', desc: 'Students are encouraged to ask "why" before "what" — nurturing genuine curiosity and analytical thinking.' },
  { icon: <Award size={26} />, title: 'Continuous Assessment', desc: 'Regular formative assessments, project portfolios, and holistic report cards rather than end-of-term exams alone.' },
  { icon: <CheckCircle size={26} />, title: 'Inclusive Differentiation', desc: 'Individualized learning plans ensure every student — regardless of pace — receives the support they need.' },
  { icon: <Clock size={26} />, title: 'Flipped Classroom Model', desc: 'Concepts are introduced digitally at home; classroom time is reserved for discussion, application, and collaboration.' },
  { icon: <ArrowRight size={26} />, title: 'Project-Based Capstones', desc: 'Each academic year ends with student-led projects that integrate multiple subjects into real-world problem solving.' },
];

const results = [
  { stat: '98%', label: 'Board Pass Rate', sub: 'Consistent across Grades X & XII' },
  { stat: '40+', label: 'State Toppers', sub: 'Across all subjects since 2015' },
  { stat: '100%', label: 'University Placement', sub: 'Grade XII students in top institutions' },
  { stat: '15+', label: 'Academic Awards', sub: 'State and national competitions' },
];

const AcademicsPage = () => {
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
      <div className="page-hero academics-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Academics</span>
          </nav>
          <h1 className="page-hero-title"><SplitTitle text="Academics" /></h1>
          <p className="page-hero-subtitle">A Rigorous, Joyful & Future-Ready Learning Experience</p>
        </div>
      </div>

      {/* Core Academics component */}
      <Academics />

      {/* ── Grade Levels ──────────────────────────── */}
      <section className="grades-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Grade Structure</span>
            <h2 className="section-title"><SplitTitle text="Learning Pathways by Grade" /></h2>
            <p className="section-desc">From Pre-Primary through Senior Secondary, each level is thoughtfully designed to build on the last — ensuring seamless academic progression.</p>
          </div>
          <div className="grades-list">
            {gradeGroups.map((g, i) => (
              <div key={i} className={`grade-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className={`grade-badge ${g.color}`}>{g.level}</div>
                <div className="grade-info">
                  <div className="grade-grades">{g.grades}</div>
                  <p className="grade-focus">{g.focus}</p>
                  <div className="grade-subjects">
                    {g.subjects.map((s, j) => <span key={j} className="subject-chip">{s}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teaching Methodologies ────────────────── */}
      <section className="methodology-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">How We Teach</span>
            <h2 className="section-title"><SplitTitle text="Our Teaching Methodologies" /></h2>
            <p className="section-desc">We combine time-tested pedagogical principles with modern educational research to create learning experiences that stick.</p>
          </div>
          <div className="method-grid">
            {methodologies.map((m, i) => (
              <div key={i} className={`method-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="method-icon">{m.icon}</div>
                <h4 className="method-title">{m.title}</h4>
                <p className="method-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Academic Results ──────────────────────── */}
      <section className="results-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">Track Record</span>
            <h2 className="section-title text-white"><SplitTitle text="Academic Results That Speak" /></h2>
            <p className="section-desc text-white-muted">Numbers don't tell the whole story — but ours reflect the dedication of every student, parent, and teacher in our community.</p>
          </div>
          <div className="results-grid reveal">
            {results.map((r, i) => (
              <div key={i} className={`result-card reveal reveal-delay-${i + 1}`}>
                <div className="result-stat">{r.stat}</div>
                <div className="result-label">{r.label}</div>
                <div className="result-sub">{r.sub}</div>
              </div>
            ))}
          </div>
          <div className="results-cta reveal">
            <Link to="/admissions" className="btn btn-accent">Begin Your Child's Academic Journey <ArrowRight size={16} /></Link>
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
        .academics-hero {
          background-image: url(${academicsHeroBg});
          background-size: cover;
          background-position: center;
        }
        .academics-hero .page-hero-overlay {
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.6) 100%);
          opacity: 1;
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

        /* ── Grades ── */
        .grades-section { background: var(--bg-secondary); padding: 100px 24px; }
        .grades-list { display: flex; flex-direction: column; gap: 20px; margin-top: 20px; }
        .grade-card {
          display: flex; gap: 32px; align-items: flex-start;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px; padding: 32px 36px;
          transition: all 0.3s ease; box-shadow: var(--shadow-sm);
        }
        .grade-card:hover { box-shadow: var(--shadow-md); border-color: rgba(217,119,6,0.2); transform: translateX(6px); }
        .grade-badge {
          flex-shrink: 0; padding: 10px 20px; border-radius: 8px;
          font-family: var(--font-sans); font-size: 0.85rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.08em;
          writing-mode: vertical-rl; text-orientation: mixed; text-align: center;
          min-height: 100px; display: flex; align-items: center; justify-content: center;
        }
        .gp-teal { background: rgba(13,148,136,0.12); color: var(--secondary); }
        .gp-gold { background: rgba(217,119,6,0.1); color: var(--accent); }
        .gp-navy { background: rgba(10,25,47,0.07); color: var(--primary); }
        .grade-info { flex: 1; }
        .grade-grades { font-family: var(--font-sans); font-size: 1.2rem; font-weight: 800; color: var(--primary); margin-bottom: 8px; }
        .grade-focus { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; }
        .grade-subjects { display: flex; flex-wrap: wrap; gap: 8px; }
        .subject-chip { background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 20px; padding: 4px 12px; font-size: 0.8rem; font-weight: 600; color: var(--text-primary); }

        /* ── Methodologies ── */
        .methodology-section { background: var(--bg-primary); padding: 100px 24px; }
        .method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 20px; }
        .method-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 36px 28px; transition: all 0.3s ease; }
        .method-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(217,119,6,0.2); }
        .method-icon { width: 52px; height: 52px; border-radius: 12px; background: rgba(10,25,47,0.06); color: var(--primary); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; transition: all 0.3s ease; }
        .method-card:hover .method-icon { background: var(--primary); color: #fff; }
        .method-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px; }
        .method-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

        /* ── Results ── */
        .results-section { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 100px 24px; }
        .text-white { color: #fff !important; }
        .text-white-muted { color: rgba(255,255,255,0.7) !important; }
        .results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 20px; }
        .result-card { text-align: center; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 40px 24px; transition: all 0.3s ease; }
        .result-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-5px); }
        .result-stat { font-family: var(--font-sans); font-size: 3rem; font-weight: 900; color: var(--accent); line-height: 1; margin-bottom: 12px; }
        .result-label { font-family: var(--font-sans); font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .result-sub { font-size: 0.85rem; color: rgba(255,255,255,0.6); }
        .results-cta { text-align: center; margin-top: 48px; }

        @media (max-width: 1024px) {
          .method-grid { grid-template-columns: repeat(2, 1fr); }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .grade-card { flex-direction: column; gap: 16px; }
          .grade-badge { writing-mode: horizontal-tb; min-height: auto; }
          .method-grid { grid-template-columns: 1fr; }
          .results-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .results-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
};

export default AcademicsPage;
