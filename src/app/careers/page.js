'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import CareersForm from '../../components/careers/CareersForm';
import Footer from '../../components/layout/Footer/Footer';

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
