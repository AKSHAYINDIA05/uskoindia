'use client';

import { dojoAudio } from '../lib/audio';

export default function Disciplines({ onSelectProgram }) {
  const handleEnrollClick = (programName) => {
    dojoAudio.playStrike();
    if (onSelectProgram) onSelectProgram(programName);
  };

  return (
    <section className="section-block programs-section" id="programs">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">ACCREDITED CURRICULUM</span>
          <h2 className="editorial-title">
            ACADEMIC <em className="champagne-serif">DISCIPLINES</em>
          </h2>
          <p className="section-lead-para">
            Certified by national martial arts councils and instructed exclusively by credentialed Black Belt senseis.
          </p>
        </div>

        <div className="editorial-programs-grid gs-reveal">
          {/* Card 1: Featured Pro Kickboxing */}
          <article
            className="editorial-program-card featured-program"
            style={{
              backgroundImage: `linear-gradient(165deg, rgba(192, 57, 43, 0.08) 0%, rgba(26, 24, 21, 0.94) 100%), url(${process.env.NEXT_PUBLIC_BASE_PATH || ''}/fighter-detail.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="featured-seal">CHAMPIONSHIP SQUAD</div>
            <div className="card-top-bar">
              <span className="card-age">AGES 16+ &bull; ADULTS</span>
              <span className="card-category">PRO COMBAT</span>
            </div>
            <h3 className="card-program-title">Adult Pro Kickboxing</h3>
            <p className="card-program-desc">
              Full-contact striking regime for men and women. Master combat combinations, condition your shins and core, and train like a professional athlete.
            </p>
            <ul className="card-curriculum-list">
              <li>Dutch-style Kickboxing &amp; striking dynamics</li>
              <li>Heavy bag drills, focus mitts &amp; ring strategy</li>
              <li>Elite conditioning and stress alleviation</li>
              <li>State and National tournament eligibility</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-luxury-primary btn-card-enroll"
              onClick={() => handleEnrollClick('Adult Kickboxing')}
            >
              Join Adult Kickboxing &rarr;
            </a>
          </article>

          {/* Card 2 */}
          <article className="editorial-program-card">
            <div className="card-top-bar">
              <span className="card-age">AGES 5 &ndash; 15</span>
              <span className="card-category">SHOTOKAN</span>
            </div>
            <h3 className="card-program-title">Youth Shotokan Karate</h3>
            <p className="card-program-desc">
              Develop discipline, focus, and peer-respect through traditional Shotokan Kata and Kumite. Our belt grading instills self-worth and anti-bullying confidence.
            </p>
            <ul className="card-curriculum-list">
              <li>Classical Japan Shotokan syllabus</li>
              <li>Official Dan and Kyu grade certification</li>
              <li>District and National tournament pathways</li>
              <li>Motor skills, focus, and posture correction</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-card-enroll"
              onClick={() => handleEnrollClick('Kids Karate')}
            >
              Enroll in Youth Karate &rarr;
            </a>
          </article>

          {/* Card 3 */}
          <article className="editorial-program-card">
            <div className="card-top-bar">
              <span className="card-age">AGES 8 &ndash; 15</span>
              <span className="card-category">KICKBOXING</span>
            </div>
            <h3 className="card-program-title">Youth Combat Kickboxing</h3>
            <p className="card-program-desc">
              High-intensity striking fundamentals in a safe, controlled environment. Enhances speed, reaction time, and cardiovascular health through mitts &amp; heavy bag work.
            </p>
            <ul className="card-curriculum-list">
              <li>Striking biomechanics and defensive guard</li>
              <li>Padded protective gear sparring drills</li>
              <li>Cardiovascular stamina and footwork agility</li>
              <li>Certified youth coaching protocols</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-card-enroll"
              onClick={() => handleEnrollClick('Kids Kickboxing')}
            >
              Enroll in Youth Kickboxing &rarr;
            </a>
          </article>

          {/* Card 4 */}
          <article className="editorial-program-card">
            <div className="card-top-bar">
              <span className="card-age">ALL AGES &bull; FITNESS</span>
              <span className="card-category">ATHLETIC</span>
            </div>
            <h3 className="card-program-title">Strength &amp; Body Transformation</h3>
            <p className="card-program-desc">
              Martial arts inspired conditioning engineered for rapid caloric burn and lean muscle hypertrophy. Combines calisthenics, plyometrics, and combat intervals.
            </p>
            <ul className="card-curriculum-list">
              <li>High-Intensity Martial Conditioning (HIMC)</li>
              <li>Rotational core power and joint mobility</li>
              <li>Post-workout metabolic elevation</li>
              <li>Customized nutritional guidelines</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-card-enroll"
              onClick={() => handleEnrollClick('Strength & Fat Loss')}
            >
              Join Strength &amp; Fat Loss &rarr;
            </a>
          </article>

          {/* Card 5 */}
          <article className="editorial-program-card">
            <div className="card-top-bar">
              <span className="card-age">WOMEN &amp; TEENS</span>
              <span className="card-category">TACTICAL</span>
            </div>
            <h3 className="card-program-title">Tactical Women&apos;s Safety</h3>
            <p className="card-program-desc">
              Specialized tactical self-defence. Practical, pressure-tested escapes against common physical threats, wrist grabs, choke holds, and ground pins.
            </p>
            <ul className="card-curriculum-list">
              <li>Leverage-based defense (effective regardless of size)</li>
              <li>Situational threat assessment &amp; boundary control</li>
              <li>Instinctive striking against vulnerable targets</li>
              <li>Psychological composure under duress</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-card-enroll"
              onClick={() => handleEnrollClick('Women Safety')}
            >
              Join Women&apos;s Safety &rarr;
            </a>
          </article>

          {/* Card 6 */}
          <article className="editorial-program-card">
            <div className="card-top-bar">
              <span className="card-age">CUSTOM &bull; 1-ON-1</span>
              <span className="card-category">EXECUTIVE</span>
            </div>
            <h3 className="card-program-title">Private 1-on-1 Masterclass</h3>
            <p className="card-program-desc">
              Private coaching with Senior Black Belt Masters. Tailored biomechanics, accelerated syllabus, tournament strategy, or executive fitness.
            </p>
            <ul className="card-curriculum-list">
              <li>Individualized instruction with Chief Sensei</li>
              <li>Video analysis of Kata and striking posture</li>
              <li>Executive scheduling (Morning, Evening, Weekend)</li>
              <li>Fast-track belt examination qualification</li>
            </ul>
            <a
              href="#enroll"
              className="btn btn-card-enroll"
              onClick={() => handleEnrollClick('Personal Training')}
            >
              Reserve Private Masterclass &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
