'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import About from '../../components/about/Vision&Mission/Vision&Mission';
import Timeline from '../../components/about/Timeline/Timeline';
import Stats from '../../components/about/Stats/Stats';
import Footer from '../../components/layout/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '90px' }}>
        <About preview={false} />
        <Timeline />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
