'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import './ContactForm.css';

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
    // Map hyphenated IDs or names to camelCase state properties
    const stateKey = id === 'first-name' || id === 'firstName' ? 'firstName' 
                   : id === 'last-name' || id === 'lastName' || id === 'company' ? 'lastName'
                   : id === 'contact-email' || id === 'email' ? 'email' 
                   : id === 'contact-subject' || id === 'subject' ? 'subject' 
                   : id === 'contact-message' || id === 'message' ? 'message' 
                   : id;
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

  if (preview) {
    return (
      <section className="contact-section" id="contact">
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
      </section>
    );
  }

  return (
    <div className="contact-page-wrapper">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-content">
          <h1>Contact us</h1>
          <p>PKSS is ready to provide the right technology solution according to your business needs</p>
        </div>
      </section>

      {/* OVERLAPPING MAIN CONTAINER */}
      <div className="contact-main-container">
        
        {/* LEFT COLUMN: INFO */}
        <div className="contact-info-col">
          <h2>Get in touch</h2>
          <p className="contact-info-desc">
            Partner with our integration architects to modernize your IT operations, orchestrate CRM migrations, and engineer resilient custom applications.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="contact-icon-circle">
                <MapPin size={20} strokeWidth={2.5} />
              </div>
              <div className="contact-detail-text">
                <h4>Head Office</h4>
                <p>Plot No.4, Karumbalai, Karuppur Main road<br />Salem - 636012, Tamilnadu, India</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-circle">
                <Mail size={20} strokeWidth={2.5} />
              </div>
              <div className="contact-detail-text">
                <h4>Email Us</h4>
                <p>contact@pksoftwaresolutions.com<br />hr@pksoftwaresolutions.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon-circle">
                <Phone size={20} strokeWidth={2.5} />
              </div>
              <div className="contact-detail-text">
                <h4>Call Us</h4>
                <p>+91 97918 40836<br />0427-2919022</p>
              </div>
            </div>
          </div>

          <div className="social-media-block">
            <h4>Follow our social media</h4>
            <div className="social-icons-row">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM */}
        <div className="contact-form-col">
          <h2>Send us a message</h2>
          
          {submitted ? (
            <div className="premium-success-state">
              <CheckCircle size={56} color="#10b981" />
              <h3>Request Received</h3>
              <p>
                A certified technology consultant will analyze your details and contact you within 24 hours.
              </p>
              <button className="btn-reset" onClick={() => { 
                setSubmitted(false); 
                setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' }); 
              }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="premium-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Name" 
                    required 
                    value={form.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company" 
                    value={form.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Phone" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    required 
                    value={form.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group-full">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  required 
                  value={form.subject}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group-full">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Message" 
                  required 
                  value={form.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-premium-send" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          )}
          <div className="contact-form-bottom-rocket-wrapper">
            <img 
              src="/images/contact/rocket_img.png" 
              alt="Rocket Launch" 
              className="contact-form-bottom-rocket" 
            />
          </div>
        </div>

      </div>

      {/* FULL WIDTH MAP SECTION */}
      <div className="contact-map-section">
        <iframe 
          src="https://maps.google.com/maps?q=PK+Software+Solutions,+Karumbalai,+Karuppur+Main+road,+Salem&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
