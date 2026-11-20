'use client';

import Image from 'next/image';
import DojoKun from './DojoKun';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          {/* Dojo Kun: The Five Martial Precepts */}
          <DojoKun />

          <div className="footer-columns-grid">
            {/* Brand */}
            <div className="footer-col brand-col">
              <div className="footer-brand-header">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.jpg`}
                  alt="Universe Shotokan Karate Organisation Logo"
                  width={56}
                  height={56}
                />
                <div>
                  <h4 className="footer-brand-title">UNIVERSE SHOTOKAN KARATE ORGANISATION</h4>
                  <p className="footer-brand-sub">INDIA &bull; NATIONAL HEADQUARTERS</p>
                </div>
              </div>
              <p className="footer-motto">
                Forging resolute character, physical endurance, and martial excellence since four decades. 3,000+ championship medals and counting.
              </p>
              <div className="footer-social-links">
                <a href="#" className="social-circle" aria-label="Facebook">
                  FB
                </a>
                <a href="#" className="social-circle" aria-label="Instagram">
                  IG
                </a>
                <a href="#" className="social-circle" aria-label="YouTube">
                  YT
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-circle"
                  aria-label="WhatsApp"
                >
                  WA
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer-col">
              <h4 className="footer-heading">NAVIGATION</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#about">Heritage &amp; Lineage</a>
                </li>
                <li>
                  <a href="#belts">Rank Syllabus (7 Belts)</a>
                </li>
                <li>
                  <a href="#achievements">3,000+ Medals Vault</a>
                </li>
                <li>
                  <a href="#matcher">Discipline Consultation</a>
                </li>
                <li>
                  <a href="#programs">Academic Disciplines</a>
                </li>
                <li>
                  <a href="#schedule">Weekly Timetable</a>
                </li>
                <li>
                  <a href="#workshops">Hosted Workshops</a>
                </li>
              </ul>
            </div>

            {/* Disciplines */}
            <div className="footer-col">
              <h4 className="footer-heading">DISCIPLINES</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#programs">Youth Shotokan Karate</a>
                </li>
                <li>
                  <a href="#programs">Youth Combat Kickboxing</a>
                </li>
                <li>
                  <a href="#programs">Adult Pro Kickboxing</a>
                </li>
                <li>
                  <a href="#programs">Strength &amp; Fat Loss</a>
                </li>
                <li>
                  <a href="#programs">Tactical Women&apos;s Safety</a>
                </li>
                <li>
                  <a href="#programs">Private Masterclasses</a>
                </li>
              </ul>
            </div>

            {/* Headquarters */}
            <div className="footer-col">
              <h4 className="footer-heading">HEADQUARTERS</h4>
              <div className="footer-contact-details">
                <p>
                  <strong>
                    <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>{' '}
                    Main Dojo:
                  </strong>{' '}
                  Central Martial Arts Arena, [City], India
                </p>
                <p>
                  <strong>
                    <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>{' '}
                    Official Line:
                  </strong>{' '}
                  +91 XXXXX XXXXX / +91 XXXXX XXXXX
                </p>
                <p>
                  <strong>
                    <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>{' '}
                    Admissions:
                  </strong>{' '}
                  admissions@uskoindia.com
                </p>
                <p>
                  <strong>
                    <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>{' '}
                    Academy Hours:
                  </strong>{' '}
                  Mon &ndash; Sat: 06:00 AM &ndash; 09:00 PM<br />
                  Sun: 08:00 AM &ndash; 12:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>&copy; 2024 Universe Shotokan Karate Organisation, India. All Rights Reserved.</p>
            <p className="footer-subtext">Dedicated to classical Shotokan Karate-do and world-class Kickboxing pedagogy.</p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        className="back-to-top-btn"
        id="back-to-top"
        aria-label="Scroll to top of page"
        onClick={scrollToTop}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
      </button>
    </>
  );
}
