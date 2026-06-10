import React, { useEffect, useState, useRef } from 'react';
import SplitTitle from './SplitTitle';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { value: 95, label: "Academic Excellence", color: "var(--accent)" },
    { value: 100, label: "Student Development", color: "var(--secondary)" },
    { value: 98, label: "Parent Satisfaction", color: "var(--accent)" },
    { value: 100, label: "Safe Learning Environment", color: "var(--secondary)" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Standard circumference of radius 45 is 2 * PI * 45 = 282.74
  const strokeCircumference = 282.74;

  return (
    <section id="why-choose-us" className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title-wrapper stats-header reveal">
          <span className="section-tag why-tag">Why Choose Us?</span>
          <h2 className="section-title text-white"><SplitTitle text="Shaping Tomorrow's Leaders Today" /></h2>
          <p className="section-desc text-white-muted">
            At The Academy of Excellence, every child receives personalized attention and opportunities to grow academically, socially, and emotionally.
          </p>
        </div>

        <div className="grid-4 stats-grid">
          {stats.map((stat, index) => {
            const dashOffset = isVisible 
              ? strokeCircumference - (stat.value / 100) * strokeCircumference 
              : strokeCircumference;

            return (
              <div 
                key={index} 
                className={`stat-item reveal reveal-delay-${index + 1}`}
              >
                {/* SVG Radial Meter */}
                <div className="stat-meter">
                  <svg className="meter-svg" viewBox="0 0 100 100">
                    {/* Background Circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.08)" 
                      strokeWidth="6" 
                    />
                    {/* Animated Progress Circle */}
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke={stat.color} 
                      strokeWidth="6" 
                      strokeDasharray={strokeCircumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      className="progress-circle"
                    />
                  </svg>
                  {/* Inside Percent text */}
                  <div className="stat-percentage-box">
                    <span className="stat-percent-num">{stat.value}%</span>
                  </div>
                </div>

                <div className="stat-info">
                  <h4 className="stat-label">{stat.label}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .stats-section {
          background-color: var(--primary);
          color: #ffffff;
          position: relative;
          padding-top: 120px;
          padding-bottom: 120px;
          background-image: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
        }

        .stats-section::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: radial-gradient(var(--accent) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .stats-header {
          max-width: 800px;
        }

        .text-white {
          color: #ffffff !important;
        }

        .text-white-muted {
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .why-tag::after {
          background-color: var(--accent);
        }

        .stats-grid {
          margin-top: 60px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 20px;
          border-radius: 12px;
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(217, 119, 6, 0.2);
        }

        .stat-meter {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 24px;
        }

        .meter-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .progress-circle {
          transition: stroke-dashoffset 1.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .stat-percentage-box {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-percent-num {
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 1.6rem;
          color: #ffffff;
        }

        .stat-info {
          text-align: center;
        }

        .stat-label {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .stats-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }
          .stat-item {
            padding: 30px 16px;
          }
          .stat-meter {
            width: 100px;
            height: 100px;
          }
          .stat-percent-num {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
