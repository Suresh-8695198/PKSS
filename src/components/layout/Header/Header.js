'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
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
            {links.map((link, idx) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <li 
                  key={link.name} 
                  className={`nav-item-li ${link.hasDropdown ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                  onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                >
                  {link.hasDropdown ? (
                    <button 
                      className={`nav-link dropdown-toggle-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleDropdownToggle(idx)}
                      aria-expanded={activeDropdown === idx}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className="dropdown-arrow-icon" />
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className={`nav-link ${isActive ? 'active' : ''}`} 
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
  
                  {link.hasDropdown && (
                  <div className={`nav-dropdown-menu ${activeDropdown === idx ? 'show' : ''}`}>
                    <div className="dropdown-glow-mesh"></div>
                    {link.dropdownItems.map((subItem) => (
                      <a 
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
                      </a>
                    ))}
                  </div>
                )}
              </li>
            )})}
          </ul>
        </nav>

        {/* iOS-style Theme Toggle Switch */}
        <div className="header-right-actions">
          <button
            className="theme-toggle-switch"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <div className="toggle-track">
              <Sun size={12} className="toggle-icon toggle-icon-sun" />
              <Moon size={12} className="toggle-icon toggle-icon-moon" />
              <div className="toggle-thumb">
                {theme === 'dark' ? (
                  <Moon size={11} className="thumb-icon" />
                ) : (
                  <Sun size={11} className="thumb-icon" />
                )}
              </div>
            </div>
          </button>
        </div>

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
