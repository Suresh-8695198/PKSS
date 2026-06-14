'use client';

import React from 'react';
import Header from '../components/layout/Header/Header';
import Hero from '../components/home/Hero/Hero';
import ClientLogos from '../components/home/ClientLogos';
import About from '../components/about/Vision&Mission/Vision&Mission';
import Services from '../components/services/Services/Services';
import Industries from '../components/industries/Industries';
import TechEcosystem from '../components/home/TechEcosystem';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Academy from '../components/home/Academy';
import CareersForm from '../components/careers/CareersForm';
import Footer from '../components/layout/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="sticky-stack-container">
        {/* Slide 1: Hero, Client Logos marquee & Professionals Banner */}
        <div className="sticky-stack-section" id="slide-hero" style={{ zIndex: 1 }}>
          <Hero />
          <ClientLogos />
          <div className="professionals-banner-wrapper">
            <div className="professionals-banner-bg" />
            <div className="sticky-image-overlay" />
          </div>
        </div>

        {/* Slide 3: Vision & Mission (About) */}
        <div className="sticky-stack-section" id="slide-about" style={{ zIndex: 3 }}>
          <About preview={true} />
        </div>

        {/* Slide 4: Services */}
        <div className="sticky-stack-section" id="slide-services" style={{ zIndex: 4 }}>
          <Services preview={true} />
        </div>

        {/* Slide 5: Industries */}
        <div className="sticky-stack-section" id="slide-industries" style={{ zIndex: 5 }}>
          <Industries preview={true} />
        </div>

        {/* Slide 6: Technology Ecosystem */}
        <div className="sticky-stack-section" id="slide-techecosystem" style={{ zIndex: 6 }}>
          <TechEcosystem />
        </div>

        {/* Slide 7: Stats Impact */}
        <div className="sticky-stack-section" id="slide-stats" style={{ zIndex: 7 }}>
          <Stats />
        </div>

        {/* Slide 8: Testimonials */}
        <div className="sticky-stack-section" id="slide-testimonials" style={{ zIndex: 8 }}>
          <Testimonials />
        </div>

        {/* Slide 9: Academy placement details */}
        <div className="sticky-stack-section" id="slide-academy" style={{ zIndex: 9 }}>
          <Academy />
        </div>

        {/* Slide 10: Careers Submission Form */}
        <div className="sticky-stack-section" id="slide-careers" style={{ zIndex: 10 }}>
          <CareersForm preview={true} />
        </div>
      </main>
      <Footer />
    </>
  );
}
