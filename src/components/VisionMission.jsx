import React from 'react';
import { Eye, Target } from 'lucide-react';
import SplitTitle from './SplitTitle';

const VisionMission = () => {
  return (
    <section id="vision-mission" className="vm-section">
      {/* Decorative blurred background shapes */}
      <div className="vm-bg-glow glow-1"></div>
      <div className="vm-bg-glow glow-2"></div>

      <div className="container grid-2 vm-grid">
        {/* Left Column: Vision Card */}
        <div className="vm-vision-col reveal reveal-left">
          <div className="vision-card">
            <span className="card-watermark">VISION</span>
            <div className="vision-icon-outer">
              <Eye size={36} />
            </div>
            <h3 className="vm-heading"><SplitTitle text="Our Vision" /></h3>
            <p className="vision-text">
              To be a leading institution of learning that nurtures confident, compassionate, and globally competent individuals who make meaningful contributions to society.
            </p>
            <div className="card-decoration">
              <span className="dec-line gold-line"></span>
              <span className="dec-dot gold-dot"></span>
              <span className="dec-line gold-line"></span>
            </div>
          </div>
        </div>

        {/* Right Column: Mission Card */}
        <div className="vm-mission-col reveal reveal-right reveal-delay-2">
          <div className="mission-card">
            <span className="card-watermark">MISSION</span>
            <div className="mission-icon-outer">
              <Target size={36} />
            </div>
            <h3 className="vm-heading"><SplitTitle text="Our Mission" /></h3>
            <p className="mission-text">
              To inspire, educate, and empower every student to achieve their highest potential through excellence in academics, character development, innovation, and lifelong learning.
            </p>
            <div className="card-decoration">
              <span className="dec-line teal-line"></span>
              <span className="dec-dot teal-dot"></span>
              <span className="dec-line teal-line"></span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vm-section {
          background: var(--bg-secondary);
          position: relative;
          overflow: hidden;
          padding: 120px 24px;
        }

        /* Background blur glows */
        .vm-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }
        .vm-bg-glow.glow-1 {
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          top: -100px;
          left: -100px;
        }
        .vm-bg-glow.glow-2 {
          background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
          bottom: -100px;
          right: -100px;
        }

        .vm-grid {
          position: relative;
          z-index: 2;
          gap: 32px;
          align-items: stretch;
        }

        /* Vision & Mission Card Base Styles */
        .vision-card, .mission-card {
          background: linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(15, 34, 64, 0.95) 100%);
          border-radius: 24px;
          padding: 60px 48px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .vision-card:hover, .mission-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.45);
        }

        .vision-card:hover {
          border-color: rgba(var(--accent-rgb), 0.35);
        }

        .mission-card:hover {
          border-color: rgba(13, 148, 136, 0.35);
        }

        /* Watermark text behind content */
        .card-watermark {
          position: absolute;
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 8rem;
          font-weight: 950;
          color: rgba(255, 255, 255, 0.02);
          letter-spacing: 0.15em;
          pointer-events: none;
          z-index: 0;
          user-select: none;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Icon styling */
        .vision-icon-outer, .mission-icon-outer {
          width: 84px;
          height: 84px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          border: 1px solid;
        }

        .vision-icon-outer {
          background-color: rgba(var(--accent-rgb), 0.1);
          color: var(--accent);
          border-color: rgba(var(--accent-rgb), 0.25);
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.1);
        }

        .mission-icon-outer {
          background-color: rgba(13, 148, 136, 0.1);
          color: var(--secondary);
          border-color: rgba(13, 148, 136, 0.25);
          box-shadow: 0 0 20px rgba(13, 148, 136, 0.1);
        }

        .vision-card:hover .vision-icon-outer {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
          color: #ffffff;
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 25px rgba(var(--accent-rgb), 0.4);
          border-color: transparent;
        }

        .mission-card:hover .mission-icon-outer {
          background: linear-gradient(135deg, var(--secondary) 0%, #14b8a6 100%);
          color: #ffffff;
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 10px 25px rgba(13, 148, 136, 0.4);
          border-color: transparent;
        }

        .vm-heading {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
        }

        .vision-text, .mission-text {
          font-size: 1.15rem;
          line-height: 1.75;
          font-family: var(--font-sans);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.85);
          max-width: 440px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .card-decoration {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 140px;
          position: relative;
          z-index: 1;
        }

        .dec-line {
          height: 1px;
          flex-grow: 1;
        }

        .gold-line {
          background: linear-gradient(90deg, transparent, rgba(var(--accent-rgb), 0.5), transparent);
        }

        .teal-line {
          background: linear-gradient(90deg, transparent, rgba(13, 148, 136, 0.5), transparent);
        }

        .dec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .gold-dot {
          background-color: var(--accent);
          box-shadow: 0 0 10px var(--accent);
        }

        .teal-dot {
          background-color: var(--secondary);
          box-shadow: 0 0 10px var(--secondary);
        }

        @media (max-width: 992px) {
          .vision-card, .mission-card {
            padding: 50px 32px;
          }
          .card-watermark {
            font-size: 6rem;
          }
        }

        @media (max-width: 768px) {
          .vm-grid {
            gap: 24px;
            grid-template-columns: 1fr;
          }
          .vm-heading {
            font-size: 1.85rem;
          }
          .vision-text, .mission-text {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
