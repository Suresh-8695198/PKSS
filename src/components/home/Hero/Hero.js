'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 24;
    const colors = ['#00B8FF', '#59A700', '#0057D9', '#84D800'];

    class Particle {
      constructor() {
        this.reset();
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = canvas.width * 0.5 + Math.random() * (canvas.width * 0.5);
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.3;
        this.fadeSpeed = 0.002 + Math.random() * 0.003;
        this.fading = Math.random() > 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < canvas.width * 0.4 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }

        if (this.fading) {
          this.alpha -= this.fadeSpeed;
          if (this.alpha <= 0.2) this.fading = false;
        } else {
          this.alpha += this.fadeSpeed;
          if (this.alpha >= 0.8) this.fading = true;
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const beams = [];
    const beamCount = 3;
    class LightBeam {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = canvas.width * 0.6 + Math.random() * (canvas.width * 0.3);
        this.y = -50;
        this.speed = 1 + Math.random() * 1.5;
        this.length = 60 + Math.random() * 80;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.width = Math.random() * 1.2 + 0.5;
        this.alpha = Math.random() * 0.3 + 0.15;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.y > canvas.height + 100 || this.x > canvas.width + 100) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - Math.cos(this.angle) * this.length, this.y - Math.sin(this.angle) * this.length);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.stroke();
        ctx.restore();
      }
    }

    for (let i = 0; i < beamCount; i++) {
      beams.push(new LightBeam());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach(beam => {
        beam.update();
        beam.draw();
      });

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grad.addColorStop(0, particles[i].color);
            grad.addColorStop(1, particles[j].color);
            ctx.strokeStyle = grad;
            ctx.globalAlpha = (1 - dist / 120) * 0.12 * ((particles[i].alpha + particles[j].alpha) / 2);
            ctx.lineWidth = 0.7;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const words = ["Software Solutions", "CRM Ecosystems", "Cloud Applications", "Zoho Workflows"];
  const [currentWordIdx, setCurrentWordIdx] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;
    const currentFullWord = words[currentWordIdx];

    const tick = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));
        if (displayedText === currentFullWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          return;
        }
      }

      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIdx]);

  return (
    <section className="hero-section" id="hero">
      {/* ── Background Image Layer (animated) ── */}
      <div className="hero-bg-image" />
      <div className="hero-bg-overlay" />

      {/* ── Canvas Animation Overlay ── */}
      <canvas ref={canvasRef} className="hero-canvas-animation" />

      <div className="modern-bg-element bg-shape-1" />
      <div className="modern-bg-element bg-shape-2" />

      <div className="container">
        <div className="hero-grid">

          {/* ── LEFT: copy ── */}
          <div className="hero-left-column">
            <h1 className="hero-title">
              We Architect Custom <br />
              <span className="typewriter-container">
                <span className="gradient-accent">{displayedText || '\u00A0'}</span>
                <span className="typewriter-cursor">|</span>
              </span>
            </h1>

            <p className="hero-subtitle">
              Empowering global brands and local leaders with high-performance Web Apps,
              Certified Salesforce Consulting, Zoho Deluge workflows, HubSpot CRM automations,
              and placement-backed training.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                <span>Explore Services</span>
              </Link>
            </div>

            {/* ── Authorized Technology Competencies ── */}
            <div className="hero-partners">
              <p className="partners-label">Authorized Technology Competencies</p>
              <div className="partners-row">

                {/* Salesforce */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="partner-logo-img" />

                {/* HubSpot */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="partner-logo-img" />

                {/* Zoho */}
                <img src="https://cdn.worldvectorlogo.com/logos/zoho-1.svg" alt="Zoho" className="partner-logo-img zoho-logo-fix" />

                {/* Azure */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" alt="Microsoft Azure" className="partner-logo-img" />

                {/* Google Cloud */}
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="partner-logo-img" />

              </div>
            </div>
          </div>

          {/* ── RIGHT: Spacer for Background Graphic ── */}
          <div className="hero-right-spacer" />
        </div>
      </div>
    </section>
  );
}
