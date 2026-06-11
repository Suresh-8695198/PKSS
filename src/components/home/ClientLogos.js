'use client';

import React from 'react';

export default function ClientLogos() {
  const clients = [
    {
      name: 'TAWNY Technologies',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <rect x="5" y="10" width="8" height="20" rx="2" fill="var(--cyan)" />
          <rect x="18" y="5" width="8" height="30" rx="2" fill="var(--blue)" />
          <rect x="31" y="15" width="8" height="15" rx="2" fill="var(--orange)" />
          <text x="48" y="26" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" letterSpacing="0.05em">TAWNY</text>
          <text x="48" y="34" fontFamily="var(--font-body)" fontWeight="500" fontSize="7" letterSpacing="0.2em" fill="var(--text-muted)">TECHNOLOGIES</text>
        </svg>
      )
    },
    {
      name: 'KONSULT',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <path d="M10 5 L10 35 M10 20 L25 5 M10 20 L25 35 M22 13 L32 5 M22 27 L32 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="10" cy="5" r="3" fill="var(--blue)" />
          <circle cx="25" cy="5" r="3" fill="var(--cyan)" />
          <circle cx="32" cy="5" r="3" fill="var(--orange)" />
          <text x="45" y="27" fontFamily="var(--font-heading)" fontWeight="800" fontSize="16" letterSpacing="0.08em">KONSULT</text>
        </svg>
      )
    },
    {
      name: 'Partzrider',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="3" fill="none" />
          <circle cx="20" cy="20" r="5" fill="var(--orange)" />
          <path d="M20 6 L20 12 M20 28 L20 34 M6 20 L12 20 M28 20 L34 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <text x="42" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" letterSpacing="0.03em">PARTZRIDER</text>
          <text x="42" y="33" fontFamily="var(--font-body)" fontWeight="600" fontSize="7" letterSpacing="0.1em" fill="var(--text-muted)">AUTOMOTIVE SYNC</text>
        </svg>
      )
    },
    {
      name: 'IAPTNSC',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <path d="M8 8 L22 8 L28 20 L22 32 L8 32 L14 20 Z" stroke="var(--blue)" strokeWidth="2" fill="none" />
          <path d="M12 12 L18 12 L22 20 L18 28 L12 28 L15 20 Z" fill="var(--cyan)" />
          <text x="36" y="24" fontFamily="var(--font-heading)" fontWeight="800" fontSize="15" letterSpacing="0.1em">IAPTNSC</text>
          <text x="36" y="32" fontFamily="var(--font-body)" fontWeight="600" fontSize="6.5" letterSpacing="0.15em" fill="var(--text-muted)">ACADEMIC REGISTRY</text>
        </svg>
      )
    },
    {
      name: 'IDEAL Life Sciences',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <path d="M10 20 Q 20 5 30 20 T 50 20" stroke="var(--cyan)" strokeWidth="2" fill="none" />
          <path d="M10 20 Q 20 35 30 20 T 50 20" stroke="var(--blue)" strokeWidth="2" fill="none" />
          <circle cx="20" cy="12" r="2.5" fill="var(--orange)" />
          <circle cx="30" cy="28" r="2.5" fill="var(--orange)" />
          <text x="56" y="25" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" letterSpacing="0.02em">IDEAL</text>
          <text x="56" y="33" fontFamily="var(--font-body)" fontWeight="500" fontSize="7" letterSpacing="0.1em" fill="var(--text-muted)">LIFE SCIENCES</text>
        </svg>
      )
    },
    {
      name: 'Manav Utthan',
      logo: (
        <svg viewBox="0 0 200 40" fill="currentColor" className="client-logo-svg">
          <path d="M20 5 C11.7 5 5 11.7 5 20 C5 28.3 11.7 35 20 35 C28.3 35 35 28.3 35 20" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M14 22 C14 22 17 18 20 18 C23 18 26 22 26 22 M20 18 L20 32" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="12" r="4" fill="var(--orange)" />
          <text x="42" y="23" fontFamily="var(--font-heading)" fontWeight="800" fontSize="14" letterSpacing="0.04em">MANAV UTTHAN</text>
          <text x="42" y="32" fontFamily="var(--font-body)" fontWeight="600" fontSize="7" letterSpacing="0.08em" fill="var(--text-muted)">FOUNDATIONS</text>
        </svg>
      )
    }
  ];

  return (
    <section className="trust-marquee-section">
      <div className="container">
        <h2 className="section-micro-title text-center">Trusted By Leading Corporate Brands</h2>
        <div className="logo-marquee-container">
          <div className="marquee-track">
            {clients.concat(clients).map((client, idx) => (
              <div className="marquee-item" key={idx}>
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
