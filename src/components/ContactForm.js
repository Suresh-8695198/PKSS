'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactForm({ preview = false }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Map hyphenated IDs to camelCase state properties
    const stateKey = id === 'first-name' ? 'firstName' : id === 'last-name' ? 'lastName' : id === 'contact-email' ? 'email' : id === 'contact-subject' ? 'subject' : id === 'contact-message' ? 'message' : id;
    setForm((prev) => ({ ...prev, [stateKey]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Consultation query logged:', form);
    }, 1200);
  };

  return (
    <section className="contact-section" id="contact">
      {preview ? (
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Schedule A Technology Strategy Session</h2>
            <p className="section-subtitle">
              Connect directly with our senior integration architects to scope your CRM migrations, server nodes, or custom codebases.
            </p>
          </div>

          <div className="brand-values-grid" style={{ marginTop: '2.5rem' }}>
            <div className="glass-card value-card">
              <div className="value-header">
                <div className="value-icon-wrapper" style={{ color: 'var(--color-primary, #00B8FF)' }}>
                  <Phone size={24} />
                </div>
                <h3>Hotline & Direct Support</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto', color: 'var(--text-muted)' }}>
                +91 97918 40836<br />0427-2919022
              </p>
            </div>
            <div className="glass-card value-card">
              <div className="value-header">
                <div className="value-icon-wrapper" style={{ color: 'var(--color-primary, #00B8FF)' }}>
                  <Mail size={24} />
                </div>
                <h3>Email Inquiries</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto', color: 'var(--text-muted)' }}>
                contact@pksoftwaresolutions.com<br />hr@pksoftwaresolutions.com
              </p>
            </div>
            <div className="glass-card value-card">
              <div className="value-header">
                <div className="value-icon-wrapper" style={{ color: 'var(--color-primary, #00B8FF)' }}>
                  <MapPin size={24} />
                </div>
                <h3>Salem Headquarters</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto', color: 'var(--text-muted)' }}>
                Plot No.4, Karumbalai, Karuppur Main road, Salem - 636012
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/contact" className="active-nav-btn" style={{ textDecoration: 'none' }}>
              <span>Request a Custom Consultation</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container contact-grid">
        {/* Info & Map Column */}
        <div className="contact-info-panel">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Schedule A Technology Strategy Session</h2>
          <p className="section-subtitle">
            Connect directly with our senior integration architects to scope your CRM migrations, server nodes, or custom codebases.
          </p>

          <div className="contact-links-list">
            <div className="contact-card-unit">
              <MapPin className="contact-icon cyan" />
              <div>
                <h4>PKSS Salem Headquarters</h4>
                <p>Plot No.4, Karumbalai, Karuppur Main road, Karuppur, Salem - 636012, Tamilnadu, India.</p>
              </div>
            </div>

            <div className="contact-card-unit">
              <Phone className="contact-icon blue" />
              <div>
                <h4>Hotline & Direct Support</h4>
                <p>+91 97918 40836, 0427-2919022</p>
              </div>
            </div>

            <div className="contact-card-unit">
              <Mail className="contact-icon orange" />
              <div>
                <h4>Email Inquiries</h4>
                <p>contact@pksoftwaresolutions.com<br />hr@pksoftwaresolutions.com</p>
              </div>
            </div>
          </div>

          {/* Interactive World Map Node */}
          <div className="visual-map-container glass-card">
            <div className="map-glow-underlay"></div>
            <svg className="world-map-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00B8FF" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#00B8FF" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <path d="M 30 50 Q 80 40 120 70 T 200 60 T 300 90 T 380 50" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
              <path d="M 50 120 Q 110 110 160 140 T 260 110 T 350 150" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2"/>
              
              <circle cx="100" cy="70" r="12" fill="url(#glow)" className="ping-wave"/>
              <circle cx="100" cy="70" r="3" fill="#00B8FF"/>
              <text x="100" y="55" fontSize="8" fill="var(--text-muted)" textAnchor="middle">US Client Node</text>

              <circle cx="280" cy="110" r="18" fill="url(#glow)" className="ping-wave"/>
              <circle cx="280" cy="110" r="4.5" fill="#FF7A00"/>
              <text x="280" y="95" fontSize="9" fill="#FF7A00" textAnchor="middle" fontWeight="600">HQ (Salem, IN)</text>
            </svg>
          </div>
        </div>

        {/* Contact Form Container */}
        <div className="contact-form-container glass-card">
          <h3>Consultation Request</h3>
          {submitted ? (
            <div className="success-state-box text-center">
              <CheckCircle className="success-icon-big green" size={48} />
              <h3>Request Received</h3>
              <p>
                A certified technology consultant will analyze your details and contact you within 24 hours.
              </p>
              <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({
                firstName: '', lastName: '', email: '', subject: '', message: ''
              }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="first-name">First Name *</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    required 
                    placeholder="Suresh"
                    value={form.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name *</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    required 
                    placeholder="Kumar"
                    value={form.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  required 
                  placeholder="suresh@email.com"
                  value={form.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  required 
                  placeholder="Web Development / Salesforce Project"
                  value={form.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea 
                  id="contact-message" 
                  rows="5" 
                  required 
                  placeholder="Describe your current system context, goals, and metrics..."
                  value={form.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                <span>{loading ? 'Transmitting details...' : 'Schedule Call'}</span>
              </button>
            </form>
          )}
        </div>
        </div>
      )}
    </section>
  );
}
