'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { UploadCloud, CheckCircle, Briefcase, MapPin, Clock, ArrowRight, ChevronLeft } from 'lucide-react';
import './CareersForm.css';

const JOBS = [
  { 
    id: 1, 
    title: 'Senior Frontend Developer', 
    type: 'Full-time', 
    location: 'Salem, IN / Remote', 
    exp: '3-5 Years', 
    desc: 'Join our core engineering team to build premium, high-performance web applications using React, Next.js, and modern CSS architecture. You will be responsible for translating UI/UX designs into pixel-perfect code.' 
  },
  { 
    id: 2, 
    title: 'Integration Architect', 
    type: 'Full-time', 
    location: 'Salem, IN', 
    exp: '5+ Years', 
    desc: 'Design and deploy scalable cloud infrastructure and complex CRM integration solutions for enterprise clients. Strong knowledge of Node.js, AWS, and API orchestration is required.' 
  },
  { 
    id: 3, 
    title: 'UI/UX Designer', 
    type: 'Full-time', 
    location: 'Remote', 
    exp: '2-4 Years', 
    desc: 'Craft beautiful, intuitive digital experiences with a strong focus on modern glassmorphism, corporate aesthetics, and responsive web design. Figma expertise is essential.' 
  },
  { 
    id: 4, 
    title: 'Business Development Manager', 
    type: 'Full-time', 
    location: 'Salem, IN', 
    exp: '4+ Years', 
    desc: 'Drive business growth by identifying new enterprise opportunities, managing client relationships, and presenting technical solutions to C-level executives.' 
  }
];

export default function CareersForm({ preview = false }) {
  const [selectedJob, setSelectedJob] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    degree: '',
    specialization: '',
    passingYear: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cv: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock network transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Recruitment application compiled:', formData, 'For Job:', selectedJob?.title);
    }, 1500);
  };
  
  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '', dob: '', gender: '', degree: '', specialization: '', 
      passingYear: '', phone: '', email: '', address: '', city: '', zip: '', cv: null
    });
  };

  // Preview Mode for Homepage/Other sections
  if (preview) {
    return (
      <section className="careers-preview-section">
        <div className="container text-center">
          <h2>Join PK Software Solutions</h2>
          <p>Discover opportunities to grow and innovate with us.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/careers" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="careers-page-wrapper">
      {/* HERO SECTION */}
      <section className="careers-hero">
        <div className="careers-hero-bg"></div>
        <div className="careers-hero-content">
          <h1>Join Our Team</h1>
          <p>
            Build your career at PK Software Solutions. We are always looking for passionate, 
            driven individuals to help us engineer the future of digital enterprise software.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="careers-main-container container">
        
        {/* VIEW 1: JOBS LIST */}
        {!selectedJob && (
          <div className="jobs-list-view">
            <div className="jobs-grid">
              {JOBS.map(job => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <div className="job-icon-box">
                      <Briefcase size={24} />
                    </div>
                    <span className="job-type-badge">{job.type}</span>
                  </div>
                  
                  <h3>{job.title}</h3>
                  
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-meta-item">
                      <Clock size={16} />
                      <span>{job.exp}</span>
                    </div>
                  </div>
                  
                  <p>{job.desc}</p>
                  
                  <button 
                    className="btn-apply-trigger"
                    onClick={() => {
                      setSelectedJob(job);
                      // Scroll to top of container smoothly
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                  >
                    Apply for this position <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: APPLICATION FORM */}
        {selectedJob && (
          <div className="application-view">
            <button 
              className="back-btn"
              onClick={() => {
                setSelectedJob(null);
                resetForm();
              }}
            >
              <ChevronLeft size={20} /> Back to Open Positions
            </button>
            
            <div className="application-header">
              <h2>Applying for: {selectedJob.title}</h2>
              <p>{selectedJob.location} • {selectedJob.type} • {selectedJob.exp}</p>
            </div>

            {submitted ? (
              <div className="career-success-state">
                <CheckCircle className="success-icon" size={64} />
                <h3>Application Submitted Successfully!</h3>
                <p>
                  Thank you for your interest in joining PK Software Solutions. Our HR team has received your application for the <strong>{selectedJob.title}</strong> position and will be in touch shortly.
                </p>
                <button className="btn-secondary" onClick={resetForm}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form className="career-form" onSubmit={handleSubmit}>
                
                {/* SECTION: PERSONAL DETAILS */}
                <div className="form-section">
                  <h3 className="form-section-title">Personal Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" required placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth *</label>
                      <input type="date" id="dob" required value={formData.dob} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Gender *</label>
                      <select id="gender" required value={formData.gender} onChange={handleInputChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION: CONTACT DETAILS */}
                <div className="form-section">
                  <h3 className="form-section-title">Contact Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" required placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group" style={{ flex: 2 }}>
                      <label htmlFor="address">Residential Address *</label>
                      <input type="text" id="address" required placeholder="Street Name, House No." value={formData.address} onChange={handleInputChange} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label htmlFor="city">City *</label>
                      <input type="text" id="city" required placeholder="City" value={formData.city} onChange={handleInputChange} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label htmlFor="zip">ZIP Code *</label>
                      <input type="text" id="zip" required placeholder="Postal Code" value={formData.zip} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                {/* SECTION: EDUCATION */}
                <div className="form-section">
                  <h3 className="form-section-title">Educational Background</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="degree">Highest Degree *</label>
                      <input type="text" id="degree" required placeholder="e.g. B.E. Computer Science" value={formData.degree} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="specialization">Specialization *</label>
                      <input type="text" id="specialization" required placeholder="e.g. Software Engineering" value={formData.specialization} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passingYear">Year of Passing *</label>
                      <input type="number" id="passingYear" required placeholder="YYYY" min="2000" max="2035" value={formData.passingYear} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>

                {/* SECTION: UPLOAD RESUME */}
                <div className="form-section">
                  <h3 className="form-section-title">Resume / CV</h3>
                  <div className="form-group">
                    <label>Upload your Resume (PDF, DOC, DOCX) *</label>
                    <div className="drag-upload-box">
                      <input 
                        type="file" 
                        id="cv-file" 
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                      />
                      <div className="drag-upload-content">
                        <div className="upload-icon-wrapper">
                          <UploadCloud size={32} />
                        </div>
                        <h4>{formData.cv ? 'File Selected' : 'Click or Drag to Upload'}</h4>
                        <p>{formData.cv ? formData.cv.name : 'Maximum file size 5MB'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-submit-app" disabled={loading}>
                  {loading ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        )}
        
      </div>
    </div>
  );
}
