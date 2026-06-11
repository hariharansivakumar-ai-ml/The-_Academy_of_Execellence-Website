import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ChevronRight, ArrowLeft, Calendar, Clock, User, Phone, Mail, Award, BookOpen } from 'lucide-react';

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Embracing NEP 2020: How TAE is Revolutionizing Classroom Learning',
    slug: 'embracing-nep-2020-classroom-learning',
    content: `# Embracing NEP 2020: How TAE is Revolutionizing Classroom Learning

The National Education Policy (NEP) 2020 marks a historic turning point in the Indian education landscape. At **The Academy of Excellence (TAE)**, we have been at the forefront of implementing these guidelines, shifting from a rote-learning methodology to a multi-disciplinary, experiential, and student-centric paradigm.

Here is a closer look at how the NEP framework is being integrated into our classrooms daily:

---

## 1. Experiential Learning & STEM Integration
Instead of reading about circuits solely from textbooks, our Grade 5 students build actual prototypes in our state-of-the-art STEM Lab. We believe that conceptual clarity comes from active tinkering. 

* **Practical Lab Sessions**: Daily sessions dedicated to scientific experimentation.
* **Tinkering Projects**: Hands-on assembly of robotics kits, simple motors, and structural models.
* **Integrated Learning**: Bridging math and physics through interactive software games.

> "Tell me and I forget. Teach me and I remember. Involve me and I learn."  
> — *Benjamin Franklin*

---

## 2. Flex-Disciplinary Subject Selection
High school students at TAE are no longer pigeonholed into rigid streams. A Grade 11 science student can choose to study Business Studies alongside Physics, or pair Computer Science with Humanities and Classical Music. This encourages lateral thinking and allows students to cultivate diverse talents.

## 3. Cognitive & Formative Evaluations
We have transitioned away from high-stress, single-sitting exams for young minds. Instead, our assessment methodologies focus on:
1. **Peer-Evaluations**: Teaching children to collaborate and give constructive feedback.
2. **Project Exhibitions**: Presentations where students explain concepts to parents and peers.
3. **Continuous Assessments**: Short quizzes, classroom debates, and digital portfolios.

By aligning with the NEP 2020 guidelines, we are not just preparing students for exams; we are building lifelong learners who are critical thinkers, problem solvers, and global citizens.`,
    excerpt: 'Explore how The Academy of Excellence is implementing the National Education Policy 2020 guidelines to shift from rote learning to multi-disciplinary, experiential, and student-centric classroom education.',
    cover_image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    category: 'Academics',
    author: 'Dr. Aruna Sen, Director of Academics',
    read_time: 5,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    title: 'Nurturing Critical Thinkers: The Importance of STEM & Robotics in Early Education',
    slug: 'nurturing-critical-thinkers-stem-robotics',
    content: `# Nurturing Critical Thinkers: The Importance of STEM & Robotics in Early Education

As we navigate the 21st century, technology has become an inseparable part of our lives. In this digital era, teaching kids how to write code or understand algorithms is not just about producing computer science graduates—it is about cultivating critical thinking, logical reasoning, and collaborative problem-solving skills.

At **The Academy of Excellence**, our STEM & Robotics curriculum starts right from Grade 1. Here is why early coding and mechanical building matter:

---

## Why STEM from Grade 1?

1. **Developing Spatial Intelligence**  
   When children build robotic models using gears, motors, and sensors, they develop a spatial and tactile understanding of physics and geometry.
2. **Learning through Trial and Error**  
   Debugging code teaches resilience. When a program does not run, students do not see it as a failure; they see it as a bug to be solved. This builds an invaluable growth mindset.
3. **Collaboration & Communication**  
   Our robotics lab works on a pair-programming system. Two students share a single device and kit, forcing them to communicate, delegate, and cooperate to achieve their goal.

---

## Our State-Of-The-Art Labs
TAE has partnered with leading global educational technology firms to install:
- **Lego Mindstorms** and WeDo kits for elementary school projects.
- **Arduino & Raspberry Pi** hardware boards for high school innovators.
- **3D Printing Stations** where children can bring their digital designs to physical life.

\`\`\`python
# A simple autonomous navigation loop taught in Grade 6 Coding
def navigate_robot(distance_sensor):
    while True:
        if distance_sensor.get_distance_cm() < 15:
            robot.stop()
            robot.turn_right(90)
        else:
            robot.move_forward(speed=50)
\`\`\`

By encouraging students to engage with these technologies early, we demystify science and make learning an adventurous, creative pursuit.`,
    excerpt: 'Discover how early exposure to coding, robotics, and engineering builds logic, spatial reasoning, resilience, and problem-solving skills in young learners.',
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    category: 'STEM',
    author: 'Mr. Rajesh Nair, Robotics Lab Lead',
    read_time: 6,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    title: 'A Parent Guide to Managing Screen Time & Encouraging Digital Wellness',
    slug: 'parent-guide-managing-screen-time-digital-wellness',
    content: `# A Parent Guide to Managing Screen Time & Encouraging Digital Wellness

"How much screen time is too much?" This is perhaps the most common question parents ask our student counselors during parent-teacher interactions. In a world where school assignments, socialization, and entertainment all happen behind screens, finding a balance is challenging but critical.

At **The Academy of Excellence**, we practice digital citizenship and wellness. Here is a guided plan for parents to establish healthy screen boundaries at home:

---

## 1. The 3 D’s of Screen Time
Not all screen time is created equal. We encourage parents to categorize screen usage into three types:

* **Digitally Active (Creation)**: Writing blogs, editing video, coding, digital drawing. *Highly encouraged.*
* **Digitally Interactive (Communication)**: Online study groups, video calls with grandparents, educational quizzes. *Moderate usage.*
* **Digitally Passive (Consumption)**: Endless scrolling on social feeds, streaming videos. *Should be limited.*

---

## 2. Establish "Tech-Free Zones"
The simplest way to build healthy habits is by creating physical boundaries:
1. **The Dining Table**: Dinner should be a device-free conversation time.
2. **The Bedroom**: Keep chargers in the living room. Research shows that keeping screens out of bedrooms improves sleep quality dramatically.
3. **One Hour Before Bed**: Blue light from screens suppresses melatonin. Turning off screens an hour before bed promotes restful rest.

---

## 3. Co-Engage in Technology
Instead of monitoring kids from a distance, play games together, watch tutorials, or learn a digital skill as a family. Co-engagement turns screen time into bonding time and allows parents to model healthy online etiquette.

> "Technology is a useful servant but a dangerous master."  
> — *Christian Lous Lange*

By creating collaborative rules and fostering digital mindfulness, we can guide our children to use technology as an empowering tool rather than a distraction.`,
    excerpt: 'Screens are everywhere. Read our counselor\'s guide on setting boundaries, categorizing screen time, and encouraging active creation over passive consumption.',
    cover_image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    category: 'Parents Guide',
    author: 'Ms. Priya Sharma, Senior Student Counselor',
    read_time: 4,
    published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    if (!supabase) {
      // Fallback to mock posts
      const localPost = MOCK_POSTS.find(p => p.slug === slug);
      setPost(localPost || null);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;

      if (data) {
        setPost(data);
      } else {
        const localPost = MOCK_POSTS.find(p => p.slug === slug);
        setPost(localPost || null);
      }
    } catch (err) {
      console.error('Error fetching blog from Supabase:', err);
      // Fallback silently to mock posts
      const localPost = MOCK_POSTS.find(p => p.slug === slug);
      setPost(localPost || null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const parseInlineStyles = (text) => {
    if (!text) return '';
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>');

    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  const renderMarkdown = (content) => {
    if (!content) return null;
    
    // Split content by double newlines to find paragraphs/blocks
    const blocks = content.split(/\n\s*\n/);
    let isFirstParagraph = true;
    
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Ignore H1 if it matches the main title
      if (trimmed.startsWith('# ') && index === 0) {
        return null; 
      }

      // Headers
      if (trimmed.startsWith('## ')) {
        return <h2 key={index} className="article-h2">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} className="article-h3">{trimmed.replace('### ', '')}</h3>;
      }

      // Horizontal Rules
      if (trimmed === '---') {
        return <hr key={index} className="article-hr" />;
      }

      // Blockquotes
      if (trimmed.startsWith('> ')) {
        const text = trimmed.replace(/^>\s*/gm, '').replace(/—\s*/g, '— ');
        return (
          <blockquote key={index} className="article-blockquote">
            <p>{parseInlineStyles(text)}</p>
          </blockquote>
        );
      }

      // Code Blocks
      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n');
        const language = lines[0].replace('```', '').trim();
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre key={index} className="article-code-block">
            {language && <span className="code-lang">{language}</span>}
            <code>{code}</code>
          </pre>
        );
      }

      // Bullet Lists
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map(item => item.replace(/^[*+-]\s*/, ''));
        return (
          <ul key={index} className="article-ul">
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{parseInlineStyles(item)}</li>
            ))}
          </ul>
        );
      }

      // Ordered Lists
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map(item => item.replace(/^\d+\.\s*/, ''));
        return (
          <ol key={index} className="article-ol">
            {items.map((item, itemIdx) => (
              <li key={itemIdx}>{parseInlineStyles(item)}</li>
            ))}
          </ol>
        );
      }

      // Paragraph with magazine-style drop cap for the first paragraph
      if (isFirstParagraph) {
        isFirstParagraph = false;
        return (
          <p key={index} className="article-p drop-cap">
            {parseInlineStyles(trimmed)}
          </p>
        );
      }

      // Default Paragraph
      return <p key={index} className="article-p">{parseInlineStyles(trimmed)}</p>;
    });
  };

  if (loading) {
    return (
      <div className="blog-detail-loading">
        <span className="spinner"></span>
        <p>Loading article content...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-detail-error">
        <h2 className="error-title">Article Not Found</h2>
        <p className="error-msg">The blog post you are trying to view does not exist or has been removed.</p>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Publications
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="detail-hero-spacing" />
      
      <div className="blog-detail-container">
        <div className="container detail-wrapper">
          
          {/* Breadcrumb Navigation */}
          <nav className="detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="detail-bc-link">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="detail-bc-link">Blogs</Link>
            <ChevronRight size={12} />
            <span className="detail-bc-current">{post.title}</span>
          </nav>

          <div className="detail-layout">
            
            {/* Main Content Area */}
            <main className="detail-main">
              <Link to="/blog" className="back-to-list-link">
                <ArrowLeft size={14} /> Back to Publications
              </Link>

              <div className="article-header">
                <span className="article-category">{post.category}</span>
                <h1 className="article-title">{post.title}</h1>
                
                <div className="article-meta-info">
                  <div className="meta-block">
                    <User size={15} />
                    <span className="meta-val">{post.author || 'TAE Faculty'}</span>
                  </div>
                  <div className="meta-block">
                    <Calendar size={15} />
                    <span className="meta-val">{formatDate(post.published_at)}</span>
                  </div>
                  <div className="meta-block">
                    <Clock size={15} />
                    <span className="meta-val">{post.read_time} min read</span>
                  </div>
                </div>
              </div>

              {post.cover_image && (
                <div className="article-cover-box">
                  <img src={post.cover_image} alt={post.title} className="article-cover" />
                </div>
              )}

              <div className="article-content">
                {renderMarkdown(post.content)}
              </div>
            </main>

            {/* Sidebar widgets */}
            <aside className="detail-sidebar">
              
              {/* About TAE Widget */}
              <div className="sidebar-widget about-widget">
                <h4 className="widget-title">About TAE</h4>
                <div className="widget-divider" />
                <p className="widget-desc">
                  The Academy of Excellence is a premier educational institution committed to fostering holistic learning, critical thinking, and character development in future leaders.
                </p>
                <div className="widget-info-list">
                  <div className="widget-info-item">
                    <Award size={18} className="widget-icon" />
                    <span>NEP-Aligned Curriculum</span>
                  </div>
                  <div className="widget-info-item">
                    <BookOpen size={18} className="widget-icon" />
                    <span>STEM & Coding Focus</span>
                  </div>
                </div>
              </div>

              {/* Admissions CTA widget */}
              <div className="sidebar-widget cta-widget">
                <div className="cta-widget-bg" />
                <div className="cta-widget-content">
                  <h4 className="cta-widget-title">Admissions Open</h4>
                  <p className="cta-widget-desc">
                    Secure your child's educational future. Secure a seat for the upcoming academic school term.
                  </p>
                  <Link to="/admissions" className="btn btn-accent cta-widget-btn">
                    Apply Online Now
                  </Link>
                  <div className="cta-widget-footer">
                    <div className="footer-contact-row">
                      <Phone size={14} /> <span>+91 (11) 2345-6789</span>
                    </div>
                    <div className="footer-contact-row">
                      <Mail size={14} /> <span>admissions@academyofexcellence.edu</span>
                    </div>
                  </div>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </div>

      <style>{`
        .detail-hero-spacing {
          height: var(--header-height);
          background-color: var(--primary);
        }

        .blog-detail-container {
          background-color: var(--bg-primary);
          padding: 50px 24px 100px;
        }

        .detail-wrapper {
          max-width: var(--container-max-width);
          margin: 0 auto;
        }

        .detail-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .detail-bc-link {
          text-decoration: none;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .detail-bc-link:hover {
          color: var(--accent);
        }
        .detail-bc-current {
          color: var(--primary);
          font-weight: 700;
          max-width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Layout */
        .detail-layout {
          display: grid;
          grid-template-columns: 7fr 3fr;
          gap: 50px;
          align-items: start;
        }

        .detail-main {
          background: #fff;
        }

        .back-to-list-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          text-decoration: none;
          margin-bottom: 24px;
          transition: color 0.2s, transform 0.2s;
        }
        .back-to-list-link:hover {
          color: var(--accent);
          transform: translateX(-4px);
        }

        /* Article Header */
        .article-header {
          margin-bottom: 30px;
        }
        .article-category {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--secondary);
          margin-bottom: 12px;
        }
        .article-title {
          font-family: 'Outfit', 'Inter', var(--font-sans);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }
        .article-meta-info {
          display: flex;
          gap: 24px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          flex-wrap: wrap;
        }
        .meta-block {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .meta-val {
          font-weight: 600;
          color: var(--text-secondary);
        }

        /* Cover image */
        .article-cover-box {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-md);
          margin-bottom: 40px;
          height: 440px;
          background-color: var(--bg-tertiary);
        }
        .article-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Article content parsing typography */
        .article-content {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          line-height: 1.8;
          color: #334155; /* Neutral slate dark for optimal reading contrast */
        }
        .article-p {
          margin-bottom: 24px;
        }
        .article-p.drop-cap::first-letter {
          font-family: var(--font-serif);
          font-size: 3.5rem;
          font-weight: 800;
          float: left;
          color: var(--primary);
          line-height: 0.85;
          margin-right: 10px;
          margin-top: 4px;
          text-transform: uppercase;
        }
        .article-h2 {
          font-family: 'Outfit', var(--font-sans);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary);
          margin: 40px 0 16px;
          line-height: 1.3;
        }
        .article-h3 {
          font-family: 'Outfit', var(--font-sans);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary);
          margin: 30px 0 12px;
        }
        .article-hr {
          border: none;
          height: 1px;
          background-color: var(--border-color);
          margin: 36px 0;
        }
        .article-blockquote {
          background-color: var(--bg-secondary);
          border-left: 4px solid var(--accent);
          padding: 24px 30px;
          border-radius: 0 12px 12px 0;
          margin: 32px 0;
        }
        .article-blockquote p {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--primary);
          line-height: 1.6;
          margin: 0;
        }
        .article-code-block {
          background-color: #0f172a;
          color: #e2e8f0;
          padding: 20px;
          border-radius: 10px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.88rem;
          overflow-x: auto;
          margin: 28px 0;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .code-lang {
          position: absolute;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.08);
          color: var(--neutral-300);
          font-size: 0.72rem;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 0 10px 0 10px;
          font-weight: 700;
        }
        .article-ul, .article-ol {
          margin-bottom: 24px;
          padding-left: 24px;
        }
        .article-ul li, .article-ol li {
          margin-bottom: 8px;
          line-height: 1.7;
        }
        .article-content code {
          background: rgba(212, 175, 55, 0.1);
          color: #a17c13;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.9em;
          font-weight: 600;
        }

        /* Sidebar */
        .detail-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: sticky;
          top: 100px;
        }
        .sidebar-widget {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 30px;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-sm);
        }
        .widget-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary);
          margin-bottom: 12px;
        }
        .widget-divider {
          width: 40px;
          height: 2.5px;
          background-color: var(--accent);
          margin-bottom: 20px;
        }
        .widget-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .widget-info-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .widget-info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-sans);
          color: var(--text-primary);
        }
        .widget-icon {
          color: var(--accent);
        }

        /* CTA Widget styling */
        .cta-widget {
          background-color: var(--primary);
          background-image: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #fff;
        }
        .cta-widget-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .cta-widget-content {
          position: relative;
          z-index: 5;
        }
        .cta-widget-title {
          font-family: var(--font-sans);
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .cta-widget-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.5;
          margin-bottom: 24px;
        }
        .cta-widget-btn {
          width: 100%;
          padding: 12px;
          font-size: 0.9rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .cta-widget-footer {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          font-family: var(--font-sans);
        }
        .footer-contact-row svg {
          color: var(--accent);
        }

        /* Fallback States */
        .blog-detail-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          color: var(--text-muted);
          gap: 16px;
        }
        .blog-detail-error {
          max-width: 500px;
          margin: 120px auto;
          text-align: center;
          padding: 0 24px;
        }
        .error-title {
          font-family: var(--font-sans);
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 12px;
        }
        .error-msg {
          color: var(--text-secondary);
          margin-bottom: 28px;
        }

        @media (max-width: 1024px) {
          .detail-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .article-cover-box {
            height: 320px;
          }
          .detail-sidebar {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .blog-detail-container {
            padding: 30px 16px 60px;
          }
          .article-title {
            font-size: 1.85rem;
          }
          .article-cover-box {
            height: 240px;
            margin-bottom: 30px;
          }
          .article-content {
            font-size: 1rem;
          }
          .article-blockquote {
            padding: 20px;
            margin: 24px 0;
          }
        }
      `}</style>
    </>
  );
};

export default BlogDetailPage;
