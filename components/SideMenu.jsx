'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { dojoAudio } from '../lib/audio';

export default function SideMenu({ isOpen, onClose }) {
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (soundType) => {
    if (soundType === 'strike') {
      dojoAudio.playTaikoHit();
    } else {
      dojoAudio.playSwoosh();
    }
    onClose();
  };

  const navLinks = [
    { href: '#about', num: '01', title: 'Heritage & Lineage', kanji: '伝統', sound: 'swoosh' },
    { href: '#belts', num: '02', title: 'Rank Syllabus (7 Belts)', kanji: '段位', sound: 'swoosh' },
    { href: '#achievements', num: '03', title: '3,000+ Medals Archive', kanji: '栄光', sound: 'swoosh' },
    { href: '#matcher', num: '04', title: 'Discipline Consultation', kanji: '診断', sound: 'swoosh' },
    { href: '#programs', num: '05', title: 'Academic Disciplines', kanji: '学科', sound: 'swoosh' },
    { href: '#schedule', num: '06', title: 'Weekly Schedule', kanji: '日程', sound: 'swoosh' },
    { href: '#workshops', num: '07', title: 'Hosted Workshops', kanji: '講習', sound: 'swoosh' },
    { href: '#testimonials', num: '08', title: 'Voices of Honour', kanji: '名誉', sound: 'swoosh' },
    { href: '#enroll', num: '09', title: 'Official Admissions', kanji: '入門', sound: 'strike', isEnroll: true },
  ];

  return (
    <>
      <div
        className={`side-menu-overlay ${isOpen ? 'active' : ''}`}
        id="menu-overlay"
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        ref={drawerRef}
        className={`side-menu-drawer ${isOpen ? 'active' : ''}`}
        id="side-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        aria-hidden={!isOpen}
      >
        <div className="side-menu-inner">
          <div className="side-menu-header">
            <div className="side-menu-brand">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.jpg`}
                alt="USKO India Official Crest"
                width={38}
                height={38}
                className="side-menu-logo"
              />
              <span className="side-menu-brand-name">
                USKO <span className="gold-accent">INDIA</span>
              </span>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              className="side-menu-close"
              id="menu-close"
              aria-label="Close navigation menu"
              onClick={onClose}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="side-menu-kanji-bg" aria-hidden="true">
            武道
          </div>

          <nav className="side-menu-nav" aria-label="Side Navigation">
            <ul className="side-nav-links">
              {navLinks.map((item) => (
                <li key={item.href} className="side-nav-item">
                  <a
                    href={item.href}
                    className={`side-nav-link ${item.isEnroll ? 'side-nav-enroll' : ''}`}
                    onClick={() => handleLinkClick(item.sound)}
                  >
                    <span className="nav-roman">{item.num}</span>
                    <span className="nav-title">{item.title}</span>
                    {item.isEnroll ? (
                      <span className="nav-arrow">&rarr;</span>
                    ) : (
                      <span className="nav-kanji">{item.kanji}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="side-menu-footer">
            <div className="side-menu-contact">
              <p className="side-contact-line">
                <strong>Main Dojo:</strong> Central Arena, India
              </p>
              <p className="side-contact-line">
                <strong>Admissions:</strong> admissions@uskoindia.com
              </p>
            </div>
            <a
              href="https://wa.me/919999999999?text=Hello%20USKO%20India,%20I%20would%20like%20to%20enquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-concierge btn-side-concierge"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
