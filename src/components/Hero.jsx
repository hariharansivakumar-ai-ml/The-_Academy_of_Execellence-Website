import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../assets/Hero Home.mp4';

const Hero = () => {
  const handleScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <section id="home" className="hero-section">
      {/* Background Video */}
      <div className="hero-video-bg">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video-player"
        />
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Centered Content */}
        <div className="hero-content-center">
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>Nurturing Leadership & Innovation</span>
          </div>
          
          <h1 className="hero-title">
            Empowering Minds. <br />
            <span className="text-highlight-gold">Inspiring Futures.</span>
          </h1>
          
          <h3 className="hero-subtitle">
            Building confident learners, creative thinkers, and responsible leaders through excellence in education and character development.
          </h3>
          
          <p className="hero-desc">
            At The Academy of Excellence, we provide a nurturing environment where academic achievement, innovation, and personal growth come together to prepare students for a successful future.
          </p>

          <div className="hero-actions">
            <button 
              onClick={() => handleScrollTo('admissions')} 
              className="btn btn-accent hero-btn"
            >
              Apply for Admission <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => handleScrollTo('about')} 
              className="btn btn-outline-white hero-btn"
            >
              Explore Our Campus
            </button>
          </div>

          {/* Stats Row */}
          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <span className="hsp-val">95%</span>
              <span className="hsp-label">Academic Score</span>
            </div>
            <div className="hero-stat-pill">
              <span className="hsp-val">A++ Grade</span>
              <span className="hsp-label">NEP-Aligned</span>
            </div>
            <div className="hero-stat-pill">
              <span className="hsp-val">100%</span>
              <span className="hsp-label">Development</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
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

        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.85) 0%, rgba(10, 25, 47, 0.75) 50%, rgba(10, 25, 47, 0.85) 100%);
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .hero-content-center {
          max-width: 850px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ffffff;
          opacity: 0;
          animation: fadeInUpHero 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s forwards;
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

        .hero-badge {
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

        .badge-icon {
          color: var(--accent);
          animation: spinPulse 3s infinite linear;
        }

        @keyframes spinPulse {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.15) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }

        .hero-title {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-weight: 600;
          font-size: 3.75rem;
          line-height: 1.15;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .text-highlight-gold {
          color: var(--accent);
          background: linear-gradient(120deg, var(--accent) 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin-bottom: 20px;
          max-width: 750px;
        }

        .hero-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 40px;
          max-width: 700px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-bottom: 48px;
        }

        .hero-btn {
          min-width: 180px;
        }

        /* Stats Row */
        .hero-stats-row {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        .hero-stat-pill {
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

        .hero-stat-pill:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        .hsp-val {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--accent);
        }

        .hsp-label {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: calc(var(--header-height) + 20px);
            padding-bottom: 60px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-desc {
            margin-bottom: 30px;
          }

          .hero-actions {
            width: 100%;
          }

          .hero-btn {
            width: 100%;
          }

          .hero-stats-row {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .hero-stat-pill {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
