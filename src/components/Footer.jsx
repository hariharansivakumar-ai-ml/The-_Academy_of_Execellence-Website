import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home',                path: '/' },
    { label: 'About Us',            path: '/about' },
    { label: 'Academics',           path: '/academics' },
    { label: 'Special Programs',    path: '/programs' },
    { label: "Principal's Message", path: '/principal' },
    { label: 'Admissions',          path: '/admissions' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1: Info & Tagline */}
        <div className="footer-col info-col">
          <Link to="/" className="footer-logo">
            <GraduationCap className="footer-logo-icon" size={28} />
            <div className="logo-text">
              <span className="logo-title text-white">THE ACADEMY</span>
              <span className="logo-subtitle">OF EXCELLENCE</span>
            </div>
          </Link>
          <h4 className="footer-tagline">Excellence in Education. Excellence in Life.</h4>
          <p className="footer-desc">
            We would be delighted to answer your questions and assist you with admissions and school information. Reach out to us and discover how The Academy Of Excellence can help your child build a strong foundation for a successful future.
          </p>
          <div className="footer-socials">
            <a href="#facebook" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#twitter" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#instagram" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#linkedin" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            {quickLinks.map((link, idx) => (
              <li key={idx} className="footer-link-item">
                <Link 
                  to={link.path}
                  className="footer-nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Contact Us</h4>
          <ul className="footer-contact-list">
            <li className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <span className="contact-text">
                128 Academy Boulevard, Educational District, Sector 5, New Delhi, 110001
              </span>
            </li>
            <li className="contact-item">
              <Phone className="contact-icon" size={20} />
              <span className="contact-text">+91 (11) 2345-6789 / 90</span>
            </li>
            <li className="contact-item">
              <Mail className="contact-icon" size={20} />
              <span className="contact-text">admissions@academyofexcellence.edu</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">
            © 2026 The Academy of Excellence. All Rights Reserved.
          </p>
          <button 
            onClick={handleScrollToTop} 
            className="scroll-top-btn" 
            aria-label="Scroll to top"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--primary-dark);
          color: rgba(255, 255, 255, 0.8);
          padding-top: 80px;
          border-top: 2px solid var(--accent);
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-weight: 300;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 60px;
          padding-bottom: 60px;
          text-align: left;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          margin-bottom: 24px;
        }

        .footer-logo-icon {
          color: var(--accent);
        }

        .footer-tagline {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 1.15rem;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .footer-desc {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.04);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: var(--accent);
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Column Title */
        .footer-col-title {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--accent);
        }

        /* Quick Links styles */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-link {
          display: block;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.8);
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .footer-nav-link:hover {
          color: var(--accent);
          padding-left: 6px;
        }

        /* Contact details styling */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .contact-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-text {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Bottom Bar */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px 0;
          font-size: 14px;
        }

        .bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }

        .copyright {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.6);
        }

        .scroll-top-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 14px;
          font-weight: 300;
          transition: color 0.2s ease;
        }

        .scroll-top-btn:hover {
          color: var(--accent);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr;
            gap: 40px;
          }
          .contact-col {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-bottom: 40px;
          }
          .contact-col {
            grid-column: span 1;
          }
          .bottom-container {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
