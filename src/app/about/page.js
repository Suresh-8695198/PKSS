'use client';

import React from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Timeline from '../../components/Timeline';
import CaseStudies from '../../components/CaseStudies';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <About preview={false} />
        <Timeline />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
