'use client';

import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      text: 'PK Software Solutions completely restructured our Salesforce setup. Their transition was seamless, and the Lightning Component custom build dramatically improved our sales pipeline efficiency.',
      author: 'Marcus Vance',
      role: 'VP of IT Operations, Apex Finance'
    },
    {
      text: 'Their custom Power BI dashboards and data lake architectures on Azure gave our team real-time visibility into operational telemetry that we previously had to compile manually.',
      author: 'Sarah Jenkins',
      role: 'Director of Customer Success, BioHealth Inc.'
    },
    {
      text: 'The Zoho Creator integration developed by PKSS synchronized our warehousing, inventory databases, and dispatch teams without a single hour of operational downtime.',
      author: 'Anand Sen',
      role: 'Chief Technical Officer, Vanguard Retail'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">Client Success Stories</h2>
        </div>

        <div className="testimonials-slider-container">
          <div 
            className="testimonials-slider-track"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div className="testimonial-slide" key={idx}>
                <div className="glass-card testimonial-card">
                  <Quote className="quote-icon" size={40} />
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author-details">
                    <span className="author-name">{t.author}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot-btn ${activeIdx === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveIdx(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
