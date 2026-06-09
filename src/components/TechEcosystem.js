'use client';

import React, { useState } from 'react';
import { 
  Cloud, GitMerge, Cpu, Server, Database, Globe, 
  Layout, Smartphone, Code2, Terminal, BarChart3, BrainCircuit 
} from 'lucide-react';

export default function TechEcosystem() {
  const [filter, setFilter] = useState('all');

  const techStack = [
    { name: 'Salesforce', cat: 'crm', desc: 'Apex, LWC, Cloud Sync', icon: <Cloud /> },
    { name: 'HubSpot', cat: 'crm', desc: 'Ops Hub, Integrations', icon: <GitMerge /> },
    { name: 'Zoho', cat: 'crm', desc: 'Deluge, Zoho Creator', icon: <Cpu /> },
    { name: 'Azure', cat: 'cloud', desc: 'Enterprise Cloud Systems', icon: <Server /> },
    { name: 'AWS', cat: 'cloud', desc: 'Serverless, Microservices', icon: <Database /> },
    { name: 'Google Cloud', cat: 'cloud', desc: 'Compute & Cloud Datasets', icon: <Globe /> },
    { name: 'React / Next.js', cat: 'dev', desc: 'Headless Frontends', icon: <Layout /> },
    { name: 'Flutter', cat: 'dev', desc: 'Cross-platform Mobile', icon: <Smartphone /> },
    { name: 'Python / Django', cat: 'dev', desc: 'Secure Server logic', icon: <Code2 /> },
    { name: 'Node.js', cat: 'dev', desc: 'API Gateways & microservices', icon: <Terminal /> },
    { name: 'Power BI', cat: 'data', desc: 'Executive Analytics', icon: <BarChart3 /> },
    { name: 'AI / LLM Nodes', cat: 'data', desc: 'Custom Agents Pipelines', icon: <BrainCircuit /> }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies' },
    { id: 'crm', name: 'CRM Systems' },
    { id: 'cloud', name: 'Cloud & Infrastructure' },
    { id: 'dev', name: 'Development Stacks' },
    { id: 'data', name: 'Data & Intelligence' }
  ];

  const filteredTech = filter === 'all' 
    ? techStack 
    : techStack.filter(item => item.cat === filter);

  return (
    <section className="tech-ecosystem-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Technology Ecosystem</span>
          <h2 className="section-title">Certified Stack Configurations</h2>
          <p className="section-subtitle">
            Leveraging specialized frameworks to construct scalable interfaces, automate workflows, and compile data lakes.
          </p>
        </div>

        <div className="tech-filters">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredTech.map((tech, idx) => (
            <div className="glass-card tech-card" key={idx}>
              <div className="tech-icon-wrapper">
                {tech.icon}
              </div>
              <div className="tech-info">
                <h4>{tech.name}</h4>
                <p>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
