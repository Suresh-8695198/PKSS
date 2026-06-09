'use client';

import React, { useState, useEffect } from 'react';
import { Award, Heart, CheckCircle2, Headphones } from 'lucide-react';

export default function Stats() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    support: 0
  });

  useEffect(() => {
    const duration = 1200; // Animation duration in ms
    const steps = 30;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        projects: Math.min(Math.round(50 * progress), 50),
        clients: Math.min(Math.round(20 * progress), 20),
        satisfaction: Math.min(Math.round(98 * progress), 98),
        support: 24 // static
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      value: `${stats.projects}+`,
      label: 'Enterprise Projects Delivered',
      icon: <Award className="stat-icon blue" />
    },
    {
      value: `${stats.clients}+`,
      label: 'Happy Global Clients',
      icon: <Heart className="stat-icon orange" />
    },
    {
      value: `${stats.satisfaction}%`,
      label: 'Client Satisfaction Rate',
      icon: <CheckCircle2 className="stat-icon cyan" />
    },
    {
      value: '24/7',
      label: 'Operations Dev Support',
      icon: <Headphones className="stat-icon green" />
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statItems.map((item, idx) => (
            <div className="glass-card stat-card" key={idx}>
              <div className="stat-header">
                {item.icon}
                <span className="stat-number">{item.value}</span>
              </div>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
