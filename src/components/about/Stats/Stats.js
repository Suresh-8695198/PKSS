'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Building2, Globe2, Clock } from 'lucide-react';
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
      icon: <img src="/images/about/enterprise.png" alt="Enterprise" width={40} height={40} className="corp-svg" />,
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
      icon: <img src="/images/about/Global.png" alt="Global" width={40} height={40} className="corp-svg" />,
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
      icon: <img src="/images/about/support.png" alt="Support" width={40} height={40} className="corp-svg" />,
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
            <Award className="tech-tag-icon" size={16} />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
