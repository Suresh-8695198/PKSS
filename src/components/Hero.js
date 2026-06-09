'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          position: relative;
          padding-top: 140px;
          padding-bottom: 100px;
          overflow: hidden;
          background-color: var(--bg-dark);
          min-height: 95vh;
          display: flex;
          align-items: center;
          transition: background-color 0.4s ease;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
              linear-gradient(to right, var(--border-glass) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-glass) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 50%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 90%);
          z-index: 0;
          pointer-events: none;
        }

        .modern-bg-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 1;
          pointer-events: none;
          opacity: 0.55;
          animation: pulseGlow 12s infinite alternate ease-in-out;
        }

        .bg-shape-1 {
          width: 50vw;
          height: 50vw;
          max-width: 800px;
          max-height: 800px;
          background: radial-gradient(circle, rgba(0, 46, 166, 0.15) 0%, rgba(0,0,0,0) 70%);
          top: -10%;
          left: -10%;
        }

        .bg-shape-2 {
          width: 45vw;
          height: 45vw;
          max-width: 700px;
          max-height: 700px;
          background: radial-gradient(circle, rgba(89, 167, 0, 0.1) 0%, rgba(0,0,0,0) 70%);
          bottom: -10%;
          right: -5%;
          animation-delay: -6s;
        }

        @keyframes pulseGlow {
          0% { transform: scale(1) translate(0, 0); opacity: 0.45; }
          100% { transform: scale(1.08) translate(20px, -20px); opacity: 0.75; }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(0, 46, 166, 0.05);
          border: 1px solid rgba(0, 46, 166, 0.1);
          border-radius: 50px;
          color: var(--blue);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          animation: pulseBadge 3s infinite ease-in-out;
        }

        .dark .hero-badge {
          background: rgba(0, 184, 255, 0.06);
          border-color: rgba(0, 184, 255, 0.15);
          color: #00B8FF;
        }

        @keyframes pulseBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .gradient-accent {
          background: linear-gradient(135deg, #0057D9 0%, #00B8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .gradient-green {
          background: linear-gradient(135deg, #59A700 0%, #84D800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 1.12rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 620px;
        }

        @media (max-width: 991px) {
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
        }

        .hero-actions {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }

        @media (max-width: 991px) {
          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions a {
            width: 100%;
            text-align: center;
          }
        }

        .hero-partners {
          border-top: 1px solid var(--border-glass);
          padding-top: 2rem;
          text-align: left;
        }

        @media (max-width: 991px) {
          .hero-partners {
            text-align: center;
          }
        }

        .partners-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }

        .partners-grid {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        @media (max-width: 991px) {
          .partners-grid {
            justify-content: center;
          }
        }

        .partner-img {
          height: 24px;
          opacity: 0.45;
          filter: grayscale(1);
          transition: all 0.3s ease;
        }

        .partner-img:hover {
          opacity: 0.95;
          filter: grayscale(0);
          transform: translateY(-2px);
        }

        /* Responsive SVG Illustration */
        .hero-svg-wrapper {
          position: relative;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
        }

        .hero-svg-canvas {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }

        /* SVG Micro animations */
        .spinning-ring {
          transform-origin: 0px 0px;
          animation: spin 30s linear infinite;
        }

        .spinning-ring-rev {
          transform-origin: 0px 0px;
          animation: spinRev 25s linear infinite;
        }

        .pulsing-core {
          transform-origin: 0px 0px;
          animation: pulse 3s infinite alternate ease-in-out;
        }

        .float-node-1 { animation: float1 6s infinite alternate ease-in-out; }
        .float-node-2 { animation: float2 7s infinite alternate ease-in-out; }
        .float-node-3 { animation: float3 6.5s infinite alternate ease-in-out; }
        .float-node-4 { animation: float4 7.5s infinite alternate ease-in-out; }
        .float-node-center { animation: floatC 8s infinite alternate ease-in-out; }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinRev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse {
          0% { transform: scale(0.92); opacity: 0.75; }
          100% { transform: scale(1.08); opacity: 1; }
        }

        @keyframes float1 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-14px); }
        }
        @keyframes float3 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes float4 {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-12px); }
        }
        @keyframes floatC {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-6px); }
        }
      `}} />

      <div className="modern-bg-element bg-shape-1"></div>
      <div className="modern-bg-element bg-shape-2"></div>

      <div className="container">
        <div className="hero-grid">
          {/* Left Column */}
          <div className="hero-left-column">
            <div className="hero-badge">
              <Sparkles size={13} style={{ marginRight: '0.15rem' }} />
              <span>Leading Software & CRM Engineering</span>
            </div>

            <h1 className="hero-title">
              We Architect Custom <br />
              <span className="gradient-accent">Software Solutions</span> <br />
              &amp; <span className="gradient-green">CRM Ecosystems</span>
            </h1>

            <p className="hero-subtitle">
              Empowering global brands and local leaders with high-performance Web Apps, 
              Certified Salesforce Consulting, Zoho Deluge workflows, HubSpot CRM automations, 
              and placement-backed training.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary" style={{ borderRadius: '50px' }}>
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary" style={{ borderRadius: '50px' }}>
                <span>Explore Services</span>
              </Link>
            </div>

            <div className="hero-partners">
              <p className="partners-title">Authorized Technology Competencies</p>
              <div className="partners-grid">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="partner-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="partner-img" />
                <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" className="partner-img" style={{ height: '22px' }} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Azure" className="partner-img" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="partner-img" />
              </div>
            </div>
          </div>

          {/* Right Column: Premium Animated 3D Isometric SVG */}
          <div className="hero-right-column">
            <div className="hero-svg-wrapper">
              <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg-canvas">
                <defs>
                  {/* Neon Glow Filter */}
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient Glow */}
                  <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 92, 217, 0.25)" />
                    <stop offset="100%" stopColor="rgba(0, 92, 217, 0)" />
                  </radialGradient>

                  {/* Node Gradients */}
                  <linearGradient id="blue3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00B8FF" />
                    <stop offset="100%" stopColor="#002EA6" />
                  </linearGradient>

                  <linearGradient id="green3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#84D800" />
                    <stop offset="100%" stopColor="#3d7000" />
                  </linearGradient>

                  <linearGradient id="accent3D" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e28743" />
                    <stop offset="100%" stopColor="#a35415" />
                  </linearGradient>
                </defs>

                {/* Ambient backdrop glow */}
                <circle cx="300" cy="250" r="180" fill="url(#radialGlow)" />

                {/* Glowing Laser Paths */}
                <path id="laser1" d="M 160 140 Q 220 170 300 250" stroke="#00B8FF" strokeWidth="2.5" filter="url(#neon-glow)" opacity="0.4" />
                <path id="laser2" d="M 440 140 Q 380 170 300 250" stroke="#00B8FF" strokeWidth="2.5" filter="url(#neon-glow)" opacity="0.4" />
                <path id="laser3" d="M 160 360 Q 220 330 300 250" stroke="#84D800" strokeWidth="2.5" filter="url(#neon-glow)" opacity="0.4" />
                <path id="laser4" d="M 440 360 Q 380 330 300 250" stroke="#e28743" strokeWidth="2.5" filter="url(#neon-glow)" opacity="0.4" />

                {/* Laser pulses flowing between nodes */}
                <circle r="4" fill="#00B8FF" filter="url(#neon-glow)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M 160 140 Q 220 170 300 250" />
                </circle>
                <circle r="4" fill="#84D800" filter="url(#neon-glow)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" path="M 440 140 Q 380 170 300 250" />
                </circle>
                <circle r="4" fill="#59A700" filter="url(#neon-glow)">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path="M 160 360 Q 220 330 300 250" />
                </circle>
                <circle r="4" fill="#e28743" filter="url(#neon-glow)">
                  <animateMotion dur="2.6s" repeatCount="indefinite" path="M 440 360 Q 380 330 300 250" />
                </circle>

                {/* 1. Top-Left Node: Web Solutions */}
                <g className="float-node-1">
                  <g transform="translate(160, 140)">
                    <circle r="40" fill="var(--bg-deep)" stroke="url(#blue3D)" strokeWidth="1.5" />
                    <g className="spinning-ring">
                      <circle r="46" fill="none" stroke="rgba(0, 184, 255, 0.3)" strokeWidth="1" strokeDasharray="6 4" />
                    </g>
                    {/* 3D Isometric Cube design for Web Solutions */}
                    <polygon points="0,-16 18,-6 0,4 -18,-6" fill="#00B8FF" opacity="0.9" />
                    <polygon points="-18,-6 0,4 0,20 -18,10" fill="#0057D9" />
                    <polygon points="0,4 18,-6 18,10 0,20" fill="#002EA6" />

                    <g transform="translate(0, 60)">
                      <rect x="-48" y="-10" width="96" height="20" rx="4" fill="var(--bg-card)" stroke="var(--border-glass)" strokeWidth="1" />
                      <text textAnchor="middle" y="3" fontFamily="var(--font-heading)" fontWeight="900" fontSize="8" fill="var(--text-primary)" letterSpacing="0.05em">WEB SOLUTIONS</text>
                    </g>
                  </g>
                </g>

                {/* 2. Top-Right Node: Salesforce CRM */}
                <g className="float-node-2">
                  <g transform="translate(440, 140)">
                    <circle r="40" fill="var(--bg-deep)" stroke="url(#blue3D)" strokeWidth="1.5" />
                    <g className="spinning-ring-rev">
                      <circle r="46" fill="none" stroke="rgba(0, 87, 217, 0.3)" strokeWidth="1" strokeDasharray="8 4" />
                    </g>
                    {/* 3D Cloud Base Isometric Block */}
                    <polygon points="0,-14 16,-5 0,4 -16,-5" fill="#00B8FF" opacity="0.9" />
                    <polygon points="-16,-5 0,4 0,16 -16,7" fill="#0057D9" />
                    <polygon points="0,4 16,-5 16,16 0,16" fill="#002EA6" />
                    
                    <g transform="translate(0, 60)">
                      <rect x="-54" y="-10" width="108" height="20" rx="4" fill="var(--bg-card)" stroke="var(--border-glass)" strokeWidth="1" />
                      <text textAnchor="middle" y="3" fontFamily="var(--font-heading)" fontWeight="900" fontSize="8" fill="var(--text-primary)" letterSpacing="0.05em">SALESFORCE CLOUD</text>
                    </g>
                  </g>
                </g>

                {/* 3. Bottom-Left Node: Zoho CRM */}
                <g className="float-node-3">
                  <g transform="translate(160, 360)">
                    <circle r="40" fill="var(--bg-deep)" stroke="url(#green3D)" strokeWidth="1.5" />
                    <g className="spinning-ring">
                      <circle r="46" fill="none" stroke="rgba(89, 167, 0, 0.3)" strokeWidth="1" strokeDasharray="6 4" />
                    </g>
                    {/* 3D Isometric Stack */}
                    <polygon points="0,-16 18,-6 0,4 -18,-6" fill="#84D800" opacity="0.9" />
                    <polygon points="-18,-6 0,4 0,9 -18,-1" fill="#59A700" />
                    <polygon points="0,4 18,-6 18,-1 0,9" fill="#3d7000" />
                    
                    <polygon points="0,-4 18,6 0,16 -18,6" fill="#84D800" opacity="0.8" />
                    <polygon points="-18,6 0,16 0,21 -18,11" fill="#59A700" />
                    <polygon points="0,16 18,6 18,11 0,21" fill="#3d7000" />

                    <g transform="translate(0, 60)">
                      <rect x="-50" y="-10" width="100" height="20" rx="4" fill="var(--bg-card)" stroke="var(--border-glass)" strokeWidth="1" />
                      <text textAnchor="middle" y="3" fontFamily="var(--font-heading)" fontWeight="900" fontSize="8" fill="var(--text-primary)" letterSpacing="0.05em">ZOHO WORKFLOWS</text>
                    </g>
                  </g>
                </g>

                {/* 4. Bottom-Right Node: Cloud Deployment */}
                <g className="float-node-4">
                  <g transform="translate(440, 360)">
                    <circle r="40" fill="var(--bg-deep)" stroke="url(#accent3D)" strokeWidth="1.5" />
                    <g className="spinning-ring-rev">
                      <circle r="46" fill="none" stroke="rgba(226, 135, 67, 0.3)" strokeWidth="1" strokeDasharray="8 4" />
                    </g>
                    {/* 3D Network Node Pyramid */}
                    <polygon points="0,-16 18,4 -18,4" fill="#e28743" opacity="0.9" />
                    <polygon points="-18,4 0,-16 0,18 -18,18" fill="#a35415" />
                    <polygon points="0,-16 18,4 18,18 0,18" fill="#7a3a08" />

                    <g transform="translate(0, 60)">
                      <rect x="-52" y="-10" width="104" height="20" rx="4" fill="var(--bg-card)" stroke="var(--border-glass)" strokeWidth="1" />
                      <text textAnchor="middle" y="3" fontFamily="var(--font-heading)" fontWeight="900" fontSize="8" fill="var(--text-primary)" letterSpacing="0.05em">CLOUD DEPLOYMENT</text>
                    </g>
                  </g>
                </g>

                {/* 5. Center Hub: Core PKSS Engine */}
                <g className="float-node-center">
                  <g transform="translate(300, 250)">
                    <circle r="56" fill="var(--bg-deep)" stroke="var(--border-glass-hover)" strokeWidth="2" />
                    <g className="spinning-ring">
                      <circle r="64" fill="none" stroke="url(#blue3D)" strokeWidth="1.5" strokeDasharray="12 6" />
                    </g>
                    <g className="spinning-ring-rev">
                      <circle r="72" fill="none" stroke="url(#green3D)" strokeWidth="1" strokeDasharray="16 8" />
                    </g>
                    
                    {/* Concentric glowing cores */}
                    <circle r="32" fill="url(#blue3D)" opacity="0.15" filter="url(#neon-glow)" />
                    <g className="pulsing-core">
                      <circle r="20" fill="url(#blue3D)" filter="url(#neon-glow)" />
                    </g>
                    
                    {/* Central 3D Isometric Stack */}
                    <g transform="translate(0, -6)">
                      <polygon points="0,-12 14,-5 0,2 -14,-5" fill="#FFFFFF" opacity="0.95" />
                      <polygon points="-14,-5 0,2 0,12 -14,5" fill="#D9E2EC" />
                      <polygon points="0,2 14,-5 14,5 0,12" fill="#BCCCDC" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
