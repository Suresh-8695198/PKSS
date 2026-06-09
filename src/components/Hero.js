'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Cpu, Network, Fingerprint, Layers, Activity, Sparkles } from 'lucide-react';

export default function Hero() {
  const visualRef = useRef(null);
  const words = ["Web Design", "Software Dev", "Mobile Apps", "IT Training"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    visualRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section className="hero-section" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Modern Trending Animated Background Elements */}
      <div className="modern-bg-element bg-shape-1"></div>
      <div className="modern-bg-element bg-shape-2"></div>
      <div className="modern-bg-element bg-shape-3"></div>

      {/* Floating Premium Icons Layer */}
      <div className="floating-icons-layer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3, overflow: 'hidden' }}>
        <div className="floating-tech-icon" style={{ top: '15%', left: '10%', animationDelay: '0s', transform: 'scale(1.1)' }}>
          <Cpu size={46} color="#0057D9" style={{ filter: 'drop-shadow(0 15px 25px rgba(0, 87, 217, 0.4))' }} />
        </div>
        <div className="floating-tech-icon" style={{ top: '45%', left: '5%', animationDelay: '-2s', transform: 'scale(0.9)' }}>
          <Fingerprint size={42} color="#59A700" style={{ filter: 'drop-shadow(0 12px 20px rgba(89, 167, 0, 0.4))' }} />
        </div>
        <div className="floating-tech-icon" style={{ top: '22%', right: '12%', animationDelay: '-1s', transform: 'scale(1.1)' }}>
          <Layers size={48} color="#00B8FF" style={{ filter: 'drop-shadow(0 15px 25px rgba(0, 184, 255, 0.4))' }} />
        </div>
        <div className="floating-tech-icon" style={{ top: '65%', right: '8%', animationDelay: '-3s' }}>
          <Network size={44} color="#0057D9" style={{ filter: 'drop-shadow(0 12px 20px rgba(0, 87, 217, 0.4))' }} />
        </div>
        <div className="floating-tech-icon" style={{ bottom: '15%', left: '14%', animationDelay: '-4s', transform: 'scale(1.05)' }}>
          <Sparkles size={44} color="#84D800" style={{ filter: 'drop-shadow(0 15px 25px rgba(132, 216, 0, 0.4))' }} />
        </div>
        <div className="floating-tech-icon" style={{ bottom: '25%', right: '20%', animationDelay: '-5s', transform: 'scale(0.95)' }}>
          <Activity size={42} color="#0057D9" style={{ filter: 'drop-shadow(0 12px 20px rgba(0, 87, 217, 0.4))' }} />
        </div>
      </div>
      
      <div className="container hero-grid" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-content" style={{ marginTop: '2rem' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', lineHeight: '1.15', textAlign: 'center', marginBottom: '1.25rem' }}>
            <span className="screenshot-gradient-text-subtle">Welcome to</span> <span className="screenshot-gradient-text">PK Software Solutions</span>
            <br />
            No.1 <span key={wordIndex} className="screenshot-gradient-text-green animated-word">{words[wordIndex]}</span> in Salem
          </h1>
          <p className="hero-subtitle" style={{ textAlign: 'center' }}>
            Providing innovative, cost-effective, and timely IT solutions and quality training to drive the global growth of small and medium-sized businesses.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn-outline-pill">
              <span>View Services</span>
            </a>
            <a href="#contact" className="btn-glowing">
              <span>Start Your Project</span>
              <div style={{ background: '#fff', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ArrowRight size={14} color="#0057D9" />
              </div>
            </a>
          </div>
          
          <div className="hero-partners">
            <div className="partners-logos" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" style={{ height: '36px', opacity: 0.9, transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)'}} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" style={{ height: '32px', opacity: 0.9, transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)'}} />
              <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="ZOHO" style={{ height: '28px', opacity: 0.9, transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)'}} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" style={{ height: '30px', opacity: 0.9, transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)'}} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" style={{ height: '30px', opacity: 0.9, transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.transform='scale(1.05)'}} onMouseOut={e => {e.currentTarget.style.transform='scale(1)'}} />
            </div>
          </div>
        </div>

        {/* Modern Framed High-Quality Centered Visual (Similar to Reference) */}
        <div className="hero-visual" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
          <div 
            className="visual-image-container"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              borderRadius: '500px', /* circular oval container aesthetic */
              padding: '6px',
              background: 'linear-gradient(135deg, rgba(0, 87, 217, 0.4), rgba(0, 184, 255, 0.1))',
              boxShadow: '0 20px 60px -15px rgba(0, 87, 217, 0.3)'
            }}
          >
            {/* Inner rounded wrapper */}
            <div style={{ borderRadius: '500px', overflow: 'hidden', position: 'relative', background: 'var(--bg-dark)' }}>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern IT Data Analytics Dashboard and Development" 
                style={{
                  width: '100%',
                  height: '400px',
                  display: 'block',
                  objectFit: 'cover',
                  opacity: 0.9
                }}
              />
              {/* Glossy Overlay */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
                pointerEvents: 'none'
              }}></div>
            </div>
            
            {/* Context Badge Floating */}
            <div style={{
              position: 'absolute',
              bottom: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(10px)',
              padding: '0.8rem 2rem',
              borderRadius: '50px',
              border: '1px solid var(--border-glass)',
              boxShadow: 'var(--shadow-soft)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              whiteSpace: 'nowrap'
            }}>
               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#0057D9', boxShadow: '0 0 10px #0057D9' }}></div>
               <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>AI Documentation For Enterprise Tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
