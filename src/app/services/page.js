'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import Services from '../../components/services/Services/Services';
import TechEcosystemServices from '../../components/services/TechEcosystemServices/TechEcosystemServices';
import Footer from '../../components/layout/Footer/Footer';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="services-page-main">
        <Services preview={false} />
        <TechEcosystemServices />
      </main>
      <Footer />
    </>
  );
}
