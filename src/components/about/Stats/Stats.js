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
      icon: <Briefcase size={26} />,
      accentColor: '#74c044', // Green
      metrics: [
        { label: 'Active Systems', value: '140+' },
        { label: 'Audits Passed', value: '100%' }
      ]
    },
    {
      value: '80+',
      title: 'Global Clients',
      desc: 'Trusted technology partnerships with growing enterprises and operations leaders across North America and Europe.',
      icon: <Globe size={26} />,
      accentColor: '#002ea6', // Blue
      metrics: [
        { label: 'Client Retention', value: '98.2%' },
        { label: 'Avg Partnership', value: '4.5 Yrs' }
      ]
    },
    {
      value: '24/7',
      title: 'Premium Support',
      desc: 'Continuous performance monitoring, proactive database auditing, and rapid SLA-driven troubleshooting.',
      icon: <Clock size={26} />,
      accentColor: '#00B8FF', // Cyan
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
              style={{ '--accent-color': item.accentColor }}
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
