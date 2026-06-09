'use client';

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientLogos from '../components/ClientLogos';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import TechEcosystem from '../components/TechEcosystem';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Academy from '../components/Academy';
import CareersForm from '../components/CareersForm';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <About preview={true} />
        <Services preview={true} />
        <Industries preview={true} />
        <TechEcosystem />
        <Stats />
        <Testimonials />
        <Academy />
        <CareersForm preview={true} />
        <ContactForm preview={true} />
      </main>
      <Footer />
    </>
  );
}
