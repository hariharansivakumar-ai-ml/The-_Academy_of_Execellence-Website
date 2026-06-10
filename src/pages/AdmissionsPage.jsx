import { useEffect, useState } from 'react';
import EnquiryForm from '../components/EnquiryForm';
import { ChevronRight, ArrowRight, CheckCircle, FileText, Calendar, HelpCircle, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplitTitle from '../components/SplitTitle';

const admissionSteps = [
  {
    step: '01',
    title: 'Submit Enquiry',
    desc: 'Fill out the online enquiry form below with your child\'s details. Our admissions team will contact you within 24 hours.',
  },
  {
    step: '02',
    title: 'Campus Visit',
    desc: 'Schedule and attend a guided campus tour to experience our facilities, meet teachers, and interact with the admissions team.',
  },
  {
    step: '03',
    title: 'Application Form',
    desc: 'Complete and submit the official admission application form along with all required documents.',
  },
  {
    step: '04',
    title: 'Interaction Session',
    desc: 'A friendly, informal interaction session for the student and parent with our counselors — no stressful entrance tests for young children.',
  },
  {
    step: '05',
    title: 'Admission Letter',
    desc: 'Receive your admission offer letter with details on fee structure, class allocation, and orientation schedule.',
  },
  {
    step: '06',
    title: 'Welcome Aboard!',
    desc: 'Complete fee payment, attend orientation day, and officially join The Academy of Excellence family.',
  },
];

const documents = [
  'Birth Certificate (original + 2 copies)',
  'Previous School Transfer Certificate (TC)',
  'Previous Year Report Card / Mark Sheet',
  'Passport-size photographs (4 copies)',
  'Aadhaar Card of student and parents',
  'Residential Proof (Utility bill / Rental agreement)',
  'Caste Certificate (if applicable)',
  'Medical/Immunization Records',
];

const importantDates = [
  { event: 'Admissions Open', date: 'January 15, 2026', status: 'open' },
  { event: 'Campus Visit Days', date: 'Every Saturday (10 AM – 1 PM)', status: 'ongoing' },
  { event: 'Application Deadline', date: 'March 31, 2026', status: 'upcoming' },
  { event: 'Interaction Sessions', date: 'April 5 – April 20, 2026', status: 'upcoming' },
  { event: 'Admission Letters Sent', date: 'April 28, 2026', status: 'upcoming' },
  { event: 'New Academic Year Begins', date: 'June 2, 2026', status: 'upcoming' },
];

const faqs = [
  { q: 'What is the age criteria for Kindergarten admission?', a: 'Children must be at least 3 years old for LKG and 4 years old for UKG as of June 1 of the admission year.' },
  { q: 'Is there an entrance exam for admission?', a: 'For Pre-Primary and Primary classes, admission is based on a friendly informal interaction — no formal entrance exam. For Grade VI onwards, a basic aptitude assessment may be conducted.' },
  { q: 'What are the school timings?', a: 'School hours are 8:00 AM to 2:30 PM for all classes. Co-curricular activities are scheduled from 3:00 PM to 5:00 PM on select weekdays.' },
  { q: 'Does the school offer transport facilities?', a: 'Yes. We operate a fleet of GPS-tracked school buses covering major residential areas within a 15 km radius of the campus.' },
  { q: 'Can we request a mid-year admission?', a: 'Mid-year admissions are considered subject to seat availability. Please contact our admissions office directly for individual assessments.' },
  { q: 'What is the medium of instruction?', a: 'The primary medium of instruction is English. Hindi and regional language (Tamil) are taught as second and third languages respectively.' },
  { q: 'Are scholarships available?', a: 'Yes. We offer merit-based and need-based scholarship programs. Eligible students are identified during the admission process. Contact us for full details.' },
  { q: 'How can parents stay updated about school activities?', a: 'We use a dedicated parent communication app for real-time updates on events, attendance, academic progress, and school circulars.' },
];

const AdmissionsPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
      });
    };
    const observer = new IntersectionObserver(revealCallback, { root: null, rootMargin: '0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      {/* Page Hero Banner */}
      <div className="page-hero admissions-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Admissions</span>
          </nav>
          <h1 className="page-hero-title"><SplitTitle text="Admissions" /></h1>
          <p className="page-hero-subtitle">Seats Are Limited — Secure Your Child's Future at TAE Today</p>
        </div>
      </div>

      {/* ── Admission Process Steps ───────────────── */}
      <section className="steps-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-title"><SplitTitle text="Simple 6-Step Admission Process" /></h2>
            <p className="section-desc">We've made our admissions process as clear and stress-free as possible — because the first step to a great education should never feel overwhelming.</p>
          </div>
          <div className="steps-grid">
            {admissionSteps.map((s, i) => (
              <div key={i} className={`step-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="step-number">{s.step}</div>
                <div className="step-connector" />
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Required Documents ────────────────────── */}
      <section className="docs-section">
        <div className="container">
          <div className="docs-inner">
            <div className="docs-left reveal reveal-left">
              <span className="section-tag">Documents</span>
              <h2 className="docs-title"><SplitTitle text="Required Documents" /></h2>
              <p className="docs-intro">Please have the following documents ready before you begin your application. All documents should be submitted as clear photocopies along with originals for verification.</p>
              <div className="docs-list">
                {documents.map((doc, i) => (
                  <div key={i} className="doc-item">
                    <CheckCircle size={16} className="doc-check" />
                    <span className="doc-text">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="docs-right reveal reveal-right">
              <div className="dates-card">
                <div className="dates-header">
                  <Calendar size={24} />
                  <h3 className="dates-title">Important Dates 2026</h3>
                </div>
                <div className="dates-list">
                  {importantDates.map((d, i) => (
                    <div key={i} className="date-row">
                      <div className="date-event">{d.event}</div>
                      <div className={`date-value status-${d.status}`}>{d.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Enquiry Form ──────────────────────────── */}
      <EnquiryForm />

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title-wrapper reveal">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title"><SplitTitle text="Frequently Asked Questions" /></h2>
            <p className="section-desc">Everything you need to know before taking the next step. Can't find your answer? Call us directly.</p>
          </div>
          <div className="faq-list reveal">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'faq-open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <HelpCircle size={18} className="faq-q-icon" />
                  <span>{item.q}</span>
                  <ChevronDown size={18} className={`faq-chevron ${openFaq === i ? 'rotated' : ''}`} />
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Strip ─────────────────────────── */}
      <section className="contact-strip-section">
        <div className="container">
          <div className="contact-strip reveal">
            <div className="cs-title-area">
              <h3 className="cs-title">Still Have Questions?</h3>
              <p className="cs-sub">Our admissions team is available Monday to Friday, 9 AM – 5 PM.</p>
            </div>
            <div className="cs-contacts">
              <a href="tel:+911123456789" className="cs-contact-item">
                <Phone size={20} />
                <span>+91 (11) 2345-6789</span>
              </a>
              <a href="mailto:admissions@academyofexcellence.edu" className="cs-contact-item">
                <Mail size={20} />
                <span>admissions@academyofexcellence.edu</span>
              </a>
              <div className="cs-contact-item">
                <MapPin size={20} />
                <span>128 Academy Boulevard, New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .admissions-hero {
          background: linear-gradient(135deg, var(--primary) 0%, rgba(217,119,6,0.2) 50%, var(--primary-dark) 100%);
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
          background: linear-gradient(to top, var(--bg-primary), transparent);
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

        /* ── Steps ── */
        .steps-section { background: var(--bg-primary); padding: 100px 24px; }
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 20px; }
        .step-card { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 16px; padding: 36px 28px; position: relative; transition: all 0.35s ease; }
        .step-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); border-color: rgba(217,119,6,0.25); }
        .step-number { font-family: var(--font-sans); font-size: 3rem; font-weight: 900; color: rgba(217,119,6,0.12); line-height: 1; margin-bottom: 16px; }
        .step-title { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px; }
        .step-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
        .step-connector { display: none; }

        /* ── Documents & Dates ── */
        .docs-section { background: var(--bg-secondary); padding: 100px 24px; }
        .docs-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .docs-title { font-family: var(--font-sans); font-size: 2rem; font-weight: 800; color: var(--primary); margin: 12px 0 16px; }
        .docs-intro { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 28px; }
        .docs-list { display: flex; flex-direction: column; gap: 12px; }
        .doc-item { display: flex; align-items: flex-start; gap: 12px; }
        .doc-check { color: var(--secondary); flex-shrink: 0; margin-top: 2px; }
        .doc-text { font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600; color: var(--text-primary); line-height: 1.4; }

        .dates-card { background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 20px; overflow: hidden; box-shadow: var(--shadow-md); }
        .dates-header { background: var(--primary); padding: 24px 28px; display: flex; align-items: center; gap: 12px; color: #fff; }
        .dates-title { font-family: var(--font-sans); font-size: 1.15rem; font-weight: 700; color: #fff; }
        .dates-list { padding: 0; }
        .date-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; border-bottom: 1px solid var(--border-color); gap: 16px; }
        .date-row:last-child { border-bottom: none; }
        .date-event { font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600; color: var(--text-primary); }
        .date-value { font-size: 0.85rem; font-weight: 700; text-align: right; }
        .status-open { color: var(--secondary); }
        .status-ongoing { color: var(--accent); }
        .status-upcoming { color: var(--text-muted); }

        /* ── FAQ ── */
        .faq-section { background: var(--bg-secondary); padding: 100px 24px; }
        .faq-list { max-width: 820px; margin: 20px auto 0; display: flex; flex-direction: column; gap: 12px; }
        .faq-item { background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 12px; overflow: hidden; transition: border-color 0.2s; }
        .faq-item.faq-open { border-color: rgba(217,119,6,0.3); }
        .faq-question { width: 100%; background: none; border: none; display: flex; align-items: center; gap: 14px; padding: 20px 24px; cursor: pointer; text-align: left; font-family: var(--font-sans); font-size: 0.98rem; font-weight: 600; color: var(--primary); transition: background 0.2s; }
        .faq-question:hover { background: rgba(217,119,6,0.03); }
        .faq-q-icon { color: var(--accent); flex-shrink: 0; }
        .faq-question span { flex: 1; }
        .faq-chevron { color: var(--text-muted); flex-shrink: 0; transition: transform 0.3s ease; }
        .faq-chevron.rotated { transform: rotate(180deg); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.35s ease, padding 0.3s ease; }
        .faq-open .faq-answer { max-height: 200px; padding-bottom: 20px; }
        .faq-answer p { padding: 0 24px 0 56px; font-size: 0.92rem; color: var(--text-secondary); line-height: 1.65; }

        /* ── Contact Strip ── */
        .contact-strip-section { background: var(--bg-primary); padding: 60px 24px; }
        .contact-strip { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%); border-radius: 20px; padding: 48px 60px; display: flex; align-items: center; justify-content: space-between; gap: 48px; flex-wrap: wrap; }
        .cs-title { font-family: var(--font-sans); font-size: 1.6rem; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .cs-sub { font-size: 0.95rem; color: rgba(255,255,255,0.7); }
        .cs-contacts { display: flex; flex-direction: column; gap: 14px; }
        .cs-contact-item { display: flex; align-items: center; gap: 12px; font-family: var(--font-sans); font-size: 0.92rem; font-weight: 600; color: rgba(255,255,255,0.9); text-decoration: none; transition: color 0.2s; }
        .cs-contact-item:hover { color: var(--accent); }
        .cs-contact-item svg { color: var(--accent); flex-shrink: 0; }

        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .docs-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .steps-grid { grid-template-columns: 1fr; }
          .contact-strip { padding: 40px 24px; flex-direction: column; }
          .faq-answer p { padding: 0 16px 0 16px; }
        }
      `}</style>
    </>
  );
};

export default AdmissionsPage;
