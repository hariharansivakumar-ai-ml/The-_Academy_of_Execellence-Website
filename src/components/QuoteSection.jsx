import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="container quote-container">
        <div className="quote-card reveal">
          <div className="quote-icon-wrapper">
            <Quote size={40} className="quote-icon" />
          </div>
          
          <blockquote className="quote-text">
            "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."
          </blockquote>
          
          <cite className="quote-author">
            — Dr. A.P.J. Abdul Kalam
          </cite>
          
          <div className="quote-divider"></div>
          
          <p className="quote-reflection">
            At The Academy Of Excellence, we encourage every student to dream boldly, learn passionately, and achieve exceptionally.
          </p>
        </div>
      </div>

      <style>{`
        .quote-section {
          background-color: var(--primary-dark);
          background-image: radial-gradient(circle at 50% 50%, rgba(217, 119, 6, 0.08) 0%, transparent 80%),
                            linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Ambient glow spots */
        .quote-section::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          background: var(--accent);
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.06;
          top: -100px;
          left: -100px;
        }

        .quote-section::after {
          content: '';
          position: absolute;
          width: 350px;
          height: 350px;
          background: var(--secondary);
          border-radius: 50%;
          filter: blur(180px);
          opacity: 0.05;
          bottom: -150px;
          right: -100px;
        }

        .quote-container {
          position: relative;
          z-index: 5;
          max-width: 900px;
          margin: 0 auto;
        }

        .quote-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 80px 60px;
          box-shadow: var(--shadow-premium), 
                      inset 0 0 40px rgba(255, 255, 255, 0.02);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .quote-card:hover {
          transform: translateY(-5px);
          border-color: rgba(217, 119, 6, 0.2);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4),
                      inset 0 0 60px rgba(217, 119, 6, 0.05);
        }

        .quote-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(217, 119, 6, 0.1);
          border: 1px solid rgba(217, 119, 6, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 36px;
          transition: all var(--transition-normal);
        }

        .quote-card:hover .quote-icon-wrapper {
          background: var(--accent);
          color: #ffffff;
          transform: scale(1.1) rotate(15deg);
          box-shadow: 0 10px 25px rgba(217, 119, 6, 0.3);
        }

        .quote-text {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-style: italic;
          font-weight: 500;
          line-height: 1.45;
          color: #ffffff;
          margin-bottom: 24px;
          max-width: 760px;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .quote-author {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 40px;
        }

        .quote-divider {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          margin-bottom: 36px;
          transition: width 0.3s ease;
        }

        .quote-card:hover .quote-divider {
          width: 120px;
        }

        .quote-reflection {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          max-width: 650px;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .quote-section {
            padding: 80px 16px;
          }

          .quote-card {
            padding: 50px 30px;
            border-radius: 16px;
          }

          .quote-icon-wrapper {
            width: 60px;
            height: 60px;
            margin-bottom: 24px;
          }

          .quote-icon {
            width: 24px;
            height: 24px;
          }

          .quote-text {
            font-size: 1.6rem;
            margin-bottom: 18px;
          }

          .quote-author {
            font-size: 1rem;
            margin-bottom: 30px;
          }

          .quote-reflection {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default QuoteSection;
