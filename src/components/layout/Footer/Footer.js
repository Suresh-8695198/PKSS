'use client';

import React from 'react';
import './Footer.css';

export default function Footer() {
  const partnerLogos = [
    {
      name: 'TAWNY Technologies',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <rect x="5" y="10" width="8" height="20" rx="1" fill="#59a700" />
          <rect x="18" y="5" width="8" height="30" rx="1" fill="#002ea6" />
          <rect x="31" y="15" width="8" height="15" rx="1" fill="#e28743" />
          <text x="48" y="26" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.05em">TAWNY</text>
          <text x="48" y="34" fontFamily="var(--font-body)" fontWeight="500" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.2em">TECHNOLOGIES</text>
        </svg>
      )
    },
    {
      name: 'KONSULT',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M10 5 L10 35 M10 20 L25 5 M10 20 L25 35 M22 13 L32 5 M22 27 L32 35" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="10" cy="5" r="3" fill="#002ea6" />
          <circle cx="25" cy="5" r="3" fill="#59a700" />
          <circle cx="32" cy="5" r="3" fill="#e28743" />
          <text x="45" y="27" fontFamily="var(--font-heading)" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="0.08em">KONSULT</text>
        </svg>
      )
    },
    {
      name: 'Partzrider',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <circle cx="20" cy="20" r="14" stroke="#ffffff" strokeWidth="3" fill="none" />
          <circle cx="20" cy="20" r="5" fill="#e28743" />
          <path d="M20 6 L20 12 M20 28 L20 34 M6 20 L12 20 M28 20 L34 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <text x="42" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.03em">PARTZRIDER</text>
        </svg>
      )
    },
    {
      name: 'IAPTNSC',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M8 8 L22 8 L28 20 L22 32 L8 32 L14 20 Z" stroke="#002ea6" strokeWidth="2" fill="none" />
          <path d="M12 12 L18 12 L22 20 L18 28 L12 28 L15 20 Z" fill="#59a700" />
          <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.1em">IAPTNSC</text>
        </svg>
      )
    },
    {
      name: 'IDEAL Life Sciences',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M10 20 Q 20 5 30 20 T 50 20" stroke="#59a700" strokeWidth="2" fill="none" />
          <path d="M10 20 Q 20 35 30 20 T 50 20" stroke="#002ea6" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="2.5" fill="#e28743" />
          <circle cx="30" cy="28" r="2.5" fill="#e28743" />
          <text x="56" y="25" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" fill="#ffffff" letterSpacing="0.02em">IDEAL</text>
        </svg>
      )
    },
    {
      name: 'Manav Utthan',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M20 5 C11.7 5 5 11.7 5 20 C5 28.3 11.7 35 20 35 C28.3 35 35 28.3 35 20" stroke="#ffffff" strokeWidth="2" fill="none" />
          <path d="M14 22 C14 22 17 18 20 18 C23 18 26 22 26 22 M20 18 L20 32" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="12" r="4" fill="#e28743" />
          <text x="42" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" fill="#ffffff" letterSpacing="0.04em">MANAV UTTHAN</text>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Banner design to show on all pages */}
      <div className="footer-banner-section"></div>

      <footer className="main-footer">
        {/* Top Overlapping White Card (Half Inside, Half Outside) */}
        <div className="container">
          <div className="footer-overlapping-card">
            <div className="overlapping-card-content">
              <div className="accent-logo-wrapper">
                <img
                  src="/logo.png"
                  alt="PK Software Solutions"
                  style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
                />
              </div>

              <div className="accent-social-wrapper">
                <span className="accent-label">Follow Us</span>
                <div className="social-squares">
                  <a href="#" className="social-square" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.8M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.4 9.94v-8.37H5.47v8.37h2.81z" />
                    </svg>
                  </a>
                  <a href="#" className="social-square" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.6 8.6 0 0 1-5.3 1.83c-.35 0-.69-.02-1.03-.06 1.95 1.25 4.27 1.97 6.75 1.97 8.09 0 12.51-6.7 12.51-12.52 0-.19 0-.38-.01-.57.87-.62 1.63-1.4 2.22-2.28z" />
                    </svg>
                  </a>
                  <a href="#" className="social-square" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M21.58 7.3a2.86 2.86 0 0 0-2-2C17.78 4.75 12 4.75 12 4.75s-5.78 0-7.58.5a2.86 2.86 0 0 0-2 2C2 9.08 2 12 2 12s0 2.92.42 4.7a2.86 2.86 0 0 0 2 2c1.8.5 7.58.5 7.58.5s5.78 0 7.58-.5a2.86 2.86 0 0 0 2-2C22 14.92 22 12 22 12s0-2.92-.42-4.7zM9.75 15.02V8.98L15 12l-5.25 3.02z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="accent-cta-wrapper">
                <span className="accent-label">Quick Connect</span>
                <div className="cta-buttons">
                  <a href="/contact" className="accent-cta-btn text-btn">Schedule Consultation</a>
                  <a href="mailto:info@pksoftwaresolutions.com" className="accent-cta-btn email-btn">Email Inquiry</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-content-wrapper" style={{ paddingTop: '80px' }}>
          <h3 className="footer-section-title">Site Links</h3>

          {/* Footer Link Matrix */}
          <div className="footer-grid">
            <div className="footer-links-col">
              <h4>Core Services</h4>
              <ul>
                <li><a href="/services">Application Development</a></li>
                <li><a href="/services#erp">ERP Development</a></li>
                <li><a href="/services#custom-erp">Custom ERP Development</a></li>
                <li><a href="/services#cloud">Cloud Engineering</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Solutions</h4>
              <ul>
                <li><a href="/services#data-analytics">Data Analytics</a></li>
                <li><a href="/services#hubspot">HubSpot CRM Setup</a></li>
                <li><a href="/services#consulting">IT Consultancy</a></li>
                <li><a href="/services#ai-automation">Intelligent AI Automation</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Company Directory</h4>
              <ul>
                <li><a href="/about">About PKSS</a></li>
                <li><a href="/about#transformation">Methodology Blueprint</a></li>
                <li><a href="/careers">Careers Portal</a></li>
                <li><a href="/contact">Contact Support</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Headquarters</h4>
              <p className="footer-addr">
                Plot No.4, Karumbalai,<br />
                Karuppur Main road, Karuppur,<br />
                Salem - 636012, Tamilnadu, India.
              </p>
            </div>
          </div>

          {/* Separator Line */}
          <div className="footer-separator"></div>

          {/* Grayscale Corporate Partners Grid */}
          {/* <div className="footer-partners-grid">
          {partnerLogos.map((partner, idx) => (
            <div className="footer-partner-item" key={idx}>
              {partner.svg}
            </div>
          ))}
        </div> */}
        </div>

        {/* Bottom Accent Bar Section */}
        <div className="footer-bottom-accent-bar">
          <div className="container">
            <div className="accent-bottom-row">
              <p>&copy; {new Date().getFullYear()} PK Software Solutions. All Rights Reserved. Salem, Tamilnadu, India.</p>
              <div className="accent-legal-links">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms of Use</a>
                <span>|</span>
                <a href="#">SLA Assurances</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
