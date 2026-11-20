'use client';

import { useState } from 'react';
import { dojoAudio } from '../lib/audio';

const beltData = {
  white: {
    rank: '9TH KYU (BEGINNER)',
    duration: '3 - 4 MONTHS',
    title: 'White Belt (Shiro Obi) — The Blank Canvas',
    colorClass: 'belt-color-white',
    kanji: '始',
    philosophy:
      "The white belt represents the blank slate, the freshly fallen snow where the warrior's journey first takes foot. Humility, respect, and foundational balance are born here.",
    kata: 'Taikyoku Shodan (First Cause), fundamental stance alignments (Zenkutsu-dachi)',
    kumite: 'Gohon Kumite (5-step pre-arranged sparring), Oi-zuki punch, Mae-geri kick',
    mental: 'Dojo etiquette, bowing protocol (Rei), unwavering eye focus (Chakumoku)',
    age: 'Children from age 5, Youth, and Adults',
  },
  yellow: {
    rank: '8TH KYU (NOVICE)',
    duration: '4 MONTHS',
    title: 'Yellow Belt (Kiiro Obi) — The Dawn of Light',
    colorClass: 'belt-color-yellow',
    kanji: '日',
    philosophy:
      'The first rays of sunlight striking the seed of martial knowledge. Basic blocking reflexes awaken and physical endurance begins to take form.',
    kata: 'Heian Shodan (Peaceful Mind, Level 1)',
    kumite: 'Sanbon Kumite (3-step sparring), Age-uke upper block, Gedan-barai low block',
    mental: 'Perseverance through muscle fatigue, respectful camaraderie',
    age: 'All graduating White Belts',
  },
  orange: {
    rank: '7TH KYU (INTERMEDIATE)',
    duration: '4 - 5 MONTHS',
    title: 'Orange Belt (Daidaiiro Obi) — The Spreading Flame',
    colorClass: 'belt-color-orange',
    kanji: '炎',
    philosophy:
      'The warming earth begins to fuel rapid skill growth. Balance shifts dynamically between attack and defence.',
    kata: 'Heian Nidan (Peaceful Mind, Level 2)',
    kumite: 'Kihon Ippon Kumite (One-step basic sparring with counter strikes)',
    mental: 'Overcoming fear of incoming strikes, disciplined posture',
    age: 'Youth, Teens & Adults',
  },
  green: {
    rank: '6TH KYU (UPPER NOVICE)',
    duration: '5 - 6 MONTHS',
    title: 'Green Belt (Midori Obi) — The Sprouting Bamboo',
    colorClass: 'belt-color-green',
    kanji: '竹',
    philosophy:
      'The bamboo shoots upward with deep roots and supreme flexibility. Power now originates from hip rotation and breath control.',
    kata: 'Heian Sandan (Peaceful Mind, Level 3)',
    kumite: 'Jiyu Ippon Kumite (Semi-free sparring), Yoko-geri side kick',
    mental: 'Calmness in sparring exchanges, emotional self-control',
    age: 'All eligible students',
  },
  blue: {
    rank: '4TH KYU (UPPER INTERMEDIATE)',
    duration: '6 MONTHS',
    title: 'Blue Belt (Aoi Obi) — The Boundless Sky',
    colorClass: 'belt-color-blue',
    kanji: '空',
    philosophy:
      'Reaching toward the boundless blue sky. Movements become fluid, combinations rapid, and the student begins mentoring junior white belts.',
    kata: 'Heian Yondan & Heian Godan',
    kumite: 'Continuous controlled sparring with protective gear',
    mental: 'Responsibility, leadership, humility in victory',
    age: 'Junior & Senior practitioners',
  },
  brown: {
    rank: '1ST - 3RD KYU (PRE-DAN)',
    duration: '12 - 18 MONTHS',
    title: 'Brown Belt (Chairo Obi) — The Ripening Oak',
    colorClass: 'belt-color-brown',
    kanji: '樹',
    philosophy:
      'The tree stands firm and deep against storms. Techniques are sharp, dangerous, and refined. The threshold to the coveted Black Belt.',
    kata: 'Tekki Shodan & Bassai Dai (To Storm A Fortress)',
    kumite: 'Full-speed Tournament Kumite & Point Kickboxing sparring',
    mental: 'Indomitable warrior spirit, dedication to dojo teaching',
    age: 'Ages 10+ for junior brown, Adults',
  },
  black: {
    rank: '1ST DAN (SHODAN & ABOVE)',
    duration: 'LIFETIME REFINEMENT',
    title: 'Black Belt (Kuro Obi) — The Reborn Master',
    colorClass: 'belt-color-black',
    kanji: '黒',
    philosophy:
      'Darkness contains all colors. A Black Belt is not the end of learning, but the true starting line. Mastery of self, complete non-violence except in defence.',
    kata: 'Kanku Dai, Jion, Enpi, Hangetsu',
    kumite: 'Master-level Bunkai (real combat applications, joint locks, sweeps)',
    mental: 'Quiet confidence, servant leadership, perfection of character',
    age: 'Certified by National Board & Chief Examiner',
  },
};

