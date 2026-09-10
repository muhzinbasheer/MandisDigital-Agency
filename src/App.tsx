import React from 'react';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { CursorGlow } from './components/effects/CursorGlow';
import { Marquee } from './components/effects/Marquee';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Metrics } from './components/sections/Metrics';
import { Services } from './components/sections/Services';
import { WhyUs } from './components/sections/WhyUs';
import { Work } from './components/sections/Work';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { CTA } from './components/sections/CTA';

const marqueeKeywords = [
  "Search Engine Optimization",
  "Performance Marketing",
  "Conversion Rate Optimization",
  "Headless Web Platforms",
  "Paid Media Scale",
  "Direct-To-Consumer",
  "B2B SaaS Growth",
  "Brand Identity Systems",
  "Attribution Analytics"
];

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Ambient Desktop Glow Cursor */}
      <CursorGlow />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />

        <Marquee items={marqueeKeywords} direction="left" />

        <Metrics />

        <Services />

        <WhyUs />

        <Work />

        <Process />

        <Testimonials />

        <FAQ />

        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
