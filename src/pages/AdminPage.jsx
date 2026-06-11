import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import SplitTitle from '../components/SplitTitle';
import { 
  Lock, User, Mail, LogOut, Plus, Edit2, Trash2, ArrowLeft, Eye, Edit3, 
  CheckCircle, AlertCircle, FileText, Globe, Calendar, Clock, Sparkles
} from 'lucide-react';

const AdminPage = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Auth state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Dashboard state
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [dbError, setDbError] = useState('');

  // Editor state
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null); // null if creating, post object if editing
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    category: 'General',
    author: 'TAE Team',
    read_time: 5
  });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [saving, setSaving] = useState(false);
  const [editorTab, setEditorTab] = useState('write'); // 'write' or 'preview'
  const [autoSlug, setAutoSlug] = useState(true);

  // Check active session on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (!supabase) {
      setLoading(false);
      return;
    }

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchPosts();
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        fetchPosts();
      } else {
        setPosts([]);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch blogs from DB
  const fetchPosts = async () => {
    if (!supabase) return;
    setPostsLoading(true);
    setDbError('');
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug, category, author, published_at, read_time')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (err) {
      console.error('Error fetching dashboard posts:', err);
      setDbError('Could not fetch posts. Check if you created the posts table and policies in Supabase.');
    } finally {
      setPostsLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    if (!email.trim() || !password.trim()) {
      setAuthError('Email and Password are required.');
      return;
    }

    setAuthLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (error) throw error;
    } catch (err) {
      setAuthError(err.message || 'Incorrect email or password.');
    } finally {
      setAuthLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  // Create auto-slug from Title
  useEffect(() => {
    if (autoSlug && !currentPost) {
      const slugified = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // remove special chars
        .replace(/\s+/g, '-')         // replace spaces with hyphens
        .replace(/-+/g, '-');         // remove multiple hyphens
      setFormData(prev => ({ ...prev, slug: slugified }));
    }
  }, [formData.title, autoSlug]);

  // Start Create Mode
  const startCreate = () => {
    setCurrentPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      cover_image: '',
      category: 'General',
      author: 'TAE Team',
      read_time: 5
    });
    setFormError('');
    setFormSuccess('');
    setAutoSlug(true);
    setIsEditing(true);
    setEditorTab('write');
  };

  // Start Edit Mode
  const startEdit = async (post) => {
    setFormError('');
    setFormSuccess('');
    setSaving(true);
    
    // Fetch full post content
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', post.id)
        .single();
      
      if (error) throw error;
      
      setCurrentPost(data);
      setFormData({
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt || '',
        content: data.content,
        cover_image: data.cover_image || '',
        category: data.category || 'General',
        author: data.author || 'TAE Team',
        read_time: data.read_time || 5
      });
      setAutoSlug(false);
      setIsEditing(true);
      setEditorTab('write');
    } catch (err) {
      console.error('Error fetching full post:', err);
      setFormError('Failed to load full post content.');
    } finally {
      setSaving(false);
    }
  };

  // Handle Delete Post
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this blog post?')) return;
    
    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setPosts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting post:', err);
      alert('Delete failed: ' + err.message);
    }
  };

  // Save Post Form Submit
  const handleSavePost = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validations
    if (!formData.title.trim()) return setFormError('Title is required.');
    if (!formData.slug.trim()) return setFormError('Slug is required.');
    if (!formData.content.trim()) return setFormError('Content body is required.');

    setSaving(true);
    try {
      const postPayload = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content,
        cover_image: formData.cover_image.trim(),
        category: formData.category,
        author: formData.author.trim(),
        read_time: parseInt(formData.read_time) || 5,
        published_at: currentPost ? currentPost.published_at : new Date().toISOString()
      };

      let error = null;
      if (currentPost) {
        // Update existing
        const { error: err } = await supabase
          .from('posts')
          .update(postPayload)
          .eq('id', currentPost.id);
        error = err;
      } else {
        // Insert new
        const { error: err } = await supabase
          .from('posts')
          .insert([postPayload]);
        error = err;
      }

      if (error) throw error;

      setFormSuccess(currentPost ? 'Post updated successfully!' : 'New post created successfully!');
      
      // Delay return to dashboard
      setTimeout(() => {
        setIsEditing(false);
        fetchPosts();
      }, 1000);
    } catch (err) {
      console.error('Error saving post:', err);
      setFormError(err.message || 'Failed to save post. Check if your slug is unique.');
    } finally {
      setSaving(false);
    }
  };

  // Helper parser for markdown preview
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
    if (!content) return <p className="preview-empty">No content written yet...</p>;
    
    const blocks = content.split(/\n\s*\n/);
    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith('# ')) {
        return <h1 key={index} className="preview-h1">{trimmed.replace('# ', '')}</h1>;
      }
      if (trimmed.startsWith('## ')) {
        return <h2 key={index} className="preview-h2">{trimmed.replace('## ', '')}</h2>;
      }
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} className="preview-h3">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed === '---') {
        return <hr key={index} className="preview-hr" />;
      }
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={index} className="preview-quote">
            <p>{parseInlineStyles(trimmed.replace(/^>\s*/gm, ''))}</p>
          </blockquote>
        );
      }
      if (trimmed.startsWith('```')) {
        const lines = trimmed.split('\n');
        const code = lines.slice(1, -1).join('\n');
        return (
          <pre key={index} className="preview-code">
            <code>{code}</code>
          </pre>
        );
      }
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        const items = trimmed.split('\n').map(item => item.replace(/^[*+-]\s*/, ''));
        return (
          <ul key={index} className="preview-ul">
            {items.map((item, i) => <li key={i}>{parseInlineStyles(item)}</li>)}
          </ul>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split('\n').map(item => item.replace(/^\d+\.\s*/, ''));
        return (
          <ol key={index} className="preview-ol">
            {items.map((item, i) => <li key={i}>{parseInlineStyles(item)}</li>)}
          </ol>
        );
      }

      return <p key={index} className="preview-p">{parseInlineStyles(trimmed)}</p>;
    });
  };

  // Helper date formatter
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="admin-loading-screen">
        <span className="spinner"></span>
        <p>Initializing Admin Panel...</p>
      </div>
    );
  }

  // If Supabase client is not initialized due to missing keys
  if (!supabase) {
    return (
      <div className="admin-config-error">
        <div className="error-card">
          <AlertCircle size={48} className="error-icon" />
          <h2>Supabase Credentials Required</h2>
          <p>
            The Blog Admin Panel requires a live Supabase connection to authenticate and save posts. 
            Please configure your credentials in the local <code>.env</code> file:
          </p>
          <pre className="env-guide">
            VITE_SUPABASE_URL=https://your-project-id.supabase.co{"\n"}
            VITE_SUPABASE_ANON_KEY=your-anon-public-key
          </pre>
          <Link to="/blog" className="btn btn-primary">
            <ArrowLeft size={16} /> Back to Publications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`admin-container ${!session ? 'login-view' : 'dashboard-view'}`}>
        <div className="container admin-wrapper">
          
          {/* STATE 1: Login Panel (if no active session) */}
          {!session ? (
            <div className="login-card-container">
              {/* Floating ambient blobs */}
              <div className="ambient-blob blob-1"></div>
              <div className="ambient-blob blob-2"></div>
              <div className="ambient-blob blob-3"></div>
              
              <div className="login-card reveal active">
                <div className="login-header">
                  <div className="lock-icon-box">
                    <Lock size={30} />
                  </div>
                  <h2 className="login-title"><SplitTitle text="Admin Sign In" /></h2>
                  <p className="login-subtitle">Authenticate to write and manage TAE publications</p>
                </div>

                {authError && (
                  <div className="auth-alert error">
                    <AlertCircle size={16} /> <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="login-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <div className="input-with-icon">
                      <Mail size={16} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        placeholder="admin@academyofexcellence.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-with-icon">
                      <Lock size={16} className="input-icon" />
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={authLoading}
                    className="btn btn-accent login-btn"
                  >
                    {authLoading ? (
                      <>
                        <span className="spinner"></span> Authenticating...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            
            /* LOGGED IN STATES */
            <div className="admin-dashboard">
              
              {/* Header with admin controls */}
              <header className="dashboard-header">
                <div>
                  <span className="dashboard-tag">TAE Portal</span>
                  <h1 className="dashboard-title">Blog Dashboard</h1>
                  <p className="dashboard-sub">Logged in as: <strong>{session.user.email}</strong></p>
                </div>
                
                <div className="header-actions">
                  {!isEditing && (
                    <button onClick={startCreate} className="btn btn-accent add-post-btn">
                      <Plus size={16} /> New Post
                    </button>
                  )}
                  <button onClick={handleLogout} className="btn btn-outline signout-btn">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              </header>

              {/* STATE 2: Editor Form Mode */}
              {isEditing ? (
                <div className="post-editor-card reveal active">
                  <div className="editor-top-bar">
                    <button onClick={() => setIsEditing(false)} className="back-btn">
                      <ArrowLeft size={16} /> Back to Dashboard
                    </button>
                    <h3>{currentPost ? 'Edit Article' : 'Create New Article'}</h3>
                  </div>

                  {formError && (
                    <div className="form-alert error">
                      <AlertCircle size={16} /> <span>{formError}</span>
                    </div>
                  )}
                  {formSuccess && (
                    <div className="form-alert success">
                      <CheckCircle size={16} /> <span>{formSuccess}</span>
                    </div>
                  )}

                  <form onSubmit={handleSavePost} className="editor-form">
                    
                    {/* Two-column inputs grid */}
                    <div className="editor-grid">
                      {/* Title */}
                      <div className="form-group form-col-full">
                        <label className="form-label">Post Title *</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="e.g. Navigating Screen Time & Digital Wellness"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          required
                        />
                      </div>

                      {/* Slug */}
                      <div className="form-group">
                        <label className="form-label">URL Slug *</label>
                        <div className="slug-input-wrapper">
                          <input
                            type="text"
                            className="form-input slug-input"
                            placeholder="navigating-screen-time-digital-wellness"
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            disabled={autoSlug}
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setAutoSlug(!autoSlug)}
                            className={`slug-lock-btn ${autoSlug ? 'locked' : 'unlocked'}`}
                          >
                            {autoSlug ? 'Auto-Generate' : 'Manual Edit'}
                          </button>
                        </div>
                      </div>

                      {/* Category */}
                      <div className="form-group">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select"
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                          <option value="General">General</option>
                          <option value="Academics">Academics</option>
                          <option value="STEM">STEM</option>
                          <option value="Parents Guide">Parents Guide</option>
                          <option value="Activities">Activities</option>
                        </select>
                      </div>

                      {/* Author */}
                      <div className="form-group">
                        <label className="form-label">Author Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={formData.author}
                          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        />
                      </div>

                      {/* Read Time */}
                      <div className="form-group">
                        <label className="form-label">Read Time (minutes)</label>
                        <input
                          type="number"
                          className="form-input"
                          min="1"
                          max="60"
                          value={formData.read_time}
                          onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                        />
                      </div>

                      {/* Cover Image URL */}
                      <div className="form-group form-col-full">
                        <label className="form-label">Cover Image URL (from Unsplash or absolute URL)</label>
                        <input
                          type="url"
                          className="form-input"
                          placeholder="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                          value={formData.cover_image}
                          onChange={(e) => setFormData({ ...formData, cover_image: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div className="form-group">
                      <label className="form-label">Short Excerpt (shows on the listing card)</label>
                      <textarea
                        className="form-textarea"
                        rows="2"
                        placeholder="Write a brief 1-2 sentence hook..."
                        value={formData.excerpt}
                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      ></textarea>
                    </div>

                    {/* Content Section (with Write vs Preview tab) */}
                    <div className="editor-content-area">
                      <div className="tab-header">
                        <button
                          type="button"
                          className={`tab-btn ${editorTab === 'write' ? 'active' : ''}`}
                          onClick={() => setEditorTab('write')}
                        >
                          <Edit3 size={15} /> Write (Markdown)
                        </button>
                        <button
                          type="button"
                          className={`tab-btn ${editorTab === 'preview' ? 'active' : ''}`}
                          onClick={() => setEditorTab('preview')}
                        >
                          <Eye size={15} /> Live Preview Layout
                        </button>
                        <span className="editor-tip">
                          <Sparkles size={12} /> Supports standard markdown formatting: # H1, ## H2, &gt; Quote, * List
                        </span>
                      </div>

                      {editorTab === 'write' ? (
                        <div className="tab-content write-tab">
                          <textarea
                            className="form-textarea content-editor-textarea"
                            rows="15"
                            placeholder="Write your article in markdown format...&#10;&#10;# Main Heading&#10;Paragraph text goes here. Use **bold** or *italics*.&#10;&#10;## Subheading&#10;* List item 1&#10;* List item 2"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            required
                          ></textarea>
                        </div>
                      ) : (
                        <div className="tab-content preview-tab markdown-body">
                          {renderMarkdown(formData.content)}
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="editor-action-buttons">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="btn btn-outline"
                        disabled={saving}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-accent"
                        disabled={saving}
                      >
                        {saving ? (
                          <>
                            <span className="spinner"></span> Saving Article...
                          </>
                        ) : (
                          'Save Article'
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              ) : (
                
                /* STATE 3: Dashboard List Mode */
                <div className="dashboard-list-card reveal active">
                  {dbError && (
                    <div className="form-alert error">
                      <AlertCircle size={16} /> <span>{dbError}</span>
                    </div>
                  )}

                  {postsLoading ? (
                    <div className="dashboard-loading">
                      <span className="spinner"></span>
                      <p>Loading your articles...</p>
                    </div>
                  ) : posts.length > 0 ? (
                    <div className="table-responsive">
                      <table className="posts-table">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Published Date</th>
                            <th>Read Time</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((post) => (
                            <tr key={post.id}>
                              <td className="post-td-title">
                                <Link to={`/blog/${post.slug}`} target="_blank" className="post-preview-link">
                                  {post.title} <ExternalLinkIcon size={12} />
                                </Link>
                              </td>
                              <td><span className="table-badge">{post.category}</span></td>
                              <td className="text-muted">{post.author}</td>
                              <td className="text-muted">{formatDate(post.published_at)}</td>
                              <td className="text-muted">{post.read_time} min</td>
                              <td className="text-right actions-td">
                                <button 
                                  onClick={() => startEdit(post)} 
                                  className="action-btn edit"
                                  title="Edit Post"
                                >
                                  <Edit2 size={15} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(post.id)} 
                                  className="action-btn delete"
                                  title="Delete Post"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="empty-dashboard">
                      <FileText size={48} className="empty-icon" />
                      <h4>No Articles Found</h4>
                      <p>You haven't posted any blogs yet. Click 'New Post' to write your first article!</p>
                      <button onClick={startCreate} className="btn btn-accent">
                        <Plus size={16} /> Create First Post
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      <style>{`
        .admin-loading-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: var(--text-muted);
          gap: 16px;
        }

        .admin-config-error {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 24px;
          background-color: var(--bg-secondary);
        }
        .error-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 40px;
          max-width: 550px;
          text-align: center;
          box-shadow: var(--shadow-premium);
        }
        .error-icon {
          color: #ef4444;
          margin-bottom: 20px;
        }
        .error-card h2 {
          color: var(--primary);
          font-family: var(--font-sans);
          margin-bottom: 12px;
        }
        .error-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .env-guide {
          background-color: #0f172a;
          color: #38bdf8;
          padding: 16px;
          border-radius: 8px;
          font-family: monospace;
          text-align: left;
          font-size: 0.82rem;
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .admin-container {
          background-color: var(--bg-secondary);
          min-height: calc(100vh - var(--header-height));
          padding: 60px 24px 100px;
          transition: background-color 0.5s ease;
        }

        .admin-container.login-view {
          background-color: #030712;
          background-image: radial-gradient(circle at 50% 30%, #0b1528 0%, #020617 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 24px;
        }

        .admin-wrapper {
          max-width: var(--container-max-width);
          margin: 0 auto;
        }

        /* login Styles */
        .login-card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 0;
          position: relative;
          z-index: 10;
        }

        /* Ambient Background Blobs for Login Screen */
        .ambient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .blob-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
          top: -50px;
          left: -50px;
          animation: floatBlob1 20s infinite alternate ease-in-out;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
          bottom: -100px;
          right: -50px;
          animation: floatBlob2 25s infinite alternate ease-in-out;
        }
        .blob-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: floatBlob3 15s infinite alternate ease-in-out;
        }

        @keyframes floatBlob1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(60px, 40px) scale(1.1); }
        }
        @keyframes floatBlob2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-80px, -60px) scale(0.9); }
        }
        @keyframes floatBlob3 {
          0% { transform: translate(-50%, -50%) translate(0, 0); }
          100% { transform: translate(-50%, -50%) translate(-30px, 50px); }
        }

        .login-card {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          max-width: 460px;
          width: 100%;
          padding: 48px 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 5;
          overflow: hidden;
        }

        .login-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(212,175,55,0.3) 50%, rgba(255,255,255,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .login-header {
          text-align: center;
          margin-bottom: 36px;
        }
        .lock-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%);
          border: 1.5px solid rgba(212, 175, 55, 0.3);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
          transition: all 0.3s ease;
        }
        .login-card:hover .lock-icon-box {
          transform: scale(1.05) rotate(5deg);
          border-color: var(--accent);
          box-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
          animation: pulseLock 2s infinite;
        }

        @keyframes pulseLock {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }

        .login-title {
          font-family: 'Outfit', var(--font-sans);
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: #ffffff;
        }
        .login-subtitle {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .login-form .form-group {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .login-form .form-label {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #d4af37;
          margin-bottom: 8px;
        }

        .login-form .form-input {
          width: 100%;
          padding: 14px 16px 14px 48px;
          border-radius: 10px;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(15, 23, 42, 0.4);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: #f8fafc;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .login-form .form-input::placeholder {
          color: #475569;
        }

        .login-form .form-input:focus {
          outline: none;
          border-color: var(--accent);
          background-color: rgba(15, 23, 42, 0.7);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15), 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .input-with-icon {
          position: relative;
          width: 100%;
        }
        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
          transition: color 0.3s ease;
        }
        .input-with-icon .form-input {
          padding-left: 48px;
        }
        .input-with-icon:focus-within .input-icon {
          color: var(--accent);
        }

        .login-btn {
          width: 100%;
          padding: 14px;
          margin-top: 10px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
        }

        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(212, 175, 55, 0.35);
          background: linear-gradient(135deg, var(--accent-hover) 0%, #a28022 100%);
        }

        .login-btn:active:not(:disabled) {
          transform: translateY(0);
          box-shadow: 0 4px 10px rgba(212, 175, 55, 0.2);
        }

        .login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .auth-alert, .form-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 24px;
          font-family: var(--font-sans);
        }

        .auth-alert {
          border-radius: 10px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .auth-alert.error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
        }

        .form-alert.error {
          background: rgba(239, 68, 68, 0.06);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }

        .form-alert.success {
          background: rgba(13, 148, 136, 0.06);
          border: 1px solid rgba(13, 148, 136, 0.2);
          color: var(--secondary);
        }

        /* Generic Dashboard & Editor Form Styling */
        .admin-dashboard .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          margin-bottom: 20px;
        }

        .admin-dashboard .form-label {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .admin-dashboard .form-input,
        .admin-dashboard .form-select,
        .admin-dashboard .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1.5px solid var(--neutral-300);
          background-color: var(--bg-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .admin-dashboard .form-input:focus,
        .admin-dashboard .form-select:focus,
        .admin-dashboard .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background-color: var(--bg-primary);
          box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.12);
        }

        /* Dashboard Styles */
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          gap: 24px;
          flex-wrap: wrap;
        }
        .dashboard-tag {
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent);
          display: block;
          margin-bottom: 4px;
        }
        .dashboard-title {
          font-family: 'Outfit', var(--font-sans);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .dashboard-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
        }
        .header-actions {
          display: flex;
          gap: 12px;
        }
        .signout-btn {
          padding: 10px 18px;
          font-size: 0.85rem;
          border-color: var(--border-color);
          color: var(--text-secondary);
        }
        .signout-btn:hover {
          background-color: var(--primary);
          border-color: var(--primary);
          color: #fff;
        }
        .add-post-btn {
          padding: 10px 20px;
          font-size: 0.85rem;
        }

        /* Dashboard Listing Table */
        .dashboard-list-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          padding: 24px;
          overflow: hidden;
        }
        .table-responsive {
          overflow-x: auto;
        }
        .posts-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .posts-table th {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 16px 20px;
          border-bottom: 1.5px solid var(--border-color);
          letter-spacing: 0.05em;
        }
        .posts-table td {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--text-primary);
        }
        .posts-table tr:last-child td {
          border-bottom: none;
        }
        .post-td-title {
          font-weight: 700;
          max-width: 300px;
        }
        .post-preview-link {
          color: var(--primary);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .post-preview-link:hover {
          color: var(--accent);
        }
        .table-badge {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .actions-td {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        .action-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          background: var(--bg-primary);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .action-btn.edit {
          color: var(--primary);
        }
        .action-btn.edit:hover {
          background: rgba(10, 25, 47, 0.05);
          border-color: var(--primary);
        }
        .action-btn.delete {
          color: #ef4444;
        }
        .action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.05);
          border-color: #ef4444;
        }

        .empty-dashboard {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-muted);
        }
        .empty-icon {
          color: var(--neutral-300);
          margin-bottom: 16px;
        }
        .empty-dashboard h4 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: var(--primary);
          margin-bottom: 8px;
        }
        .empty-dashboard p {
          font-size: 0.9rem;
          margin-bottom: 24px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Editor Styles */
        .post-editor-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          padding: 40px;
        }
        .editor-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .editor-top-bar h3 {
          font-family: var(--font-sans);
          color: var(--primary);
          font-size: 1.25rem;
        }
        .back-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: color 0.2s;
        }
        .back-btn:hover {
          color: var(--primary);
        }

        .editor-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 24px;
        }
        .slug-input-wrapper {
          display: flex;
          width: 100%;
          gap: 10px;
        }
        .slug-input {
          flex: 1;
        }
        .slug-lock-btn {
          border: 1.5px solid var(--neutral-200);
          border-radius: 6px;
          background: var(--bg-secondary);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0 12px;
          transition: all 0.2s;
        }
        .slug-lock-btn.locked {
          background: rgba(13, 148, 136, 0.05);
          color: var(--secondary);
          border-color: rgba(13, 148, 136, 0.15);
        }

        /* Editor Content area with tabs */
        .editor-content-area {
          border: 1.5px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 30px;
        }
        .tab-header {
          background-color: var(--bg-secondary);
          border-bottom: 1.5px solid var(--border-color);
          display: flex;
          padding: 0 12px;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background: none;
          border: none;
          border-bottom: 2.5px solid transparent;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          padding: 14px 18px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .tab-btn:hover {
          color: var(--primary);
        }
        .tab-btn.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
        .editor-tip {
          margin-left: auto;
          font-size: 0.72rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          padding: 10px 18px;
        }

        .tab-content {
          padding: 0;
        }
        .content-editor-textarea {
          width: 100%;
          border: none;
          border-radius: 0;
          background: #fff;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.95rem;
          padding: 24px;
          line-height: 1.6;
        }
        .content-editor-textarea:focus {
          border: none;
          box-shadow: none;
          background: #fff;
        }

        /* Preview container styling */
        .preview-tab {
          padding: 30px 40px;
          background-color: #fff;
          min-height: 382px;
          max-height: 600px;
          overflow-y: auto;
          font-family: var(--font-sans);
          font-size: 1.05rem;
          line-height: 1.8;
          color: #334155;
        }
        .preview-empty {
          color: var(--text-muted);
          font-style: italic;
          text-align: center;
          margin-top: 80px;
        }
        .preview-h1 {
          font-family: 'Outfit', var(--font-sans);
          font-size: 2.2rem;
          color: var(--primary);
          margin-bottom: 24px;
        }
        .preview-h2 {
          font-family: 'Outfit', var(--font-sans);
          font-size: 1.5rem;
          color: var(--primary);
          margin: 32px 0 16px;
        }
        .preview-h3 {
          font-family: 'Outfit', var(--font-sans);
          font-size: 1.2rem;
          color: var(--primary);
          margin: 24px 0 12px;
        }
        .preview-p {
          margin-bottom: 20px;
        }
        .preview-quote {
          background-color: var(--bg-secondary);
          border-left: 4px solid var(--accent);
          padding: 16px 24px;
          margin: 24px 0;
        }
        .preview-quote p {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--primary);
          margin: 0;
        }
        .preview-code {
          background-color: #0f172a;
          color: #e2e8f0;
          padding: 16px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          margin: 20px 0;
        }
        .preview-ul, .preview-ol {
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .preview-ul li, .preview-ol li {
          margin-bottom: 6px;
        }
        .preview-hr {
          border: none;
          height: 1px;
          background: var(--border-color);
          margin: 30px 0;
        }

        .editor-action-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          border-top: 1px solid var(--border-color);
          padding-top: 30px;
        }

        .dashboard-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          color: var(--text-muted);
          gap: 16px;
        }

        @media (max-width: 992px) {
          .editor-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        @media (max-width: 768px) {
          .admin-container {
            padding: 30px 16px 60px;
          }
          .post-editor-card {
            padding: 24px 16px;
          }
          .preview-tab {
            padding: 20px;
          }
          .dashboard-header {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </>
  );
};

// Simple inline helper SVG icon for external link
const ExternalLinkIcon = ({ size = 14 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ display: 'inline', verticalAlign: 'middle' }}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default AdminPage;
