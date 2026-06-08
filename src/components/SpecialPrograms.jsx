import React from 'react';
import { 
  Trophy, 
  Heart, 
  Compass, 
  Cpu, 
  Music, 
  Sparkles, 
  Languages, 
  Calculator, 
  PenTool, 
  Shield, 
  Leaf, 
  Crown 
} from 'lucide-react';

const SpecialPrograms = () => {
  const programs = [
    {
      icon: <Trophy size={24} />,
      title: "Sports Excellence Program",
      desc: "Promoting physical fitness, team spirit, and competitive sportsmanship through structured training."
    },
    {
      icon: <Heart size={24} />,
      title: "Yoga & Wellness Education",
      desc: "Cultivating mindfulness, flexibility, and emotional balance from an early age."
    },
    {
      icon: <Compass size={24} />,
      title: "Chess & Strategic Thinking",
      desc: "Enhancing cognitive capacity, concentration, and logical thinking patterns."
    },
    {
      icon: <Cpu size={24} />,
      title: "Robotics & Tech Club",
      desc: "Interactive hands-on projects teaching electronics, hardware design, and computer programming."
    },
    {
      icon: <Music size={24} />,
      title: "Music & Performing Arts",
      desc: "Providing opportunities to master musical instruments and vocal training."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Dance & Cultural Activities",
      desc: "Developing self-expression and cultural appreciation through diverse dance styles."
    },
    {
      icon: <Languages size={24} />,
      title: "Language Development",
      desc: "Improving communication competence, vocabulary, phonics, and public speaking confidence."
    },
    {
      icon: <Calculator size={24} />,
      title: "Abacus & Mental Math",
      desc: "Sharpening arithmetic speed, mental calculations, and memory recall techniques."
    },
    {
      icon: <PenTool size={24} />,
      title: "Handwriting & Comm Skills",
      desc: "Fostering legible handwriting, presentation styles, and interpersonal communication."
    },
    {
      icon: <Shield size={24} />,
      title: "Martial Arts & Self-Defense",
      desc: "Instilling discipline, confidence, and essential personal defense skills."
    },
    {
      icon: <Leaf size={24} />,
      title: "Environmental Awareness",
      desc: "Promoting eco-friendly habits, waste reduction, gardening, and green planet concepts."
    },
    {
      icon: <Crown size={24} />,
      title: "Leadership & Personality",
      desc: "Nurturing emotional intelligence, responsibility, and proactive leadership qualities."
    }
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <span className="section-tag">Beyond the Classroom</span>
          <h2 className="section-title">Our Special Programs</h2>
          <p className="section-desc">
            We provide a diverse array of co-curricular programs to ensure all-round growth, building skills that last a lifetime.
          </p>
        </div>

        <div className="grid-3 programs-grid">
          {programs.map((prog, index) => (
            <div 
              key={index} 
              className={`program-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="prog-icon-box">
                {prog.icon}
              </div>
              <div className="prog-content">
                <h4 className="prog-title">{prog.title}</h4>
                <p className="prog-desc">{prog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .programs-section {
          background-color: var(--bg-secondary);
        }

        .programs-grid {
          margin-top: 50px;
        }

        .program-card {
          background-color: var(--bg-primary);
          border-radius: 8px;
          padding: 30px;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          text-align: left;
        }

        .program-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: rgba(217, 119, 6, 0.15);
        }

        .prog-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 8px;
          background-color: rgba(10, 25, 47, 0.04);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .program-card:hover .prog-icon-box {
          background-color: var(--primary);
          color: #ffffff;
        }

        .prog-content {
          display: flex;
          flex-direction: column;
        }

        .prog-title {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .prog-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .program-card {
            padding: 24px;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default SpecialPrograms;
