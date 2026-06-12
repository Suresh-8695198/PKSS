'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import Industries from '../../components/industries/Industries';
import Footer from '../../components/layout/Footer/Footer';

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <Industries preview={false} />
      </main>
      <Footer />
    </>
  );
}
