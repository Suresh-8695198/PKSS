'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const words = ["Software Solutions", "CRM Ecosystems", "Cloud Applications", "Zoho Workflows"];
  const [currentWordIdx, setCurrentWordIdx] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIdx];

    const tick = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));
        if (displayedText === currentFullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          return;
        }
      }

      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIdx]);

  const backgroundVideo = React.useMemo(() => (
    <video
      className="hero-bg-video"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/images/home/hero_bg.jpg"
    >
      <source src="/images/home/hero_vid.mp4" type="video/mp4" />
    </video>
  ), []);

  return (
    <section className="hero-section" id="hero">
      {/* ── Background Video Layer ── */}
      {backgroundVideo}


      <div className="modern-bg-element bg-shape-1" />
      <div className="modern-bg-element bg-shape-2" />

      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT: copy ── */}
          <div className="hero-left-column">
            <h1 className="hero-title">
              We Architect Custom <br />
              <span className="typewriter-container">
                <span className="gradient-accent">{displayedText || '\u00A0'}</span>
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>

            <p className="hero-subtitle">
              Empowering global brands and local leaders with high-performance Web Apps,
              Certified Salesforce Consulting, Zoho Deluge workflows, HubSpot CRM automations,
              and placement-backed training.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>

            {/* ── Authorized Technology Competencies ── */}
            <div className="hero-partners">
              <p className="partners-label">Authorized Technology Competencies</p>
              <div className="partners-row">

                {/* Salesforce */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="partner-logo-img" />

                {/* HubSpot */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="partner-logo-img" />

                {/* Zoho */}
                <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" className="partner-logo-img zoho-logo-fix" />

                {/* Azure */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" className="partner-logo-img" />

                {/* Google Cloud */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="partner-logo-img" />

              </div>
            </div>
          </div>

          {/* ── RIGHT: Spacer for Background Graphic ── */}
          <div className="hero-right-spacer" />
        </div>
      </div>
    </section>
  );
}
