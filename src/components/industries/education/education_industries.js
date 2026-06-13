'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Quote
} from 'lucide-react';
import './education_industries.css';

export default function EducationIndustries() {
  return (
    <div className="healthcare-solutions-page">

      {/* SECTION 1: HERO BANNER (Zoom BG Effect) */}
      <section className="ind-hero-banner">
        <div
          className="hero-bg-wrapper"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="container">
          <div className="ind-hero-content">
            <span className="ind-hero-path">Industry / Education</span>
            <span className="ind-hero-title-tag">Connected Campus Solutions</span>
            <h1 className="ind-hero-title">
              Education next: Adaptive, unified, accessible
            </h1>
            <p className="ind-hero-subtitle">
              We design secure multi-tenant LMS software, candidate admissions pipelines, and automated student success dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT INTRO */}
      <section className="ind-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left-content">
              <span className="intro-left-tag">Future-Ready Campus, Driven by EdTech Innovation</span>
              <p className="intro-desc-p">
                Traditional administrative systems are being replaced by unified cloud platforms that handle student lifecycles from application to graduation. Centralizing student registries and LMS databases is critical to improve student engagement and retention.
              </p>
              <p className="intro-desc-p">
                We partner with educational institutions to build secure student and teacher portals, automate lead intake CRM pipelines, and integrate academic databases.
              </p>
            </div>

            <div className="intro-right-callout-card">
              <div
                className="callout-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG.png')` }}
              />
              <div className="callout-card-content">
                <span className="callout-card-header">Streamlining the Academic Lifecycle</span>
                <h3 className="callout-card-title">
                  How software innovation is redefining student management.
                </h3>
              </div>
              <div className="callout-card-hover-overlay">
                <div className="callout-overlay-header">
                  <span className="callout-overlay-category">Streamlining the Academic Lifecycle</span>
                  <h3 className="callout-overlay-title">
                    How software innovation is redefining student management.
                  </h3>
                  <p className="callout-overlay-desc">
                    Modern educational portals automate candidate registration, course evaluations, and grading notifications to save admin hours.
                  </p>
                </div>
                <a href="#edu-workflows" className="callout-overlay-readlink">
                  <span>Explore Portals</span>
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
              <h2 className="study-title">PKSS Education Database Readiness Study</h2>
              <p className="study-desc">
                This study focuses on technical frameworks for candidate admissions CRM intake, multi-tenant learning dashboards, and academic record databases.
              </p>
              <Link href="/contact" className="study-connect-btn">
                <span>Connect PK</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </div>

            <div className="study-right-visual">
              <div className="study-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="PKSS Education Database Readiness Study"
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
                  <circle cx="32" cy="32" r="32" fill="url(#avatarGradEdu)" />
                  <circle cx="32" cy="26" r="10" fill="rgba(255,255,255,0.85)" />
                  <ellipse cx="32" cy="52" rx="16" ry="10" fill="rgba(255,255,255,0.85)" />
                  <defs>
                    <linearGradient id="avatarGradEdu" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#0057D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="quote-author-role">EdTech Systems Coordinator<br />Academic Partner</span>
            </div>

            <div className="quote-right-content">
              <Quote className="quote-icon" size={48} />
              <p className="quote-text-p">
                "PKSS's student registry database consolidation eliminated manual admissions data entry completely. Our students now enjoy a single, responsive LMS interface for classes and records."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE TRENDS GRID (Slide-up hover panels) */}
      <section className="ind-trends-section">
        <div className="container">

          <div className="trends-header">
            <h2 className="trends-section-title">Future of Education: Trends Shaping EdTech Portals</h2>
          </div>

          <div className="trends-grid">

            {/* Card 1 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Research Report</span>
                <h3 className="trend-card-title">Admissions CRM Pipelines & Intake Automation</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Research Report</span>
                  <h3 className="overlay-title">Admissions CRM Pipelines & Intake Automation</h3>
                  <p className="overlay-desc">
                    Discover how automating admissions lead tracking and coordinator workflows increases student enrollment yield.
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
                <h3 className="trend-card-title">LMS Portal Integrations and Uptime Metrics</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Perspective</span>
                  <h3 className="overlay-title">LMS Portal Integrations and Uptime Metrics</h3>
                  <p className="overlay-desc">
                    Analysis of multi-tenant learning dashboards, course access logs, and student performance dashboard reporting.
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
                <h3 className="trend-card-title">Alumni Database Outreaches and Donation Pipelines</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Journal Article</span>
                  <h3 className="overlay-title">Alumni Database Outreaches and Donation Pipelines</h3>
                  <p className="overlay-desc">
                    A guide to designing automated outreach models to track graduation success records and manage alumni funds.
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
