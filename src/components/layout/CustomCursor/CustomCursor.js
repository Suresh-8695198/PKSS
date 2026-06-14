'use client';

import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    // Custom Cursor tracking (desktop only)
    const handleCursorMove = (e) => {
      if (cursorRef.current && cursorDotRef.current && window.innerWidth > 768) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleCursorMove);

    // Helper check to identify hoverable elements
    const isHoverable = (el) => {
      if (!el || typeof el.closest !== 'function') return null;
      return el.closest('a, button, input, select, textarea, .service-card, .tab-btn, .carousel-card, .active-nav-btn');
    };

    // Event delegation for mouseover
    const handleMouseOver = (e) => {
      if (!cursorRef.current) return;
      if (isHoverable(e.target)) {
        cursorRef.current.classList.add('hovered');
      }
    };

    // Event delegation for mouseout
    const handleMouseOut = (e) => {
      if (!cursorRef.current) return;
      const current = isHoverable(e.target);
      const next = isHoverable(e.relatedTarget);
      
      // Remove hover state if cursor leaves the hoverable zone
      if (current && !next) {
        cursorRef.current.classList.remove('hovered');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleCursorMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>
    </>
  );
}
