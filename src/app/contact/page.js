'use client';

import React from 'react';
import Header from '../../components/layout/Header';
import ContactForm from '../../components/contact/ContactForm';
import Footer from '../../components/layout/Footer';

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