const beltOrder = [
  { id: 'white', name: 'White • 9th Kyu', swatch: 'swatch-white' },
  { id: 'yellow', name: 'Yellow • 8th Kyu', swatch: 'swatch-yellow' },
  { id: 'orange', name: 'Orange • 7th Kyu', swatch: 'swatch-orange' },
  { id: 'green', name: 'Green • 6th Kyu', swatch: 'swatch-green' },
  { id: 'blue', name: 'Blue • 4th Kyu', swatch: 'swatch-blue' },
  { id: 'brown', name: 'Brown • 1st-3rd Kyu', swatch: 'swatch-brown' },
  { id: 'black', name: 'Black • 1st Dan Shodan', swatch: 'swatch-black' },
];

export default function BeltProgression() {
  const [selectedBelt, setSelectedBelt] = useState('white');
  const belt = beltData[selectedBelt];

  const handleSelectBelt = (id) => {
    setSelectedBelt(id);
    if (id === 'black') {
      dojoAudio.playGong();
    } else {
      dojoAudio.playSwoosh();
    }
  };

  return (
    <section className="section-block belt-archive-section" id="belts">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">PROGRESSION &bull; CURRICULUM</span>
          <h2 className="editorial-title">
            THE SEVEN RANKS OF <em className="champagne-serif">MASTERY</em>
          </h2>
          <p className="section-lead-para">
            Inspect the technical syllabus, kata forms, and philosophical milestones across our official Kyu and Dan belt grades.
          </p>
        </div>

        {/* Archival Belt Selector Bar */}
        <div className="belt-selector-nav gs-reveal" role="tablist" aria-label="Karate Belt Ranks">
          {beltOrder.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`belt-tab ${selectedBelt === item.id ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedBelt === item.id}
              aria-controls="belt-panel"
              onClick={() => handleSelectBelt(item.id)}
            >
              <span className={`belt-swatch ${item.swatch}`} />
              <span className="belt-tab-name">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Belt Detail Card */}
        <div className="belt-detail-stage gs-reveal" id="belt-panel" role="tabpanel">
          <div className="belt-visual-col">
            <div className="realistic-belt-wrapper" id="belt-realistic-render">
              <div className={`belt-ribbon ${belt.colorClass}`}>
                <span className="belt-embroidery">空手道 &bull; SHOTOKAN</span>
              </div>
            </div>
            <div className="belt-kanji-watermark" id="belt-kanji" aria-hidden="true">
              {belt.kanji}
            </div>
          </div>

          <div className="belt-info-col">
            <div className="belt-badge-line">
              <span className="belt-level-pill" id="belt-level-label">
                RANK: {belt.rank}
              </span>
              <span className="belt-duration-pill" id="belt-duration-label">
                DURATION: {belt.duration}
              </span>
            </div>
            <h3 className="belt-title" id="belt-title">
              {belt.title}
            </h3>
            <p className="belt-philosophy" id="belt-philosophy">
              &ldquo;{belt.philosophy}&rdquo;
            </p>

            <div className="belt-requirements-grid">
              <div className="req-box">
                <div className="req-header">
                  <svg className="req-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <h4>Kata Requirements</h4>
                </div>
                <p id="belt-kata">{belt.kata}</p>
              </div>

              <div className="req-box">
                <div className="req-header">
                  <svg className="req-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  <h4>Kumite &amp; Striking</h4>
                </div>
                <p id="belt-kumite">{belt.kumite}</p>
              </div>

              <div className="req-box">
                <div className="req-header">
                  <svg className="req-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A7 7 0 0 1 5.07 11H5a1 1 0 0 1 0-2h.07A7 7 0 0 1 11 5.07V5a1 1 0 0 1 2 0v.07A7 7 0 0 1 18.93 11H19a1 1 0 0 1 0 2h-.07A7 7 0 0 1 13 16.93z"></path>
                  </svg>
                  <h4>Mental Demeanor</h4>
                </div>
                <p id="belt-mental">{belt.mental}</p>
              </div>

              <div className="req-box">
                <div className="req-header">
                  <svg className="req-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h4>Eligibility</h4>
                </div>
                <p id="belt-age">{belt.age}</p>
              </div>
            </div>

            <div className="belt-action-row">
              <a
                href="#enroll"
                className="btn btn-luxury-primary"
                onClick={() => dojoAudio.playTaikoHit()}
              >
                Commence Training at This Rank
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
