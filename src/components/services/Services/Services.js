'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import SplitText from '../SplitText';
import './Services.css';

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
