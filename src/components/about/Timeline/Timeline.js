'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Lightbulb, Search, Settings, Users, BarChart3 } from 'lucide-react';
import './Timeline.css';

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Scroll listener for mobile device traveling selector ring
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 900) return; // Only run on mobile
      const rows = document.querySelectorAll('.serpentine-row');
      const wrapper = document.querySelector('.serpentine-rows');
      if (!rows.length || !wrapper) return;
      
      const wrapperRect = wrapper.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      
      // Find the row closest to the vertical center of the screen
      let activeRowIdx = 0;
      let minDistance = Infinity;
      rows.forEach((row, idx) => {
        const rect = row.getBoundingClientRect();
        const rowCenter = rect.top + rect.height / 2;
        const dist = Math.abs(rowCenter - viewportCenter);
        if (dist < minDistance) {
          minDistance = dist;
          activeRowIdx = idx;
        }
      });
      
      // Calculate active marker's Y center relative to the wrapper
      const activeRow = rows[activeRowIdx];
      const activeRect = activeRow.getBoundingClientRect();
      // Center of the 62px marker is at top + 31px
      const centerRelToWrapper = activeRect.top + 31 - wrapperRect.top;
      
      wrapper.style.setProperty('--traveler-top', `${centerRelToWrapper}px`);
      setActiveIdx(activeRowIdx);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Concept',
      desc: 'Ideation and architecture mapping. We collaborate to define database models, workflows, and scalability requirements before writing code.',
      icon: <Lightbulb size={24} />
    },
    {
      step: '02',
      title: 'Research',
      desc: 'Performing granular feasibility audits, exploring existing CRM APIs (HubSpot, Salesforce, Zoho), and optimizing database schema pathways.',
      icon: <Search size={24} />
    },
    {
      step: '03',
      title: 'Strategy',
      desc: 'Drafting development blueprints, interface wireframes, and deployment schedules to align deliveries with business priorities.',
      icon: <Settings size={24} className="gear-icon" />
    },
    {
      step: '04',
      title: 'Teamwork',
      desc: 'Coordinating expert developers, database administrators, and QA specialists to build responsive frontends and secure data backends.',
      icon: <Users size={24} />
    },
    {
      step: '05',
      title: 'Management',
      desc: 'Managing agile sprint execution, performance monitoring, continuous feedback integration, and rigorous testing routines.',
      icon: <BarChart3 size={24} />
    },
    {
      step: '06',
      title: 'Success',
      desc: 'Achieving stable production launch with zero downtime, robust CRM integration validation, and scalable cloud performance monitoring.',
      // Custom target with exactly ONE arrow on the top-right side (matches Mission graphic)
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="success-archery-icon"
        >
          {/* Target outer ring */}
          <circle cx="10" cy="14" r="7" />
          {/* Target inner ring */}
          <circle cx="10" cy="14" r="3.5" />
          {/* Bullseye center */}
          <circle cx="10" cy="14" r="0.75" fill="currentColor" />
          {/* Single Arrow on one side (from center 10,14 to top-right 19,5) */}
          <line x1="10" y1="14" x2="19" y2="5" />
          {/* Arrow feathers/fletching at top-right (19,5) */}
          <path d="M19 5l-2.5-1" />
          <path d="M19 5l1 2.5" />
          <path d="M16.5 7.5l-2.5-1" />
          <path d="M16.5 7.5l1 2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="timeline-section" id="transformation">
      <div className="container">
        {/* Title Heading - Styled uniquely to avoid conflicts with global services CSS */}
        <div className="methodology-hdr">
          <div className="tech-srv-tag-wrap">
            <Settings className="tech-tag-icon" size={16} />
            <span className="tech-srv-tag">OUR METHODOLOGY</span>
          </div>
          <h2 className="methodology-title">
            The Digital Transformation Blueprint
          </h2>
          <div className="methodology-divider-container">
            <Image
              src="/images/services/Border_line.png"
              alt="Section Divider"
              className="methodology-divider-img"
              width={280}
              height={15}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className="methodology-subtitle">
            A systematic, certified road map ensuring projects launch without downtime and remain fully scalable.
          </p>
        </div>

        <div className="serpentine-wrapper">
          {/* Winding Asphalt Road SVG - Starts exactly at Node 1 (500, 90) and ends at Node 6 (500, 990) */}
          <div className="serpentine-svg-container">
            <svg viewBox="0 0 1000 1080" fill="none" preserveAspectRatio="none" className="serpentine-svg">
              {/* Asphalt Road Bed */}
              <path 
                d="M 500,90 C 800,90 800,270 500,270 C 200,270 200,450 500,450 C 800,450 800,630 500,630 C 200,630 200,810 500,810 C 800,810 800,990 500,990" 
                stroke="#1e293b" 
                strokeWidth="28" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="road-bed"
              />
              {/* White Dashed Divider Line */}
              <path 
                d="M 500,90 C 800,90 800,270 500,270 C 200,270 200,450 500,450 C 800,450 800,630 500,630 C 200,630 200,810 500,810 C 800,810 800,990 500,990" 
                stroke="rgba(255, 255, 255, 0.75)" 
                strokeWidth="2.5" 
                strokeDasharray="8 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="serpentine-rows">
            {/* Mobile Scroll Traveler Selector Ring - Placed inside rows to inherit traveler-top CSS variable */}
            <div className="mobile-scroll-traveler">
              <div className="traveler-circle" />
            </div>

            {steps.map((item, idx) => {
              const isEven = idx % 2 === 1;
              const isActive = idx === activeIdx;
              
              return (
                <div 
                  className={`serpentine-row ${isEven ? 'row-right' : 'row-left'} ${isActive ? 'row-active' : ''}`} 
                  key={idx}
                  onMouseEnter={() => {
                    if (window.innerWidth > 900) {
                      setActiveIdx(idx);
                    }
                  }}
                >
                  {/* Left Column content */}
                  <div className="serpentine-col col-content-left">
                    {!isEven && (
                      <div className={`serpentine-card glass-card ${isActive ? 'active-card' : ''}`}>
                        {isActive && (
                          <div className="border-beam-container">
                            <div className="border-beam-spinning" />
                          </div>
                        )}
                        <span className="card-step-badge">{item.step}</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Center Column marker */}
                  <div className="serpentine-col col-center">
                    {/* START Flag above Step 1 */}
                    {idx === 0 && (
                      <div className="road-flag-container flag-start">
                        <div className="flag-banner">START</div>
                        <div className="flag-pole" />
                      </div>
                    )}
                    
                    {/* GOAL Flag above Step 6 */}
                    {idx === steps.length - 1 && (
                      <div className="road-flag-container flag-goal">
                        <div className="flag-banner">GOAL</div>
                        <div className="flag-pole" />
                      </div>
                    )}
                    
                    <div className="serpentine-marker road-marker">
                      {item.icon}
                    </div>

                    {/* Mobile vertical connection line segments - stops exactly at success marker */}
                    {idx < steps.length - 1 && (
                      <div className={`mobile-connector-line ${isActive ? 'line-active' : ''}`} />
                    )}
                  </div>

                  {/* Right Column content */}
                  <div className="serpentine-col col-content-right">
                    {isEven && (
                      <div className={`serpentine-card glass-card ${isActive ? 'active-card' : ''}`}>
                        {isActive && (
                          <div className="border-beam-container">
                            <div className="border-beam-spinning" />
                          </div>
                        )}
                        <span className="card-step-badge">{item.step}</span>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
