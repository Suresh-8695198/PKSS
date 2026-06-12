'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import About from '../../components/about/Vision&Mission/Vision&Mission';
import Timeline from '../../components/about/Timeline/Timeline';
import CaseStudies from '../../components/about/CaseStudies/CaseStudies';
import Footer from '../../components/layout/Footer/Footer';

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
