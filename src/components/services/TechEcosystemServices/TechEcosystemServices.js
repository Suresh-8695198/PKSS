'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, ChevronRight } from 'lucide-react';
import './TechEcosystemServices.css';

export default function TechEcosystemServices() {
  const [filter, setFilter] = useState('all');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const techStack = [
    {
      name: 'Salesforce',
      cat: 'crm',
      desc: 'Apex, LWC, Cloud Sync',
      icon: '/images/services/logos/salesforce-logo.png',
      efficiency: 'High Scale',
      color: '#00a1e0'
    },
    {
      name: 'HubSpot',
      cat: 'crm',
      desc: 'Ops Hub, Integrations',
      icon: '/images/services/logos/hubspot-logo.png',
      efficiency: 'Rapid Deployment',
      color: '#ff7a59'
    },
    {
      name: 'Zoho',
      cat: 'crm',
      desc: 'Deluge, Zoho Creator',
      icon: '/images/services/logos/zoho-logo.png',
      efficiency: 'High Customization',
      color: '#e2231a'
    },
    {
      name: 'Azure',
      cat: 'cloud',
      desc: 'Enterprise Cloud Systems',
      icon: '/images/services/logos/azure-logo.png',
      efficiency: 'Enterprise Ready',
      color: '#0078d4'
    },
    {
      name: 'AWS',
      cat: 'cloud',
      desc: 'Serverless, Microservices',
      icon: '/images/services/logos/aws-logo.png',
      efficiency: 'Sub-100ms Latency',
      color: '#ff9900'
    },
    {
      name: 'Google Cloud',
      cat: 'cloud',
      desc: 'Compute & Cloud Datasets',
      icon: '/images/services/logos/cloud-logo.png',
      efficiency: 'Global Datasets',
      color: '#4285f4'
    },
    {
      name: 'React / Next.js',
      cat: 'dev',
      desc: 'Headless Frontends',
      icon: '/images/services/logos/react-logo.png',
      efficiency: 'SEO Optimized',
      color: '#61dafb'
    },
    {
      name: 'Flutter',
      cat: 'dev',
      desc: 'Cross-platform Mobile',
      icon: '/images/services/logos/flutter-logo.png',
      efficiency: 'Single-Codebase iOS/Android',
      color: '#02569b'
    },
    {
      name: 'Python / Django',
      cat: 'dev',
      desc: 'Secure Server logic',
      icon: '/images/services/logos/python-logo.png',
      efficiency: 'Fail-Safe Logic',
      color: '#3776ab'
    },
    {
      name: 'Node.js',
      cat: 'dev',
      desc: 'API Gateways & microservices',
      icon: '/images/services/logos/nodejs-logo.png',
      efficiency: 'Asynchronous Threading',
      color: '#339933'
    },
    {
      name: 'Power BI',
      cat: 'data',
      desc: 'Executive Analytics',
      icon: '/images/services/logos/powerbi-logo.png',
      efficiency: 'Real-time Databoards',
      color: '#f2c811'
    },
    {
      name: 'AI / LLM Nodes',
      cat: 'data',
      desc: 'Custom Agents Pipelines',
      icon: '/images/services/logos/llm-logo.png',
      efficiency: 'Vector RAG Pipelines',
      color: '#8a2be2'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'crm', name: 'CRM' },
    { id: 'cloud', name: 'Cloud & Infra' },
    { id: 'dev', name: 'Dev Stacks' },
    { id: 'data', name: 'Data & AI' }
  ];

  const filteredTech = filter === 'all'
    ? techStack
    : techStack.filter(item => item.cat === filter);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="tech-services-section">
      <div className="container">
        {/* Header Section */}
        <div className="tech-srv-header">
          <div className="tech-srv-tag-wrap">
            <Settings className="tech-tag-icon" size={16} />
            <span className="tech-srv-tag">Technical Competency</span>
          </div>
          <h2 className="tech-srv-title">
            Our Development & Integration Stack
          </h2>
          <div className="title-curve-container">
            <Image
              src="/images/services/Border_line.png"
              alt="Section Divider"
              className="srv-title-divider-img"
              width={280}
              height={15}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className="tech-srv-subtitle">
            Enterprise integrations, custom app architectures, and smart automation nodes built on industry-leading frameworks.
          </p>
        </div>

        {/* Dynamic Category Navigation Tab Bar */}
        <div className="tech-srv-tabs-container">
          <div className="tech-srv-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`tech-tab-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {filter === cat.id && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="tech-tab-bg-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="tab-btn-text">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="tech-srv-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech, idx) => (
              <motion.div
                layout
                key={tech.name}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="tech-srv-card"
                style={{ '--accent-color': tech.color }}
              >
                {/* Glowing border line */}
                <div className="card-border-glow" />

                {/* Header: Icon & Category Indicator */}
                <div className="card-header-row">
                  <div className="tech-srv-icon-box">
                    <img src={tech.icon} alt={tech.name} className="tech-srv-logo-img" />
                  </div>
                  <span className="tech-srv-category-tag">
                    {tech.cat.toUpperCase()}
                  </span>
                </div>

                {/* Info Block */}
                <div className="tech-srv-card-body">
                  <h4 className="tech-srv-card-name">{tech.name}</h4>
                  <p className="tech-srv-card-desc">{tech.desc}</p>
                </div>

                {/* Footer Action Area */}
                <div className="tech-srv-card-footer">
                  <div className="footer-spec-dot">
                    <span>{tech.efficiency}</span>
                  </div>
                  <ChevronRight size={14} className="footer-arrow" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
