'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Quote
} from 'lucide-react';
import './logistics_industries.css';

export default function LogisticsIndustries() {
  return (
    <div className="healthcare-solutions-page">

      {/* SECTION 1: HERO BANNER (Zoom BG Effect) */}
      <section className="ind-hero-banner">
        <div
          className="hero-bg-wrapper"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="container">
          <div className="ind-hero-content">
            <span className="ind-hero-path">Industry / Logistics & Transit</span>
            <span className="ind-hero-title-tag">Dynamic Transit Systems</span>
            <h1 className="ind-hero-title">
              Logistics next: Real-time, synchronized, efficient
            </h1>
            <p className="ind-hero-subtitle">
              We engineer carrier API integrations, route optimization engines, and dispatch boards to automate supply lines.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT INTRO */}
      <section className="ind-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left-content">
              <span className="intro-left-tag">Future-Ready Logistics, Driven by Fleet Telemetry</span>
              <p className="intro-desc-p">
                Global supply lines rely on immediate transit visibility and smart dispatch scheduling. Connecting carrier databases with driver tracking systems allows dispatchers to manage delivery routes and schedule changes on the fly.
              </p>
              <p className="intro-desc-p">
                We partner with transit providers to build responsive dispatch dashboards, carrier tracking APIs, and optimized routing algorithms.
              </p>
            </div>

            <div className="intro-right-callout-card">
              <div
                className="callout-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG.png')` }}
              />
              <div className="callout-card-content">
                <span className="callout-card-header">Unifying Distribution and Fleet Data</span>
                <h3 className="callout-card-title">
                  How software innovation is redefining dispatch management.
                </h3>
              </div>
              <div className="callout-card-hover-overlay">
                <div className="callout-overlay-header">
                  <span className="callout-overlay-category">Unifying Distribution and Fleet Data</span>
                  <h3 className="callout-overlay-title">
                    How software innovation is redefining dispatch management.
                  </h3>
                  <p className="callout-overlay-desc">
                    Modern transit frameworks connect warehouse inventory logs with live truck GPS feeds to coordinate scheduling.
                  </p>
                </div>
                <a href="#logistics-workflows" className="callout-overlay-readlink">
                  <span>Explore Dispatch</span>
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
              <h2 className="study-title">PKSS Logistics Database Readiness Study</h2>
              <p className="study-desc">
                This report outlines database integration strategies for shipment tracking, carrier ledgers, and dynamic dispatcher dashboards.
              </p>
              <Link href="/contact" className="study-connect-btn">
                <span>Connect PK</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </div>

            <div className="study-right-visual">
              <div className="study-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="PKSS Logistics Database Readiness Study"
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
                  <circle cx="32" cy="32" r="32" fill="url(#avatarGradLog)" />
                  <circle cx="32" cy="26" r="10" fill="rgba(255,255,255,0.85)" />
                  <ellipse cx="32" cy="52" rx="16" ry="10" fill="rgba(255,255,255,0.85)" />
                  <defs>
                    <linearGradient id="avatarGradLog" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#0057D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="quote-author-role">Logistics Dispatch Manager<br />Transit Partner</span>
            </div>

            <div className="quote-right-content">
              <Quote className="quote-icon" size={120} />
              <p className="quote-text-p">
                "With PKSS's route optimization engine and carrier API sync, our dispatchers coordinate hundreds of shipments with zero manual tracking delays. Delivery efficiency improved by 25%."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE TRENDS GRID (Slide-up hover panels) */}
      <section className="ind-trends-section">
        <div className="container">

          <div className="trends-header">
            <h2 className="trends-section-title">Future of Logistics: Trends Shaping Fleet Transit</h2>
          </div>

          <div className="trends-grid">

            {/* Card 1 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Research Report</span>
                <h3 className="trend-card-title">Real-time GPS Tracking & Carrier API Solutions</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Research Report</span>
                  <h3 className="overlay-title">Real-time GPS Tracking & Carrier API Solutions</h3>
                  <p className="overlay-desc">
                    Discover how continuous fleet coordinates sync and automated ETAs improve customer shipment visibility.
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
                <h3 className="trend-card-title">Dynamic Route Optimization and Fleet Dispatching</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Perspective</span>
                  <h3 className="overlay-title">Dynamic Route Optimization and Fleet Dispatching</h3>
                  <p className="overlay-desc">
                    An analysis of transit scheduling algorithms matching driver schedules with load assignments.
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
                <h3 className="trend-card-title">Centralized Distribution Ledgers for Supply Lines</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Journal Article</span>
                  <h3 className="overlay-title">Centralized Distribution Ledgers for Supply Lines</h3>
                  <p className="overlay-desc">
                    A guide to synchronizing cargo inventory data across multi-facility transit warehouses and shipping hubs.
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
