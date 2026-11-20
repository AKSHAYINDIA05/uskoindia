'use client';

import { dojoAudio } from '../lib/audio';

export default function Workshops({ onBookWorkshop }) {
  const handleReserve = (title) => {
    dojoAudio.playStrike();
    if (onBookWorkshop) onBookWorkshop(title);
  };

  return (
    <section className="section-block workshops-section" id="workshops">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">CONTINUING EDUCATION</span>
          <h2 className="editorial-title">
            HOSTED <em className="champagne-serif">WORKSHOPS</em>
          </h2>
          <p className="section-lead-para">
            Masterclasses conducted by visiting Grandmasters, open to both academy members and affiliated martial artists.
          </p>
        </div>

        <div className="workshops-editorial-grid gs-reveal">
          {/* Workshop 1 */}
          <article className="workshop-editorial-card">
            <div className="ws-calendar-block">
              <span className="ws-day">15</span>
              <span className="ws-month">DEC</span>
              <span className="ws-time">09:00 AM</span>
            </div>
            <div className="ws-main-details">
              <div className="ws-tag-cluster">
                <span className="ws-tag tag-discipline">SHOTOKAN BUNKAI</span>
                <span className="ws-tag tag-urgency">8 PLACES REMAINING</span>
              </div>
              <h3 className="ws-title">Advanced Black Belt Bunkai Masterclass</h3>
              <p className="ws-desc">
                An exhaustive exploration of practical combat applications embedded within classical Bassai Dai and Kanku Dai katas with 6th Dan Chief Sensei.
              </p>
              <div className="ws-meta-bar">
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{' '}
                  Main Tatami Hall
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>{' '}
                  4 Hours Intensive
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{' '}
                  Official Certification
                </span>
              </div>
            </div>
            <div className="ws-cta-block">
              <a
                href="#enroll"
                className="btn btn-luxury-primary btn-book-ws"
                onClick={() => handleReserve('Advanced Black Belt Bunkai Masterclass')}
              >
                Reserve Pass &rarr;
              </a>
            </div>
          </article>

          {/* Workshop 2 */}
          <article className="workshop-editorial-card">
            <div className="ws-calendar-block">
              <span className="ws-day">22</span>
              <span className="ws-month">DEC</span>
              <span className="ws-time">10:00 AM</span>
            </div>
            <div className="ws-main-details">
              <div className="ws-tag-cluster">
                <span className="ws-tag tag-discipline">PRO KICKBOXING</span>
                <span className="ws-tag tag-urgency">LIMITED REGISTRATION</span>
              </div>
              <h3 className="ws-title">WAKO-Standard Fight Camp &amp; Striking Biomechanics</h3>
              <p className="ws-desc">
                High-performance striking seminar covering low-kick power generation, switch-kick angles, ring generalship, and tournament point strategies.
              </p>
              <div className="ws-meta-bar">
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{' '}
                  Arena I
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>{' '}
                  5 Hours Camp
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>{' '}
                  Full Sparring Gear Required
                </span>
              </div>
            </div>
            <div className="ws-cta-block">
              <a
                href="#enroll"
                className="btn btn-luxury-primary btn-book-ws"
                onClick={() => handleReserve('WAKO-Standard Fight Camp')}
              >
                Reserve Pass &rarr;
              </a>
            </div>
          </article>

          {/* Workshop 3 */}
          <article className="workshop-editorial-card">
            <div className="ws-calendar-block">
              <span className="ws-day">05</span>
              <span className="ws-month">JAN</span>
              <span className="ws-time">10:00 AM</span>
            </div>
            <div className="ws-main-details">
              <div className="ws-tag-cluster">
                <span className="ws-tag tag-discipline">COMMUNITY SAFETY</span>
                <span className="ws-tag tag-complimentary">COMPLIMENTARY ACCESS</span>
              </div>
              <h3 className="ws-title">Citywide Tactical Women&apos;s Safety Workshop</h3>
              <p className="ws-desc">
                Open to all women and teenage girls. Learn practical leverage escapes from wrist locks, rear chokeholds, and vehicle ambush situations.
              </p>
              <div className="ws-meta-bar">
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>{' '}
                  Main Hall
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>{' '}
                  2.5 Hours
                </span>
                <span>
                  <svg className="meta-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>{' '}
                  Open to Beginners
                </span>
              </div>
            </div>
            <div className="ws-cta-block">
              <a
                href="#enroll"
                className="btn btn-luxury-primary btn-book-ws"
                onClick={() => handleReserve("Citywide Tactical Women's Safety Workshop")}
              >
                Claim Guest Pass &rarr;
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
