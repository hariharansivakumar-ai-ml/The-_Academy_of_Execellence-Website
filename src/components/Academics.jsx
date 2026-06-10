import React from 'react';
import SplitTitle from './SplitTitle';
import { 
  FileText, 
  Monitor, 
  Users, 
  Sparkles, 
  Crown, 
  Cpu, 
  Activity, 
  Palette 
} from 'lucide-react';

const Academics = () => {
  const highlights = [
    {
      icon: <FileText size={28} />,
      title: "NEP-Aligned Learning",
      desc: "Following the modern National Education Policy guidelines for constructive learning outcomes."
    },
    {
      icon: <Monitor size={28} />,
      title: "Smart Classrooms",
      desc: "Interactive digital displays and modern equipment making learning immersive and engaging."
    },
    {
      icon: <Users size={28} />,
      title: "Dedicated Faculty",
      desc: "Highly qualified, passionate educators committed to nurturing individual potential."
    },
    {
      icon: <Sparkles size={28} />,
      title: "Activity-Based Learning",
      desc: "Interactive experiments, team activities, and role-plays for practical understanding."
    },
    {
      icon: <Crown size={28} />,
      title: "Leadership Programs",
      desc: "Fostering collaboration, public speaking, ethics, and character through student councils."
    },
    {
      icon: <Cpu size={28} />,
      title: "STEM & Innovation",
      desc: "Practical labs for science, coding, robotics, and design-thinking challenges."
    },
    {
      icon: <Activity size={28} />,
      title: "Sports & Physical Ed",
      desc: "Professional coaching for multi-sports disciplines and core fitness programs."
    },
    {
      icon: <Palette size={28} />,
      title: "Arts & Cultural Activities",
      desc: "Expanding creative horizons with options in music, visual arts, and theatre."
    }
  ];

  return (
    <section id="academics" className="academics-section">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <span className="section-tag">Academic Excellence</span>
          <h2 className="section-title"><SplitTitle text="A Future-Ready Learning Experience" /></h2>
          <p className="section-desc">
            Our curriculum balances academic rigor with practical learning, creativity, and personal development to prepare students for tomorrow's opportunities.
          </p>
        </div>

        <div className="grid-4 academics-grid">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`card-premium academic-card reveal reveal-delay-${(index % 4) + 1}`}
            >
              <div className="academic-icon-box">
                {item.icon}
              </div>
              <h4 className="academic-title">{item.title}</h4>
              <p className="academic-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .academics-section {
          background-color: var(--bg-primary);
        }

        .academics-grid {
          margin-top: 50px;
        }

        .academic-card {
          text-align: left;
          padding: 30px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .academic-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          background-color: rgba(217, 119, 6, 0.08);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .academic-card:hover .academic-icon-box {
          background-color: var(--accent);
          color: #ffffff;
          transform: scale(1.1) rotate(5deg);
        }

        .academic-title {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .academic-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .academic-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Academics;
