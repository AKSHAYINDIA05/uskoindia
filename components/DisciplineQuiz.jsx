'use client';

import { useState } from 'react';
import { dojoAudio } from '../lib/audio';

export default function DisciplineQuiz({ onSelectProgram }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ group: '', goal: '', schedule: '' });

  const handleSelectOption = (target, val) => {
    const updated = { ...answers, [target]: val };
    setAnswers(updated);
    dojoAudio.playStrike();

    if (target === 'group') {
      setStep(2);
    } else if (target === 'goal') {
      setStep(3);
    } else if (target === 'schedule') {
      setStep(4); // Result
      dojoAudio.playGong();
    }
  };

  const handleRestart = () => {
    setAnswers({ group: '', goal: '', schedule: '' });
    setStep(1);
    dojoAudio.playSwoosh();
  };

  // Determine recommendation
  let programMatch = 'Youth Shotokan Karate';
  let desc =
    'Classical Shotokan curriculum fostering focus, discipline, and State/National championship progression.';
  let tags = ['Belt Syllabus', 'Kata & Kumite', 'Posture Alignment', 'Tournament Circuit'];

  if (answers.group === 'women' || answers.goal === 'safety') {
    programMatch = "Tactical Women's Safety";
    desc =
      'Practical, leverage-based defensive mechanics engineered for decisive personal protection against real threats.';
    tags = ['De-escalation', 'Ground Defense', 'Vulnerable Targets', 'Situational Poise'];
  } else if (answers.goal === 'fitness') {
    programMatch = 'Strength & Body Transformation';
    desc =
      'Martial arts conditioning combining bodyweight calisthenics, bag work, and rapid metabolic burn.';
    tags = ['Metabolic Elevation', 'Core Rotation', 'Nutritional Protocol', 'All Fitness Levels'];
  } else if (answers.group === 'adults' || answers.goal === 'kickboxing') {
    programMatch = 'Adult Pro Kickboxing';
    desc =
      'Full-contact Dutch-style Kickboxing and striking conditioning for athletic power and mental stamina.';
    tags = ['Heavy Bag Combos', 'Sparring Camps', 'Pad Work', 'Stamina Conditioning'];
  } else if (answers.schedule === 'private') {
    programMatch = 'Private 1-on-1 Masterclass';
    desc =
      'Dedicated private instruction with Senior Black Belt Master tailored to your unique pace and goals.';
    tags = ['Executive Hours', '1-on-1 Focus', 'Fast-Track Grading', 'Custom Biomechanics'];
  }

  return (
    <section className="section-block matcher-section" id="matcher">
      <div className="container">
        <div className="section-title-wrap text-center gs-reveal">
          <span className="eyebrow-tag">CURATED ASSESSMENT</span>
          <h2 className="editorial-title">
            DISCIPLINE <em className="champagne-serif">CONSULTATION</em>
          </h2>
          <p className="section-lead-para">
            Complete a brief three-question consultation to receive a tailored program recommendation based on your goals and schedule.
          </p>
        </div>

        <div className="consultation-card-wrapper gs-reveal">
          <div
            className="consultation-step-tracker"
            role="progressbar"
            aria-valuenow={Math.min(step, 3)}
            aria-valuemin={1}
            aria-valuemax={3}
          >
            <div className={`consultation-pip ${step === 1 ? 'active' : ''}`} id="pip-1">
              01. Applicant Profile
            </div>
            <div className={`consultation-pip ${step === 2 ? 'active' : ''}`} id="pip-2">
              02. Primary Objective
            </div>
            <div className={`consultation-pip ${step === 3 ? 'active' : ''}`} id="pip-3">
              03. Weekly Schedule
            </div>
          </div>

          <div className="matcher-body" id="matcher-body">
            {/* Step 1 */}
            {step === 1 && (
              <div className="matcher-step active" id="step-1">
                <h3 className="matcher-question">Step 1: Who will be enrolling into the academy?</h3>
                <div className="consultation-options-grid">
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('group', 'kids')}
                  >
                    <span className="opt-number">A</span>
                    <div className="opt-content">
                      <strong>Youth &amp; Children (Ages 5 &ndash; 15)</strong>
                      <p>Character development, posture alignment, confidence, and anti-bullying awareness.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('group', 'teens')}
                  >
                    <span className="opt-number">B</span>
                    <div className="opt-content">
                      <strong>Teens &amp; Young Competitors (Ages 16+)</strong>
                      <p>Rigorous sparring, reflex conditioning, and formal tournament progression.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('group', 'adults')}
                  >
                    <span className="opt-number">C</span>
                    <div className="opt-content">
                      <strong>Adult Professionals &amp; Executives</strong>
                      <p>Full-contact kickboxing, stress de-escalation, stamina, and body composition.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('group', 'women')}
                  >
                    <span className="opt-number">D</span>
                    <div className="opt-content">
                      <strong>Women &amp; Young Women</strong>
                      <p>Dedicated personal safety tactics, leverage mechanics, and situational defense.</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="matcher-step active" id="step-2">
                <h3 className="matcher-question">Step 2: What is your primary training ambition?</h3>
                <div className="consultation-options-grid">
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('goal', 'karate')}
                  >
                    <span className="opt-number">A</span>
                    <div className="opt-content">
                      <strong>Classical Black Belt Journey</strong>
                      <p>Formal belt grading, Kata precision, Olympic-style Kumite, and lifelong discipline.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('goal', 'kickboxing')}
                  >
                    <span className="opt-number">B</span>
                    <div className="opt-content">
                      <strong>Pro Kickboxing &amp; Dynamic Striking</strong>
                      <p>Heavy bag conditioning, Dutch combination drills, and combat athleticism.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('goal', 'fitness')}
                  >
                    <span className="opt-number">C</span>
                    <div className="opt-content">
                      <strong>Functional Strength &amp; Fat Loss</strong>
                      <p>High-caloric metabolic conditioning, mobility, and core rotational power.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('goal', 'safety')}
                  >
                    <span className="opt-number">D</span>
                    <div className="opt-content">
                      <strong>Tactical Self-Defence &amp; Safety</strong>
                      <p>Instinctive escape techniques, vital-point defense, and boundary management.</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="matcher-step active" id="step-3">
                <h3 className="matcher-question">Step 3: What weekly schedule best accommodates your routine?</h3>
                <div className="consultation-options-grid">
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('schedule', 'regular')}
                  >
                    <span className="opt-number">A</span>
                    <div className="opt-content">
                      <strong>Regular Weekday Batches (3x Weekly)</strong>
                      <p>Consistent, structured curriculum progression (Morning or Evening).</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('schedule', 'weekend')}
                  >
                    <span className="opt-number">B</span>
                    <div className="opt-content">
                      <strong>Weekend Intensive (Saturday &amp; Sunday)</strong>
                      <p>Comprehensive two-hour sessions for busy students and professionals.</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    className="consultation-opt-card"
                    onClick={() => handleSelectOption('schedule', 'private')}
                  >
                    <span className="opt-number">C</span>
                    <div className="opt-content">
                      <strong>Private 1-on-1 Instruction</strong>
                      <p>Dedicated Black Belt Master, custom schedule, and expedited belt eligibility.</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Result */}
            {step === 4 && (
              <div className="matcher-step active" id="step-result">
                <div className="curated-result-stage">
                  <span className="result-prescribed-badge">RECOMMENDED DISCIPLINE</span>
                  <h3 className="result-program-title" id="res-title">
                    {programMatch}
                  </h3>
                  <p className="result-program-desc" id="res-desc">
                    {desc}
                  </p>
                  <div className="result-features-list" id="res-features">
                    {tags.map((t) => (
                      <span key={t} className="res-tag">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          style={{ marginRight: '6px' }}
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="result-action-row">
                    <a
                      href="#enroll"
                      className="btn btn-luxury-primary"
                      id="btn-claim-matcher"
                      onClick={() => {
                        if (onSelectProgram) onSelectProgram(programMatch);
                        dojoAudio.playTaikoHit();
                      }}
                    >
                      <span>Reserve Complimentary Trial</span> &rarr;
                    </a>
                    <button
                      type="button"
                      className="btn btn-luxury-secondary"
                      id="btn-restart-matcher"
                      onClick={handleRestart}
                    >
                      Restart Consultation
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
