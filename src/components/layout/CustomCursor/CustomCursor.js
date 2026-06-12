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

    // Hover effect listeners for link elements
    const handleMouseEnterLink = () => {
      if (cursorRef.current) cursorRef.current.classList.add('hovered');
    };
    const handleMouseLeaveLink = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('hovered');
    };

    const attachHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, input, select, textarea, .service-card, .tab-btn');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterLink);
        el.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    attachHoverListeners();

    // Re-attach listeners when DOM changes (e.g. tab switches)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleCursorMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>
    </>
  );
}
