'use client';

import React from 'react';
import Header from '../../components/Header';
import Services from '../../components/Services';
import Footer from '../../components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Services preview={false} />
      </main>
      <Footer />
    </>
  );
}
