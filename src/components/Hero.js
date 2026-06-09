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
          grid-template-columns: 1.15fr 0.85fr;
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
          max-width: 530px;
          margin: 0 auto;
        }

        .hero-svg-canvas {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }

        /* SVG Micro animations */
        .pulsing-core {
          transform-origin: 0px 0px;
          animation: pulse 3s infinite alternate ease-in-out;
        }

        .float-node-1 { animation: float1 6s infinite alternate ease-in-out; }
        .float-node-2 { animation: float2 7s infinite alternate ease-in-out; }
        .float-node-3 { animation: float3 6.5s infinite alternate ease-in-out; }
        .float-node-4 { animation: float4 7.5s infinite alternate ease-in-out; }
        .float-node-center { animation: floatC 8s infinite alternate ease-in-out; }

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
                  {/* Neon Glow Filters */}
                  <filter id="neon-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="neon-glow-green" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="neon-glow-purple" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Gradient Glow */}
                  <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 184, 255, 0.25)" />
                    <stop offset="100%" stopColor="rgba(0, 184, 255, 0)" />
                  </radialGradient>
                </defs>

                {/* Ambient backdrop glow */}
                <circle cx="300" cy="250" r="180" fill="url(#radialGlow)" />

                {/* Background PCB Motherboard traces */}
                <g opacity="0.15" stroke="var(--text-muted)" strokeWidth="1">
                  <line x1="100" y1="250" x2="500" y2="250" strokeDasharray="3 3" />
                  <line x1="300" y1="100" x2="300" y2="400" strokeDasharray="3 3" />
                  <path d="M 50 150 L 250 250 L 250 350" fill="none" />
                  <path d="M 550 150 L 350 250 L 350 350" fill="none" />
                  <circle cx="250" cy="250" r="3" fill="var(--text-muted)" />
                  <circle cx="350" cy="250" r="3" fill="var(--text-muted)" />
                </g>

                {/* 3D platform Base (Under the cube) */}
                <g className="float-node-center">
                  {/* Bottom Plate */}
                  <polygon points="300,310 390,265 300,220 210,265" fill="#080c16" stroke="rgba(0, 184, 255, 0.15)" strokeWidth="1" />
                  <polygon points="210,265 300,310 300,318 210,273" fill="#04060b" />
                  <polygon points="300,310 390,265 390,273 300,318" fill="#060910" />

                  {/* Mid Plate (with purple neon glow) */}
                  <polygon points="300,295 370,260 300,225 230,260" fill="#0c1224" stroke="#d946ef" strokeWidth="1.5" filter="url(#neon-glow-purple)" opacity="0.8" />
                  <polygon points="230,260 300,295 300,301 230,266" fill="#060912" />
                  <polygon points="300,295 370,260 370,266 300,301" fill="#090d1a" />

                  {/* Top Plate */}
                  <polygon points="300,280 350,255 300,230 250,255" fill="#111933" stroke="rgba(0, 184, 255, 0.3)" strokeWidth="1" />
                  <polygon points="250,255 300,280 300,285 250,260" fill="#090d1a" />
                  <polygon points="300,280 350,255 350,260 300,285" fill="#0c1224" />
                </g>

                {/* Glowing Laser Paths */}
                <path d="M 175 140 C 220 170, 250 200, 300 210" stroke="#00B8FF" strokeWidth="2.2" filter="url(#neon-glow-cyan)" opacity="0.55" />
                <path d="M 425 140 C 380 170, 350 200, 300 210" stroke="#00B8FF" strokeWidth="2.2" filter="url(#neon-glow-cyan)" opacity="0.55" />
                <path d="M 175 360 C 220 330, 250 300, 300 270" stroke="#84D800" strokeWidth="2.2" filter="url(#neon-glow-green)" opacity="0.55" />
                <path d="M 425 360 C 380 330, 350 300, 300 270" stroke="#00B8FF" strokeWidth="2.2" filter="url(#neon-glow-cyan)" opacity="0.55" />

                {/* Laser pulses flowing between nodes */}
                <circle r="3.5" fill="#00B8FF" filter="url(#neon-glow-cyan)">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 175 140 C 220 170, 250 200, 300 210" />
                </circle>
                <circle r="3.5" fill="#84D800" filter="url(#neon-glow-green)">
                  <animateMotion dur="2.4s" repeatCount="indefinite" path="M 425 140 C 380 170, 350 200, 300 210" />
                </circle>
                <circle r="3.5" fill="#84D800" filter="url(#neon-glow-green)">
                  <animateMotion dur="3.5s" repeatCount="indefinite" path="M 175 360 C 220 330, 250 300, 300 270" />
                </circle>
                <circle r="3.5" fill="#00B8FF" filter="url(#neon-glow-cyan)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M 425 360 C 380 330, 350 300, 300 270" />
                </circle>

                {/* Central Glass Cube (Floating slightly above platform) */}
                <g className="float-node-center">
                  <g transform="translate(0, -25)">
                    {/* Cube Left Face */}
                    <polygon points="250,205 300,230 300,280 250,255" fill="rgba(0, 184, 255, 0.08)" stroke="#00B8FF" strokeWidth="1.8" filter="url(#neon-glow-cyan)" />
                    {/* Cube Right Face */}
                    <polygon points="300,230 350,205 350,255 300,280" fill="rgba(0, 46, 166, 0.08)" stroke="#00B8FF" strokeWidth="1.8" filter="url(#neon-glow-cyan)" />
                    {/* Cube Top Face */}
                    <polygon points="300,230 350,205 300,180 250,205" fill="rgba(0, 184, 255, 0.12)" stroke="#00B8FF" strokeWidth="1.8" filter="url(#neon-glow-cyan)" />

                    {/* Inside the cube: Glowing Swirling P/S Logo */}
                    <g className="pulsing-core" transform="translate(300, 218)">
                      {/* Soft back core glow */}
                      <circle r="14" fill="#00B8FF" opacity="0.35" filter="url(#neon-glow-cyan)" />
                      {/* Swirling path 1 (Blue) */}
                      <path d="M -8,-2 C -8,-10 6,-10 6,-4 C 6,4 -10,4 -10,-4 C -10,-12 4,-14 8,-6" stroke="#00B8FF" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#neon-glow-cyan)" />
                      {/* Swirling path 2 (Green) */}
                      <path d="M 8,2 C 8,10 -6,10 -6,4 C -6,-4 10,-4 10,4 C 10,12 -4,14 -8,6" stroke="#84D800" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#neon-glow-green)" />
                    </g>
                  </g>
                </g>

                {/* Card 1: Web Solutions */}
                <g className="float-node-1" transform="translate(70, 110)">
                  {/* Glass Card Background */}
                  <rect width="145" height="54" rx="10" fill="rgba(10, 15, 30, 0.72)" stroke="#00B8FF" strokeWidth="1.5" filter="url(#neon-glow-cyan)" opacity="0.95" />
                  {/* Icon Wrapper Circle */}
                  <circle cx="28" cy="27" r="14" fill="rgba(0, 184, 255, 0.1)" />
                  {/* Globe Icon */}
                  <circle cx="28" cy="27" r="8" stroke="#00B8FF" strokeWidth="1.5" fill="none" />
                  <path d="M 28 19 A 8 8 0 0 1 28 35 M 20 27 A 8 8 0 0 1 36 27" stroke="#00B8FF" strokeWidth="1" />
                  {/* Text */}
                  <text x="52" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Web</text>
                  <text x="52" y="36" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Solutions</text>
                </g>

                {/* Card 2: Salesforce Cloud */}
                <g className="float-node-2" transform="translate(385, 70)">
                  <rect width="145" height="54" rx="10" fill="rgba(10, 15, 30, 0.72)" stroke="#00B8FF" strokeWidth="1.5" filter="url(#neon-glow-cyan)" opacity="0.95" />
                  <circle cx="28" cy="27" r="14" fill="rgba(0, 184, 255, 0.1)" />
                  {/* Cloud Icon */}
                  <path d="M 23 29 C 21.5 29 20.5 28 21 26.5 C 20.5 24.5 22 23 24.5 23.5 C 25 21.5 28.5 21.5 29.5 23.5 C 31.5 23.5 32 25.5 30.5 27" stroke="#00B8FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <text x="52" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Salesforce</text>
                  <text x="52" y="36" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Cloud</text>
                </g>

                {/* Card 3: Zoho Workflows */}
                <g className="float-node-3" transform="translate(70, 330)">
                  <rect width="145" height="54" rx="10" fill="rgba(10, 15, 30, 0.72)" stroke="#84D800" strokeWidth="1.5" filter="url(#neon-glow-green)" opacity="0.95" />
                  <circle cx="28" cy="27" r="14" fill="rgba(132, 216, 0, 0.1)" />
                  {/* Swirling infinity / Zoho Icon */}
                  <path d="M 23 27 C 23 24, 27 24, 27 27 C 27 30, 31 30, 31 27 C 31 24, 27 24, 27 27" stroke="#84D800" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  <text x="52" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Zoho</text>
                  <text x="52" y="36" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Workflows</text>
                </g>

                {/* Card 4: Cloud Deployment */}
                <g className="float-node-4" transform="translate(385, 330)">
                  <rect width="145" height="54" rx="10" fill="rgba(10, 15, 30, 0.72)" stroke="#00B8FF" strokeWidth="1.5" filter="url(#neon-glow-cyan)" opacity="0.95" />
                  <circle cx="28" cy="27" r="14" fill="rgba(0, 184, 255, 0.1)" />
                  {/* Cloud upload / Deploy icon */}
                  <path d="M 22 28 H 34 M 28 22 L 24 26 M 28 22 L 32 26" stroke="#00B8FF" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="52" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Cloud</text>
                  <text x="52" y="36" fontFamily="var(--font-heading)" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.03em">Deployment</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
