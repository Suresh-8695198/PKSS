'use client';

import React from 'react';
import Header from '../../components/Header';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <ContactForm preview={false} />
      </main>
      <Footer />
    </>
  );
}
