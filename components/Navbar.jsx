'use client';

import Image from 'next/image';

export default function Navbar({ onOpenMenu, isAudioActive, onToggleAudio }) {
  return (
    <header className="site-header" id="site-header">
      <div className="container nav-wrapper">
        <a href="#hero" className="brand-identity" aria-label="Universe Shotokan Karate Organisation Home">
          <div className="brand-crest">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.jpg`}
              alt="USKO India Official Seal"
              width={46}
              height={46}
              className="brand-logo"
              priority
            />
          </div>
          <div className="brand-meta">
            <span className="brand-title">
              USKO <span className="gold-accent">INDIA</span>
            </span>
            <span className="brand-desc">EST. SHOTOKAN ACADEMY</span>
          </div>
        </a>

        {/* Action Cluster: Sound Toggle, Enrollment CTA & Luxury Side Menu Trigger */}
        <div className="header-actions">
          {/* Minimalist Audio Toggle Button */}
          <button
            type="button"
            className={`audio-toggle-btn ${isAudioActive ? 'active' : ''}`}
            id="audio-toggle"
            aria-label="Toggle ambient soundscape"
            aria-pressed={isAudioActive}
            onClick={onToggleAudio}
          >
            <span className="sound-bars" aria-hidden="true">
              <span className="sound-bar bar-1"></span>
              <span className="sound-bar bar-2"></span>
              <span className="sound-bar bar-3"></span>
              <span className="sound-bar bar-4"></span>
            </span>
            <span className="sound-label" id="sound-label">
              {isAudioActive ? 'SOUND: ON' : 'SOUND'}
            </span>
          </button>

          <a href="#enroll" className="btn btn-header-cta nav-cta-btn">
            <span>ENROLLMENT</span>
          </a>

          {/* Luxury Side Menu Trigger Button */}
          <button
            type="button"
            className="side-menu-trigger"
            id="menu-trigger"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="side-menu"
            onClick={onOpenMenu}
          >
            <span className="menu-trigger-text">MENU</span>
            <span className="menu-trigger-icon" aria-hidden="true">
              <span className="trigger-bar bar-top"></span>
              <span className="trigger-bar bar-bot"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
