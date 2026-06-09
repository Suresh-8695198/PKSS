'use client';

import React from 'react';
import { ShieldCheck, BookOpen, UserCheck, Briefcase } from 'lucide-react';

export default function Academy() {
  const points = [
    {
      title: '100% Placement Guarantee',
      desc: 'Our customized courses ensure that every candidate, IT or Non-IT, is equipped for immediate employment.',
      icon: <UserCheck className="acad-icon orange" />
    },
    {
      title: 'Hands-on Syllabus',
      desc: 'Learn web application architecture, cloud infrastructure, and CRM customization with active projects.',
      icon: <BookOpen className="acad-icon blue" />
    },
    {
      title: 'Industry Mentorship',
      desc: 'Courses are delivered directly by corporate leads and certified Salesforce/Zoho experts.',
      icon: <Briefcase className="acad-icon cyan" />
    }
  ];

  return (
    <section className="academy-section" id="academy-info">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">PK Academy</span>
          <h2 className="section-title">Upskilling & Placement Programs</h2>
          <p className="section-subtitle">
            Bridge the gap between training and employment with Salem's leading hands-on training provider.
          </p>
        </div>

        <div className="academy-grid">
          <div className="academy-content-info">
            <h3 className="acad-headline">Empowering Aspirants For Prestigious Software Roles</h3>
            <p className="acad-desc">
              PK Software Solutions starts its training division with the gracious ambition of providing quality technology education at affordable prices. We help candidates build the confidence and skills needed to scale up quickly.
            </p>
            <div className="acad-badges-list">
              <span className="badge-unit"><ShieldCheck size={14} /> Full-Stack Dev Syllabus</span>
              <span className="badge-unit"><ShieldCheck size={14} /> CRM Cloud Certification</span>
              <span className="badge-unit"><ShieldCheck size={14} /> Mock Technical Audits</span>
            </div>
            <a href="#careers" className="btn btn-primary">
              Apply For Training
            </a>
          </div>

          <div className="academy-cards-col">
            {points.map((pt, idx) => (
              <div className="glass-card acad-point-card" key={idx}>
                <div className="acad-icon-wrapper">
                  {pt.icon}
                </div>
                <div>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
