import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CursorGlow } from './components/effects/CursorGlow';
import { Marquee } from './components/effects/Marquee';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingFallback } from './components/common/LoadingFallback';

// Lazy load section components for code splitting & optimal performance
const Hero = lazy(() => import('./components/sections/Hero').then((m) => ({ default: m.Hero })));
const Services = lazy(() => import('./components/sections/Services').then((m) => ({ default: m.Services })));
const WhyUs = lazy(() => import('./components/sections/WhyUs').then((m) => ({ default: m.WhyUs })));
const Work = lazy(() => import('./components/sections/Work').then((m) => ({ default: m.Work })));
const Process = lazy(() => import('./components/sections/Process').then((m) => ({ default: m.Process })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/sections/FAQ').then((m) => ({ default: m.FAQ })));
const CTA = lazy(() => import('./components/sections/CTA').then((m) => ({ default: m.CTA })));

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
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Reset scroll to top and lock overflow during loading screen
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsInitialLoading(false);
      document.body.style.overflow = 'auto';
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#111113] font-sans selection:bg-[#E05236] selection:text-white">
      {/* Full Page Brand Loading Overlay on initial load / reload */}
      <AnimatePresence>
        {isInitialLoading && (
          <LoadingFallback fullPage message="Loading Mandis Digital..." />
        )}
      </AnimatePresence>

      {/* Ambient Desktop Glow Cursor */}
      <CursorGlow />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content & Footer wrapped in Suspense so Footer never renders first */}
      <Suspense fallback={<LoadingFallback fullPage message="Loading Mandis Digital..." />}>
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
      </Suspense>
    </div>
  );
};

export default App;
