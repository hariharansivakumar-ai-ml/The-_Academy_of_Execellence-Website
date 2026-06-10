import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import SplitTitle from './SplitTitle';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const grades = [
    'Kindergarten (LKG/UKG)',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
    'Grade 11 (Science)', 'Grade 11 (Commerce)', 'Grade 11 (Humanities)',
    'Grade 12 (Science)', 'Grade 12 (Commerce)', 'Grade 12 (Humanities)'
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.studentName.trim()) {
      tempErrors.studentName = "Student name is required";
    } else if (formData.studentName.trim().length < 2) {
      tempErrors.studentName = "Name must be at least 2 characters";
    }

    if (!formData.parentName.trim()) {
      tempErrors.parentName = "Parent name is required";
    } else if (formData.parentName.trim().length < 2) {
      tempErrors.parentName = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = "Please enter a valid phone number (8-15 digits)";
    }

    if (!formData.grade) {
      tempErrors.grade = "Please select a grade";
    }

    if (!formData.address.trim()) {
      tempErrors.address = "Address is required";
    } else if (formData.address.trim().length < 10) {
      tempErrors.address = "Please enter complete address details";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Realtime error clearing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend communication delay
    setTimeout(() => {
      // Fetch existing submissions
      const existingSubmissions = JSON.parse(localStorage.getItem('tae_enquiry_submissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      };
      
      existingSubmissions.push(newSubmission);
      localStorage.setItem('tae_enquiry_submissions', JSON.stringify(existingSubmissions));

      setSubmittedData(newSubmission);
      setIsSubmitting(false);
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        address: ''
      });
    }, 1200);
  };

  return (
    <section id="admissions" className="enquiry-section">
      <div className="container">
        <div className="section-title-wrapper reveal">
          <span className="section-tag admission-tag">Admission Enquiry</span>
          <h2 className="section-title text-white"><SplitTitle text="Begin Your Child's Journey" /></h2>
          <p className="section-desc text-white-muted">
            We welcome families who share our commitment to quality education and holistic development. Submit an enquiry to start the process.
          </p>
        </div>

        <div className="form-container-box reveal reveal-delay-2">
          <form onSubmit={handleSubmit} className="admission-form" noValidate>
            <div className="form-grid">
              {/* Student Name */}
              <div className="form-group">
                <label htmlFor="studentName" className="form-label">Student Name *</label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter full name of the student"
                  className={`form-input ${errors.studentName ? 'has-error' : ''}`}
                />
                {errors.studentName && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.studentName}
                  </span>
                )}
              </div>

              {/* Parent Name */}
              <div className="form-group">
                <label htmlFor="parentName" className="form-label">Parent Name *</label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent or guardian name"
                  className={`form-input ${errors.parentName ? 'has-error' : ''}`}
                />
                {errors.parentName && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.parentName}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                />
                {errors.email && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`form-input ${errors.phone ? 'has-error' : ''}`}
                />
                {errors.phone && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Grade */}
              <div className="form-group form-col-full">
                <label htmlFor="grade" className="form-label">Grade / Class *</label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={`form-select ${errors.grade ? 'has-error' : ''}`}
                >
                  <option value="">-- Choose a Grade / Standard --</option>
                  {grades.map((grade, idx) => (
                    <option key={idx} value={grade}>{grade}</option>
                  ))}
                </select>
                {errors.grade && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.grade}
                  </span>
                )}
              </div>

              {/* Address */}
              <div className="form-group form-col-full">
                <label htmlFor="address" className="form-label">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter complete residential address details"
                  className={`form-textarea ${errors.address ? 'has-error' : ''}`}
                ></textarea>
                {errors.address && (
                  <span className="error-message">
                    <AlertCircle size={14} /> {errors.address}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-accent form-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Processing Enquiry...
                </>
              ) : (
                <>
                  Submit Enquiry <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal Overlay */}
      {showSuccessModal && submittedData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="modal-close" 
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="modal-body-content">
              <div className="success-icon-box">
                <CheckCircle size={48} />
              </div>
              <h3 className="modal-title">Enquiry Submitted Successfully!</h3>
              <p className="modal-msg">
                Thank you, <strong>{submittedData.parentName}</strong>, for reaching out to us. We have successfully received your admission enquiry.
              </p>
              
              <div className="modal-details-card">
                <div className="detail-row">
                  <span className="detail-label">Student Name:</span>
                  <span className="detail-value">{submittedData.studentName}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Grade Requested:</span>
                  <span className="detail-value">{submittedData.grade}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Reference ID:</span>
                  <span className="detail-value">#{submittedData.id.toString().slice(-6)}</span>
                </div>
              </div>

              <p className="modal-next-steps">
                An admissions representative will contact you shortly at <strong>{submittedData.email}</strong> or <strong>{submittedData.phone}</strong> to schedule a campus tour and cognitive evaluation.
              </p>

              <button 
                onClick={() => setShowSuccessModal(false)} 
                className="btn btn-primary modal-btn"
              >
                Okay, Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .enquiry-section {
          background-color: var(--primary);
          background-image: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          position: relative;
        }

        .admission-tag::after {
          background-color: var(--accent);
        }

        .form-container-box {
          max-width: 800px;
          margin: 40px auto 0;
          background: var(--bg-primary);
          border-radius: 12px;
          padding: 50px 40px;
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--border-color);
        }

        .admission-form {
          width: 100%;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .form-col-full {
          grid-column: span 2;
        }

        .form-label {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 6px;
          border: 1.5px solid var(--neutral-300);
          background-color: var(--bg-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background-color: var(--bg-primary);
          box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.1);
        }

        .form-input.has-error, .form-select.has-error, .form-textarea.has-error {
          border-color: #ef4444;
          background-color: rgba(239, 68, 68, 0.02);
        }

        .error-message {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #ef4444;
          font-size: 0.8rem;
          font-weight: 600;
          margin-top: 6px;
        }

        .form-submit-btn {
          width: 100%;
          padding: 16px;
          font-size: 1.05rem;
        }

        .spinner {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #ffffff;
          animation: spin 0.8s infinite linear;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(10, 25, 47, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          background-color: var(--bg-primary);
          border-radius: 12px;
          max-width: 550px;
          width: 100%;
          position: relative;
          padding: 40px;
          box-shadow: var(--shadow-premium);
          border: 1px solid var(--border-color);
          animation: modalScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
          transition: color 0.2s ease;
        }

        .modal-close:hover {
          color: var(--primary);
        }

        .modal-body-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .success-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background-color: rgba(13, 148, 136, 0.1);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .modal-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .modal-msg {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .modal-details-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          width: 100%;
          padding: 16px;
          margin-bottom: 20px;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 0.9rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .detail-row:last-child {
          border-bottom: none;
        }

        .detail-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .detail-value {
          color: var(--primary);
          font-weight: 700;
        }

        .modal-next-steps {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 28px;
        }

        .modal-btn {
          width: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalScale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .form-container-box {
            padding: 30px 20px;
          }
          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .form-col-full {
            grid-column: span 1;
          }
          .modal-content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default EnquiryForm;
