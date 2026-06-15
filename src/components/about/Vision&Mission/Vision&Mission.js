'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './Vision&Mission.css';

export default function VisionMission({ preview = false }) {
  return (
    <section className="about-section" id="about">
      {/* Background Animated SVG Illustration - Subpage Only */}
      {!preview && <div className="about-pattern-bg"></div>}
      <div className="container relative-z">
        {preview ? (
          /* Homepage Specific Made in India Stats Layout */
          <div className="about-home-stats-layout">
            <h2 className="made-in-india-title">
              <span>Innovative Software.</span>
              <span>Global Impact.</span>
            </h2>
            <div className="title-underline"></div>

            <div className="stats-row">
              <div className="stat-col">
                <span className="stat-value">150+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-col">
                <span className="stat-value">20+</span>
                <span className="stat-label">Global Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-col">
                <span className="stat-value">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-col">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years of Expertise</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-col">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support Devs</span>
              </div>
            </div>

            <div className="stats-footer">
              <a href="/about" className="more-btn">
                MORE ABOUT PKSS <ChevronRight size={14} className="btn-arrow" />
              </a>
            </div>
          </div>
        ) : (
          /* Subpage Layout (With Cards) */
          <>
            <div className="section-header text-center">
              <span className="section-tag">Corporate Core</span>
              <h2 className="section-title">Architecting The Next Era Of Business Operations</h2>
              <p className="section-subtitle">
                PK Software Solutions starts its journey with a gracious ambition of providing quality software development and strategic consulting services globally, supporting client agility.
              </p>
            </div>

            <div className="brand-values-grid">
              {/* Card 1: Vision */}
              <div className="about-interactive-card card-vision" style={{ '--accent-color': '#3cd0ff' }}>
                <div className="card-top-content">
                  <span className="card-tag">VISION</span>
                  <h3 className="card-heading">Inspiring Global Innovation</h3>

                  <div className="card-hover-desc">
                    <p className="value-description">
                      Inspire the world with our innovative technologies, products, and forward-thinking engineering solutions that transform businesses.
                    </p>
                    <span className="expand-link">
                      Explore <ArrowRight size={14} className="arrow-icon" />
                    </span>
                  </div>
                </div>

                <div className="card-graphic-container">
                  <div className="graphic-glow" />
                  <img
                     src="/images/about/Vision.png"
                     alt="Vision"
                     className="card-graphic-img"
                  />
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="about-interactive-card card-mission" style={{ '--accent-color': '#4ade80' }}>
                <div className="card-top-content">
                  <span className="card-tag">MISSION</span>
                  <h3 className="card-heading">Leading Software Development</h3>

                  <div className="card-hover-desc">
                    <p className="value-description">
                      To be a state of the art infrastructure supported by highly experienced industry experts, acting as a global leader in software development and IT consulting.
                    </p>
                    <span className="expand-link">
                      Explore <ArrowRight size={14} className="arrow-icon" />
                    </span>
                  </div>
                </div>

                <div className="card-graphic-container">
                  <div className="graphic-glow" />
                  <img
                     src="/images/about/Mission.png"
                     alt="Mission"
                     className="card-graphic-img"
                  />
                </div>
              </div>

              {/* Card 3: Commitment */}
              <div className="about-interactive-card card-commitment" style={{ '--accent-color': '#a855f7' }}>
                <div className="card-top-content">
                  <span className="card-tag">COMMITMENT</span>
                  <h3 className="card-heading">Delivering Certified Accuracy</h3>

                  <div className="card-hover-desc">
                    <p className="value-description">
                      To work towards providing innovative solutions for our Global Clients to run their businesses more effectively with certified accuracy and support.
                    </p>
                    <span className="expand-link">
                      Explore <ArrowRight size={14} className="arrow-icon" />
                    </span>
                  </div>
                </div>

                <div className="card-graphic-container">
                  <div className="graphic-glow" />
                  <img
                     src="/images/about/Commitment.png"
                     alt="Commitment"
                     className="card-graphic-img"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

