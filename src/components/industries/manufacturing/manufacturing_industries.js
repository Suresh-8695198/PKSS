'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Quote
} from 'lucide-react';
import './manufacturing_industries.css';

export default function ManufacturingIndustries() {
  return (
    <div className="healthcare-solutions-page">

      {/* SECTION 1: HERO BANNER (Zoom BG Effect) */}
      <section className="ind-hero-banner">
        <div
          className="hero-bg-wrapper"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="container">
          <div className="ind-hero-content">
            <span className="ind-hero-path">Industry / Manufacturing</span>
            <span className="ind-hero-title-tag">Connected Smart Operations</span>
            <h1 className="ind-hero-title">
              Manufacturing next: Integrated, autonomous, optimized
            </h1>
            <p className="ind-hero-subtitle">
              We integrate legacy ERP databases with real-time IoT device telemetry to build highly-available, smart supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT INTRO */}
      <section className="ind-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left-content">
              <span className="intro-left-tag">Future-Ready Factories, Driven by Tech-Led Operations</span>
              <p className="intro-desc-p">
                Industrial sectors are digitizing rapidly, replacing manual checks with real-time machine telemetry logs and centralized inventory databases. To maintain productivity, facilities must integrate their legacy ERP nodes with modern, low-latency cloud infrastructure.
              </p>
              <p className="intro-desc-p">
                We partner with manufacturers to standardize data flow across production cells, automate catalog counts, and build dashboard monitors that keep factories running smoothly.
              </p>
            </div>

            <div className="intro-right-callout-card">
              <div
                className="callout-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG.png')` }}
              />
              <div className="callout-card-content">
                <span className="callout-card-header">Bridging the Gap Between IT and Operations</span>
                <h3 className="callout-card-title">
                  How software innovation is redefining factory floor management.
                </h3>
              </div>
              <div className="callout-card-hover-overlay">
                <div className="callout-overlay-header">
                  <span className="callout-overlay-category">Bridging the Gap Between IT and Operations</span>
                  <h3 className="callout-overlay-title">
                    How software innovation is redefining factory floor management.
                  </h3>
                  <p className="callout-overlay-desc">
                    Modern factory systems automate equipment checks, shipping dispatches, and warehouse reorders to prevent downtime.
                  </p>
                </div>
                <a href="#factory-workflows" className="callout-overlay-readlink">
                  <span>Explore Operations</span>
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
              <h2 className="study-title">PKSS Manufacturing Database Readiness Study</h2>
              <p className="study-desc">
                This study outlines strategic frameworks and secure API integrations to help industrial operators synchronize facility nodes, track OEE scores, and build resilient cloud databases.
              </p>
              <Link href="/contact" className="study-connect-btn">
                <span>Connect PK</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </div>

            <div className="study-right-visual">
              <div className="study-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="PKSS Manufacturing Database Readiness Study"
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
                  <circle cx="32" cy="32" r="32" fill="url(#avatarGradMfg)" />
                  <circle cx="32" cy="26" r="10" fill="rgba(255,255,255,0.85)" />
                  <ellipse cx="32" cy="52" rx="16" ry="10" fill="rgba(255,255,255,0.85)" />
                  <defs>
                    <linearGradient id="avatarGradMfg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#0057D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="quote-author-role">Operations Engineering Lead<br />Manufacturing Partner</span>
            </div>

            <div className="quote-right-content">
              <Quote className="quote-icon" size={120} />
              <p className="quote-text-p">
                "PKSS's database consolidation framework transformed our warehouse scheduling pipelines. By merging legacy ERP systems into a single cloud ledger, we eliminated catalog latency and gained real-time visibility into overall equipment effectiveness."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE TRENDS GRID (Slide-up hover panels) */}
      <section className="ind-trends-section">
        <div className="container">

          <div className="trends-header">
            <h2 className="trends-section-title">Future of Manufacturing: Trends Shaping Smart Industry</h2>
          </div>

          <div className="trends-grid">

            {/* Card 1 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Research Report</span>
                <h3 className="trend-card-title">IoT Device Telemetry and OEE Tracking Trends</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Research Report</span>
                  <h3 className="overlay-title">IoT Device Telemetry and OEE Tracking Trends</h3>
                  <p className="overlay-desc">
                    Discover how real-time device telemetry modules monitor production yield, uptime logs, and predictive maintenance schedules.
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
                <h3 className="trend-card-title">Smart Supply Chains: Synchronizing Multi-Facility Warehouses</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Perspective</span>
                  <h3 className="overlay-title">Smart Supply Chains: Synchronizing Multi-Facility Warehouses</h3>
                  <p className="overlay-desc">
                    An in-depth analysis of multi-warehouse catalog APIs and distribution ledgers that automate inventory reorders.
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
                <h3 className="trend-card-title">Cloud Database Integration for Legacy ERP Systems</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Journal Article</span>
                  <h3 className="overlay-title">Cloud Database Integration for Legacy ERP Systems</h3>
                  <p className="overlay-desc">
                    A guide to orchestrating logistics scheduling registries on highly-available, secure cloud database servers.
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
