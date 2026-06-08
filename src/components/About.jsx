import React from 'react';
import { Compass, Lightbulb, Award, Users, Shield, Cpu, ChevronRight } from 'lucide-react';
import classroomImg from '../assets/about_classroom.png';

const About = () => {
  const values = [
    {
      icon: <Compass size={28} />,
      title: "Intellectual Curiosity",
      desc: "Nurturing an active mind through exploration and student-centered inquiry-based learning."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Creativity & Leadership",
      desc: "Encouraging original thinking, leadership activities, and hands-on technological skills."
    },
    {
      icon: <Award size={28} />,
      title: "Lifelong Learning",
      desc: "Fostering values, positive work ethics, and curiosity that prepare children for future global roles."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Upper Part: Title and Tagline */}
        <div className="section-title-wrapper reveal">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Where Learning Meets Excellence</h2>
          <p className="section-desc">
            We guide and shape the leaders of tomorrow through holistic development, robust academics, and character building.
          </p>
        </div>

        {/* Middle Part: 50/50 Narrative & Image Collage Grid */}
        <div className="about-narrative-grid grid-2">
          {/* Left Column: Premium Image Collage */}
          <div className="about-image-collage reveal reveal-left">
            <div className="image-wrapper">
              <img src={classroomImg} alt="Students collaborating in library" className="about-main-image" />
              <div className="image-overlay-gradient"></div>
              {/* Floating Stat Badge */}
              <div className="floating-stat-badge">
                <span className="stat-number">100%</span>
                <span className="stat-text">Holistic Development</span>
              </div>
              {/* Floating Accent Border */}
              <div className="image-accent-border"></div>
            </div>
          </div>

          {/* Right Column: Narrative details & Badges */}
          <div className="about-text-content reveal reveal-right reveal-delay-1">
            <h3 className="about-heading">Transformative Education for a Better Tomorrow</h3>
            <div className="heading-accent-line"></div>
            <p className="about-paragraph">
              The Academy of Excellence is committed to providing a transformative educational experience that nurtures intellectual curiosity, creativity, leadership, and lifelong learning.
            </p>
            <p className="about-paragraph">
              Our institution combines academic excellence with character development, ensuring that students are equipped with the knowledge, skills, and values needed to thrive in a rapidly changing world.
            </p>
            
            <div className="about-features-list">
              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Users size={18} />
                </div>
                <div className="feature-text-wrapper">
                  <h5 className="feature-item-title">Student-Centered</h5>
                  <p className="feature-item-desc">Individualized learning paths designed to foster personal growth.</p>
                </div>
              </div>
              
              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Shield size={18} />
                </div>
                <div className="feature-text-wrapper">
                  <h5 className="feature-item-title">Character Building</h5>
                  <p className="feature-item-desc">Instilling integrity, empathy, and strong moral values in future leaders.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Cpu size={18} />
                </div>
                <div className="feature-text-wrapper">
                  <h5 className="feature-item-title">Modern Pedagogies</h5>
                  <p className="feature-item-desc">Cutting-edge teaching methodologies aligned with global standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Part: 3-Column Core Values Cards Grid */}
        <div className="about-values-section reveal reveal-delay-2">
          <div className="values-header">
            <span className="values-tag">Our Foundations</span>
            <h3 className="values-section-title">Core Pillars of Our Philosophy</h3>
          </div>
          
          <div className="about-values-grid grid-3">
            {values.map((val, index) => (
              <div key={index} className="about-val-card-redesigned">
                <div className="card-top-accent"></div>
                <div className="val-icon-outer-wrapper">
                  <div className="val-icon-container-redesigned">
                    {val.icon}
                  </div>
                </div>
                <h4 className="val-title-redesigned">{val.title}</h4>
                <p className="val-desc-redesigned">{val.desc}</p>
                <div className="card-hover-arrow">
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: radial-gradient(circle at 10% 20%, rgba(217, 119, 6, 0.02) 0%, transparent 40%), 
                      radial-gradient(circle at 90% 80%, rgba(13, 148, 136, 0.02) 0%, transparent 40%), 
                      var(--bg-secondary);
          position: relative;
          overflow: hidden;
        }

        .about-narrative-grid {
          margin-top: 20px;
          align-items: center;
        }

        /* Image Collage Styling */
        .about-image-collage {
          position: relative;
          padding: 15px;
        }

        .image-wrapper {
          position: relative;
          border-radius: 16px;
          z-index: 2;
          box-shadow: var(--shadow-premium);
        }

        .about-main-image {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          transition: transform var(--transition-slow);
        }

        .image-wrapper:hover .about-main-image {
          transform: scale(1.02);
        }

        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 25, 47, 0.35) 0%, transparent 50%);
          border-radius: 16px;
          pointer-events: none;
          z-index: 3;
        }

        .image-accent-border {
          position: absolute;
          top: 0px;
          left: 0px;
          right: 30px;
          bottom: 30px;
          border: 2px solid var(--accent);
          border-radius: 16px;
          z-index: 1;
          transform: translate(-15px, 15px);
          pointer-events: none;
          transition: all var(--transition-normal);
        }

        .about-image-collage:hover .image-accent-border {
          transform: translate(-8px, 8px);
          border-color: var(--primary);
        }

        .floating-stat-badge {
          position: absolute;
          bottom: 30px;
          right: -10px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 16px 24px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-lg);
          z-index: 4;
          animation: floatBadge 6s ease-in-out infinite;
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .stat-number {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-text {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Narrative Side Styling */
        .about-text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .about-heading {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 12px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .heading-accent-line {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, var(--accent) 0%, transparent 100%);
          margin-bottom: 24px;
          border-radius: 2px;
        }

        .about-paragraph {
          margin-bottom: 16px;
        }

        .about-features-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 24px;
        }

        .about-feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid transparent;
          transition: all var(--transition-normal);
        }

        .about-feature-item:hover {
          background: #ffffff;
          border-color: var(--neutral-200);
          box-shadow: var(--shadow-sm);
          transform: translateX(6px);
        }

        .feature-icon-wrapper {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--accent-light);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all var(--transition-normal);
        }

        .about-feature-item:hover .feature-icon-wrapper {
          background: var(--accent);
          color: #ffffff;
          transform: rotate(360deg);
        }

        .feature-text-wrapper {
          display: flex;
          flex-direction: column;
        }

        .feature-item-title {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .feature-item-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        /* Core Values Section Styling */
        .about-values-section {
          margin-top: 90px;
          border-top: 1px solid var(--neutral-200);
          padding-top: 70px;
        }

        .values-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .values-tag {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--secondary);
          margin-bottom: 8px;
          display: block;
        }

        .values-section-title {
          font-size: 2.25rem;
          color: var(--primary);
          letter-spacing: -0.01em;
        }

        .about-values-grid {
          align-items: stretch;
        }

        .about-val-card-redesigned {
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .about-val-card-redesigned:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(217, 119, 6, 0.2);
        }

        .card-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--secondary) 100%);
          opacity: 0.8;
          transition: height 0.3s ease;
        }

        .about-val-card-redesigned:hover .card-top-accent {
          height: 6px;
          opacity: 1;
        }

        .val-icon-outer-wrapper {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(248, 250, 252, 0.8);
          border: 1px dashed var(--neutral-300);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: all var(--transition-normal);
        }

        .about-val-card-redesigned:hover .val-icon-outer-wrapper {
          border-color: var(--accent);
          transform: scale(1.05);
        }

        .val-icon-container-redesigned {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-normal);
        }

        .about-val-card-redesigned:hover .val-icon-container-redesigned {
          background: linear-gradient(135deg, var(--accent) 0%, #f59e0b 100%);
          color: #ffffff;
          box-shadow: 0 8px 16px rgba(217, 119, 6, 0.25);
        }

        .val-title-redesigned {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 12px;
          transition: color var(--transition-fast);
        }

        .about-val-card-redesigned:hover .val-title-redesigned {
          color: var(--accent);
        }

        .val-desc-redesigned {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .card-hover-arrow {
          margin-top: auto;
          color: var(--neutral-300);
          transform: translateY(10px);
          opacity: 0;
          transition: all var(--transition-normal);
        }

        .about-val-card-redesigned:hover .card-hover-arrow {
          transform: translateY(0);
          opacity: 1;
          color: var(--accent);
        }

        @media (max-width: 992px) {
          .about-main-image {
            height: 380px;
          }
          .about-values-section {
            margin-top: 80px;
            padding-top: 60px;
          }
        }

        @media (max-width: 768px) {
          .about-main-image {
            height: 300px;
          }
          .floating-stat-badge {
            right: 10px;
            bottom: 15px;
            padding: 10px 16px;
          }
          .stat-number {
            font-size: 1.5rem;
          }
          .image-accent-border {
            display: none;
          }
          .about-heading {
            font-size: 1.65rem;
          }
          .about-values-section {
            margin-top: 60px;
            padding-top: 40px;
          }
          .values-section-title {
            font-size: 1.8rem;
          }
          .about-val-card-redesigned {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
