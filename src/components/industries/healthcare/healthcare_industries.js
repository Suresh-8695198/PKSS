'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Quote
} from 'lucide-react';
import './healthcare_industries.css';

export default function HealthcareIndustries() {
  return (
    <div className="healthcare-solutions-page">

      {/* SECTION 1: HERO BANNER (Zoom BG Effect) */}
      <section className="ind-hero-banner">
        <div
          className="hero-bg-wrapper"
          style={{ backgroundImage: `url('/images/industries/healthcare_hero.png')` }}
        />
        <div className="container">
          <div className="ind-hero-content">
            <span className="ind-hero-path">Industry / Healthcare</span>
            <span className="ind-hero-title-tag">Perpetually Adaptive Enterprise</span>
            <h1 className="ind-hero-title">
              Healthcare next: Immersive, personalized, connected
            </h1>
            <p className="ind-hero-subtitle">
              We collaborate with institutions to transform healthcare with innovative digital solutions and best-in-class technology.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT INTRO */}
      <section className="ind-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left-content">
              <span className="intro-left-tag">Future-Ready Healthcare, Driven by Tech-Led Innovation</span>
              <p className="intro-desc-p">
                The healthcare sector is undergoing a profound digital transformation, requiring secure, scalable, and patient-centric systems. Modern clinical environments must move beyond legacy infrastructure to ensure seamless data interoperability and efficient care delivery across diverse medical networks.
              </p>
              <p className="intro-desc-p">
                We partner with leading healthcare institutions to architect resilient electronic health record (EHR) databases, automate complex administrative triage workflows, and engineer clinical portals that elevate the standard of patient care.
              </p>
            </div>

            <div className="intro-right-callout-card">
              <div
                className="callout-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG.png')` }}
              />
              <div className="callout-card-content">
                <span className="callout-card-header">Reimagining Healthcare Experiences</span>
                <h3 className="callout-card-title">
                  How software innovation is redefining clinical workflows.
                </h3>
              </div>
              <div className="callout-card-hover-overlay">
                <div className="callout-overlay-header">
                  <span className="callout-overlay-category">Reimagining Healthcare Experiences</span>
                  <h3 className="callout-overlay-title">
                    How software innovation is redefining clinical workflows.
                  </h3>
                  <p className="callout-overlay-desc">
                    Modern clinic systems automate records charting, medical staff coordination schedules, and automated check-ins to optimize resource balancing.
                  </p>
                </div>
                <a href="#clinical-workflows" className="callout-overlay-readlink">
                  <span>Explore Workflows</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DETAILED STUDY BLOCK */}
      <section className="ind-study-section">
        <div className="container">
          <div className="study-grid">

            <div className="study-left-content">
              <h2 className="study-title">PKSS Healthcare Database Readiness Study</h2>
              <p className="study-desc">
                This report provides strategic recommendations and technical frameworks to help medical institutions accelerate database readiness, enhance secure practitioner workflows, and build resilient, long-term software solutions.
              </p>
              <Link href="/contact" className="study-connect-btn">
                <span>Connect PK</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </div>

            <div className="study-right-visual">
              <div className="study-image-frame">
                <img
                  src="/images/industries/healthcare_study.png"
                  alt="PKSS Healthcare Database Readiness Study"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: RELATED QUOTES */}
      <section className="ind-quote-section">
        <div className="container">
          <div className="quote-container">

            <div className="quote-left-info">
              <div className="quote-avatar-badge">
                <svg viewBox="0 0 64 64" width="90" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="url(#avatarGrad)" />
                  <circle cx="32" cy="26" r="10" fill="rgba(255,255,255,0.85)" />
                  <ellipse cx="32" cy="52" rx="16" ry="10" fill="rgba(255,255,255,0.85)" />
                  <defs>
                    <linearGradient id="avatarGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#0057D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="quote-author-role">Clinical Systems Director<br />Healthcare Partner</span>
            </div>

            <div className="quote-right-content">
              <Quote className="quote-icon" size={48} />
              <p className="quote-text-p">
                "PKSS's comprehensive approach to database transformation in healthcare represents a significant departure from legacy, piecemeal software modernization efforts. By combining systematic planning, practical dashboard tools, and custom API synchronization workflows, they position themselves as a trusted engineering partner for institutions ready to embrace fundamental change."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE TRENDS GRID (Slide-up hover panels) */}
      <section className="ind-trends-section">
        <div className="container">

          <div className="trends-header">
            <h2 className="trends-section-title">Future of Healthcare: Trends Shaping Clinical Software</h2>
          </div>

          <div className="trends-grid">

            {/* Card 1 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('/images/industries/pic.jpg')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Research Report</span>
                <h3 className="trend-card-title">Emerging Hospital Registry Tech Trends in 2026</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Research Report</span>
                  <h3 className="overlay-title">Emerging Hospital Registry Tech Trends in 2026</h3>
                  <p className="overlay-desc">
                    Explore how modern cloud registry infrastructures and microservices are helping clinics standardize records retrieval and ensure real-time clinical system sync.
                  </p>
                </div>
                <a href="#read-trend-1" className="overlay-readlink">
                  <span>Read more</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG2.png')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Perspective</span>
                <h3 className="trend-card-title">Healthcare Trends in 2026: How Portal Integration Redefines Patient Journeys</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Perspective</span>
                  <h3 className="overlay-title">Healthcare Trends in 2026: How Portal Integration Redefines Patient Journeys</h3>
                  <p className="overlay-desc">
                    Analysis of client engagement channels, multi-tenant scheduling synchronization, and customized portal apps streamlining modern registration pipelines.
                  </p>
                </div>
                <a href="#read-trend-2" className="overlay-readlink">
                  <span>Read more</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundColor: '#ffffff' }}
              />
              {/* Decorative rectangle box that disappears on hover */}
              <div className="trend-card-deco-rect" />
              <div className="trend-card-content">
                <span className="trend-card-category">Journal Article</span>
                <h3 className="trend-card-title">Tech Trends in Clinic Administrative Workflows - 2025</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Journal Article</span>
                  <h3 className="overlay-title">Tech Trends in Clinic Administrative Workflows - 2025</h3>
                  <p className="overlay-desc">
                    A comprehensive study detailing automated scheduling queues, medical supply tracking platforms, and coordinator workload balancing dashboards.
                  </p>
                </div>
                <a href="#read-trend-3" className="overlay-readlink">
                  <span>Read more</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
