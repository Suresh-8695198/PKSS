'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import About from '../../components/about/About';
import Timeline from '../../components/about/Timeline';
import CaseStudies from '../../components/about/CaseStudies';
import Footer from '../../components/layout/Footer';

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
