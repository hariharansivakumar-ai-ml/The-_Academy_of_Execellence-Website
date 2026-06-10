import classroomImg from '../assets/about_classroom.png';
import SplitTitle from './SplitTitle';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Middle Part: 50/50 Narrative & Image Collage Grid */}
        <div className="about-narrative-grid grid-2">
          {/* Left Column: Premium Image Collage */}
          <div className="about-image-collage reveal reveal-left">
            <div className="image-glow-behind"></div>
            <div className="image-wrapper">
              <img src={classroomImg} alt="Students collaborating in library" className="about-main-image" />
              <div className="image-overlay-gradient"></div>
              {/* Floating Stat Badge */}
              <div className="floating-stat-badge">
                <span className="stat-number">100%</span>
                <span className="stat-text">Holistic Development</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative details & Badges */}
          <div className="about-text-content reveal reveal-right reveal-delay-1">
            <span className="about-subheading">THE ACADEMY OF EXCELLENCE</span>
            <h3 className="about-heading"><SplitTitle text="Nurturing Confident, Responsible Leaders" /></h3>
            <div className="heading-accent-line"></div>
            <p className="about-paragraph lead-p">
              At The Academy Of Excellence, we believe that every child possesses unique talents, limitless potential, and the ability to achieve greatness. Our mission is to provide a nurturing, innovative, and academically enriching environment where students develop confidence, character, creativity, and a lifelong passion for learning.
            </p>
            <p className="about-paragraph">
              Set in a safe and inspiring campus, our school is committed to fostering intellectual growth, personal responsibility, leadership skills, and respect for others. We combine academic excellence with holistic development, ensuring that students are prepared to thrive in an ever-evolving global society.
            </p>
            <p className="about-paragraph">
              Through dedicated educators, modern learning methodologies, and a student-centered approach, we empower learners to become confident individuals, responsible citizens, and future leaders.
            </p>

          </div>
        </div>


      </div>

      <style>{`
        .about-section {
          background: radial-gradient(circle at 10% 20%, rgba(var(--accent-rgb), 0.02) 0%, transparent 40%), 
                      radial-gradient(circle at 90% 80%, rgba(13, 148, 136, 0.02) 0%, transparent 40%), 
                      var(--bg-secondary);
          padding: 120px 24px;
          position: relative;
          overflow: hidden;
        }

        .about-narrative-grid {
          margin-top: 20px;
          align-items: center;
          gap: 60px;
        }

        /* Image Collage / Frame Styling */
        .about-image-collage {
          position: relative;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-glow-behind {
          position: absolute;
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(var(--accent-rgb), 0.12) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          z-index: 1;
          pointer-events: none;
          filter: blur(40px);
        }

        .image-wrapper {
          position: relative;
          border-radius: 24px;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(10, 25, 47, 0.12);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%);
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all var(--transition-normal);
        }

        .image-wrapper:hover {
          transform: translateY(-4px);
          box-shadow: 0 25px 50px rgba(10, 25, 47, 0.18);
          border-color: rgba(var(--accent-rgb), 0.3);
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
          inset: 12px;
          background: linear-gradient(to top, rgba(10, 25, 47, 0.3) 0%, transparent 60%);
          border-radius: 16px;
          pointer-events: none;
          z-index: 3;
        }

        .floating-stat-badge {
          position: absolute;
          bottom: -15px;
          right: -15px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 16px 24px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 15px 30px rgba(10, 25, 47, 0.1);
          z-index: 4;
          animation: floatBadge 6s ease-in-out infinite;
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .stat-number {
          font-family: var(--font-sans);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-text {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }

        /* Narrative Side Styling */
        .about-text-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .about-heading {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 12px;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .about-subheading {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent);
          display: block;
          margin-bottom: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
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
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .about-paragraph.lead-p {
          font-size: 1.08rem;
          font-weight: 500;
          color: var(--primary);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .about-main-image {
            height: 380px;
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
        }
      `}</style>
    </section>
  );
};

export default About;
