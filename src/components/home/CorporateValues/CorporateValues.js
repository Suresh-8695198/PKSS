'use client';

import React from 'react';
import { Handshake, HeartHandshake, ShieldCheck, Target, ChevronRight } from 'lucide-react';
import './CorporateValues.css';

export default function CorporateValues() {
  return (
    <section className="corporate-values-section" id="values">
      {/* Team Conference Event Photo Banner */}
      <div className="corporate-values-banner">
        <div className="banner-image-wrapper">
          <img 
            src="/images/home/corporate_office_banner.png" 
            alt="PKSS Corporate Workspace" 
            className="banner-image"
          />
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <h2 className="banner-logo-title">PKSS TOGETHER 2026</h2>
        </div>
      </div>

      {/* Core Values Card Overlapping the Banner */}
      <div className="container values-container">
        <div className="values-card">
          <div className="values-header">
            <h3 className="values-title">The core values and principles that drive us</h3>
            <div className="values-title-line"></div>
          </div>

          <div className="values-grid">
            {/* Value 1: Long-term commitment */}
            <div className="value-item">
              <div className="value-icon-col">
                <Handshake className="value-icon" size={36} strokeWidth={1.5} />
              </div>
              <div className="value-text-col">
                <h4 className="value-name">Long-term commitment</h4>
                <p className="value-desc">
                  30+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that's powered by you, our customer.
                </p>
              </div>
            </div>

            {/* Value 2: Customer-first philosophy */}
            <div className="value-item">
              <div className="value-icon-col">
                <HeartHandshake className="value-icon" size={36} strokeWidth={1.5} />
              </div>
              <div className="value-text-col">
                <h4 className="value-name">Customer-first philosophy</h4>
                <p className="value-desc">
                  In all these years, it's our customers' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we're here to help you grow.
                </p>
              </div>
            </div>

            {/* Value 3: Privacy and security as a priority */}
            <div className="value-item">
              <div className="value-icon-col">
                <ShieldCheck className="value-icon" size={36} strokeWidth={1.5} />
              </div>
              <div className="value-text-col">
                <h4 className="value-name">Privacy and security as a priority</h4>
                <p className="value-desc">
                  We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.
                </p>
              </div>
            </div>

            {/* Value 4: Focus on research and development */}
            <div className="value-item">
              <div className="value-icon-col">
                <Target className="value-icon" size={36} strokeWidth={1.5} />
              </div>
              <div className="value-text-col">
                <h4 className="value-name">Focus on research and development</h4>
                <p className="value-desc">
                  Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.
                </p>
              </div>
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className="values-footer">
            <a href="/about" className="read-story-btn">
              READ OUR STORY <ChevronRight size={16} className="btn-arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
