'use client';

import React from 'react';
import Header from '../components/layout/Header/Header';
import Hero from '../components/home/Hero/Hero';
import ClientLogos from '../components/home/ClientLogos';
import About from '../components/about/Vision&Mission/Vision&Mission';
import Services from '../components/services/Services/Services';
import CorporateValues from '../components/home/CorporateValues/CorporateValues';
import Footer from '../components/layout/Footer/Footer';
import './home.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-page-container">
        {/* Hero & Client Logos marquee */}
        <Hero />
        <ClientLogos />

        {/* Professionals Banner (fixed reveal window) */}
        <div className="professionals-banner-wrapper">
          <div className="professionals-banner-bg" />
          <div className="sticky-image-overlay" />
        </div>

        {/* Vision & Mission (About) */}
        <About preview={true} />

        {/* Services */}
        <Services preview={true} />

        {/* Corporate Values (Core Values and Principles) */}
        <CorporateValues />
      </main>
      <Footer />
    </>
  );
}


