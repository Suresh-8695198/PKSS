'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);

  const handleRopePull = () => {
    if (isPulling) return;
    setIsPulling(true);
    
    // Toggle theme at the peak of the pull
    setTimeout(() => {
      toggleTheme();
    }, 150);

    // Reset pulling animation state
    setTimeout(() => {
      setIsPulling(false);
    }, 550);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const progressIndicator = document.querySelector('.scroll-progress-indicator');
      if (progressIndicator) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const progress = (window.scrollY / totalHeight) * 100;
          progressIndicator.style.width = `${progress}%`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      href: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Corporate Values', href: '/about#about' },
        { name: 'Process Blueprint', href: '/about#transformation' },
        { name: 'Success Cases', href: '/about#case-studies' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Salesforce Consulting', href: '/services#salesforce' },
        { name: 'Zoho Development', href: '/services#zoho' },
        { name: 'HubSpot CRM Solutions', href: '/services#hubspot' },
        { name: 'Application Development', href: '/services#app-dev' },
        { name: 'Cloud Engineering', href: '/services#cloud' },
        { name: 'AI & Automation', href: '/services#ai-automation' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Healthcare Portals', href: '/industries#healthcare' },
        { name: 'Manufacturing ERP', href: '/industries#manufacturing' },
        { name: 'Retail Commerce', href: '/industries#retail' },
        { name: 'EdTech Frameworks', href: '/industries#education' },
        { name: 'Logistics Operations', href: '/industries#logistics' }
      ]
    },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const handleDropdownToggle = (idx) => {
    if (activeDropdown === idx) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(idx);
    }
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Top glowing progress line */}
      <div className="scroll-progress-indicator"></div>

      <div className="nav-container">
        <Link href="/" className="logo-area" aria-label="PK Software Solutions Home">
          <img 
            src="/logo.png" 
            alt="PK Software Solutions" 
            className="logo-img" 
            style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            {links.map((link, idx) => (
              <li 
                key={link.name} 
                className={`nav-item-li ${link.hasDropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button 
                    className="nav-link dropdown-toggle-btn"
                    onClick={() => handleDropdownToggle(idx)}
                    aria-expanded={activeDropdown === idx}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={14} className="dropdown-arrow-icon" />
                  </button>
                ) : (
                  <Link 
                    href={link.href} 
                    className="nav-link" 
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}

                {link.hasDropdown && (
                  <div className={`nav-dropdown-menu ${activeDropdown === idx ? 'show' : ''}`}>
                    <div className="dropdown-glow-mesh"></div>
                    {link.dropdownItems.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href} 
                        className="dropdown-item-link"
                        onClick={() => {
                          setMenuOpen(false);
                          setActiveDropdown(null);
                        }}
                      >
                        <span className="dropdown-item-bullet"></span>
                        <span className="dropdown-item-txt">{subItem.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" className="active-nav-btn" onClick={() => setMenuOpen(false)}>
                <span>Start Project</span>
                <ArrowRight size={14} className="btn-arrow" />
              </Link>
            </li>
            <li className="rope-wrapper-li">
              <div 
                className={`theme-rope-container ${isPulling ? 'pulling' : ''}`}
                onClick={handleRopePull}
                title="Pull to Switch Theme"
              >
                <div className="rope-line"></div>
                <div className="rope-handle">
                  {theme === 'dark' ? <Sun size={14} className="rope-icon sun" /> : <Moon size={14} className="rope-icon moon" />}
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <button 
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`} 
          aria-label="Toggle Menu" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}
