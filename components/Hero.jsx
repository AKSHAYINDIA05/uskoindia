'use client';

import { useEffect, useRef } from 'react';
import { dojoAudio } from '../lib/audio';

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const statsContainer = statsRef.current;
    if (!statsContainer) return;

    const cards = statsContainer.querySelectorAll('.stat-deck-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card) => {
              const target = parseInt(card.getAttribute('data-counter'), 10);
              const suffix = card.getAttribute('data-suffix') || '';
              const valueEl = card.querySelector('.stat-value');
              if (!valueEl || card.dataset.animated) return;
              card.dataset.animated = 'true';

              let current = 0;
              const duration = 1800;
              const stepTime = 25;
              const steps = duration / stepTime;
              const increment = target / steps;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  valueEl.textContent = target.toLocaleString() + suffix;
                  clearInterval(timer);
                } else {
                  valueEl.textContent = Math.floor(current).toLocaleString() + suffix;
                }
              }, stepTime);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(statsContainer);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Full-Bleed High-Impact Atmospheric Photo Background */}
      <div
        className="hero-bg-photo"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/hero-bg.jpg)`,
        }}
        aria-hidden="true"
      />
      <div className="hero-vignette" aria-hidden="true" />

      {/* Watermark Japanese Kanji with Archival Depth */}
      <div className="kanji-watermark kanji-left" aria-hidden="true">
        空手
      </div>
      <div className="kanji-watermark kanji-right" aria-hidden="true">
        武道
      </div>

      <div className="container hero-container">
        <div className="hero-eyebrow anim-hero">
          <span>Authentic Shotokan &bull; Nationally Accredited</span>
        </div>

        <h1 className="hero-main-heading anim-hero">
          <span className="title-subhead">THE DISCIPLINE OF PERFECTION</span>
          <span className="title-kinetic-line">
            FORGE YOUR INNER <em className="champagne-serif">WARRIOR</em>
          </span>
        </h1>

        {/* Hairline Red Divider */}
        <div className="hairline-gold-divider anim-hero" aria-hidden="true" />

        <p className="hero-statement anim-hero">
          Universe Shotokan Karate Organisation (USKO) India. Where classical Japanese martial values meet world-class combat conditioning. Home to over{' '}
          <strong>3,000 national and international medalists</strong> and <strong>40 championship trophies</strong>.
        </p>

        {/* Primary CTA Buttons */}
        <div className="hero-cta-cluster anim-hero">
          <a
            href="#enroll"
            className="btn btn-luxury-primary"
            onClick={() => dojoAudio.playTaikoHit()}
          >
            <span className="btn-text">Reserve Trial Session</span>
            <svg
              className="btn-arrow-svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="#matcher"
            className="btn btn-luxury-secondary"
            onClick={() => dojoAudio.playSwoosh()}
          >
            <span className="btn-text">Explore Disciplines</span>
          </a>
        </div>

        {/* Archival Stat Deck (Monolithic Minimalist Counter) */}
        <div className="hero-stats-deck anim-hero" ref={statsRef}>
          <div className="stat-deck-card" data-counter="3000" data-suffix="+">
            <div className="stat-value">3,000+</div>
            <div className="stat-label">Championship Medals</div>
            <div className="stat-sub">Gold &bull; Silver &bull; Bronze</div>
          </div>
          <div className="stat-deck-card" data-counter="40" data-suffix="+">
            <div className="stat-value">40+</div>
            <div className="stat-label">Tournament Trophies</div>
            <div className="stat-sub">National &amp; International</div>
          </div>
          <div className="stat-deck-card" data-counter="15" data-suffix="+">
            <div className="stat-value">15+</div>
            <div className="stat-label">Years of Mastery</div>
            <div className="stat-sub">Continuous Instruction</div>
          </div>
          <div className="stat-deck-card" data-counter="2000" data-suffix="+">
            <div className="stat-value">2,000+</div>
            <div className="stat-label">Athletes Graduated</div>
            <div className="stat-sub">Youth &amp; Adults</div>
          </div>
        </div>
      </div>

      {/* Understated Scroll Cue */}
      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to legacy section">
        <span className="cue-text">THE HERITAGE</span>
        <div className="cue-line" aria-hidden="true" />
      </a>
    </section>
  );
}
