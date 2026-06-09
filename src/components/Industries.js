'use client';

import React, { useState } from 'react';
import { Activity, Settings, ShoppingCart, GraduationCap, Truck, Check } from 'lucide-react';

export default function Industries() {
  const [activeTab, setActiveTab] = useState('healthcare');

  const industriesData = {
    healthcare: {
      title: 'HIPAA-Compliant Healthcare Infrastructure',
      desc: 'Connecting patient records databases, optimizing practitioner pipelines, and deploying secure portals that streamline medical workflows while keeping absolute HIPAA compliance.',
      features: ['Patient Care Portals & Apps', 'EHR System Integrations', 'High-grade Medical Encryption'],
      icon: <Activity />
    },
    manufacturing: {
      title: 'Manufacturing & Smart Supply Chains',
      desc: 'Synchronizing warehouse management nodes with ERP operations. We integrate legacy database registries to enable real-time tracking of asset efficiency, raw supply lines, and shipping stats.',
      features: ['Overall Equipment Effectiveness (OEE)', 'Warehouse Inventory Sync', 'Cloud Supply-Chain Workflows'],
      icon: <Settings />
    },
    retail: {
      title: 'Omnichannel Retail & E-commerce Operations',
      desc: 'Developing headless digital storefronts integrated with inventory databases, order pipelines, and custom HubSpot campaigns to boost repeat sales.',
      features: ['Headless Next.js Commerce', 'Real-time Stock Registries', 'Automated Loyalty Pipelines'],
      icon: <ShoppingCart />
    },
    education: {
      title: 'EdTech & Student Journey Portals',
      desc: 'Automating student lifecycles from initial admissions lead tracking to student portals and alumni relations using custom CRM pipelines.',
      features: ['Student Intake Workflow', 'Multi-tenant LMS Dashboards', 'Alumni Engagement Pipelines'],
      icon: <GraduationCap />
    },
    logistics: {
      title: 'Automated Logistics & Fleet Tracking',
      desc: 'Engineering high-scale routing pipelines, delivery status trackers, and dispatch dashboards that integrate warehouse databases with customer portals.',
      features: ['Real-time Shipment Trackers', 'Automated Fleet Dispatch APIs', 'Central Distribution Ledger'],
      icon: <Truck />
    }
  };

  return (
    <section className="industries-section" id="industries">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Industries</span>
          <h2 className="section-title">Scale-Tailored Software Solutions</h2>
          <p className="section-subtitle">
            Providing custom operational frameworks designed around the regulatory needs and metrics of your industry.
          </p>
        </div>

        <div className="industries-tabs-container">
          <div className="tab-buttons">
            {Object.keys(industriesData).map((key) => (
              <button 
                key={key} 
                className={`tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {industriesData[key].icon}
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </button>
            ))}
          </div>

          <div className="tab-pane-container">
            <div className="tab-pane active">
              <div className="pane-content-info">
                <h3>{industriesData[activeTab].title}</h3>
                <p>{industriesData[activeTab].desc}</p>
                <ul className="pane-checklist">
                  {industriesData[activeTab].features.map((feat, idx) => (
                    <li key={idx}>
                      <div className="check-box-icon"><Check size={14} /></div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pane-content-visual">
                <div className="visual-mockup-frame">
                  <div className="mockup-header-bar">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="mockup-url">https://pkss.com/telemetry/{activeTab}</span>
                  </div>
                  <div className="mockup-canvas-content">
                    <div className="mockup-mini-grid">
                      <div className="mini-card span-2">
                        <span className="mini-lbl">Operational Efficiency</span>
                        <div className="mini-progress-bar"><div className="fill" style={{ width: '82%' }}></div></div>
                      </div>
                      <div className="mini-card">
                        <span className="mini-lbl">Node Sync</span>
                        <span className="mini-val text-green">99.9%</span>
                      </div>
                      <div className="mini-card">
                        <span className="mini-lbl">Alerts</span>
                        <span className="mini-val text-orange">0 Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
