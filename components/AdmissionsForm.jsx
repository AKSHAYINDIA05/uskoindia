'use client';

import { useState, useEffect } from 'react';
import { dojoAudio } from '../lib/audio';

export default function AdmissionsForm({ prefilledProgram, prefilledNotes }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    program: '',
    timing: 'Evening',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProgram) {
      setFormData((prev) => ({ ...prev, program: prefilledProgram }));
    }
  }, [prefilledProgram]);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes} | ${prefilledNotes}` : prefilledNotes,
      }));
    }
  }, [prefilledNotes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = true;
    if (!formData.phone.trim() || formData.phone.length < 8) errs.phone = true;
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = true;
    if (!formData.age || parseInt(formData.age, 10) < 4) errs.age = true;
    if (!formData.program) errs.program = true;
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      dojoAudio.playStrike();
      return;
    }

    dojoAudio.playGong();
    setSubmitted(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      phone: '',
      email: '',
      age: '',
      program: '',
      timing: 'Evening',
      notes: '',
    });
    setErrors({});
    setSubmitted(false);
    dojoAudio.playSwoosh();
  };

  return (
    <section className="section-block admissions-section" id="enroll">
      <div className="container">
        <div className="admissions-grid gs-reveal">
          {/* Left: Institutional Overview & Concierge */}
          <div className="admissions-info-col">
            <span className="eyebrow-tag">OFFICIAL ADMISSIONS</span>
            <h2 className="admissions-heading">
              COMMENCE YOUR <em className="champagne-serif">TRAINING</em>
            </h2>
            <p className="admissions-lead">
              Take the first step onto the tatami. Reserve a formal trial assessment with our Black Belt faculty.
            </p>

            <div className="guarantee-points">
              <div className="guarantee-row">
                <span className="guarantee-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div>
                  <strong>Complimentary Trial Assessment</strong>
                  <p>One full session including technical posture analysis and batch placement recommendation.</p>
                </div>
              </div>
              <div className="guarantee-row">
                <span className="guarantee-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div>
                  <strong>Official National Accreditation</strong>
                  <p>All belt rankings recognized by State and National Karate and Kickboxing federations.</p>
                </div>
              </div>
              <div className="guarantee-row">
                <span className="guarantee-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <div>
                  <strong>No Long-Term Lock-In</strong>
                  <p>Flexible quarterly or seasonal membership options.</p>
                </div>
              </div>
            </div>

            {/* Concierge WhatsApp Box */}
            <div className="concierge-box">
              <div className="concierge-body">
                <h4>Prefer Direct Concierge Assistance?</h4>
                <p>Connect with our Chief Admissions Officer for immediate scheduling, sibling discounts, and fee structures.</p>
                <a
                  href="https://wa.me/919999999999?text=Hello%20USKO%20India,%20I%20would%20like%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-concierge"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Minimalist Luxury Form */}
          <div className="admissions-form-col">
            <form className="luxury-form" id="enroll-form" onSubmit={handleSubmit} noValidate>
              <div className="form-title-bar">
                <span>OFFICIAL ADMISSION ENQUIRY</span>
              </div>

              {!submitted ? (
                <>
                  {/* Full Name */}
                  <div className="field-wrap">
                    <label htmlFor="student-name">
                      Full Name of Applicant <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="student-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="e.g. Aarav Sharma"
                    />
                    {errors.name && (
                      <div className="field-error-msg active" role="alert">
                        Please provide applicant&apos;s full name.
                      </div>
                    )}
                  </div>

                  {/* Contact Row */}
                  <div className="form-row-2">
                    <div className="field-wrap">
                      <label htmlFor="student-phone">
                        Contact Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="student-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <div className="field-error-msg active" role="alert">
                          Valid contact number required.
                        </div>
                      )}
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="student-email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="student-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="you@domain.com"
                      />
                      {errors.email && (
                        <div className="field-error-msg active" role="alert">
                          Valid email address required.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Age & Program Row */}
                  <div className="form-row-2">
                    <div className="field-wrap">
                      <label htmlFor="student-age">
                        Applicant Age <span className="req">*</span>
                      </label>
                      <input
                        type="number"
                        id="student-age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="4"
                        max="80"
                        required
                        placeholder="e.g. 10"
                      />
                      {errors.age && (
                        <div className="field-error-msg active" role="alert">
                          Minimum age requirement is 4.
                        </div>
                      )}
                    </div>

                    <div className="field-wrap">
                      <label htmlFor="target-program">
                        Discipline <span className="req">*</span>
                      </label>
                      <select
                        id="target-program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a Discipline...</option>
                        <option value="Youth Shotokan Karate (Ages 5-15)">Youth Shotokan Karate (Ages 5-15)</option>
                        <option value="Youth Combat Kickboxing (Ages 8-15)">Youth Combat Kickboxing (Ages 8-15)</option>
                        <option value="Adult Pro Kickboxing (Ages 16+)">Adult Pro Kickboxing (Ages 16+)</option>
                        <option value="Strength & Fat Loss">Strength &amp; Fat Loss Conditioning</option>
                        <option value="Tactical Women Safety">Tactical Women&apos;s Safety</option>
                        <option value="Private Masterclass">Private 1-on-1 Masterclass</option>
                      </select>
                      {errors.program && (
                        <div className="field-error-msg active" role="alert">
                          Please select a discipline.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Preferred Timing */}
                  <div className="field-wrap">
                    <label htmlFor="pref-timing">Preferred Cohort Timing</label>
                    <select
                      id="pref-timing"
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                    >
                      <option value="Morning">Morning Batch (06:30 AM &ndash; 08:00 AM)</option>
                      <option value="Evening">Evening Batch (04:30 PM &ndash; 07:30 PM)</option>
                      <option value="Weekend">Weekend Intensive (Saturday / Sunday)</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="field-wrap">
                    <label htmlFor="student-notes">Prior Martial Arts Experience or Notes (Optional)</label>
                    <textarea
                      id="student-notes"
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Prior belt rank, fitness goals, or specific scheduling requests..."
                    />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="btn btn-luxury-primary btn-submit-full" id="btn-submit-form">
                    <span className="btn-text">SUBMIT OFFICIAL ADMISSION ENQUIRY</span>
                    <span className="btn-subtext">Immediate SMS &amp; Email Dispatch</span>
                  </button>
                </>
              ) : (
                /* Success Alert */
                <div className="form-submission-success active" id="form-success-banner" role="status" aria-live="polite">
                  <div className="success-seal-hanko" aria-hidden="true">
                    押忍
                  </div>
                  <h3>ENQUIRY TRANSMITTED</h3>
                  <p>
                    Welcome to the academy. Our Chief Admissions Officer will contact you within 24 hours to coordinate your trial assessment.
                  </p>
                  <button
                    type="button"
                    className="btn btn-luxury-secondary btn-sm"
                    style={{ marginTop: '1.5rem' }}
                    onClick={handleReset}
                  >
                    Submit Additional Enquiry
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
