import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import SplitTitle from '../components/SplitTitle';
import { ChevronRight, Calendar, Clock, User, Search, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Embracing NEP 2020: How TAE is Revolutionizing Classroom Learning',
    slug: 'embracing-nep-2020-classroom-learning',
    excerpt: 'Explore how The Academy of Excellence is implementing the National Education Policy 2020 guidelines to shift from rote learning to multi-disciplinary, experiential, and student-centric classroom education.',
    cover_image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    category: 'Academics',
    author: 'Dr. Aruna Sen, Director of Academics',
    read_time: 5,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '2',
    title: 'Nurturing Critical Thinkers: The Importance of STEM & Robotics in Early Education',
    slug: 'nurturing-critical-thinkers-stem-robotics',
    excerpt: 'Discover how early exposure to coding, robotics, and engineering builds logic, spatial reasoning, resilience, and problem-solving skills in young learners.',
    cover_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    category: 'STEM',
    author: 'Mr. Rajesh Nair, Robotics Lab Lead',
    read_time: 6,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: '3',
    title: 'A Parent Guide to Managing Screen Time & Encouraging Digital Wellness',
    slug: 'parent-guide-managing-screen-time-digital-wellness',
    excerpt: 'Screens are everywhere. Read our counselor\'s guide on setting boundaries, categorizing screen time, and encouraging active creation over passive consumption.',
    cover_image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    category: 'Parents Guide',
    author: 'Ms. Priya Sharma, Senior Student Counselor',
    read_time: 4,
    published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  }
];

