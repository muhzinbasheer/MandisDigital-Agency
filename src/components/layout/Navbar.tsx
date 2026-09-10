import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility for mobile menu (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090d]/85 backdrop-blur-xl border-b border-[#212638]/70 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#121520] border border-indigo-500/30 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 group-hover:border-indigo-500/60 transition-all duration-300">
              <MandisLogo size={22} glow />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                MANDIS<span className="text-indigo-400">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase leading-none mt-1">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-[#121520]/80 p-1.5 rounded-full border border-[#212638]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="#contact" variant="glow" size="sm" icon={<ArrowUpRight className="w-4 h-4" />}>
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#121520] border border-[#212638] text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0a0c13] border-b border-[#212638] overflow-hidden"
          >
            <Container size="lg" className="py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-slate-200 hover:bg-indigo-600/10 hover:text-indigo-400 text-base font-semibold block transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#212638] flex flex-col gap-3">
                <Button
                  href="#contact"
                  variant="glow"
                  size="md"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center"
                >
                  Start a Project
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
