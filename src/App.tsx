import React from 'react';
import { CursorGlow } from './components/effects/CursorGlow';
import { Marquee } from './components/effects/Marquee';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Work } from './components/sections/Work';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';

const marqueeKeywords = [
  "Search Engine Optimization (SEO)",
  "Social Media Marketing (SMM)",
  "Website Design & Development",
  "Meta Ads (Facebook & Instagram)",
  "Google Ads",
  "Branding & Graphic Design",
  "Video & Content Marketing",
  "Google Business Profile Optimization",
  "Best Marketing Agency in Palakkad"
];

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Ambient Desktop Glow Cursor */}
      <CursorGlow />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />

        <Marquee items={marqueeKeywords} direction="left" />

        <Services />

        <WhyUs />

        <Work />

        <Testimonials />

        <Process />

        <FAQ />

        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
