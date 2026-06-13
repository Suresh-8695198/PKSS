'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Activity, Settings, ShoppingCart, GraduationCap, Truck, ArrowRight } from 'lucide-react';
import HealthcareIndustries from './healthcare/healthcare_industries';
import ManufacturingIndustries from './manufacturing/manufacturing_industries';
import RetailIndustries from './retail/retail_industries';
import EducationIndustries from './education/education_industries';
import LogisticsIndustries from './logistics/logistics_industries';
import './Industries.css';

export default function Industries({ preview = false }) {
  const [activeTab, setActiveTab] = useState('healthcare');

  // Track hash changes in full page mode
  useEffect(() => {
    if (preview) return;

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validTabs = ['healthcare', 'manufacturing', 'retail', 'education', 'logistics'];
      if (hash && validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    // Initial check
    handleHashChange();

    // Check periodically for client-side routing changes that don't trigger hashchange natively in Next.js
    const interval = setInterval(handleHashChange, 100);

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      clearInterval(interval);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [preview]);

  // Homepage Preview Mode
  if (preview) {
    return (
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">INDUSTRIES</span>
            <h2 className="section-title">Scale-Tailored Software Solutions</h2>
            <div className="methodology-divider-container" style={{ margin: '-40px auto -34px auto', maxWidth: '280px' }}>
              <img
                src="/images/services/Border_line.png"
                alt="Section Divider"
                className="methodology-divider-img"
              />
            </div>
            <p className="section-subtitle" style={{ marginTop: '0.5rem' }}>
              Providing custom operational frameworks designed around the regulatory needs and metrics of your industry.
            </p>
          </div>

          <div className="brand-values-grid" style={{ marginTop: '3rem' }}>
            <Link href="/industries#healthcare" className="glass-card value-card" style={{ textDecoration: 'none' }}>
              <div className="value-header">
                <div className="value-icon-wrapper">
                  <Activity size={24} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>Healthcare</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto' }}>
                Secure clinical EHR integrations, database scaling & patient triage portals.
              </p>
            </Link>
            
            <Link href="/industries#manufacturing" className="glass-card value-card" style={{ textDecoration: 'none' }}>
              <div className="value-header">
                <div className="value-icon-wrapper">
                  <Settings size={24} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>Manufacturing</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto' }}>
                Factory telemetry dashboards, legacy ERP consolidations & warehouse dispatch.
              </p>
            </Link>
            
            <Link href="/industries#retail" className="glass-card value-card" style={{ textDecoration: 'none' }}>
              <div className="value-header">
                <div className="value-icon-wrapper">
                  <ShoppingCart size={24} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>Retail & Commerce</h3>
              </div>
              <p className="value-description" style={{ minHeight: 'auto' }}>
                Headless e-commerce storefronts, stock sync APIs & checkout CRM flows.
              </p>
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3.5rem' }}>
            <Link href="/industries#healthcare" className="active-nav-btn" style={{ textDecoration: 'none' }}>
              <span>Explore All Industry Solutions</span>
              <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Full Page Mode: Render ONLY the single active component selected via the URL hash
  return (
    <div key={activeTab} className="active-industry-container animate-fade-slide">
      {activeTab === 'healthcare' && <HealthcareIndustries />}
      {activeTab === 'manufacturing' && <ManufacturingIndustries />}
      {activeTab === 'retail' && <RetailIndustries />}
      {activeTab === 'education' && <EducationIndustries />}
      {activeTab === 'logistics' && <LogisticsIndustries />}
    </div>
  );
}
