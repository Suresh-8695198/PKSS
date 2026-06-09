'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle } from 'lucide-react';

export default function CareersForm() {
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
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock network transmission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Recruitment application compiled:', formData);
    }, 1500);
  };

  return (
    <section className="careers-section" id="careers">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Careers Portal</span>
          <h2 className="section-title">Join PK Software Solutions</h2>
          <p className="section-subtitle">
            Apply for immediate positions or register for our placement-backed corporate training academy.
          </p>
        </div>

        <div className="career-form-container glass-card">
          {submitted ? (
            <div className="success-state-box text-center">
              <CheckCircle className="success-icon-big green" size={48} />
              <h3>Application Submitted!</h3>
              <p>
                Our HR department has logged your application. We will audit your profile credentials and reach out to your contact channels shortly.
              </p>
              <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setFormData({
                name: '', dob: '', gender: '', degree: '', specialization: '', passingYear: '', phone: '', email: '', address: '', city: '', zip: '', cv: null
              }); }}>
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="Suresh Kumar"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth *</label>
                  <input 
                    type="date" 
                    id="dob" 
                    required 
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select 
                    id="gender" 
                    required 
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Highest Degree *</label>
                  <input 
                    type="text" 
                    id="degree" 
                    required 
                    placeholder="B.E. Computer Science"
                    value={formData.degree}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="specialization">Specialization *</label>
                  <input 
                    type="text" 
                    id="specialization" 
                    required 
                    placeholder="Software Engineering / Web Design"
                    value={formData.specialization}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passingYear">Year of Passing *</label>
                  <input 
                    type="number" 
                    id="passingYear" 
                    required 
                    placeholder="2025"
                    min="2000"
                    max="2035"
                    value={formData.passingYear}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    placeholder="+91 97918 40836"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="candidate@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Resident Address *</label>
                <input 
                  type="text" 
                  id="address" 
                  required 
                  placeholder="Street Name, House No."
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input 
                    type="text" 
                    id="city" 
                    required 
                    placeholder="Salem"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP Code *</label>
                  <input 
                    type="text" 
                    id="zip" 
                    required 
                    placeholder="636012"
                    value={formData.zip}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Upload CV / Resume * (PDF/DOCX)</label>
                <div className="drag-upload-container">
                  <input 
                    type="file" 
                    id="cv-file" 
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="cv-file" className="drag-label">
                    <UploadCloud className="upload-icon cyan" size={28} />
                    <span>{formData.cv ? `Attached: ${formData.cv.name}` : 'Click to Upload CV / Resume'}</span>
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                <span>{loading ? 'Processing Upload...' : 'Submit Application'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
