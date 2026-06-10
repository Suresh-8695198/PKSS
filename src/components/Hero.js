'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Globe, Cloud, RefreshCw, UploadCloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Section shell ── */
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
          inset: 0;
          background-image:
            linear-gradient(to right, var(--border-glass) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-glass) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 50%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 90%);
          z-index: 0;
          pointer-events: none;
        }

        /* ── Background blobs ── */
        .modern-bg-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 1;
          pointer-events: none;
          animation: pulseGlow 12s infinite alternate ease-in-out;
        }
        .bg-shape-1 {
          width: 50vw; height: 50vw;
          max-width: 800px; max-height: 800px;
          background: radial-gradient(circle, rgba(0,46,166,0.15) 0%, transparent 70%);
          top: -10%; left: -10%; opacity: 0.55;
        }
        .bg-shape-2 {
          width: 45vw; height: 45vw;
          max-width: 700px; max-height: 700px;
          background: radial-gradient(circle, rgba(89,167,0,0.10) 0%, transparent 70%);
          bottom: -10%; right: -5%; opacity: 0.55; animation-delay: -6s;
        }
        @keyframes pulseGlow {
          0%   { transform: scale(1)    translate(0,0);     opacity: .45; }
          100% { transform: scale(1.08) translate(20px,-20px); opacity: .75; }
        }

        /* ── Two-column grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 4.5rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 991px) {
          .hero-grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          padding: .6rem 1.2rem;
          background: rgba(0,46,166,.05);
          border: 1px solid rgba(0,46,166,.15);
          border-radius: 50px;
          color: var(--blue);
          font-size: .75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 1.5rem;
          animation: pulseBadge 3s infinite ease-in-out;
        }
        .dark .hero-badge {
          background: rgba(0,184,255,.06);
          border-color: rgba(0,184,255,.2);
          color: #00B8FF;
        }
        @keyframes pulseBadge {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }

        /* ── Headline ── */
        .hero-title {
          font-size: clamp(2.5rem, 5.2vw, 3.8rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -.03em;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }
        .gradient-accent {
          background: linear-gradient(135deg,#0057D9 0%,#00B8FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .gradient-green {
          background: linear-gradient(135deg,#59A700 0%,#84D800 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        /* ── Sub-copy ── */
        .hero-subtitle {
          font-size: 1.12rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2.2rem;
          max-width: 620px;
        }
        @media (max-width: 991px) { .hero-subtitle { margin-inline: auto; } }

        /* ── CTA buttons ── */
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 2rem;
        }
        @media (max-width: 991px) { .hero-actions { justify-content: center; } }
        @media (max-width: 480px) {
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions a { width: 100%; text-align: center; }
        }

        /* ══════════════════════════════════════
           3-D VISUAL SCENE
        ══════════════════════════════════════ */
        .hero-3d-visual {
          position: relative;
          width: 100%;
          max-width: 530px;
          height: 480px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Cube ── */
        .scene-3d {
          width: 100px; height: 100px;
          perspective: 800px;
          position: absolute;
          z-index: 10;
        }
        .cube-3d {
          width: 100%; height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: spinCube 16s infinite linear;
        }
        @keyframes spinCube {
          from { transform: rotateX(-22deg) rotateY(45deg); }
          to   { transform: rotateX(-22deg) rotateY(405deg); }
        }
        .cube-face {
          position: absolute;
          width: 100px; height: 100px;
          background: rgba(0,184,255,.08);
          border: 1.8px solid #00B8FF;
          box-shadow: inset 0 0 15px rgba(0,184,255,.2), 0 0 10px rgba(0,184,255,.25);
        }
        .face-front  { transform: rotateY(  0deg) translateZ(50px); }
        .face-back   { transform: rotateY(180deg) translateZ(50px); }
        .face-left   { transform: rotateY(-90deg) translateZ(50px); }
        .face-right  { transform: rotateY( 90deg) translateZ(50px); }
        .face-top    { transform: rotateX( 90deg) translateZ(50px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(50px); }

        /* ── Cube inner logo ── */
        .cube-logo-center {
          position: absolute;
          top: 50%; left: 50%;
          width: 32px; height: 32px;
          margin: -16px 0 0 -16px;
          filter: drop-shadow(0 0 8px rgba(0,184,255,.8));
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Platform ring ── */
        .platform-base-3d {
          position: absolute;
          width: 180px; height: 180px;
          border-radius: 50%;
          border: 2px solid rgba(217,70,239,.6);
          background: radial-gradient(circle, rgba(217,70,239,.15) 0%, transparent 70%);
          box-shadow: 0 0 25px rgba(217,70,239,.4);
          transform: rotateX(70deg) translateZ(-50px);
          z-index: 5;
          animation: pulsePlatform 4s infinite alternate ease-in-out;
        }
        @keyframes pulsePlatform {
          0%   { transform: rotateX(70deg) translateZ(-50px) scale(.95); opacity: .7; }
          100% { transform: rotateX(70deg) translateZ(-50px) scale(1.05); opacity: 1; }
        }

        /* ── Ambient orb ── */
        .cube-glow-orb {
          position: absolute;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,184,255,.18) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── SVG laser lines ── */
        .svg-connection-lines {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
        }

        /* ══════════════════════════════════════
           CARDS – each with its own vivid colour
           Works on light AND dark backgrounds
        ══════════════════════════════════════ */

        /* shared shell */
        .iso-card {
          position: absolute;
          width: 160px;
          padding: .75rem 1rem;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: .85rem;
          overflow: hidden;
          z-index: 20;
          cursor: default;
          transition: transform .4s cubic-bezier(.16,1,.3,1),
                      box-shadow .4s ease;
          border: 1px solid transparent;
        }

        /* shimmer pseudo */
        .iso-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.15) 0%, transparent 60%);
          pointer-events: none;
        }

        /* hover lift */
        .iso-card:hover {
          transform: translateY(-10px) scale(1.05) !important;
        }

        /* icon circle */
        .iso-card .c-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: transform .4s cubic-bezier(.175,.885,.32,1.275);
        }
        .iso-card:hover .c-icon {
          transform: rotate(15deg) scale(1.2);
        }

        /* text */
        .iso-card .c-label {
          font-size: .82rem;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: .02em;
          font-family: var(--font-heading);
        }

        /* ── Card 1: Web Solutions — Cyan / teal ── */
        .card-web {
          top: 14%; left: 0%;
          background: linear-gradient(135deg, #001a2e 0%, #003d5c 100%);
          border-color: rgba(0,184,255,.45);
          box-shadow: 0 12px 32px rgba(0,184,255,.22), inset 0 1px 0 rgba(0,184,255,.15);
          animation: floatC1 6s infinite alternate ease-in-out;
        }
        .card-web .c-icon  { background: rgba(0,184,255,.18); }
        .card-web .c-label { color: #7de8ff; }
        .card-web:hover {
          box-shadow: 0 22px 45px rgba(0,184,255,.38), inset 0 1px 0 rgba(0,184,255,.2);
          border-color: rgba(0,184,255,.75);
        }
        /* dark-mode tint tweak: already dark, looks good */
        :root:not(.dark) .card-web {
          background: linear-gradient(135deg, #e0f7ff 0%, #b3edff 100%);
          border-color: rgba(0,150,220,.45);
          box-shadow: 0 12px 32px rgba(0,150,220,.18);
        }
        :root:not(.dark) .card-web .c-icon  { background: rgba(0,150,220,.15); }
        :root:not(.dark) .card-web .c-label { color: #006fa6; }

        /* ── Card 2: Salesforce Cloud — Deep blue / indigo ── */
        .card-sf {
          top: 9%; right: 0%;
          background: linear-gradient(135deg, #08003b 0%, #18005c 100%);
          border-color: rgba(120,80,255,.45);
          box-shadow: 0 12px 32px rgba(120,80,255,.22), inset 0 1px 0 rgba(120,80,255,.15);
          animation: floatC2 7.5s infinite alternate ease-in-out;
        }
        .card-sf .c-icon  { background: rgba(120,80,255,.2); }
        .card-sf .c-label { color: #c4aaff; }
        .card-sf:hover {
          box-shadow: 0 22px 45px rgba(120,80,255,.38), inset 0 1px 0 rgba(120,80,255,.2);
          border-color: rgba(120,80,255,.75);
        }
        :root:not(.dark) .card-sf {
          background: linear-gradient(135deg, #f0ecff 0%, #ddd4ff 100%);
          border-color: rgba(100,60,220,.4);
          box-shadow: 0 12px 32px rgba(100,60,220,.15);
        }
        :root:not(.dark) .card-sf .c-icon  { background: rgba(100,60,220,.12); }
        :root:not(.dark) .card-sf .c-label { color: #5030b0; }

        /* ── Card 3: Zoho Workflows — Green / lime ── */
        .card-zoho {
          bottom: 14%; left: -2%;
          background: linear-gradient(135deg, #001a06 0%, #003d14 100%);
          border-color: rgba(100,210,0,.40);
          box-shadow: 0 12px 32px rgba(100,210,0,.20), inset 0 1px 0 rgba(100,210,0,.12);
          animation: floatC3 6.8s infinite alternate ease-in-out;
        }
        .card-zoho .c-icon  { background: rgba(100,210,0,.18); }
        .card-zoho .c-label { color: #a8f060; }
        .card-zoho:hover {
          box-shadow: 0 22px 45px rgba(100,210,0,.35), inset 0 1px 0 rgba(100,210,0,.2);
          border-color: rgba(100,210,0,.75);
        }
        :root:not(.dark) .card-zoho {
          background: linear-gradient(135deg, #edffd4 0%, #cfffa0 100%);
          border-color: rgba(60,160,0,.35);
          box-shadow: 0 12px 32px rgba(60,160,0,.15);
        }
        :root:not(.dark) .card-zoho .c-icon  { background: rgba(60,160,0,.14); }
        :root:not(.dark) .card-zoho .c-label { color: #2a7800; }

        /* ── Card 4: Cloud Deployment — Amber / orange ── */
        .card-cloud {
          bottom: 11%; right: -2%;
          background: linear-gradient(135deg, #1a0800 0%, #3d1500 100%);
          border-color: rgba(245,140,40,.40);
          box-shadow: 0 12px 32px rgba(245,140,40,.20), inset 0 1px 0 rgba(245,140,40,.12);
          animation: floatC4 8s infinite alternate ease-in-out;
        }
        .card-cloud .c-icon  { background: rgba(245,140,40,.18); }
        .card-cloud .c-label { color: #ffbd70; }
        .card-cloud:hover {
          box-shadow: 0 22px 45px rgba(245,140,40,.35), inset 0 1px 0 rgba(245,140,40,.2);
          border-color: rgba(245,140,40,.75);
        }
        :root:not(.dark) .card-cloud {
          background: linear-gradient(135deg, #fff4e4 0%, #ffe0b2 100%);
          border-color: rgba(200,100,0,.35);
          box-shadow: 0 12px 32px rgba(200,100,0,.15);
        }
        :root:not(.dark) .card-cloud .c-icon  { background: rgba(200,100,0,.12); }
        :root:not(.dark) .card-cloud .c-label { color: #9e4c00; }

        /* ── Partner / Authorized section ── */
        .hero-partners {
          margin-top: 2.2rem;
          padding-top: 1.8rem;
          border-top: 1px solid var(--border-glass);
        }
        .partners-label {
          font-size: .72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--text-muted);
          margin-bottom: 1.1rem;
          display: block;
        }
        .partners-row {
          display: flex;
          gap: 1.4rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        /* logo pill – keeps original brand colour */
        .partner-pill {
          display: flex;
          align-items: center;
          gap: .5rem;
          padding: .38rem .9rem;
          border-radius: 50px;
          border: 1px solid var(--border-glass);
          background: var(--glass-bg, rgba(255,255,255,.04));
          transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
        }
        .partner-pill:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 8px 22px rgba(0,0,0,.15);
          border-color: rgba(255,255,255,.15);
        }
        .partner-pill img {
          height: 20px;
          width: auto;
          display: block;
          /* full colour – no grayscale */
          filter: none;
          opacity: 1;
          transition: transform .3s ease;
        }
        .partner-pill:hover img { transform: scale(1.08); }

        /* ── Float keyframes ── */
        @keyframes floatC1 { 0%{transform:translateY(0)}  100%{transform:translateY(-10px)} }
        @keyframes floatC2 { 0%{transform:translateY(0)}  100%{transform:translateY(-14px)} }
        @keyframes floatC3 { 0%{transform:translateY(0)}  100%{transform:translateY(-8px)}  }
        @keyframes floatC4 { 0%{transform:translateY(0)}  100%{transform:translateY(-12px)} }
      `}} />

      <div className="modern-bg-element bg-shape-1" />
      <div className="modern-bg-element bg-shape-2" />

      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT: copy ── */}
          <div className="hero-left-column">
            <div className="hero-badge">
              <Sparkles size={13} style={{ marginRight: '.15rem' }} />
              <span>Leading Software &amp; CRM Engineering</span>
            </div>

            <h1 className="hero-title">
              We Architect Custom <br />
              <span className="gradient-accent">Software Solutions</span><br />
              &amp;&nbsp;<span className="gradient-green">CRM Ecosystems</span>
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

            {/* ── Authorized Technology Competencies ── */}
            <div className="hero-partners">
              <p className="partners-label">Authorized Technology Competencies</p>
              <div className="partners-row">

                {/* Salesforce – blue */}
                <div className="partner-pill" style={{ borderColor: 'rgba(0,112,210,.35)', boxShadow: '0 0 10px rgba(0,112,210,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" />
                </div>

                {/* HubSpot – orange */}
                <div className="partner-pill" style={{ borderColor: 'rgba(255,122,0,.35)', boxShadow: '0 0 10px rgba(255,122,0,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" />
                </div>

                {/* Zoho – red/orange */}
                <div className="partner-pill" style={{ borderColor: 'rgba(220,56,36,.35)', boxShadow: '0 0 10px rgba(220,56,36,.12)' }}>
                  <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" style={{ height: '18px' }} />
                </div>

                {/* Azure – blue */}
                <div className="partner-pill" style={{ borderColor: 'rgba(0,114,206,.35)', boxShadow: '0 0 10px rgba(0,114,206,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" />
                </div>

                {/* Google Cloud – multicolour */}
                <div className="partner-pill" style={{ borderColor: 'rgba(66,133,244,.35)', boxShadow: '0 0 10px rgba(66,133,244,.12)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" />
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: 3-D cube + cards ── */}
          <div className="hero-right-column">
            <div className="hero-3d-visual">

              {/* ambient glow & platform */}
              <div className="cube-glow-orb" />
              <div className="platform-base-3d" />

              {/* laser trace SVG */}
              <svg viewBox="0 0 500 500" className="svg-connection-lines" fill="none">
                <defs>
                  <filter id="glow-ln" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* lines */}
                <path d="M80 150 Q180 170 250 250" stroke="#00B8FF" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite"/>
                </path>
                <path d="M420 130 Q320 160 250 250" stroke="#7850ff" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M80 350 Q180 320 250 250" stroke="#64d200" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite"/>
                </path>
                <path d="M420 350 Q320 320 250 250" stroke="#f58c28" strokeWidth="2" filter="url(#glow-ln)">
                  <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.2s" repeatCount="indefinite"/>
                </path>

                {/* traveling pulses */}
                <circle r="4" fill="#00B8FF" filter="url(#glow-ln)">
                  <animateMotion dur="2.8s" repeatCount="indefinite" path="M80 150 Q180 170 250 250"/>
                </circle>
                <circle r="4" fill="#7850ff" filter="url(#glow-ln)">
                  <animateMotion dur="2.2s" repeatCount="indefinite" path="M420 130 Q320 160 250 250"/>
                </circle>
                <circle r="4" fill="#64d200" filter="url(#glow-ln)">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path="M80 350 Q180 320 250 250"/>
                </circle>
                <circle r="4" fill="#f58c28" filter="url(#glow-ln)">
                  <animateMotion dur="2.6s" repeatCount="indefinite" path="M420 350 Q320 320 250 250"/>
                </circle>
              </svg>

              {/* ── CSS 3-D Cube ── */}
              <div className="scene-3d">
                <div className="cube-3d">
                  <div className="cube-face face-front"/>
                  <div className="cube-face face-back"/>
                  <div className="cube-face face-left"/>
                  <div className="cube-face face-right"/>
                  <div className="cube-face face-top"/>
                  <div className="cube-face face-bottom"/>

                  <div className="cube-logo-center">
                    <svg viewBox="0 0 40 40" width="32" height="32" fill="none">
                      <circle r="12" cx="20" cy="20" fill="#00B8FF" opacity=".15"/>
                      <path d="M12,18 C12,10 26,10 26,16 C26,24 10,24 10,16 C10,8 24,6 28,14"
                            stroke="#00B8FF" strokeWidth="3.5" strokeLinecap="round"/>
                      <path d="M28,22 C28,30 14,30 14,24 C14,16 30,16 30,24 C30,32 16,34 12,26"
                            stroke="#84D800" strokeWidth="3.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* ── 4 coloured cards ── */}

              {/* Card 1 – Web Solutions  (cyan) */}
              <div className="iso-card card-web">
                <div className="c-icon">
                  <Globe size={17} color="#00B8FF"/>
                </div>
                <div>
                  <div className="c-label">Web</div>
                  <div className="c-label">Solutions</div>
                </div>
              </div>

              {/* Card 2 – Salesforce Cloud  (purple) */}
              <div className="iso-card card-sf">
                <div className="c-icon">
                  <Cloud size={17} color="#a080ff"/>
                </div>
                <div>
                  <div className="c-label">Salesforce</div>
                  <div className="c-label">Cloud</div>
                </div>
              </div>

              {/* Card 3 – Zoho Workflows  (green) */}
              <div className="iso-card card-zoho">
                <div className="c-icon">
                  <RefreshCw size={17} color="#84D800"/>
                </div>
                <div>
                  <div className="c-label">Zoho</div>
                  <div className="c-label">Workflows</div>
                </div>
              </div>

              {/* Card 4 – Cloud Deployment  (amber) */}
              <div className="iso-card card-cloud">
                <div className="c-icon">
                  <UploadCloud size={17} color="#f58c28"/>
                </div>
                <div>
                  <div className="c-label">Cloud</div>
                  <div className="c-label">Deployment</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
