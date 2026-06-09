'use client';

import React from 'react';
import { Eye, FileCode2, Code, Layers, Send, TrendingUp } from 'lucide-react';

export default function Timeline() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Conducting audits on existing database structures, workflow logic, and mapping integration metrics.',
      icon: <Eye />
    },
    {
      step: '02',
      title: 'Plan',
      desc: 'Creating data schemas, designing API connection paths, and outlining cloud instances.',
      icon: <FileCode2 />
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Coding Lightning Web Components (LWC), custom Zoho Deluge pipelines, or Next.js frontends.',
      icon: <Code />
    },
    {
      step: '04',
      title: 'Integrate',
      desc: 'Connecting CRMs (HubSpot/Salesforce) with secure payment pathways, custom legacy databases, or warehouses.',
      icon: <Layers />
    },
    {
      step: '05',
      title: 'Deploy',
      desc: 'Launching containerized applications onto AWS/Azure nodes with automatic load balancing setups.',
      icon: <Send />
    },
    {
      step: '06',
      title: 'Optimize',
      desc: 'Continuous SLA audits, query optimizations, and monitoring live database transaction logs.',
      icon: <TrendingUp />
    }
  ];

  return (
    <section className="timeline-section" id="transformation">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Methodology</span>
          <h2 className="section-title">The Digital Transformation Blueprint</h2>
          <p className="section-subtitle">
            A systematic, certified methodology ensuring projects launch without downtime and remain fully scalable.
          </p>
        </div>

        <div className="timeline-nodes-wrapper">
          <div className="timeline-connecting-bar"></div>
          <div className="timeline-nodes">
            {steps.map((item, idx) => (
              <div className="timeline-node" key={idx}>
                <div className="node-marker-wrapper">
                  <div className="node-marker">
                    {item.icon}
                  </div>
                  <span className="node-step-num">{item.step}</span>
                </div>
                <div className="node-content glass-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
