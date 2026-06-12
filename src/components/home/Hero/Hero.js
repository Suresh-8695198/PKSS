'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Globe, Cloud, RefreshCw, UploadCloud } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="modern-bg-element bg-shape-1" />
      <div className="modern-bg-element bg-shape-2" />

      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT: copy ── */}
          <div className="hero-left-column">
            <div className="hero-badge">
              <Sparkles size={13} style={{ marginRight: '.15rem' }} />
              <span>Leading Software &amp; CRM Engineering</span>
            </div>

            <h1 className="hero-title">
              We Architect Custom <br />
              <span className="gradient-accent">Software Solutions</span><br />
              &amp;&nbsp;<span className="gradient-green">CRM Ecosystems</span>
            </h1>

            <p className="hero-subtitle">
              Empowering global brands and local leaders with high-performance Web Apps,
              Certified Salesforce Consulting, Zoho Deluge workflows, HubSpot CRM automations,
              and placement-backed training.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary" style={{ borderRadius: '50px' }}>
                <span>Explore Services</span>
              </Link>
            </div>

            {/* ── Authorized Technology Competencies ── */}
            <div className="hero-partners">
              <p className="partners-label">Authorized Technology Competencies</p>
              <div className="partners-row">

                {/* Salesforce – blue */}
                <div className="partner-pill" style={{ borderColor: 'rgba(0,112,210,.35)', boxShadow: '0 0 10px rgba(0,112,210,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" />
                </div>

                {/* HubSpot – orange */}
                <div className="partner-pill" style={{ borderColor: 'rgba(255,122,0,.35)', boxShadow: '0 0 10px rgba(255,122,0,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" />
                </div>

                {/* Zoho – red/orange */}
                <div className="partner-pill" style={{ borderColor: 'rgba(220,56,36,.35)', boxShadow: '0 0 10px rgba(220,56,36,.12)' }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" style={{ height: '18px' }} />
                </div>

                {/* Azure – blue */}
                <div className="partner-pill" style={{ borderColor: 'rgba(0,114,206,.35)', boxShadow: '0 0 10px rgba(0,114,206,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" />
                </div>

                {/* Google Cloud – multicolour */}
                <div className="partner-pill" style={{ borderColor: 'rgba(66,133,244,.35)', boxShadow: '0 0 10px rgba(66,133,244,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: 3-D cube + cards ── */}
          <div className="hero-right-column">
            <div className="hero-3d-visual">

              {/* ambient glow & platform */}
              <div className="cube-glow-orb" />
              <div className="platform-base-3d" />

              {/* laser trace SVG */}
              <svg viewBox="0 0 500 500" className="svg-connection-lines" fill="none">
                <defs>
                  <filter id="glow-ln" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* lines */}
                <path d="M80 150 Q180 170 250 250" stroke="#00B8FF" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
                </path>
                <path d="M420 130 Q320 160 250 250" stroke="#7850ff" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M80 350 Q180 320 250 250" stroke="#64d200" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
                </path>
                <path d="M420 350 Q320 320 250 250" stroke="#f58c28" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.2s" repeatCount="indefinite" />
                </path>

                {/* traveling pulses */}
                <circle r="4" fill="#00B8FF" filter="url(#glow-ln)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M80 150 Q180 170 250 250" />
                </circle>
                <circle r="4" fill="#7850ff" filter="url(#glow-ln)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" path="M420 130 Q320 160 250 250" />
                </circle>
                <circle r="4" fill="#64d200" filter="url(#glow-ln)">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path="M80 350 Q180 320 250 250" />
                </circle>
                <circle r="4" fill="#f58c28" filter="url(#glow-ln)">
                  <animateMotion dur="2.6s" repeatCount="indefinite" path="M420 350 Q320 320 250 250" />
                </circle>
              </svg>

              {/* ── CSS 3-D Cube ── */}
              <div className="scene-3d">
                <div className="cube-3d">
                  <div className="cube-face face-front" />
                  <div className="cube-face face-back" />
                  <div className="cube-face face-left" />
                  <div className="cube-face face-right" />
                  <div className="cube-face face-top" />
                  <div className="cube-face face-bottom" />

                  <div className="cube-logo-center">
                    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                      <circle r="12" cx="20" cy="20" fill="#00B8FF" opacity=".15" />
                      <path d="M12,18 C12,10 26,10 26,16 C26,24 10,24 10,16 C10,8 24,6 28,14"
                        stroke="#00B8FF" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M28,22 C28,30 14,30 14,24 C14,16 30,16 30,24 C30,32 16,34 12,26"
                        stroke="#84D800" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── 4 coloured cards ── */}

              {/* Card 1 – Web Solutions  (cyan) */}
              <div className="iso-card card-web">
                <div className="c-icon">
                  <Globe size={17} color="#00B8FF" />
                </div>
                <div>
                  <div className="c-label">Web</div>
                  <div className="c-label">Solutions</div>
                </div>
              </div>

              {/* Card 2 – Salesforce Cloud  (purple) */}
              <div className="iso-card card-sf">
                <div className="c-icon">
                  <Cloud size={17} color="#a080ff" />
                </div>
                <div>
                  <div className="c-label">Salesforce</div>
                  <div className="c-label">Cloud</div>
                </div>
              </div>

              {/* Card 3 – Zoho Workflows  (green) */}
              <div className="iso-card card-zoho">
                <div className="c-icon">
                  <RefreshCw size={17} color="#84D800" />
                </div>
                <div>
                  <div className="c-label">Zoho</div>
                  <div className="c-label">Workflows</div>
                </div>
              </div>

              {/* Card 4 – Cloud Deployment  (amber) */}
              <div className="iso-card card-cloud">
                <div className="c-icon">
                  <UploadCloud size={17} color="#f58c28" />
                </div>
                <div>
                  <div className="c-label">Cloud</div>
                  <div className="c-label">Deployment</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
