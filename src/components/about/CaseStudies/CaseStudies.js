'use client';

import React from 'react';
import { ShieldAlert, Database, CheckCircle } from 'lucide-react';
import './CaseStudies.css';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Salesforce Custom Lightning Implementation',
      client: 'Tawny Technologies',
      challenge: 'Legacy customer data scattered across offline excel sheets and outdated local database structures.',
      result: 'Unified customer journey in custom Salesforce Lightning Cloud. Integrated third-party inventory APIs.',
      metrics: [
        { lbl: 'Data Integrity', val: '+99.99%' },
        { lbl: 'Lead Conversion Speed', val: '-40%' }
      ],
      icon: <CheckCircle className="case-icon green" />
    },
    {
      title: 'HIPAA Patient Database Architecture',
      client: 'Ideal Life Sciences',
      challenge: 'Slow patient database query response times, posing compliance risk for audit deadlines.',
      result: 'Developed a partition-optimized data lake on Microsoft Azure with custom ETL pipeline controls.',
      metrics: [
        { lbl: 'Records Synced', val: '1.2B' },
        { lbl: 'Operational Latency', val: '-18%' }
      ],
      icon: <Database className="case-icon cyan" />
    }
  ];

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Validated Enterprise Outcomes</h2>
          <p className="section-subtitle">
            Exploring how we solve core performance issues, modernize legacy architectures, and optimize processes.
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((cs, idx) => (
            <div className="glass-card case-card" key={idx}>
              <div className="case-card-header">
                {cs.icon}
                <div>
                  <span className="case-client">{cs.client}</span>
                  <h3>{cs.title}</h3>
                </div>
              </div>

              <div className="case-card-body">
                <div className="case-detail-row">
                  <strong>Challenge:</strong>
                  <p>{cs.challenge}</p>
                </div>
                <div className="case-detail-row">
                  <strong>Solution:</strong>
                  <p>{cs.result}</p>
                </div>
              </div>

              <div className="case-metrics-row">
                {cs.metrics.map((m, mIdx) => (
                  <div className="case-metric-unit" key={mIdx}>
                    <span className="case-metric-val">{m.val}</span>
                    <span className="case-metric-lbl">{m.lbl}</span>
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
