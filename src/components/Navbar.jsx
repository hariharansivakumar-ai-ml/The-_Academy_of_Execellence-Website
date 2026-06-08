import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Logo_TAE.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Us', target: 'about' },
    { label: 'Academics', target: 'academics' },
    { label: 'Special Programs', target: 'programs' },
    { label: 'Principal\'s Message', target: 'principal' },
    { label: 'Admissions', target: 'admissions' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.target));
      const scrollPosition = window.scrollY + 200; // offset for detection

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navItems[i].target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleNavClick('home')}>
          <img src={logoImg} alt="TAE Logo" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">THE ACADEMY</span>
            <span className="logo-subtitle">OF EXCELLENCE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('admissions')} 
            className="btn btn-accent btn-sm nav-cta"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className={`mobile-nav-link ${activeSection === item.target ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('admissions')} 
            className="btn btn-accent mobile-nav-cta"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* CSS specific to Navbar component */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: transparent;
          border-bottom: 1px solid transparent;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: flex;
          align-items: center;
        }

        .navbar:not(.scrolled) .logo-title {
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .navbar:not(.scrolled) .nav-link {
          color: rgba(255, 255, 255, 0.85);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .navbar:not(.scrolled) .nav-link:hover,
        .navbar:not(.scrolled) .nav-link.active {
          color: #ffffff;
        }

        .navbar:not(.scrolled) .mobile-menu-btn {
          color: #ffffff;
        }

        .navbar.scrolled {
          background-color: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-sm);
          height: 70px;
        }

        .nav-container {
          max-width: var(--container-max-width);
          width: 100%;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .logo-img {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent);
          transition: transform 0.4s ease;
        }

        .nav-logo:hover .logo-img {
          transform: rotate(-10deg) scale(1.1);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary);
          letter-spacing: 0.05em;
          line-height: 1.1;
        }

        .logo-subtitle {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.65rem;
          color: var(--accent);
          letter-spacing: 0.2em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-link.active {
          color: var(--primary);
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 0.85rem;
        }

        .nav-cta {
          margin-left: 8px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--primary);
          cursor: pointer;
          padding: 8px;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background-color: var(--bg-primary);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          z-index: 999;
          transition: right 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          padding: 100px 24px 40px;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav.open {
          right: 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          text-align: left;
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 8px 0;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-nav-link.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }

        .mobile-nav-cta {
          margin-top: 16px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
