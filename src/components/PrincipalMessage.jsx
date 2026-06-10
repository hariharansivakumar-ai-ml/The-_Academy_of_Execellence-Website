import React from 'react';
import { Quote } from 'lucide-react';
import SplitTitle from './SplitTitle';

const PrincipalMessage = () => {
  return (
    <section id="principal" className="principal-section">
      <div className="container grid-2 principal-grid">
        {/* Left Column: Styled Portrait Box */}
        <div className="principal-image-col reveal reveal-left">
          <div className="portrait-card">
            <div className="portrait-image-container">
              {/* Elegant CSS Silhouette Avatar representing Principal */}
              <div className="portrait-placeholder">
                <svg viewBox="0 0 100 100" className="avatar-svg">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary-light)" />
                      <stop offset="100%" stopColor="var(--primary-dark)" />
                    </linearGradient>
                  </defs>
                  {/* Outline circle */}
                  <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(217,119,6,0.3)" strokeWidth="1" />
                  {/* Abstract Person silhouette */}
                  <path d="M 50,22 C 57,22 63,28 63,35 C 63,42 57,48 50,48 C 43,48 37,42 37,35 C 37,28 43,22 50,22 Z M 20,82 C 20,65 33,54 50,54 C 67,54 80,65 80,82 Z" fill="url(#avatarGrad)" />
                </svg>
              </div>
            </div>
            <div className="portrait-details">
              <h4 className="principal-name">Dr. Evelyn Vance</h4>
              <p className="principal-title">Principal, Ed.D.</p>
              <div className="principal-signature">Evelyn Vance</div>
            </div>
          </div>
        </div>

        {/* Right Column: Message details */}
        <div className="principal-text-col reveal reveal-right reveal-delay-2">
          <div className="message-header-box">
            <span className="section-tag principal-tag">Principal's Message</span>
            <h2 className="section-title text-left-align"><SplitTitle text="Nurturing Potential, Inspiring Success" /></h2>
          </div>

          <div className="message-quote-box">
            <Quote className="quote-icon" size={44} />
            <blockquote className="principal-quote">
              "Education is not merely about academic achievement; it is about shaping character, fostering curiosity, and preparing young minds to face the challenges of tomorrow."
            </blockquote>
          </div>

          <div className="message-body">
            <p className="message-p">
              At The Academy of Excellence, we believe that every child possesses unique talents and unlimited potential. Our dedicated educators work closely with students and parents to create a learning journey that inspires confidence, resilience, and a passion for lifelong learning.
            </p>
            <p className="message-p">
              Together, we strive to build an environment where students are encouraged to dream big, work hard, and become responsible global citizens.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .principal-section {
          background-color: var(--bg-primary);
          overflow: hidden;
        }

        .principal-grid {
          gap: 60px;
          align-items: center;
        }

        /* Portrait Card */
        .portrait-card {
          background-color: var(--bg-secondary);
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
          position: relative;
        }

        .portrait-card::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: -1px;
          right: -1px;
          border-bottom: 3px solid var(--accent);
          border-right: 3px solid var(--accent);
        }

        .portrait-image-container {
          width: 180px;
          height: 180px;
          margin: 0 auto 30px;
          border-radius: 50%;
          border: 4px solid #ffffff;
          box-shadow: var(--shadow-md);
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .portrait-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
        }

        .avatar-svg {
          width: 100%;
          height: 100%;
        }

        .portrait-details {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .principal-name {
          font-family: var(--font-sans);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .principal-title {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .principal-signature {
          font-family: 'Cinzel', cursive;
          font-size: 1.5rem;
          color: var(--primary);
          font-style: italic;
          opacity: 0.8;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
          width: 80%;
        }

        /* Message Text Styles */
        .principal-text-col {
          text-align: left;
        }

        .text-left-align {
          text-align: left !important;
          margin-left: 0 !important;
          margin-bottom: 30px;
        }

        .principal-tag::after {
          margin: 8px 0 0 0;
        }

        .message-quote-box {
          position: relative;
          margin-bottom: 24px;
          padding-left: 20px;
          border-left: 4px solid var(--accent);
        }

        .quote-icon {
          color: rgba(217, 119, 6, 0.15);
          position: absolute;
          top: -20px;
          left: 10px;
          z-index: 0;
        }

        .principal-quote {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary);
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }

        .message-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .portrait-card {
            padding: 30px 20px;
          }
          .portrait-image-container {
            width: 140px;
            height: 140px;
          }
          .principal-quote {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PrincipalMessage;
