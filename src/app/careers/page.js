'use client';

import React from 'react';
import Header from '../../components/Header';
import CareersForm from '../../components/CareersForm';
import Footer from '../../components/Footer';

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <CareersForm preview={false} />
      </main>
      <Footer />
    </>
  );
}
