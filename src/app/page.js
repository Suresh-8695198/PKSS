'use client';

import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Industries from '../components/industries/Industries';
import TechEcosystem from '../components/home/TechEcosystem';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Academy from '../components/home/Academy';
import CareersForm from '../components/careers/CareersForm';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/layout/Footer';

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
