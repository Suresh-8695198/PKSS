'use client';

import React from 'react';

export default function Footer() {
  const partnerLogos = [
    {
      name: 'TAWNY Technologies',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <rect x="5" y="10" width="8" height="20" rx="1" fill="#59a700" />
          <rect x="18" y="5" width="8" height="30" rx="1" fill="#002ea6" />
          <rect x="31" y="15" width="8" height="15" rx="1" fill="#e28743" />
          <text x="48" y="26" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.05em">TAWNY</text>
          <text x="48" y="34" fontFamily="var(--font-body)" fontWeight="500" fontSize="7" fill="rgba(255,255,255,0.4)" letterSpacing="0.2em">TECHNOLOGIES</text>
        </svg>
      )
    },
    {
      name: 'KONSULT',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M10 5 L10 35 M10 20 L25 5 M10 20 L25 35 M22 13 L32 5 M22 27 L32 35" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <circle cx="10" cy="5" r="3" fill="#002ea6" />
          <circle cx="25" cy="5" r="3" fill="#59a700" />
          <circle cx="32" cy="5" r="3" fill="#e28743" />
          <text x="45" y="27" fontFamily="var(--font-heading)" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="0.08em">KONSULT</text>
        </svg>
      )
    },
    {
      name: 'Partzrider',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <circle cx="20" cy="20" r="14" stroke="#ffffff" strokeWidth="3" fill="none" />
          <circle cx="20" cy="20" r="5" fill="#e28743" />
          <path d="M20 6 L20 12 M20 28 L20 34 M6 20 L12 20 M28 20 L34 20" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <text x="42" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.03em">PARTZRIDER</text>
        </svg>
      )
    },
    {
      name: 'IAPTNSC',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M8 8 L22 8 L28 20 L22 32 L8 32 L14 20 Z" stroke="#002ea6" strokeWidth="2" fill="none" />
          <path d="M12 12 L18 12 L22 20 L18 28 L12 28 L15 20 Z" fill="#59a700" />
          <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" fill="#ffffff" letterSpacing="0.1em">IAPTNSC</text>
        </svg>
      )
    },
    {
      name: 'IDEAL Life Sciences',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M10 20 Q 20 5 30 20 T 50 20" stroke="#59a700" strokeWidth="2" fill="none" />
          <path d="M10 20 Q 20 35 30 20 T 50 20" stroke="#002ea6" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="2.5" fill="#e28743" />
          <circle cx="30" cy="28" r="2.5" fill="#e28743" />
          <text x="56" y="25" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" fill="#ffffff" letterSpacing="0.02em">IDEAL</text>
        </svg>
      )
    },
    {
      name: 'Manav Utthan',
      svg: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="footer-partner-svg">
          <path d="M20 5 C11.7 5 5 11.7 5 20 C5 28.3 11.7 35 20 35 C28.3 35 35 28.3 35 20" stroke="#ffffff" strokeWidth="2" fill="none" />
          <path d="M14 22 C14 22 17 18 20 18 C23 18 26 22 26 22 M20 18 L20 32" stroke="#002ea6" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="12" r="4" fill="#e28743" />
          <text x="42" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" fill="#ffffff" letterSpacing="0.04em">MANAV UTTHAN</text>
        </svg>
      )
    }
  ];

  return (
    <footer className="main-footer">
      {/* Background Isometric Technical Network Flow overlay representing Cloud Infrastructure */}
      <div className="footer-worldmap-overlay">
        <svg viewBox="0 0 1200 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle grid base lines */}
          <line x1="180" y1="130" x2="580" y2="230" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="580" y1="230" x2="980" y2="110" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="180" y1="130" x2="580" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="580" y1="60" x2="980" y2="110" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Secondary architectural connection bus routes */}
          <line x1="380" y1="180" x2="780" y2="170" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="380" y1="95" x2="780" y2="170" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="2 2" />

          {/* Node 1: Left Database Server Stack */}
          {/* Stack Base Layer */}
          <polygon points="150,130 180,115 210,130 180,145" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="150,130 150,138 180,153 180,145" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="180,145 180,153 210,138 210,130" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Middle Layer */}
          <polygon points="150,115 180,100 210,115 180,130" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="150,115 150,123 180,138 180,130" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="180,130 180,138 210,123 210,115" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Top Layer */}
          <polygon points="150,100 180,85 210,100 180,115" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="150,100 150,108 180,123 180,115" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="180,115 180,123 210,108 210,100" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />

          {/* Node 2: Center High-Compute Processor Hub */}
          {/* Stack Base Layer */}
          <polygon points="550,230 580,215 610,230 580,245" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="550,230 550,238 580,253 580,245" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="580,245 580,253 610,238 610,230" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Middle Layer */}
          <polygon points="550,215 580,200 610,215 580,230" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="550,215 550,223 580,238 580,230" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="580,230 580,238 610,223 610,215" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Top Layer */}
          <polygon points="550,200 580,185 610,200 580,215" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="550,200 550,208 580,223 580,215" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="580,215 580,223 610,208 610,200" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />

          {/* Node 3: Right API Gateway / Edge Router */}
          {/* Stack Base Layer */}
          <polygon points="950,110 980,95 1010,110 980,125" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="950,110 950,118 980,133 980,125" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="980,125 980,133 1010,118 1010,110" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Middle Layer */}
          <polygon points="950,95 980,80 1010,95 980,110" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="950,95 950,103 980,118 980,110" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          <polygon points="980,110 980,118 1010,103 1010,95" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
          {/* Stack Top Layer */}
          <polygon points="950,80 980,65 1010,80 980,95" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="950,80 950,88 980,103 980,95" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />
          <polygon points="980,95 980,103 1010,88 1010,80" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" />

          {/* Active Flow Paths (Connecting lines where packets travel) */}
          <path id="flowPath1" d="M 180 130 L 580 230" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <path id="flowPath2" d="M 580 230 L 980 110" stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none" />
          <path id="flowPath3" d="M 180 130 L 580 60 L 980 110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

          {/* Animated Data Packets (Flowing circles moving sequentially) */}
          <circle r="2" fill="rgba(255,255,255,0.5)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 180 130 L 580 230" />
          </circle>
          <circle r="2" fill="rgba(255,255,255,0.5)">
            <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 180 130 L 580 230" />
          </circle>

          <circle r="2" fill="rgba(255,255,255,0.5)">
            <animateMotion dur="5.5s" repeatCount="indefinite" path="M 580 230 L 980 110" />
          </circle>
          <circle r="2" fill="rgba(255,255,255,0.5)">
            <animateMotion dur="5.5s" begin="2.75s" repeatCount="indefinite" path="M 580 230 L 980 110" />
          </circle>

          <circle r="2" fill="rgba(255,255,255,0.4)">
            <animateMotion dur="7s" repeatCount="indefinite" path="M 180 130 L 580 60 L 980 110" />
          </circle>
          <circle r="2" fill="rgba(255,255,255,0.4)">
            <animateMotion dur="7s" begin="3.5s" repeatCount="indefinite" path="M 180 130 L 580 60 L 980 110" />
          </circle>
        </svg>
      </div>
      <div className="container footer-content-wrapper">
        <h3 className="footer-section-title">Site Links</h3>
        
        {/* Footer Link Matrix */}
        <div className="footer-grid">
          <div className="footer-links-col">
            <h4>Core Services</h4>
            <ul>
              <li><a href="/services">Application Development</a></li>
              <li><a href="/services#salesforce">Salesforce Consulting</a></li>
              <li><a href="/services#zoho">Zoho Development</a></li>
              <li><a href="/services#cloud">Cloud Engineering</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/services#data-analytics">Data Analytics</a></li>
              <li><a href="/services#hubspot">HubSpot CRM Setup</a></li>
              <li><a href="/services#consulting">IT Consultancy</a></li>
              <li><a href="/services#ai-automation">Intelligent AI Automation</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Company Directory</h4>
            <ul>
              <li><a href="/about">About PKSS</a></li>
              <li><a href="/about#transformation">Methodology Blueprint</a></li>
              <li><a href="/careers">Careers Portal</a></li>
              <li><a href="/contact">Contact Support</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Headquarters</h4>
            <p className="footer-addr">
              Plot No.4, Karumbalai,<br />
              Karuppur Main road, Karuppur,<br />
              Salem - 636012, Tamilnadu, India.
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>

        {/* Grayscale Corporate Partners Grid */}
        <div className="footer-partners-grid">
          {partnerLogos.map((partner, idx) => (
            <div className="footer-partner-item" key={idx}>
              {partner.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Vector Line-Art Office Skyline Decorator */}
      <div className="footer-skyline-wrapper">
        <svg className="footer-skyline" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Clouds in the sky (Animated floating) */}
          <path d="M100 35 A15 15 0 0 1 125 25 A22 22 0 0 1 165 30 A18 18 0 0 1 185 45 A15 15 0 0 1 170 55 L110 55 A15 15 0 0 1 100 35 Z" fill="rgba(255,255,255,0.04)" className="cloud-float-1" />
          <path d="M450 25 A12 12 0 0 1 470 18 A18 18 0 0 1 505 22 A15 15 0 0 1 520 35 A12 12 0 0 1 510 42 L460 42 A12 12 0 0 1 450 25 Z" fill="rgba(255,255,255,0.03)" className="cloud-float-2" />
          <path d="M780 40 A15 15 0 0 1 805 30 A22 22 0 0 1 845 35 A18 18 0 0 1 865 50 A15 15 0 0 1 850 60 L790 60 A15 15 0 0 1 780 40 Z" fill="rgba(255,255,255,0.04)" className="cloud-float-3" />
          <path d="M1020 20 A12 12 0 0 1 1040 12 A18 18 0 0 1 1075 16 A15 15 0 0 1 1090 28 A12 12 0 0 1 1080 35 L1030 35 A12 12 0 0 1 1020 20 Z" fill="rgba(255,255,255,0.03)" className="cloud-float-4" />

          {/* Deep distant background buildings (Layer 1 - dark navy flat fill) */}
          <rect x="70" y="80" width="50" height="80" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />
          <rect x="210" y="90" width="70" height="70" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />
          <rect x="380" y="75" width="60" height="85" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />
          <rect x="630" y="60" width="70" height="100" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />
          <rect x="800" y="80" width="60" height="80" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />
          <rect x="980" y="70" width="70" height="90" fill="rgba(255, 255, 255, 0.01)" stroke="rgba(255,255,255,0.02)" />

          {/* Mid-ground detailed buildings (Layer 2) */}
          <rect x="110" y="70" width="75" height="90" fill="rgba(255, 255, 255, 0.018)" stroke="rgba(255,255,255,0.04)" />
          <rect x="300" y="55" width="65" height="105" fill="rgba(255, 255, 255, 0.018)" stroke="rgba(255,255,255,0.04)" />
          <rect x="490" y="50" width="80" height="110" fill="rgba(255, 255, 255, 0.018)" stroke="rgba(255,255,255,0.04)" />
          <rect x="740" y="65" width="70" height="95" fill="rgba(255, 255, 255, 0.018)" stroke="rgba(255,255,255,0.04)" />
          <rect x="910" y="60" width="75" height="100" fill="rgba(255, 255, 255, 0.018)" stroke="rgba(255,255,255,0.04)" />

          {/* Cable-Stayed Infrastructure Bridge (Left Connection) */}
          <path d="M10 160 L15 110 L20 110 L25 160" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="17" y1="110" x2="17" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {/* Cable stays */}
          <path d="M17 70 L5 160 M17 80 L8 160 M17 90 L11 160 M17 70 L30 160 M17 80 L27 160 M17 90 L24 160" stroke="rgba(255,255,255,0.03)" strokeWidth="0.8" />
          
          {/* Front layer detailed buildings (Layer 3 - Solid Corporate blocks in dark backdrop tone) */}
          
          {/* Building 1: Tech Center */}
          <rect x="45" y="70" width="60" height="90" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          {/* Subtle Monochromatic Windows */}
          <rect x="55" y="80" width="8" height="6" fill="rgba(255,255,255,0.04)" />
          <rect x="70" y="80" width="8" height="6" fill="rgba(255, 255, 255, 0.06)" />
          <rect x="85" y="80" width="8" height="6" fill="rgba(255, 255, 255, 0.04)" />
          <rect x="55" y="95" width="8" height="6" fill="rgba(255, 255, 255, 0.06)" />
          <rect x="70" y="95" width="8" height="6" fill="rgba(255, 255, 255, 0.04)" />
          <rect x="85" y="95" width="8" height="6" fill="rgba(255, 255, 255, 0.06)" />
          <rect x="55" y="110" width="8" height="6" fill="rgba(255, 255, 255, 0.04)" />
          <rect x="70" y="110" width="8" height="6" fill="rgba(255, 255, 255, 0.04)" />
          <rect x="85" y="110" width="8" height="6" fill="rgba(255, 255, 255, 0.06)" />

          {/* Pine Trees */}
          <path d="M115 160 L120 145 L117 145 L121 135 L118 135 L122 125 L126 125 L130 135 L127 135 L131 145 L128 145 L133 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          
          {/* Building 2: Sail-shaped Glass Architecture */}
          <path d="M140 160 Q160 30 200 50 L200 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M155 160 Q170 60 190 70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <path d="M170 160 Q180 90 195 95" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          
          {/* Building 3: Classical IT Corporate Dome */}
          <rect x="225" y="80" width="85" height="80" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M225 80 Q267.5 40 310 80 Z" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle cx="267.5" cy="80" r="12" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          {/* Windows */}
          <rect x="240" y="100" width="12" height="20" rx="6" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <rect x="262" y="100" width="12" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <rect x="284" y="100" width="12" height="20" rx="6" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          
          {/* Building 4: Server Farm Block */}
          <rect x="330" y="60" width="70" height="100" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x="340" y="75" width="50" height="15" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="348" cy="82.5" r="2" fill="rgba(255, 255, 255, 0.4)" />
          <line x1="358" y1="82.5" x2="382" y2="82.5" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
          <rect x="340" y="98" width="50" height="15" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="348" cy="105.5" r="2" fill="rgba(255, 255, 255, 0.4)" />
          <line x1="358" y1="105.5" x2="382" y2="105.5" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
          <rect x="340" y="121" width="50" height="15" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <circle cx="348" cy="128.5" r="2" fill="rgba(255, 255, 255, 0.4)" />
          <line x1="358" y1="128.5" x2="382" y2="128.5" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />

          {/* Building 5 & 6: Connected Double-Tower Complex */}
          {/* Tower A (Tall) */}
          <rect x="420" y="20" width="65" height="140" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="452.5" y1="20" x2="452.5" y2="-10" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <circle cx="452.5" cy="-10" r="2" fill="rgba(255,255,255,0.5)" />
          {/* Tower B (Shorter) */}
          <rect x="515" y="45" width="60" height="115" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          {/* Skybridge connection */}
          <rect x="485" y="60" width="30" height="12" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="485" y1="66" x2="515" y2="66" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          {/* Windows grid on Tower A */}
          <path d="M430 40 H475 M430 60 H475 M430 80 H475 M430 100 H475 M430 120 H475" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <path d="M440 30 V150 M450 30 V150 M460 30 V150 M470 30 V150" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Shrubbery lines at towers */}
          <circle cx="420" cy="158" r="4" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="425" cy="158" r="5" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="431" cy="158" r="4" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          
          {/* Building 7: Sloped HQ Tower */}
          <path d="M595 160 L595 50 L655 30 L665 30 L665 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <circle cx="630" cy="60" r="2" fill="rgba(255,255,255,0.1)" />
          <circle cx="630" cy="80" r="2" fill="rgba(255,255,255,0.1)" />
          <circle cx="630" cy="100" r="2" fill="rgba(255,255,255,0.1)" />
          <circle cx="630" cy="120" r="2" fill="rgba(255,255,255,0.1)" />
          
          {/* Building 8: Modern Stacked Blocks */}
          <rect x="690" y="80" width="55" height="80" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x="710" y="55" width="55" height="105" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x="730" y="30" width="55" height="130" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="730" y1="30" x2="785" y2="85" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="710" y1="55" x2="765" y2="110" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Building 9: Curved Sail Tower */}
          <path d="M805 160 Q790 60 845 40 L855 40 L855 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <path d="M820 160 Q810 80 845 70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <path d="M835 160 Q830 100 845 95" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Building 10: R&D Tech Atrium */}
          <rect x="880" y="75" width="90" height="85" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="880" y1="95" x2="970" y2="95" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="880" y1="115" x2="970" y2="115" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="880" y1="135" x2="970" y2="135" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="902.5" y1="75" x2="902.5" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="925" y1="75" x2="925" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="947.5" y1="75" x2="947.5" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Building 11: Angular Tech Complex */}
          <path d="M990 160 L990 50 L1060 30 L1060 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <line x1="1010" y1="55" x2="1045" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="1010" y1="75" x2="1045" y2="65" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="1010" y1="95" x2="1045" y2="85" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="1010" y1="115" x2="1045" y2="105" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="1010" y1="135" x2="1045" y2="125" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          {/* Wind Turbine 1 (Eco Tech Center, Animated Rotating Blades) */}
          <line x1="1105" y1="160" x2="1105" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <g transform="translate(1105, 90)">
            <circle cx="0" cy="0" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
            <path d="M0 0 L-2 -30 L2 -30 Z M0 0 L24 15 L28 12 Z M0 0 L-22 18 L-26 15 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Wind Turbine 2 */}
          <line x1="190" y1="160" x2="190" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <g transform="translate(190, 110)">
            <circle cx="0" cy="0" r="1.5" fill="rgba(255, 255, 255, 0.4)" />
            <path d="M0 0 L-2 -25 L2 -25 Z M0 0 L20 12 L24 9 Z M0 0 L-18 15 L-22 12 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="5s" repeatCount="indefinite" />
            </path>
          </g>

          {/* Additional Pine Trees at right */}
          <path d="M1075 160 L1080 148 L1077 148 L1081 138 L1078 138 L1082 128 L1086 128 L1090 138 L1087 138 L1091 148 L1088 148 L1093 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <path d="M1135 160 L1140 145 L1137 145 L1141 135 L1138 135 L1142 125 L1146 125 L1150 135 L1147 135 L1151 145 L1148 145 L1153 160 Z" fill="#090e1a" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          
          {/* Ground Line */}
          <line x1="0" y1="160" x2="1200" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Accent Bar Section */}
      <div className="footer-bottom-accent-bar">
        <div className="container">
          <div className="bottom-accent-flex-row">
            {/* Logo Group */}
            <div className="accent-logo-wrapper">
              <img 
                src="/logo.png" 
                alt="PK Software Solutions" 
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>

            {/* Social Block */}
            <div className="accent-social-wrapper">
              <span className="accent-label">Follow Us</span>
              <div className="social-squares">
                <a href="#" className="social-square" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.8M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.4 9.94v-8.37H5.47v8.37h2.81z"/>
                  </svg>
                </a>
                <a href="#" className="social-square" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.6 8.6 0 0 1-5.3 1.83c-.35 0-.69-.02-1.03-.06 1.95 1.25 4.27 1.97 6.75 1.97 8.09 0 12.51-6.7 12.51-12.52 0-.19 0-.38-.01-.57.87-.62 1.63-1.4 2.22-2.28z"/>
                  </svg>
                </a>
                <a href="#" className="social-square" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M21.58 7.3a2.86 2.86 0 0 0-2-2C17.78 4.75 12 4.75 12 4.75s-5.78 0-7.58.5a2.86 2.86 0 0 0-2 2C2 9.08 2 12 2 12s0 2.92.42 4.7a2.86 2.86 0 0 0 2 2c1.8.5 7.58.5 7.58.5s5.78 0 7.58-.5a2.86 2.86 0 0 0 2-2C22 14.92 22 12 22 12s0-2.92-.42-4.7zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter CTA Block */}
            <div className="accent-cta-wrapper">
              <span className="accent-label">Quick Connect</span>
              <div className="cta-buttons">
                <a href="/contact" className="accent-cta-btn text-btn">Schedule Consultation</a>
                <a href="mailto:info@pksoftwaresolutions.com" className="accent-cta-btn email-btn">Email Inquiry</a>
              </div>
            </div>
          </div>

          {/* Legal / Copyright Row */}
          <div className="accent-bottom-row">
            <p>&copy; {new Date().getFullYear()} PK Software Solutions. All Rights Reserved. Salem, Tamilnadu, India.</p>
            <div className="accent-legal-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Terms of Use</a>
              <span>|</span>
              <a href="#">SLA Assurances</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
