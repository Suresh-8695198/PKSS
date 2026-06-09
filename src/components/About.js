'use client';

import React from 'react';

export default function About() {
  const brandValues = [
    {
      title: 'Our Vision',
      desc: 'Inspire the world with our innovative technologies and products.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="#3cd0ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 9L14 12L12 15L10 12L12 9Z" fill="#3cd0ff" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: 'Our Mission',
      desc: 'To be a state of art infrastructure supported by highly experienced industry experts, acting as a global leader in software development and IT consulting.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" stroke="#3cd0ff" strokeWidth="1.5" />
          <path d="M15 9L20 4" stroke="#3cd0ff" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 7V4H17" stroke="#3cd0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: 'Our Commitment',
      desc: 'To work towards providing innovative solutions for our Global Clients to run their businesses more effectively with certified accuracy.',
      icon: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 6L14 10L18 11L15 14L16 18L12 16L8 18L9 14L6 11L10 10L12 6Z" fill="#3cd0ff" opacity="0.8" />
        </svg>
      )
    }
  ];

  return (
    <section className="about-section" id="about">
      {/* Background Animated SVG Hyper Illustration */}
      <div className="about-pattern-bg"></div>
      <div className="container relative-z">
        <div className="section-header text-center">
          <span className="section-tag">Corporate Core</span>
          <h2 className="section-title">Architecting The Next Era Of Business Operations</h2>
          <p className="section-subtitle">
            PK Software Solutions starts its journey with a gracious ambition of providing quality software development and strategic consulting services globally, supporting client agility.
          </p>
        </div>

        <div className="brand-values-grid">
          {brandValues.map((value, idx) => (
            <div className="glass-card value-card" key={idx}>
              <div className="value-header">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
              </div>
              <p className="value-description">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
