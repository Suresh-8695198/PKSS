'use client';

import React from 'react';
import Header from '../../components/Header';
import Industries from '../../components/Industries';
import Footer from '../../components/Footer';

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
