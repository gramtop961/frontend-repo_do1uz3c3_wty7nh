import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import EssenceSection from './components/EssenceSection';
import HowItWorks from './components/HowItWorks';
import WhatMakesDifferent from './components/WhatMakesDifferent';
import Testimonials from './components/Testimonials';
import AboutVision from './components/AboutVision';
import BenefitsAndCTA from './components/BenefitsAndCTA';

const App = () => {
  // Smooth scroll for internal anchors
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Deva Mastery — guided spiritual journaling app to awaken your consciousness, heal emotional patterns, and manifest inner harmony.';
    if (meta) {
      meta.setAttribute('content', content);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-black font-[Inter] text-white">
      <HeroSection />
      <EssenceSection />
      <HowItWorks />
      <WhatMakesDifferent />
      <Testimonials />
      <AboutVision />
      <BenefitsAndCTA />
      <footer className="bg-black/80 py-10 text-center text-xs text-violet-200/60">
        © {new Date().getFullYear()} Deva Mastery. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
