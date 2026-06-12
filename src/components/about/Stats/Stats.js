'use client';

import React from 'react';
import { Briefcase, Globe, Clock, TrendingUp } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const statsData = [
    {
      value: '250+',
      title: 'Enterprise Projects',
      desc: 'High-performance software systems and database backends engineered to support complex business workflows.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" fill="rgba(116, 192, 68, 0.15)" />
          <line x1="12" y1="15" x2="12" y2="22" />
          <line x1="2" y1="8.5" x2="2" y2="15.5" />
          <line x1="22" y1="8.5" x2="22" y2="15.5" />
          <polyline points="2 15.5 12 22 22 15.5" />
          <polyline points="12 11 22 17.5 12 24 2 17.5 12 11" opacity="0.35" />
        </svg>
      ),
      accentColor: '#74c044', // Lime Green
      accentRgb: '116, 192, 68',
      metrics: [
        { label: 'Active Systems', value: '140+' },
        { label: 'Audits Passed', value: '100%' }
      ]
    },
    {
      value: '80+',
      title: 'Global Clients',
      desc: 'Trusted technology partnerships with growing enterprises and operations leaders across North America and Europe.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <circle cx="12" cy="12" r="10" fill="rgba(162, 255, 117, 0.1)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" className="pulse-node" />
          <circle cx="7" cy="8" r="1" fill="currentColor" />
          <circle cx="17" cy="16" r="1" fill="currentColor" />
        </svg>
      ),
      accentColor: '#a2ff75', // Mint/Grass Green
      accentRgb: '162, 255, 117',
      metrics: [
        { label: 'Client Retention', value: '98.2%' },
        { label: 'Avg Partnership', value: '4.5 Yrs' }
      ]
    },
    {
      value: '24/7',
      title: 'Premium Support',
      desc: 'Continuous performance monitoring, proactive database auditing, and rapid SLA-driven troubleshooting.',
      icon: (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <circle cx="12" cy="12" r="10" fill="rgba(89, 167, 0, 0.15)" />
          <polyline points="12 6 12 12 16 14" className="clock-hand" />
          <path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="3 3" />
        </svg>
      ),
      accentColor: '#59a700', // Corporate Brand Green
      accentRgb: '89, 167, 0',
      metrics: [
        { label: 'SLA Compliance', value: '99.9%' },
        { label: 'Response Time', value: '<15 Min' }
      ]
    }
  ];

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        {/* Section Header */}
        <div className="stats-hdr">
          <div className="tech-srv-tag-wrap">
            <TrendingUp className="tech-tag-icon" size={16} />
            <span className="tech-srv-tag">OUR IMPACT</span>
          </div>
          <h2 className="stats-title">
            Empowering Growth Through Numbers
          </h2>
          <div className="stats-divider-container">
            <img
              src="/images/services/Border_line.png"
              alt="Section Divider"
              className="stats-divider-img"
            />
          </div>
          <p className="stats-subtitle">
            A verified track record of engineering resilient software systems, fostering long-term trust, and delivering uninterrupted operational continuity.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((item, idx) => (
            <div 
              className="stat-card" 
              key={idx}
              style={{ 
                '--accent-color': item.accentColor,
                '--accent-rgb': item.accentRgb
              }}
            >
              <div className="stat-card-header">
                <div className="stat-icon-box">
                  {item.icon}
                </div>
                <div className="stat-header-text">
                  <span className="stat-value">{item.value}</span>
                  <h3 className="stat-title-label">{item.title}</h3>
                </div>
              </div>

              <div className="stat-card-divider" />
              
              <p className="stat-desc-text">{item.desc}</p>
              
              <div className="stat-metrics-subgrid">
                {item.metrics.map((met, mIdx) => (
                  <div className="stat-sub-unit" key={mIdx}>
                    <span className="stat-sub-val">{met.value}</span>
                    <span className="stat-sub-lbl">{met.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
