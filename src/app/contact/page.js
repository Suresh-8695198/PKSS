'use client';

import React from 'react';
import Header from '../../components/layout/Header/Header';
import ContactForm from '../../components/contact/ContactForm';
import Footer from '../../components/layout/Footer/Footer';

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
