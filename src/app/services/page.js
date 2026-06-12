'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import Services from '../../components/services/Services/Services';
import Footer from '../../components/layout/Footer/Footer';

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