const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSupabaseConfigured, setIsSupabaseConfigured] = useState(true);

  const categories = ['All', 'Academics', 'STEM', 'Parents Guide', 'Activities', 'General'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    if (!supabase) {
      // Supabase is null because credentials are not set
      setIsSupabaseConfigured(false);
      setPosts(MOCK_POSTS);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        setPosts(data);
      } else {
        // Fallback to mock posts if table is empty
        setPosts(MOCK_POSTS);
      }
    } catch (err) {
      console.error('Error fetching blogs from Supabase:', err);
      // Fallback silently to mock posts for visual completeness
      setPosts(MOCK_POSTS);
    } finally {
      setLoading(false);
    }
  };

  // Filter posts based on Search and Selected Category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* Blog Page Hero */}
      <div className="page-hero blog-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <nav className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="breadcrumb-current">Blogs</span>
          </nav>
          <h1 className="page-hero-title"><SplitTitle text="Featured Publications" /></h1>
          <p className="page-hero-subtitle">Insights, updates, and educational guides from the TAE family</p>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">

          {/* Setup Alert for Developers (Only shown when Supabase isn't configured) */}
          {!isSupabaseConfigured && (
            <div className="setup-alert reveal active">
              <div className="setup-alert-icon">
                <AlertTriangle size={24} />
              </div>
              <div className="setup-alert-content">
                <h4 className="setup-alert-title">Supabase Connection Notice</h4>
                <p className="setup-alert-desc">
                  This page is currently running on <strong>local mock database fallback</strong> because Supabase keys are not set. 
                  To connect your real database, copy the API keys into your local <code>.env</code> file and execute the <code>supabase_setup.sql</code> in the SQL editor.
                </p>
              </div>
            </div>
          )}

          {/* Search and Categories Filtering Header */}
          <div className="filter-wrapper reveal active">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-tabs">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Cards Grid */}
          {loading ? (
            <div className="blog-loading">
              <span className="spinner"></span>
              <p>Fetching articles...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="blog-grid-layout">
              {filteredPosts.map((post, idx) => (
                <article key={post.id || idx} className="blog-card reveal active">
                  <div className="card-image-box">
                    <img 
                      src={post.cover_image || 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80'} 
                      alt={post.title} 
                      className="card-image"
                      loading="lazy"
                    />
                    <span className="card-badge">{post.category}</span>
                  </div>

                  <div className="card-content-box">
                    <div className="card-meta">
                      <span className="meta-item">
                        <Calendar size={14} />
                        {formatDate(post.published_at)}
                      </span>
                      <span className="meta-item">
                        <Clock size={14} />
                        {post.read_time} min read
                      </span>
                    </div>

                    <h3 className="card-blog-title">
                      <Link to={`/blog/${post.slug}`} className="title-link">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="card-blog-excerpt">
                      {post.excerpt || (post.content && post.content.substring(0, 150) + '...')}
                    </p>

                    <div className="card-footer-box">
                      <div className="author-box">
                        <User size={14} className="author-icon" />
                        <span className="author-name">{post.author || 'TAE Faculty'}</span>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`} className="read-more-btn">
                        Read Article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-blogs">
              <p>No articles found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="btn btn-outline reset-btn"
              >
                Clear Filters
              </button>
            </div>
          )}

        </div>
      </section>

      <style>{`
        /* ── Page Hero Common Styles ── */
        .page-hero {
          position: relative;
          height: 380px;
          background-color: var(--primary);
          display: flex;
          align-items: flex-end;
          padding-top: var(--header-height);
          padding-bottom: 60px;
          overflow: hidden;
        }
        .page-hero-overlay { position: absolute; inset: 0; opacity: 0.04; background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px); background-size: 28px 28px; }
        .page-hero-content { position: relative; z-index: 5; max-width: var(--container-max-width); width: 100%; margin: 0 auto; padding: 0 24px; }
        .page-breadcrumb { display: flex; align-items: center; gap: 6px; margin-bottom: 16px; }
        .breadcrumb-link { font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.2s; }
        .breadcrumb-link:hover { color: var(--accent); }
        .breadcrumb-sep { color: rgba(255,255,255,0.35); flex-shrink: 0; }
        .breadcrumb-current { font-family: var(--font-sans); font-size: 0.85rem; font-weight: 700; color: var(--accent); }
        .page-hero-title { font-family: var(--font-sans); font-size: 3.25rem; font-weight: 800; color: #fff; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 12px; text-shadow: 0 4px 16px rgba(0,0,0,0.2); }
        .page-hero-subtitle { font-family: var(--font-sans); font-size: 1.1rem; font-weight: 400; color: rgba(255,255,255,0.7); }

        .blog-hero {
          background-color: var(--primary);
          background-image: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
        }
        .blog-hero .page-hero-overlay {
          opacity: 0.06;
          background-image: radial-gradient(circle at 80% 20%, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
        }

        .blog-section {
          background: var(--bg-primary);
          padding: 80px 24px;
        }

        /* Setup Alert Styling */
        .setup-alert {
          display: flex;
          gap: 16px;
          background: rgba(217, 119, 6, 0.06);
          border: 1px solid rgba(217, 119, 6, 0.25);
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 40px;
          align-items: flex-start;
        }
        .setup-alert-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .setup-alert-title {
          font-family: var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 4px;
        }
        .setup-alert-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .setup-alert-desc code {
          background: rgba(0, 0, 0, 0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.82rem;
        }

        /* Search and Filters */
        .filter-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        .search-box {
          position: relative;
          max-width: 380px;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 48px;
          border-radius: 30px;
          border: 1.5px solid var(--neutral-200);
          background-color: var(--bg-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--accent);
          background-color: var(--bg-primary);
          box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.1);
        }

        .category-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cat-tab-btn {
          background: var(--bg-secondary);
          border: 1.5px solid var(--neutral-200);
          color: var(--text-secondary);
          padding: 10px 20px;
          border-radius: 30px;
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cat-tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: #fff;
        }
        .cat-tab-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          box-shadow: var(--shadow-sm);
        }

        /* Blog Grid */
        .blog-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .blog-card {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(212, 175, 55, 0.25);
        }
        .card-image-box {
          position: relative;
          height: 220px;
          overflow: hidden;
          background-color: var(--bg-tertiary);
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .blog-card:hover .card-image {
          transform: scale(1.06);
        }
        .card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background-color: var(--secondary);
          color: #fff;
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 12px;
          border-radius: 50px;
          z-index: 5;
        }

        .card-content-box {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-meta {
          display: flex;
          gap: 16px;
          font-size: 0.8rem;
          font-family: var(--font-sans);
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 12px;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .card-blog-title {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 12px;
        }
        .title-link {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .title-link:hover {
          color: var(--accent);
        }
        .card-blog-excerpt {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }

        .card-footer-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }
        .author-box {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
        }
        .author-icon {
          color: var(--accent);
        }
        .author-name {
          font-size: 0.8rem;
          font-weight: 600;
          font-family: var(--font-sans);
        }
        .read-more-btn {
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .read-more-btn:hover {
          color: var(--accent-hover);
          gap: 8px;
        }

        /* Fallbacks */
        .blog-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 0;
          color: var(--text-muted);
          gap: 16px;
        }
        .no-blogs {
          text-align: center;
          padding: 60px 0;
          color: var(--text-muted);
        }
        .reset-btn {
          margin-top: 16px;
        }

        @media (max-width: 1024px) {
          .blog-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-hero { height: 260px; padding-bottom: 40px; }
          .page-hero-title { font-size: 2.25rem; }
          .blog-grid-layout {
            grid-template-columns: 1fr;
          }
          .filter-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
          .search-box {
            max-width: 100%;
          }
          .blog-section {
            padding: 50px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default BlogListPage;
