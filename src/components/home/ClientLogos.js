'use client';

import React from 'react';

export default function ClientLogos() {
  const clients = [
    { name: 'Logo 1', path: '/images/LOGO/LOGO1.png' },
    { name: 'Logo 2', path: '/images/LOGO/LOGO2.png' },
    { name: 'Logo 3', path: '/images/LOGO/LOGO3.png' },
    { name: 'Logo 4', path: '/images/LOGO/LOGO4.png' },
    { name: 'Logo 5', path: '/images/LOGO/LOGO5.png' },
    { name: 'Logo 6', path: '/images/LOGO/LOGO6.png' }
  ];

  return (
    <section className="trust-marquee-section">
      <div className="container">
        <h2 className="section-micro-title text-center">Trusted By Leading Corporate Brands</h2>
        <div className="logo-marquee-container">
          <div className="marquee-track">
            {clients.concat(clients).concat(clients).map((client, idx) => (
              <div className="marquee-item" key={idx}>
                <img 
                  src={client.path} 
                  alt={client.name} 
                  className="client-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
