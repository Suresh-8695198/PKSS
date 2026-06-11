'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import Services from '../../components/services/Services';
import Footer from '../../components/layout/Footer';

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
