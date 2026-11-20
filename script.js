/**
 * UNIVERSE SHOTOKAN KARATE ORGANISATION, INDIA - LUXURY ATHLETIC EDITORIAL CONTROLLER
 * Full orchestration: GSAP, ScrollTrigger, Custom Cursor, Audio, Curated Belt Syllabus & Consultation
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. CUSTOM CURSOR (GPU COMPOSITED PRECISION)
  // =========================================================================
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing && matchMedia('(pointer: fine)').matches && window.innerWidth > 900) {
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    // Smooth physics loop for lagging ring using GPU translate3d
    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(renderCursor);
    };
    renderCursor();

    // Hover state expansion over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="tab"], .consultation-opt-card, .side-nav-link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('cursor-hover'), { passive: true });
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('cursor-hover'), { passive: true });
    });
  }

  // =========================================================================
  // 2. PRELOADER & AUDIO PROMPT ORCHESTRATION (FAST & PRODUCTION GRADE)
  // =========================================================================
  const preloader = document.getElementById('preloader');
  const progressFill = document.getElementById('progress-fill');
  const progressCounter = document.getElementById('progress-counter');

  let loadPercent = 0;
  const loadInterval = setInterval(() => {
    loadPercent += Math.floor(Math.random() * 25) + 20;
    if (loadPercent > 100) loadPercent = 100;

    if (progressFill) progressFill.style.width = `${loadPercent}%`;
    if (progressCounter) progressCounter.textContent = `${loadPercent}%`;

    if (loadPercent >= 100) {
      clearInterval(loadInterval);
    }
  }, 40);

  const dismissPreloader = (withAudio = false) => {
    if (withAudio && window.dojoAudio) {
      window.dojoAudio.toggleSound();
      updateAudioToggleUI(true);
    }

    if (preloader) {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
        initHeroAnimations();
      }, 500);
    }
  };

  const btnEnterSound = document.getElementById('btn-enter-sound');
  const btnEnterSilent = document.getElementById('btn-enter-silent');

  if (btnEnterSound) btnEnterSound.addEventListener('click', () => dismissPreloader(true));
  if (btnEnterSilent) btnEnterSilent.addEventListener('click', () => dismissPreloader(false));

  setTimeout(() => {
    if (preloader && !preloader.classList.contains('loaded')) {
      dismissPreloader(false);
    }
  }, 1800);

  // =========================================================================
  // 3. AUDIO TOGGLE BUTTON & SOUND DISPATCHER
  // =========================================================================
  const audioToggle = document.getElementById('audio-toggle');
  const soundLabel = document.getElementById('sound-label');

  const updateAudioToggleUI = (isOn) => {
    if (!audioToggle) return;
    audioToggle.classList.toggle('sound-on', isOn);
    audioToggle.setAttribute('aria-pressed', isOn.toString());
    if (soundLabel) {
      soundLabel.textContent = isOn ? 'SOUND: ON' : 'SOUND';
    }
  };

  if (window.dojoAudio) {
    updateAudioToggleUI(!window.dojoAudio.isMuted);
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      if (window.dojoAudio) {
        const isActive = window.dojoAudio.toggleSound();
        updateAudioToggleUI(isActive);
      }
    });
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-sound]');
    if (!btn || !window.dojoAudio) return;
    const type = btn.dataset.sound;
    if (type === 'strike') window.dojoAudio.playStrike();
    if (type === 'swoosh') window.dojoAudio.playSwoosh();
    if (type === 'gong') window.dojoAudio.playGong();
  });

  // =========================================================================
  // 4. GSAP & SCROLL CHOREOGRAPHY
  // =========================================================================
  const initHeroAnimations = () => {
    if (window.dojoAudio && !window.dojoAudio.isMuted) {
      window.dojoAudio.playTaikoHit();
    }

    if (typeof gsap !== 'undefined') {
      gsap.from('.anim-hero', {
        y: 35,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: 'power3.out'
      });

      // Subtle scale-in on hero photo background
      gsap.to('.hero-bg-photo', {
        scale: 1,
        duration: 2.2,
        ease: 'power2.out'
      });
    }

    initCounters();
  };

  const initCounters = () => {
    const counters = document.querySelectorAll('[data-counter]');

    const animateCount = (el) => {
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();
      const valEl = el.querySelector('.stat-value') || el.querySelector('.registry-counter') || el.querySelector('.monolith-counter') || el;

      const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

      const frame = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.round(easeOutExpo(progress) * target);
        valEl.textContent = current.toLocaleString('en-IN') + suffix;

        if (progress < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    if ('IntersectionObserver' in window) {
      const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counters.forEach(c => counterObs.observe(c));
    } else {
      counters.forEach(c => animateCount(c));
    }
  };

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gs-reveal').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
      });
    });

    // Parallax on hero photo during scroll
    gsap.to('.hero-bg-photo', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 120,
      ease: 'none'
    });

    // Parallax on Kanji watermarks
    gsap.to('.kanji-left', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2
      },
      y: 110
    });

    gsap.to('.kanji-right', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      },
      y: -130
    });
  }

  // =========================================================================
  // 5. HEADER SCROLL & BACK TO TOP
  // =========================================================================
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (header) header.classList.toggle('scrolled', scrollY > 60);
    if (backToTop) backToTop.classList.toggle('visible', scrollY > 500);
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 5. LUXURY SIDE ANIMATED MENU CONTROLLER
  // =========================================================================
  const menuTrigger = document.getElementById('menu-trigger');
  const menuClose = document.getElementById('menu-close');
  const menuOverlay = document.getElementById('menu-overlay');
  const sideMenu = document.getElementById('side-menu');
  const sideNavLinks = document.querySelectorAll('.side-nav-link');

  const openSideMenu = () => {
    if (!sideMenu || !menuOverlay) return;
    sideMenu.classList.add('active');
    menuOverlay.classList.add('active');
    sideMenu.setAttribute('aria-hidden', 'false');
    if (menuTrigger) menuTrigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    if (window.dojoAudio) {
      window.dojoAudio.playSwoosh();
    }
  };

  const closeSideMenu = () => {
    if (!sideMenu || !menuOverlay) return;
    sideMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    sideMenu.setAttribute('aria-hidden', 'true');
    if (menuTrigger) menuTrigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (menuTrigger) menuTrigger.addEventListener('click', openSideMenu);
  if (menuClose) menuClose.addEventListener('click', closeSideMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeSideMenu);

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu && sideMenu.classList.contains('active')) {
      closeSideMenu();
    }
  });

  // Clicking any link inside side drawer closes the menu and smoothly navigates
  sideNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeSideMenu();
    });
  });

  // =========================================================================
  // 6. ARCHIVAL BELT PROGRESSION SYSTEM (7 RANKS)
  // =========================================================================
  const beltData = {
    white: {
      rank: "9TH KYU (BEGINNER)",
      duration: "3 - 4 MONTHS",
      title: "White Belt (Shiro Obi) — The Blank Canvas",
      colorClass: "belt-color-white",
      kanji: "始",
      philosophy: "The white belt represents the blank slate, the freshly fallen snow where the warrior's journey first takes foot. Humility, respect, and foundational balance are born here.",
      kata: "Taikyoku Shodan (First Cause), fundamental stance alignments (Zenkutsu-dachi)",
      kumite: "Gohon Kumite (5-step pre-arranged sparring), Oi-zuki punch, Mae-geri kick",
      mental: "Dojo etiquette, bowing protocol (Rei), unwavering eye focus (Chakumoku)",
      age: "Children from age 5, Youth, and Adults"
    },
    yellow: {
      rank: "8TH KYU (NOVICE)",
      duration: "4 MONTHS",
      title: "Yellow Belt (Kiiro Obi) — The Dawn of Light",
      colorClass: "belt-color-yellow",
      kanji: "日",
      philosophy: "The first rays of sunlight striking the seed of martial knowledge. Basic blocking reflexes awaken and physical endurance begins to take form.",
      kata: "Heian Shodan (Peaceful Mind, Level 1)",
      kumite: "Sanbon Kumite (3-step sparring), Age-uke upper block, Gedan-barai low block",
      mental: "Perseverance through muscle fatigue, respectful camaraderie",
      age: "All graduating White Belts"
    },
    orange: {
      rank: "7TH KYU (INTERMEDIATE)",
      duration: "4 - 5 MONTHS",
      title: "Orange Belt (Daidaiiro Obi) — The Spreading Flame",
      colorClass: "belt-color-orange",
      kanji: "炎",
      philosophy: "The warming earth begins to fuel rapid skill growth. Balance shifts dynamically between attack and defence.",
      kata: "Heian Nidan (Peaceful Mind, Level 2)",
      kumite: "Kihon Ippon Kumite (One-step basic sparring with counter strikes)",
      mental: "Overcoming fear of incoming strikes, disciplined posture",
      age: "Youth, Teens & Adults"
    },
    green: {
      rank: "6TH KYU (UPPER NOVICE)",
      duration: "5 - 6 MONTHS",
      title: "Green Belt (Midori Obi) — The Sprouting Bamboo",
      colorClass: "belt-color-green",
      kanji: "竹",
      philosophy: "The bamboo shoots upward with deep roots and supreme flexibility. Power now originates from hip rotation and breath control.",
      kata: "Heian Sandan (Peaceful Mind, Level 3)",
      kumite: "Jiyu Ippon Kumite (Semi-free sparring), Yoko-geri side kick",
      mental: "Calmness in sparring exchanges, emotional self-control",
      age: "All eligible students"
    },
    blue: {
      rank: "4TH KYU (UPPER INTERMEDIATE)",
      duration: "6 MONTHS",
      title: "Blue Belt (Aoi Obi) — The Boundless Sky",
      colorClass: "belt-color-blue",
      kanji: "空",
      philosophy: "Reaching toward the boundless blue sky. Movements become fluid, combinations rapid, and the student begins mentoring junior white belts.",
      kata: "Heian Yondan & Heian Godan",
      kumite: "Continuous controlled sparring with protective gear",
      mental: "Responsibility, leadership, humility in victory",
      age: "Junior & Senior practitioners"
    },
    brown: {
      rank: "1ST - 3RD KYU (PRE-DAN)",
      duration: "12 - 18 MONTHS",
      title: "Brown Belt (Chairo Obi) — The Ripening Oak",
      colorClass: "belt-color-brown",
      kanji: "樹",
      philosophy: "The tree stands firm and deep against storms. Techniques are sharp, dangerous, and refined. The threshold to the coveted Black Belt.",
      kata: "Tekki Shodan & Bassai Dai (To Storm A Fortress)",
      kumite: "Full-speed Tournament Kumite & Point Kickboxing sparring",
      mental: "Indomitable warrior spirit, dedication to dojo teaching",
      age: "Ages 10+ for junior brown, Adults"
    },
    black: {
      rank: "1ST DAN (SHODAN & ABOVE)",
      duration: "LIFETIME REFINEMENT",
      title: "Black Belt (Kuro Obi) — The Reborn Master",
      colorClass: "belt-color-black",
      kanji: "黒",
      philosophy: "Darkness contains all colors. A Black Belt is not the end of learning, but the true starting line. Mastery of self, complete non-violence except in defence.",
      kata: "Kanku Dai, Jion, Enpi, Hangetsu",
      kumite: "Master-level Bunkai (real combat applications, joint locks, sweeps)",
      mental: "Quiet confidence, servant leadership, perfection of character",
      age: "Certified by National Board & Chief Examiner"
    }
  };

  const beltTabs = document.querySelectorAll('.belt-tab');
  const beltRibbon = document.querySelector('.belt-ribbon');
  const beltKanji = document.getElementById('belt-kanji');
  const beltLevelLabel = document.getElementById('belt-level-label');
  const beltDurationLabel = document.getElementById('belt-duration-label');
  const beltTitle = document.getElementById('belt-title');
  const beltPhilosophy = document.getElementById('belt-philosophy');
  const beltKata = document.getElementById('belt-kata');
  const beltKumite = document.getElementById('belt-kumite');
  const beltMental = document.getElementById('belt-mental');
  const beltAge = document.getElementById('belt-age');

  beltTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      beltTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const beltKey = tab.dataset.belt;
      const data = beltData[beltKey];
      if (!data) return;

      if (window.dojoAudio) window.dojoAudio.playSwoosh();

      if (beltRibbon) beltRibbon.className = `belt-ribbon ${data.colorClass}`;
      if (beltKanji) beltKanji.textContent = data.kanji;
      if (beltLevelLabel) beltLevelLabel.textContent = `RANK: ${data.rank}`;
      if (beltDurationLabel) beltDurationLabel.textContent = `DURATION: ${data.duration}`;
      if (beltTitle) beltTitle.textContent = data.title;
      if (beltPhilosophy) beltPhilosophy.textContent = `"${data.philosophy}"`;
      if (beltKata) beltKata.textContent = data.kata;
      if (beltKumite) beltKumite.textContent = data.kumite;
      if (beltMental) beltMental.textContent = data.mental;
      if (beltAge) beltAge.textContent = data.age;
    });
  });

  // =========================================================================
  // 7. CURATED DISCIPLINE CONSULTATION (QUIZ)
  // =========================================================================
  const consultationAnswers = { group: '', goal: '', schedule: '' };
  const matcherSteps = document.querySelectorAll('.matcher-step');
  const consultationPips = document.querySelectorAll('.consultation-pip, .step-pip');

  const goToMatcherStep = (stepNumber) => {
    matcherSteps.forEach(s => s.classList.remove('active'));
    consultationPips.forEach(p => p.classList.remove('active'));

    const targetStep = document.getElementById(`step-${stepNumber}`);
    const targetPip = document.getElementById(`pip-${stepNumber}`);

    if (targetStep) targetStep.classList.add('active');
    if (targetPip) targetPip.classList.add('active');
  };

  document.querySelectorAll('.consultation-opt-card, .matcher-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const val = btn.dataset.val;
      consultationAnswers[target] = val;

      if (window.dojoAudio) window.dojoAudio.playStrike();

      if (target === 'group') {
        goToMatcherStep(2);
      } else if (target === 'goal') {
        goToMatcherStep(3);
      } else if (target === 'schedule') {
        calculateMatcherResult();
      }
    });
  });

  const calculateMatcherResult = () => {
    matcherSteps.forEach(s => s.classList.remove('active'));
    const resStep = document.getElementById('step-result');
    if (resStep) resStep.classList.add('active');

    const resTitle = document.getElementById('res-title');
    const resDesc = document.getElementById('res-desc');
    const resFeatures = document.getElementById('res-features');
    const btnClaim = document.getElementById('btn-claim-matcher');

    let programMatch = "Youth Shotokan Karate";
    let desc = "Classical Shotokan curriculum fostering focus, discipline, and State/National championship progression.";
    let tags = ["Belt Syllabus", "Kata & Kumite", "Posture Alignment", "Tournament Circuit"];

    if (consultationAnswers.group === 'women' || consultationAnswers.goal === 'safety') {
      programMatch = "Tactical Women's Safety";
      desc = "Practical, leverage-based defensive mechanics engineered for decisive personal protection against real threats.";
      tags = ["De-escalation", "Ground Defense", "Vulnerable Targets", "Situational Poise"];
    } else if (consultationAnswers.goal === 'fitness') {
      programMatch = "Strength & Body Transformation";
      desc = "Martial arts conditioning combining bodyweight calisthenics, bag work, and rapid metabolic burn.";
      tags = ["Metabolic Elevation", "Core Rotation", "Nutritional Protocol", "All Fitness Levels"];
    } else if (consultationAnswers.group === 'adults' || consultationAnswers.goal === 'kickboxing') {
      programMatch = "Adult Pro Kickboxing";
      desc = "Full-contact Dutch-style Kickboxing and striking conditioning for athletic power and mental stamina.";
      tags = ["Heavy Bag Combos", "Sparring Camps", "Pad Work", "Stamina Conditioning"];
    } else if (consultationAnswers.schedule === 'private') {
      programMatch = "Private 1-on-1 Masterclass";
      desc = "Dedicated private instruction with Senior Black Belt Master tailored to your unique pace and goals.";
      tags = ["Executive Hours", "1-on-1 Focus", "Fast-Track Grading", "Custom Biomechanics"];
    }

    if (resTitle) resTitle.textContent = programMatch;
    if (resDesc) resDesc.textContent = desc;
    if (resFeatures) {
      resFeatures.innerHTML = tags.map(t => `<span class="res-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-right:6px;"><polyline points="20 6 9 17 4 12"></polyline></svg>${t}</span>`).join('');
    }

    if (btnClaim) {
      btnClaim.addEventListener('click', () => {
        const select = document.getElementById('target-program');
        if (select) {
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text.toLowerCase().includes(programMatch.split(' ')[0].toLowerCase())) {
              select.selectedIndex = i;
              break;
            }
          }
        }
      });
    }

    if (window.dojoAudio) window.dojoAudio.playGong();
  };

  const btnRestart = document.getElementById('btn-restart-matcher');
  if (btnRestart) {
    btnRestart.addEventListener('click', () => {
      consultationAnswers.group = '';
      consultationAnswers.goal = '';
      consultationAnswers.schedule = '';
      goToMatcherStep(1);
    });
  }

  // =========================================================================
  // 8. SCHEDULE FILTER
  // =========================================================================
  const schedFilters = document.querySelectorAll('.sched-filter-btn');
  const dayCards = document.querySelectorAll('.timetable-day-card');

  schedFilters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
      schedFilters.forEach(b => b.classList.remove('active'));
      filterBtn.classList.add('active');

      const filterVal = filterBtn.dataset.filter;

      dayCards.forEach(card => {
        const categories = card.dataset.category || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });

      if (window.dojoAudio) window.dojoAudio.playSwoosh();
    });
  });

  // =========================================================================
  // 9. WORKSHOP REGISTRATION PRE-FILL
  // =========================================================================
  document.querySelectorAll('.btn-book-ws').forEach(wsBtn => {
    wsBtn.addEventListener('click', () => {
      const wsTitle = wsBtn.dataset.wsTitle;
      const notesField = document.getElementById('student-notes');
      if (notesField) {
        notesField.value = `Reserving pass for Masterclass: ${wsTitle}`;
      }

      const enrollSection = document.getElementById('enroll');
      if (enrollSection) {
        enrollSection.scrollIntoView({ behavior: 'smooth' });
      }

      if (window.dojoAudio) window.dojoAudio.playStrike();
    });
  });

  document.querySelectorAll('.btn-card-enroll, .btn-card-action').forEach(cardBtn => {
    cardBtn.addEventListener('click', () => {
      const programName = cardBtn.dataset.program;
      if (!programName) return;

      const progSelect = document.getElementById('target-program');
      if (progSelect) {
        for (let i = 0; i < progSelect.options.length; i++) {
          if (progSelect.options[i].text.toLowerCase().includes(programName.toLowerCase())) {
            progSelect.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // =========================================================================
  // 10. ADMISSION ENQUIRY FORM DISPATCH
  // =========================================================================
  const enrollForm = document.getElementById('enroll-form');
  const formSuccess = document.getElementById('form-success-banner');
  const btnReset = document.getElementById('btn-reset-form');

  if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!enrollForm.checkValidity()) {
        enrollForm.reportValidity();
        return;
      }

      if (window.dojoAudio) window.dojoAudio.playGong();

      enrollForm.querySelectorAll('.field-wrap, .form-row-2, #btn-submit-form').forEach(el => {
        el.style.display = 'none';
      });

      if (formSuccess) formSuccess.classList.add('show');
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', (e) => {
      e.preventDefault();
      enrollForm.reset();
      enrollForm.querySelectorAll('.field-wrap, .form-row-2, #btn-submit-form').forEach(el => {
        el.style.display = '';
      });
      if (formSuccess) formSuccess.classList.remove('show');
    });
  }

  // =========================================================================
  // 11. 3D TILT EFFECT (HIGH PERFORMANCE - CACHED RECT)
  // =========================================================================
  const tiltElements = document.querySelectorAll('[data-tilt]');
  if (matchMedia('(prefers-reduced-motion: no-preference)').matches && window.innerWidth > 900) {
    tiltElements.forEach(card => {
      let rect = null;
      let ticking = false;

      card.addEventListener('mouseenter', () => {
        rect = card.getBoundingClientRect();
      }, { passive: true });

      card.addEventListener('mousemove', (e) => {
        if (!rect || ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -3;
          const rotateY = ((x - centerX) / centerX) * 3;

          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
          ticking = false;
        });
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        rect = null;
      }, { passive: true });
    });
  }
});
