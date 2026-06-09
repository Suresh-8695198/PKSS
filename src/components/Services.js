'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  const servicesData = [
    {
      id: 'app-dev',
      title: 'Application Development',
      summary: 'Designing full-stack web architectures and responsive mobile experiences (Android & iOS). We match scalable databases with client UI/UX targets.',
      details: [
        'Responsive Headless Next.js Platforms',
        'Cross-platform Flutter Mobile Systems',
        'Enterprise Restful API Integrations'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="12" rx="1.5" stroke="#002ea6" strokeWidth="2" />
          <path d="M6 15H18M9 21H15M12 15V21" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 7L6 9L8 11M16 7L18 9L16 11" stroke="#59a700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      summary: 'Convert raw corporate information into actionable business insights. We build secure data storage lake infrastructures and live dashboards.',
      details: [
        'Secure ETL & Data Lake Setup',
        'Interactive Power BI Dashboards',
        'Predictive Machine Learning Pipelines'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20H20" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 20V12M11 20V6M16 20V10" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 10L11 4L17 8L21 2" stroke="#59a700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'outsourcing',
      title: 'Outsourcing Solutions',
      summary: 'Scale operations dynamically using our specialized offshore software developer squads. We manage project deliverable pipelines under strict SLAs.',
      details: [
        'Dedicated Developer Pod Augmentation',
        'Agile Sprint Board Telemetry Syncs',
        '100% Code Quality Review Pipelines'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="7" r="4" stroke="#002ea6" strokeWidth="2" />
          <path d="M5 20C5 17 8 15 12 15C16 15 19 17 19 20" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="6" cy="14" r="2" fill="#59a700" />
          <circle cx="18" cy="14" r="2" fill="#59a700" />
        </svg>
      )
    },
    {
      id: 'training',
      title: 'Corporate Training',
      summary: 'Customized placement training cohorts for IT and Non-IT candidates. PKSS offers certified upskilling paths and live project scenarios.',
      details: [
        '100% Job Placement Guarantee',
        'Certified CRM Upskilling Courses',
        'Live Enterprise Project Case Studies'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="11" rx="1" stroke="#002ea6" strokeWidth="2" />
          <path d="M9 21H15M12 14V21" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 7L10 10L13 7" stroke="#59a700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="15" y1="7" x2="17" y2="7" stroke="#59a700" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="15" y1="9" x2="17" y2="9" stroke="#59a700" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'consulting',
      title: 'Consultancy Services',
      summary: 'Architecting high-scale digital strategies. We run audits, optimize database query pools, and resolve latency bottlenecks.',
      details: [
        'Technical Architecture Audits',
        'IT Resource Augmentation Pools',
        'Code Security & Dependency Appraisals'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="18" height="13" rx="1.5" stroke="#002ea6" strokeWidth="2" />
          <path d="M9 7V4C9 3.5 9.5 3 10 3H14C14.5 3 15 3.5 15 7" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="13" r="2" stroke="#59a700" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'salesforce',
      title: 'Salesforce Consulting',
      summary: 'Certified customization of Sales, Service, and Marketing Clouds. Standardize Lightning Web Components (LWC) configurations.',
      details: [
        'LWC & Custom Apex Programming',
        'Custom Third-party ERP Integrations',
        'Data Migration from Legacy Structures'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 10C21.2 10 23 11.8 23 14C23 16.2 21.2 18 19 18H6C3.8 18 2 16.2 2 14C2 12.1 3.3 10.5 5.1 10.1C5.7 7.2 8.2 5 11.2 5C14.8 5 17.9 7.6 18.5 11C18.7 11 18.8 11 19 11V10Z" stroke="#002ea6" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 14L12 12L14 14" stroke="#59a700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'hubspot',
      title: 'HubSpot CRM Solutions',
      summary: 'Pipeline optimization and marketing automation setup. Streamline HubSpot CRM integrations with transactional databases.',
      details: [
        'Automated Lead Scoring Pipelines',
        'Custom HubSpot REST API Connections',
        'Customer Operations Hub Setup'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4H21L14 13V19L10 21V13L3 4Z" stroke="#002ea6" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.5" fill="#59a700" />
        </svg>
      )
    },
    {
      id: 'zoho',
      title: 'Zoho Development',
      summary: 'End-to-end implementation of the Zoho One suite. Custom Deluge scripting and Creator app architecture to connect operations.',
      details: [
        'Deluge Script Custom Connections',
        'Bespoke Creator Application Design',
        'Zoho Books & Finance Pipeline Sync'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="#002ea6" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="#002ea6" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="#59a700" strokeWidth="2" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="#59a700" strokeWidth="2" />
          <path d="M10 6.5H14M10 17.5H14M6.5 10V14M17.5 10V14" stroke="#002ea6" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Cloud Engineering',
      summary: 'Design and deploy secure, robust cloud systems on AWS and Microsoft Azure. Focus on containerization and zero-downtime APIs.',
      details: [
        'Infrastructure as Code (Terraform)',
        'Serverless APIs & Kubernetes (EKS)',
        'ISO-27001 Security Audit Hardening'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="7" rx="1.5" stroke="#002ea6" strokeWidth="2" />
          <rect x="3" y="14" width="18" height="7" rx="1.5" stroke="#002ea6" strokeWidth="2" />
          <circle cx="7" cy="6.5" r="1" fill="#59a700" />
          <circle cx="7" cy="17.5" r="1" fill="#59a700" />
          <circle cx="10" cy="6.5" r="1" fill="#59a700" />
          <circle cx="10" cy="17.5" r="1" fill="#59a700" />
        </svg>
      )
    },
    {
      id: 'ai-automation',
      title: 'AI & Intelligent Automation',
      summary: 'Leverage LLM integrations, document cognitive extraction, and robotic workflows to reduce company operational costs.',
      details: [
        'Retrieval-Augmented Generation (RAG)',
        'Custom AI Agent Development',
        'Document Process Automation (OCR)'
      ],
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5" stroke="#002ea6" strokeWidth="2" />
          <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#59a700" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 9V12L14 14" stroke="#59a700" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const handleCardToggle = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Core Offerings</span>
          <h2 className="section-title">Specialized Enterprise Business Domains</h2>
          <p className="section-subtitle">
            Providing tailored, certified expertise across core software architectures, CRM integrations, and predictive data systems.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, idx) => {
            const isExpanded = expandedCard === service.id;
            const cardColors = ['card-slate', 'card-blue-tint', 'card-green-tint'];
            const colorClass = cardColors[idx % cardColors.length];
            return (
              <div 
                className={`glass-card service-card ${colorClass} ${isExpanded ? 'expanded' : ''}`} 
                key={service.id}
                onClick={() => handleCardToggle(service.id)}
              >
                <div className="service-card-top">
                  <div className="service-icon-box">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                </div>

                <div className="service-expand-control">
                  <span className="expand-txt">{isExpanded ? 'Show Less' : 'Explore Capabilities'}</span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>

                <div className={`service-expand-content ${isExpanded ? 'show' : ''}`}>
                  <ul className="spec-list">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>
                        <span className="bullet-node"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
