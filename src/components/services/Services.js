'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SplitText from './SplitText';

export default function Services({ preview = false }) {
  // Active card index state
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesData = [
    {
      id: 'app-dev',
      title: 'Application Development',
      tag: '01 / ARCHITECTURE',
      desc: 'Bespoke, component-driven web architectures and responsive mobile experiences. Scalable microservices engineered for sub-100ms response times.',
      capability: 'Core Engine: Next.js + Go RESTful APIs',
      tech: 'Next.js · React · Go · Flutter · PostgreSQL',
      imageName: 'app_dev.png',
      colors: ['#002ea6', '#00B8FF'], // Blue & Cyan
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <rect x="10" y="10" width="180" height="100" rx="8" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.15" />
          <line x1="10" y1="30" x2="190" y2="30" stroke="currentColor" strokeWidth="1.2" opacity="0.15" />
          <circle cx="22" cy="20" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="30" cy="20" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="38" cy="20" r="3" fill="currentColor" opacity="0.3" />
          <rect x="25" y="45" width="60" height="45" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="95" y="45" width="80" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="95" y="72" width="80" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="35" y1="68" x2="75" y2="68" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      tag: '02 / INTELLIGENCE',
      desc: 'Secure Retrieval-Augmented Generation (RAG) pipelines and autonomous agent systems that safely query internal database schemas.',
      capability: 'Core Engine: Vector Indexes & LLMs',
      tech: 'OpenAI API · LangChain · Python · Pinecone',
      imageName: 'ai_automation.png',
      colors: ['#7928ca', '#ff0080'], // Purple & Magenta
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <circle cx="50" cy="60" r="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="150" cy="60" r="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 66,60 L 134,60" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4" className="pulse-line-ai" />
          <rect x="88" y="48" width="24" height="24" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="60" r="4" fill="currentColor" />
          <text x="50" y="64" fontSize="10" textAnchor="middle" fill="currentColor" fontWeight="bold">IN</text>
          <text x="150" y="64" fontSize="10" textAnchor="middle" fill="currentColor" fontWeight="bold">OUT</text>
        </svg>
      )
    },
    {
      id: 'salesforce',
      title: 'Salesforce Consulting',
      tag: '03 / CUSTOMER CORE',
      desc: 'Certified Lightning Web Component (LWC) configurations, custom Apex triggers, and transactional database integrations.',
      capability: 'Core Engine: Apex + LWC Framework',
      tech: 'Salesforce · Apex · LWC · MuleSoft · ERP Sync',
      imageName: 'salesforce.png',
      colors: ['#00a1e0', '#005fb2'], // Salesforce Blue & Deep Blue
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <rect x="20" y="20" width="160" height="80" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.15" />
          <rect x="35" y="35" width="40" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="85" y="35" width="80" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="85" y="54" width="80" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="85" y="73" width="80" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="55" y1="45" x2="55" y2="75" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 'hubspot',
      title: 'HubSpot CRM',
      tag: '04 / WORKFLOWS',
      desc: 'Pipeline optimization and marketing automation hooks, linking pipeline pipelines directly to custom developer backends.',
      capability: 'Core Engine: HubSpot Webhooks & APIs',
      tech: 'HubSpot CRM · REST Webhooks · Node.js · OAuth',
      imageName: 'hubspot.png',
      colors: ['#ff7a59', '#ff9800'], // HubSpot Orange & Amber
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <circle cx="40" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="160" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="52" y1="60" x2="88" y2="60" stroke="currentColor" strokeWidth="1.2" />
          <line x1="112" y1="60" x2="148" y2="60" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="70" cy="60" r="3" fill="currentColor" className="moving-dot-hs" />
          <circle cx="130" cy="60" r="3" fill="currentColor" className="moving-dot-hs" />
        </svg>
      )
    },
    {
      id: 'zoho',
      title: 'Zoho Development',
      tag: '05 / AUTOMATION',
      desc: 'End-to-end setups of the Zoho One suite using custom Deluge scripting and Creator app layouts.',
      capability: 'Core Engine: Zoho Creator + Deluge',
      tech: 'Deluge · Zoho Creator · Zoho CRM · Zoho Books',
      imageName: 'zoho.png',
      colors: ['#e2231a', '#f4b400'], // Zoho Red & Yellow
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <rect x="30" y="30" width="60" height="60" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="110" y="30" width="60" height="60" rx="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 90,60 H 110" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <polyline points="105,55 110,60 105,65" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text x="60" y="64" fontSize="8" textAnchor="middle" fill="currentColor" fontFamily="monospace">INPUT</text>
          <text x="140" y="64" fontSize="8" textAnchor="middle" fill="currentColor" fontFamily="monospace">LOGIC</text>
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Cloud Engineering',
      tag: '06 / SCALE',
      desc: 'Provision highly available server topologies on AWS and Azure using Terraform and Kubernetes container nodes.',
      capability: 'Core Engine: Terraform & Kubernetes',
      tech: 'AWS · Azure · Kubernetes · Terraform · CI/CD',
      imageName: 'cloud.png',
      colors: ['#00b050', '#008080'], // Green & Teal
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <rect x="30" y="70" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="85" y="70" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="140" y="70" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="100" y1="42" x2="45" y2="70" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
          <line x1="100" y1="42" x2="100" y2="70" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
          <line x1="100" y1="42" x2="155" y2="70" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
          <circle cx="100" cy="30" r="4" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      tag: '07 / TELEMETRY',
      desc: 'Orchestrating secure data lakes, ETL pipelines, and interactive dashboards to convert performance logs into insights.',
      capability: 'Core Engine: ETL + Power BI Telemetry',
      tech: 'Power BI · ETL Pipelines · Snowflake · SQL Server',
      imageName: 'data_analytics.png',
      colors: ['#0080ff', '#4b0082'], // Blue & Indigo
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <path d="M 20,100 L 50,75 L 80,85 L 110,40 L 140,55 L 170,20" fill="none" stroke="currentColor" strokeWidth="1.5" className="chart-line-draw" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.2" />
          <circle cx="170" cy="20" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'Consultancy Services',
      tag: '08 / COMPLIANCE',
      desc: 'Comprehensive code audits, database index tuning, and performance profiling to eliminate application latency.',
      capability: 'Core Engine: System Auditing & SLA Tuning',
      tech: 'Code Audits · Latency Tuning · Database Indexing',
      imageName: 'consulting.png',
      colors: ['#4a5568', '#2d3748'], // Slate & Charcoal
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <circle cx="100" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="100" y1="10" x2="100" y2="110" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
          <line x1="50" y1="60" x2="150" y2="60" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
          <circle cx="125" cy="40" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing Solutions',
      tag: '09 / DECK CAPACITY',
      desc: 'Augment team velocities with dedicated offshore software squads running under strict Agile SLAs.',
      capability: 'Core Engine: Dedicated offshore sprints',
      tech: 'Agile Augmentation · Pod Scaling · Code Quality Reviews',
      imageName: 'outsourcing.png',
      colors: ['#319795', '#2b6cb0'], // Teal & Blue
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <rect x="20" y="45" width="40" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="80" y="45" width="40" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <rect x="140" y="45" width="40" height="30" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 60,60 H 80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M 120,60 H 140" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 'training',
      title: 'Corporate Training',
      tag: '10 / SKILLS',
      desc: 'Placement cohorts and upskilling tracks to integrate certified technical talent directly into operational workloads.',
      capability: 'Core Engine: Placement-driven upskilling',
      tech: 'Certified CRM Paths · Live Projects · Tech Training',
      imageName: 'training.png',
      colors: ['#d69e2e', '#dd6b20'], // Gold & Orange
      illustration: (
        <svg viewBox="0 0 200 120" className="active-srv-svg">
          <circle cx="100" cy="30" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="60" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="140" cy="80" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <line x1="90" y1="38" x2="68" y2="72" stroke="currentColor" strokeWidth="1" />
          <line x1="110" y1="38" x2="132" y2="72" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    }
  ];

  // Limit display size in landing page preview mode
  const services = preview ? servicesData.slice(0, 5) : servicesData;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const activeSrv = services[activeIndex];

  // Parse tag number and label from 'XX / LABEL' format
  const tagParts = activeSrv.tag.split('/');
  const srvNumber = tagParts[0] ? tagParts[0].trim() : '';
  const srvLabel = tagParts[1] ? tagParts[1].trim() : '';

  // Colors parsed to dynamic rgb variable to support styling shadows and badge backdrops
  const getAccentRgb = (colorHex) => {
    const hex = colorHex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };

  const activeRgb = getAccentRgb(activeSrv.colors[0]);

  return (
    <section
      className="services-showcase-section"
      id="services"
      style={{
        '--accent-rgb': activeRgb,
        '--accent-theme': activeSrv.colors[0]
      }}
    >
      {styleTag}

      <div className="container srv-showcase-container">

        {/* Title Heading - Our Core Services styled with Allomira and a professional linear gradient */}
        <div className="srv-showcase-hdr">
          <h2 className="srv-showcase-title-new">
            Our Core Services
          </h2>
          {/* Custom border line image as requested by the user, formatted for light and dark themes */}
          <div className="title-curve-container">
            <img
              src="/images/services/Border_line.png"
              alt="Section Divider"
              className="srv-title-divider-img"
            />
          </div>
        </div>

        {/* 3D Cards Carousel Area */}
        <div className="carousel-deck-wrapper">

          {/* Navigation Arrow Left */}
          <button className="carousel-nav-btn prev" onClick={handlePrev} aria-label="Previous service">
            <ArrowLeft size={20} />
          </button>

          {/* Cards Track */}
          <div className="carousel-track">
            {services.map((item, idx) => {
              // Calculate offset relative to the active card
              let offset = idx - activeIndex;

              // Handle loop wrap-around calculations to ensure continuous carousel rotations
              const len = services.length;
              if (offset < -len / 2) offset += len;
              if (offset > len / 2) offset -= len;

              // Apply 3D transforms based on relative positions
              let transformStyle = '';
              let opacityStyle = 0;
              let pointerEvents = 'none';
              let zIndexStyle = 1;

              if (offset === 0) {
                // Center Active card
                transformStyle = 'translate3d(0, 0, 80px) rotateY(0deg) scale(1.1)';
                opacityStyle = 1;
                pointerEvents = 'auto';
                zIndexStyle = 10;
              } else if (offset === -1) {
                // Left Card
                transformStyle = 'translate3d(-170px, 0, -40px) rotateY(24deg) scale(0.9)';
                opacityStyle = 0.8;
                pointerEvents = 'auto';
                zIndexStyle = 5;
              } else if (offset === 1) {
                // Right Card
                transformStyle = 'translate3d(170px, 0, -40px) rotateY(-24deg) scale(0.9)';
                opacityStyle = 0.8;
                pointerEvents = 'auto';
                zIndexStyle = 5;
              } else if (offset === -2) {
                // Far Left Card
                transformStyle = 'translate3d(-310px, 0, -100px) rotateY(36deg) scale(0.75)';
                opacityStyle = 0.35;
                zIndexStyle = 3;
              } else if (offset === 2) {
                // Far Right Card
                transformStyle = 'translate3d(310px, 0, -100px) rotateY(-36deg) scale(0.75)';
                opacityStyle = 0.35;
                zIndexStyle = 3;
              } else {
                // Hidden Cards outside viewport range
                transformStyle = offset < 0
                  ? 'translate3d(-460px, 0, -150px) rotateY(45deg) scale(0.5)'
                  : 'translate3d(460px, 0, -150px) rotateY(-45deg) scale(0.5)';
                opacityStyle = 0;
              }

              return (
                <div
                  key={item.id}
                  className={`carousel-card ${offset === 0 ? 'active' : ''}`}
                  style={{
                    transform: transformStyle,
                    opacity: opacityStyle,
                    pointerEvents,
                    zIndex: zIndexStyle,
                    boxShadow: offset === 0 ? `0 35px 70px -15px ${item.colors[0]}40` : 'var(--card-shadow)'
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Card Image Background */}
                  <div
                    className="card-bg-image"
                    style={{ backgroundImage: `url(/images/services/${item.imageName})` }}
                  />

                  {/* Glassmorphic Overlay Gradient */}
                  <div className="card-glass-overlay" />

                  {/* Card Content Overlay */}
                  <div className="carousel-card-inner">
                    <span className="carousel-card-num">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <h3 className="carousel-card-title">{item.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrow Right */}
          <button className="carousel-nav-btn next" onClick={handleNext} aria-label="Next service">
            <ArrowRight size={20} />
          </button>

        </div>

        {/* Selected Service Detailed Content Area Below */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSrv.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="active-service-details-card"
          >
            {/* Spinning Laser Outline Border Beam element */}
            <div className="border-beam-container">
              <div className="border-beam-spinning" />
            </div>

            {/* Top Centered Tag Heading with Green Circle and Blue Number */}
            <div className="active-srv-header-centered">
              <div className="active-srv-tag-container">
                <div className="active-srv-tag-number-circle">
                  <span className="active-srv-tag-number">{srvNumber}</span>
                </div>
                <SplitText
                  key={srvLabel}
                  text={srvLabel}
                  tag="span"
                  className="active-srv-tag-label"
                  delay={35}
                  duration={0.6}
                  ease="power2.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.05}
                  textAlign="left"
                />
              </div>
            </div>

            {/* Grid wrapper for the lower content (image left, copy right) */}
            <div className="active-srv-body-grid">
              {/* Floating center brand symbol icon */}
              <div className="active-srv-center-logo-badge" title="PKSS Accent">
                <img src="/icon.png" alt="PKSS Icon" className="pk-badge-img" />
              </div>
              {/* Left Side: 3D Flipper based animation container - Delayed flip to trigger clearly after scrolling down */}
              <div className="active-srv-visual-side-left">
                <motion.div
                  key={activeSrv.id}
                  initial={{ opacity: 0, rotateY: -95, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  whileHover={{ scale: 1.04, rotateY: 8 }}
                  className="active-srv-image-wrapper"
                >
                  <img
                    src={`/images/services/${activeSrv.imageName}`}
                    alt={activeSrv.title}
                    className="active-srv-image-media"
                  />
                </motion.div>
              </div>

              {/* Right Side: Clean high-contrast typography, no gradients, clean layout using premium typography */}
              <div className="active-srv-copy-right">
                <h4 className="active-srv-heading">{activeSrv.title}</h4>
                <p className="active-srv-desc">{activeSrv.desc}</p>

                <div className="active-srv-capability-box">
                  <span className="cap-label">Engine Config</span>
                  <span className="cap-val">{activeSrv.capability}</span>
                </div>

                <div className="active-srv-tech-row">
                  {activeSrv.tech}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View All CTA Footer (Only displayed in home preview mode) */}
        {preview && (
          <div className="srv-showcase-footer">
            <Link href="/services" className="srv-view-all-link">
              <span>Explore full catalog</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

// Scoped layout styles for 3D Carousel Cards with Glassmorphism, Image overlays, and bgjar-like morphing shapes
const styleTag = (
  <style dangerouslySetInnerHTML={{
    __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap');

    /* Custom @font-face fallback setup for Allomira font family requested by user */
    @font-face {
      font-family: 'Allomira';
      src: local('Allomira'), local('Allomira-Regular');
      font-weight: normal;
      font-style: normal;
    }

    .services-showcase-section {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg-neutral);
      transition: background-color 0.6s ease;
      
      /* Reduced top/bottom padding to remove excessive space surrounding section */
      padding: 60px 0 60px 0;
      position: relative;
      overflow: hidden;
      z-index: 10;

      --bg-neutral: #f5f5f7;
      --card-bg: rgba(255, 255, 255, 0.7);
      --card-border: rgba(255, 255, 255, 0.45);
      --card-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
      --text-main: #1d1d1f;
      --text-muted: #515156;
      --accent-theme: #002ea6;
      --details-bg: rgba(255, 255, 255, 0.95);
      --card-title-color: #ffffff;
      --card-num-color: rgba(255, 255, 255, 0.7);
    }

    /* Dark Mode Theme overrides with premium glassmorphism pop */
    .dark .services-showcase-section {
      --bg-neutral: #09090b;
      --card-bg: rgba(24, 24, 28, 0.85); /* Brightened cards slightly in dark mode */
      --card-border: rgba(255, 255, 255, 0.16); /* More visible borders in dark mode */
      --card-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
      --text-main: #f5f5f7;
      --text-muted: #a0a0a5;
      --details-bg: rgba(18, 18, 22, 0.96);
      --card-title-color: #ffffff;
      --card-num-color: rgba(255, 255, 255, 0.85);
    }

    .srv-showcase-container {
      position: relative;
      z-index: 5;
    }

    /* ── Title Redesigned Style ── */
    .srv-showcase-hdr {
      text-align: center;
      margin-bottom: -20px; /* Pulls the carousel deck upward to remove the excessive gap below the border line image */
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .srv-showcase-title-new {
      font-family: 'Allomira', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      font-size: clamp(1.6rem, 4.2vw, 2.7rem);
      font-weight: 850;
      letter-spacing: -0.03em;
      white-space: nowrap; /* Ensures title fits in a single line on mobile screen sizes */
      
      /* Linear effect gradient: black (or white in dark theme) transitioning to Green logo color */
      background: linear-gradient(135deg, var(--text-main) 35%, #74c044 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      margin-top: 0;
      margin-bottom: 4px; /* Reduced gap exactly below heading text */
      transition: color 0.4s ease;
    }

    /* Custom image divider styles */
    .title-curve-container {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: -50px; /* Reduced gap exactly above border line */
    }

    .srv-title-divider-img {
      width: 260px;
      height: auto;
      object-fit: contain;
      opacity: 0.95;
      transition: filter 0.6s ease, opacity 0.6s ease;
    }

    /* Invert filter applied in dark mode so the dark navy turns silver-cyan to look spectacular on dark UI */
    .dark .srv-title-divider-img {
      filter: invert(0.85) brightness(1.45) contrast(1.1);
      opacity: 0.9;
    }

    /* ── 3D Carousel Layout ── */
    .carousel-deck-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      max-width: 960px;
      margin: 0 auto 3.5rem auto; /* Space below carousel is clean */
      height: 380px;
    }

    .carousel-track {
      position: relative;
      width: 100%;
      height: 100%;
      perspective: 1200px;
      transform-style: preserve-3d;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── Carousel Card ── */
    .carousel-card {
      position: absolute;
      width: 230px;
      height: 300px;
      border-radius: 24px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      cursor: pointer;
      transform-style: preserve-3d;
      overflow: hidden;
      transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s, filter 0.65s, box-shadow 0.65s;
    }

    /* Inactive cards grayscale transition for extreme depth of field */
    .carousel-card:not(.active) {
      filter: grayscale(25%) brightness(75%);
    }

    /* Background image layer */
    .card-bg-image {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
    }

    .carousel-card:hover .card-bg-image {
      transform: scale(1.06);
    }

    /* Glassmorphic/Dark overlay gradient inside card */
    .card-glass-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.25) 55%, rgba(0, 0, 0, 0.45) 100%);
      z-index: 2;
    }

    .carousel-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 2.25rem 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 3;
    }

    .carousel-card-num {
      font-family: monospace;
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--card-num-color);
    }

    .carousel-card-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.35rem;
      font-weight: 750;
      line-height: 1.25;
      letter-spacing: -0.01em;
      color: var(--card-title-color);
    }

    /* Navigation Arrows */
    .carousel-nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      box-shadow: var(--card-shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: var(--text-main);
      z-index: 25;
      transition: transform 0.2s ease, background-color 0.2s ease;
    }

    .carousel-nav-btn:hover {
      transform: scale(1.08);
      background-color: var(--bg-neutral);
    }

    /* ── Content Details Card Below ── */
    .active-service-details-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      background: var(--details-bg);
      border-radius: 40px 8px 40px 8px; /* Asymmetric premium architectural curve */
      padding: 3.5rem;
      box-shadow: var(--card-shadow);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      position: relative;
      z-index: 5;
      border: 1px solid var(--card-border);
    }

    .active-srv-header-centered {
      width: 100%;
      text-align: center;
      margin-bottom: 2.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .active-srv-body-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4.5rem;
      width: 100%;
      align-items: stretch;
      position: relative; /* Containing block for center badge logo */
    }

    /* Floating center brand symbol icon styling */
    .active-srv-center-logo-badge {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1; /* Floats behind text and image content */
      pointer-events: none;
    }

    .pk-badge-img {
      width: 380px;
      height: 380px;
      object-fit: contain;
      opacity: 0.14; /* Decreased opacity (capacity) for clean watermark styling */
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
      transition: transform 0.4s ease, opacity 0.4s ease;
      pointer-events: auto;
    }

    // .pk-badge-img:hover {
    //   transform: rotate(15deg) scale(1.05);
    //   opacity: 0.3; /* Highlight slightly on hover */
    // }

    /* Conic Spinning laser outline border beam (Magic UI style replica) */
    .border-beam-container {
      position: absolute;
      inset: -1px; /* matches border wrap exactly */
      border-radius: 40px 8px 40px 8px; /* matches card radius */
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
      padding: 2.2px;
      pointer-events: none;
      z-index: 10;
      overflow: hidden;
    }

    .border-beam-spinning {
      position: absolute;
      width: 240%;
      height: 240%;
      top: -70%;
      left: -70%;
      background: conic-gradient(
        from 0deg,
        transparent 55%,
        #74c044 75%,
        #002ea6 92%,
        transparent 100%
      );
      animation: border-beam-spin 4s linear infinite;
    }

    @keyframes border-beam-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .active-service-details-card {
        padding: 2.25rem;
      }
      .active-srv-body-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
      .active-srv-header-centered {
        margin-bottom: 1.5rem;
      }
      /* Fix image size / overlapping on mobile */
      .active-srv-visual-side-left {
        height: 250px !important;
        width: 100%;
      }
      .active-srv-image-wrapper {
        height: 100% !important;
        width: 100%;
        aspect-ratio: auto !important;
      }
      .active-srv-image-media {
        height: 100% !important;
        object-fit: cover !important;
      }
      /* Hide center logo badge on mobile to prevent clutter */
      .active-srv-center-logo-badge {
        display: none !important;
      }
    }

    /* Left Side: Stretched Image Layout to match Content Column Height exactly */
    .active-srv-visual-side-left {
      display: flex;
      align-items: stretch;
      justify-content: center;
      perspective: 1000px;
      height: 100%;
    }

    .active-srv-image-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: stretch;
      justify-content: center;
      transform-style: preserve-3d;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .active-srv-image-media {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 5;
      border-radius: 16px !important;
      border: 1px solid var(--card-border) !important;
      box-shadow: var(--card-shadow) !important;
    }

    /* Right Side: Simple Corporate Details Layout using premium fonts */
    .active-srv-copy-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      z-index: 5;
      height: 100%;
    }

    /* High-contrast colors configured specifically for light/dark themes */
    /* Typography modified to match the footer headers (sans-serif, bold, tracked) */
    .active-srv-tag-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .active-srv-tag-number-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: #74c044; /* PK Logo Green background */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .active-srv-tag-number {
      font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 800;
      color: #002ea6; /* PK Logo Blue number inside green circle */
    }

    .active-srv-tag-label {
      font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
      font-size: 1.15rem !important;
      font-weight: 750 !important;
      letter-spacing: 0.08em !important;
      color: #002ea6; /* Light Mode PK Logo Blue */
      text-transform: uppercase;
      transition: color 0.4s ease;
      display: inline-block;
    }

    .dark .active-srv-tag-label {
      color: #60a5fa; /* Dark Mode Blue */
    }

    .active-srv-heading {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: clamp(1.8rem, 3.8vw, 2.5rem);
      font-weight: 850;
      letter-spacing: -0.03em;
      color: #74c044; /* Light Mode PK Logo Green */
      margin-bottom: 1.25rem;
      transition: color 0.4s ease;
    }

    .dark .active-srv-heading {
      color: #4ade80; /* Dark Mode PK Logo Green - Fully visible and vibrant */
    }

    .active-srv-desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      line-height: 1.7;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    .active-srv-capability-box {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 1rem;
      font-family: 'Inter', sans-serif;
    }

    .cap-label {
      font-size: 0.65rem;
      font-weight: 750;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--text-muted);
    }

    .cap-val {
      font-size: 0.85rem;
      font-weight: 650;
      color: var(--text-main);
    }

    .active-srv-tech-row {
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      font-weight: 550;
      color: var(--text-muted);
    }

    /* Footer view all link */
    .srv-showcase-footer {
      display: flex;
      justify-content: center;
      margin-top: 3.5rem;
    }

    .srv-view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.25rem;
      border-radius: 30px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      color: var(--text-main) !important;
      transition: transform 0.2s ease, background-color 0.2s ease;
      text-decoration: none;
    }

    .srv-view-all-link:hover {
      transform: translateY(-2px);
      background-color: var(--bg-neutral);
    }
    `
  }} />
);
