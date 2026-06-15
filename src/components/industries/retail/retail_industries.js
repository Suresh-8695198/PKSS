'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Quote
} from 'lucide-react';
import './retail_industries.css';

export default function RetailIndustries() {
  return (
    <div className="healthcare-solutions-page">

      {/* SECTION 1: HERO BANNER (Zoom BG Effect) */}
      <section className="ind-hero-banner">
        <div
          className="hero-bg-wrapper"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="container">
          <div className="ind-hero-content">
            <span className="ind-hero-path">Industry / Retail & Commerce</span>
            <span className="ind-hero-title-tag">High-Performance Commerce</span>
            <h1 className="ind-hero-title">
              Driving Retail Growth through Seamless Digital Storefronts
            </h1>
            <p className="ind-hero-subtitle">
              We design lightning-fast headless e-commerce platforms and automated inventory databases to maximize customer conversion.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHORT INTRO */}
      <section className="ind-intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-left-content">
              <span className="intro-left-tag">Future-Ready Commerce, Driven by Omni-Channel Integrations</span>
              <p className="intro-desc-p">
                Modern consumer expectations demand friction-free shopping experiences, fast load times, and real-time product catalogs. Decoupling the frontend storefront from the backend database is essential to eliminate checkout latency and handle peak traffic.
              </p>
              <p className="intro-desc-p">
                We partner with merchant brands to build headless web storefronts, synchronize multi-warehouse inventory databases, and automate CRM marketing pipelines.
              </p>
            </div>

            <div className="intro-right-callout-card">
              <div
                className="callout-card-bg"
                style={{ backgroundImage: `url('/images/industries/BG.png')` }}
              />
              <div className="callout-card-content">
                <span className="callout-card-header">Unifying Storefronts and Inventory Ledgers</span>
                <h3 className="callout-card-title">
                  How software innovation is redefining omnichannel retail.
                </h3>
              </div>
              <div className="callout-card-hover-overlay">
                <div className="callout-overlay-header">
                  <span className="callout-overlay-category">Unifying Storefronts and Inventory Ledgers</span>
                  <h3 className="callout-overlay-title">
                    How software innovation is redefining omnichannel retail.
                  </h3>
                  <p className="callout-overlay-desc">
                    Modern retail architectures synchronize product data across brick-and-mortar POS systems and digital store catalogs.
                  </p>
                </div>
                <a href="#retail-workflows" className="callout-overlay-readlink">
                  <span>Explore Storefronts</span>
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
              <h2 className="study-title">PKSS Retail Database Readiness Study</h2>
              <p className="study-desc">
                This report details implementation strategies for headless Next.js storefronts, real-time stock sync APIs, and custom HubSpot checkout CRM flows.
              </p>
              <Link href="/contact" className="study-connect-btn">
                <span>Connect PK</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </div>

            <div className="study-right-visual">
              <div className="study-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
                  alt="PKSS Retail Database Readiness Study"
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
                  <circle cx="32" cy="32" r="32" fill="url(#avatarGradRtl)" />
                  <circle cx="32" cy="26" r="10" fill="rgba(255,255,255,0.85)" />
                  <ellipse cx="32" cy="52" rx="16" ry="10" fill="rgba(255,255,255,0.85)" />
                  <defs>
                    <linearGradient id="avatarGradRtl" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" />
                      <stop offset="1" stopColor="#0057D9" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="quote-author-role">Digital Commerce Director<br />Retail Partner</span>
            </div>

            <div className="quote-right-content">
              <Quote className="quote-icon" size={120} />
              <p className="quote-text-p">
                "Working with PKSS allowed us to transition to a headless commerce architecture with zero downtime. Our page load speed improved by 60%, and our multi-warehouse inventory sync is now completely automated."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ARTICLE TRENDS GRID (Slide-up hover panels) */}
      <section className="ind-trends-section">
        <div className="container">

          <div className="trends-header">
            <h2 className="trends-section-title">Future of Retail: Trends Shaping Digital Commerce</h2>
          </div>

          <div className="trends-grid">

            {/* Card 1 */}
            <div className="trend-card">
              <div
                className="trend-card-bg"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=600&q=80')` }}
              />
              <div className="trend-card-content">
                <span className="trend-card-category">Research Report</span>
                <h3 className="trend-card-title">Headless Storefront Architectures & Cart Speeds</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Research Report</span>
                  <h3 className="overlay-title">Headless Storefront Architectures & Cart Speeds</h3>
                  <p className="overlay-desc">
                    A study on how Next.js storefronts decoupled from commerce engines eliminate transaction delays and boost sales.
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
                <h3 className="trend-card-title">Multi-Channel Catalog API Sync Solutions</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Perspective</span>
                  <h3 className="overlay-title">Multi-Channel Catalog API Sync Solutions</h3>
                  <p className="overlay-desc">
                    An analysis of real-time inventory synchronization across diverse retail channels to prevent catalog overselling.
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
                <h3 className="trend-card-title">CRM Integration for Automated Loyalty Workflows</h3>
              </div>
              <div className="trend-card-hover-overlay">
                <div className="overlay-header">
                  <span className="overlay-category">Journal Article</span>
                  <h3 className="overlay-title">CRM Integration for Automated Loyalty Workflows</h3>
                  <p className="overlay-desc">
                    A guide to configuring custom HubSpot pipelines to trigger loyalty rewards and abandon-cart discounts.
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
