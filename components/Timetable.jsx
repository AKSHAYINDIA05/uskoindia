'use client';

import { useState } from 'react';
import { dojoAudio } from '../lib/audio';

const scheduleData = [
  {
    day: 'MON / WED / FRI',
    badge: 'YOUTH',
    badgeClass: 'kids-badge',
    category: ['all', 'kids', 'karate'],
    slots: [
      {
        time: '04:30 PM – 05:45 PM',
        name: 'Junior Shotokan Karate (Foundations)',
        instructor: 'Sensei R. Sharma • Main Tatami Dojo',
      },
      {
        time: '06:00 PM – 07:15 PM',
        name: 'Senior Belt Kata & Kumite Tactics',
        instructor: 'Chief Instructor • Arena I',
      },
    ],
  },
  {
    day: 'TUE / THU / SAT',
    badge: 'ADULTS',
    badgeClass: 'adult-badge',
    category: ['all', 'adults', 'kickboxing'],
    slots: [
      {
        time: '06:30 AM – 07:45 AM',
        name: 'Early Bird Pro Kickboxing & Conditioning',
        instructor: 'Coach V. Patel • Heavy Bag Ring',
      },
      {
        time: '07:30 PM – 08:45 PM',
        name: 'Executive Combat & Stress Alleviation',
        instructor: 'Senior Coach • Arena II',
      },
    ],
  },
  {
    day: 'SATURDAY',
    badge: 'SPECIALIZED',
    badgeClass: 'comp-badge',
    category: ['all', 'safety', 'adults'],
    slots: [
      {
        time: '10:00 AM – 12:00 PM',
        name: "Tactical Women's Self-Defence Intensive",
        instructor: 'Female Safety Specialist • Studio B',
      },
      {
        time: '04:00 PM – 05:30 PM',
        name: 'Strength, Mobility & Calisthenics',
        instructor: 'Conditioning Faculty • Performance Zone',
      },
    ],
  },
  {
    day: 'SUNDAY • OPEN MAT',
    badge: 'TOURNAMENT',
    badgeClass: 'comp-badge',
    category: ['all', 'kids', 'adults', 'kickboxing'],
    slots: [
      {
        time: '08:00 AM – 11:00 AM',
        name: 'Championship Squad Sparring & Dan Prep',
        instructor: 'Full Coaching Faculty • All Arenas',
      },
    ],
  },
];

export default function Timetable() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'All Sessions' },
    { id: 'kids', label: 'Youth Batches' },
    { id: 'adults', label: 'Adult Batches' },
    { id: 'kickboxing', label: 'Kickboxing' },
    { id: 'safety', label: "Women's Safety" },
  ];

  const handleFilterClick = (id) => {
    setActiveFilter(id);
    dojoAudio.playSwoosh();
  };

  const filteredCards = scheduleData.filter((item) =>
    activeFilter === 'all' ? true : item.category.includes(activeFilter)
  );

  return (
    <section className="section-block schedule-section" id="schedule">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">WEEKLY TIMETABLE</span>
          <h2 className="editorial-title">
            TRAINING <em className="champagne-serif">SCHEDULE</em>
          </h2>
          <p className="section-lead-para">
            Morning and evening cohorts structured to support academic commitments and executive schedules.
          </p>
        </div>

        <div className="schedule-filter-bar gs-reveal" role="tablist" aria-label="Schedule Filter">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              className={`sched-filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
              onClick={() => handleFilterClick(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="timetable-grid gs-reveal">
          {filteredCards.map((card, idx) => (
            <div key={idx} className="timetable-day-card">
              <div className="day-header">
                <span className="day-name">{card.day}</span>
                <span className={`day-badge ${card.badgeClass}`}>{card.badge}</span>
              </div>
              {card.slots.map((slot, sIdx) => (
                <div key={sIdx} className="batch-slot">
                  <span className="batch-time">{slot.time}</span>
                  <h4 className="batch-name">{slot.name}</h4>
                  <p className="batch-instructor">{slot.instructor}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
