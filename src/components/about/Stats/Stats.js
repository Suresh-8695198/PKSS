'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp } from 'lucide-react';
import './Stats.css';

// Simple lightweight React intersection count-up counter
const AnimatedCounter = ({ target, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef(null);
  const [hasIntersected, setHasIntersected] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  React.useEffect(() => {
    if (!hasIntersected) return;

    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) return;
    
    const duration = 1200; // 1.2 seconds animation
    const increment = end / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, hasIntersected]);

  return (
    <span ref={elementRef}>
      {hasIntersected ? count : 0}{suffix}
    </span>
  );
};

export default function Stats() {
  const statsData = [
    {
      target: '250',
      suffix: '+',
      title: 'Enterprise Projects',
      desc: 'We design and deploy custom enterprise database engines, cloud integrations, and core software backends for logistics, healthcare, and retail leaders.',
      image: '/images/about/stats_projects.png',
      cardBg: '#f3faf4', // Soft corporate mint green background tint
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" fill="rgba(40, 88, 23, 0.1)" />
          <line x1="12" y1="15" x2="12" y2="22" />
          <line x1="2" y1="8.5" x2="2" y2="15.5" />
          <line x1="22" y1="8.5" x2="22" y2="15.5" />
          <polyline points="2 15.5 12 22 22 15.5" />
          <polyline points="12 11 22 17.5 12 24 2 17.5 12 11" opacity="0.35" />
        </svg>
      ),
      accentColor: '#285817', // Deep forest green
      accentRgb: '40, 88, 23',
      metrics: [
        { label: 'Active Systems', value: '140+' },
        { label: 'Audits Passed', value: '100%' }
      ]
    },
    {
      target: '80',
      suffix: '+',
      title: 'Global Clients',
      desc: 'Serving corporate clients across North America, Europe, and the APAC region with dedicated onshore and offshore delivery teams.',
      image: '/images/about/stats_clients.png',
      cardBg: '#f0f6fc', // Soft corporate blue/slate background tint
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <circle cx="12" cy="12" r="10" fill="rgba(40, 88, 23, 0.1)" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
      accentColor: '#1a5fb4', // High contrast blue
      accentRgb: '26, 95, 180',
      metrics: [
        { label: 'Client Retention', value: '98.2%' },
        { label: 'Avg Partnership', value: '4.5 Yrs' }
      ]
    },
    {
      target: '24',
      suffix: '/7',
      title: 'Premium Support',
      desc: 'Round-the-clock infrastructure monitoring, system health checks, and direct engineer access with guaranteed response times.',
      image: '/images/about/stats_support.png',
      cardBg: '#faf8f2', // Soft corporate warm sand background tint
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="corp-svg">
          <circle cx="12" cy="12" r="10" fill="rgba(40, 88, 23, 0.1)" />
          <polyline points="12 6 12 12 16 14" />
          <path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="3 3" />
        </svg>
      ),
      accentColor: '#c05621', // Clean warm bronze
      accentRgb: '192, 86, 33',
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
            <Image
              src="/images/services/Border_line.png"
              alt="Section Divider"
              className="stats-divider-img"
              width={280}
              height={15}
              style={{ objectFit: 'contain' }}
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
                '--accent-rgb': item.accentRgb,
                '--card-bg': item.cardBg
              }}
            >
              {/* Card Image with curved wave bottom cut */}
              <div className="stat-card-image-wrap">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  className="stat-card-img" 
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="stat-card-value-badge">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="stat-card-body">
                <div className="stat-card-header">
                  <div className="stat-icon-box">
                    {item.icon}
                  </div>
                  <h3 className="stat-title-label">{item.title}</h3>
                </div>

                <p className="stat-desc-text">{item.desc}</p>
                
                <div className="stat-card-divider" />

                <div className="stat-metrics-subgrid">
                  {item.metrics.map((met, mIdx) => (
                    <div className="stat-sub-unit" key={mIdx}>
                      <span className="stat-sub-val">{met.value}</span>
                      <span className="stat-sub-lbl">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
