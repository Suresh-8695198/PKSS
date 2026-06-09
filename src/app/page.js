'use client';

import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Timeline from '../components/Timeline';
import CaseStudies from '../components/CaseStudies';
import TechEcosystem from '../components/TechEcosystem';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Academy from '../components/Academy';
import CareersForm from '../components/CareersForm';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Custom Cursor tracking (desktop only)
    const handleCursorMove = (e) => {
      if (cursorRef.current && cursorDotRef.current && window.innerWidth > 768) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleCursorMove);

    // Hover effect listeners for link elements
    const handleMouseEnterLink = () => {
      if (cursorRef.current) cursorRef.current.classList.add('hovered');
    };
    const handleMouseLeaveLink = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('hovered');
    };

    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, input, select, textarea, .service-card, .tab-btn');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterLink);
        el.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    attachHoverListeners();

    // Re-attach listeners when DOM changes (e.g. tab switches)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleCursorMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor elements */}
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>

      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <Industries />
        <Timeline />
        <CaseStudies />
        <TechEcosystem />
        <Stats />
        <Testimonials />
        <Academy />
        <CareersForm />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
