'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import Hero from '../components/Hero';
import MarqueeRibbon from '../components/MarqueeRibbon';
import Heritage from '../components/Heritage';
import BeltProgression from '../components/BeltProgression';
import MedalHall from '../components/MedalHall';
import ActionBanner from '../components/ActionBanner';
import Disciplines from '../components/Disciplines';
import DisciplineQuiz from '../components/DisciplineQuiz';
import Timetable from '../components/Timetable';
import Workshops from '../components/Workshops';
import Testimonials from '../components/Testimonials';
import AdmissionsForm from '../components/AdmissionsForm';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ParticleCanvas';
import CustomCursor from '../components/CustomCursor';
import { dojoAudio } from '../lib/audio';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [prefilledProgram, setPrefilledProgram] = useState('');
  const [prefilledNotes, setPrefilledNotes] = useState('');

  useEffect(() => {
    // Sync with audio preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('usko_audio_enabled');
      if (saved === 'true') {
        setIsAudioActive(true);
        dojoAudio.isMuted = false;
        dojoAudio.init();
      }
    }

    const unsubscribe = dojoAudio.subscribe((active) => {
      setIsAudioActive(active);
    });

    return () => unsubscribe();
  }, []);

  const handleToggleAudio = () => {
    const active = dojoAudio.toggleSound();
    setIsAudioActive(active);
  };

  const handleSelectProgram = (programName) => {
    setPrefilledProgram(programName);
  };

  const handleBookWorkshop = (workshopTitle) => {
    setPrefilledNotes(`Registration for Workshop: ${workshopTitle}`);
  };

  return (
    <>
      {/* Luxury Custom Precision Cursor */}
      <CustomCursor />

      {/* High-Performance 60-120 FPS Ambient Canvas FX */}
      <ParticleCanvas />

      {/* Minimalist Top Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        isAudioActive={isAudioActive}
        onToggleAudio={handleToggleAudio}
      />

      {/* Premium Animated Side Drawer Menu */}
      <SideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <main>
        {/* 1. Hero Entrance */}
        <Hero />

        {/* 2. Infinite Marquee Ribbon */}
        <MarqueeRibbon />

        {/* 3. Heritage & Lineage */}
        <Heritage />

        {/* 4. 7-Rank Belt Progression */}
        <BeltProgression />

        {/* 5. Hall of 3,000+ Medals & 40+ Trophies */}
        <MedalHall />

        {/* 6. Full-Bleed Action Parallax Banner */}
        <ActionBanner />

        {/* 7. Curated 3-Step Discipline Quiz */}
        <DisciplineQuiz onSelectProgram={handleSelectProgram} />

        {/* 8. Academic Disciplines (Pro Kickboxing, Karate, etc.) */}
        <Disciplines onSelectProgram={handleSelectProgram} />

        {/* 9. Weekly Dojo Timetable */}
        <Timetable />

        {/* 10. Hosted Tactical Workshops */}
        <Workshops onBookWorkshop={handleBookWorkshop} />

        {/* 11. Voices of Honour (Endorsements) */}
        <Testimonials />

        {/* 12. Official Admissions & Enquiries */}
        <AdmissionsForm
          prefilledProgram={prefilledProgram}
          prefilledNotes={prefilledNotes}
        />
      </main>

      {/* 13. Curated Footer with Dojo Kun */}
      <Footer />
    </>
  );
}
