import React from 'react';
import { Eye, Target, CheckCircle2 } from 'lucide-react';

const VisionMission = () => {
  const missionItems = [
    "Foster academic excellence through innovative learning experiences.",
    "Develop confident, responsible, and compassionate individuals.",
    "Encourage creativity, leadership, and lifelong learning.",
    "Create a safe, inclusive, and inspiring educational environment.",
    "Prepare students for global opportunities and future success."
  ];

  return (
    <section id="vision-mission" className="vm-section">
      <div className="container grid-2 vm-grid">
        {/* Left Column: Vision Card */}
        <div className="vm-vision-col reveal reveal-left">
          <div className="vision-card">
            <div className="vision-icon-outer">
              <Eye size={36} />
            </div>
            <h3 className="vm-heading">Our Vision</h3>
            <p className="vision-text">
              To become a leading educational institution that empowers students to excel academically, think critically, and contribute positively to society.
            </p>
            <div className="card-decoration">
              <span className="dec-line"></span>
              <span className="dec-dot"></span>
              <span className="dec-line"></span>
            </div>
          </div>
        </div>

        {/* Right Column: Mission List */}
        <div className="vm-mission-col reveal reveal-right reveal-delay-2">
          <div className="mission-card">
            <div className="mission-header">
              <div className="mission-icon-outer">
                <Target size={36} />
              </div>
              <h3 className="vm-heading">Our Mission</h3>
            </div>
            
            <div className="mission-list">
              {missionItems.map((item, index) => (
                <div key={index} className="mission-item">
                  <div className="mission-marker">
                    <CheckCircle2 size={20} className="marker-icon" />
                  </div>
                  <p className="mission-text-item">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vm-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        .vm-grid {
          gap: 60px;
          align-items: stretch;
        }

        /* Vision Card Styles */
        .vision-card {
          background-color: var(--primary);
          color: #ffffff;
          border-radius: 12px;
          padding: 60px 48px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .vision-card::before {
          content: '';
          position: absolute;
          inset: 12px;
          border: 1px dashed rgba(217, 119, 6, 0.3);
          border-radius: 8px;
          pointer-events: none;
        }

        .vision-icon-outer {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: rgba(217, 119, 6, 0.15);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 0 20px rgba(217, 119, 6, 0.2);
        }

        .vm-heading {
          font-size: 2.25rem;
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }

        .vision-card .vm-heading {
          color: #ffffff;
        }

        .vision-text {
          font-size: 1.25rem;
          line-height: 1.7;
          font-family: var(--font-sans);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          max-width: 420px;
          margin-bottom: 24px;
        }

        .card-decoration {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 150px;
        }

        .dec-line {
          height: 1px;
          flex-grow: 1;
          background-color: rgba(217, 119, 6, 0.4);
        }

        .dec-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent);
          border-radius: 50%;
        }

        /* Mission Card Styles */
        .mission-card {
          background-color: var(--bg-primary);
          border-radius: 12px;
          padding: 50px 40px;
          height: 100%;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .mission-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
        }

        .mission-icon-outer {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: rgba(10, 25, 47, 0.04);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mission-card .vm-heading {
          color: var(--primary);
          margin-bottom: 0;
        }

        .mission-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mission-item {
          display: flex;
          gap: 16px;
          text-align: left;
        }

        .mission-marker {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .marker-icon {
          color: var(--accent);
        }

        .mission-text-item {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .vision-card {
            padding: 40px 24px;
          }
          .mission-card {
            padding: 40px 24px;
          }
        }

        @media (max-width: 768px) {
          .vm-grid {
            gap: 32px;
          }
          .vm-heading {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
