import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

const navItems = [
  { label: 'About Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Our Work', href: '#work' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E6E3DB] shadow-sm'
          : 'py-5 bg-transparent'
        }`}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E05236] rounded-lg py-1 px-2 sm:px-3 pl-3 sm:pl-4"
            aria-label="Mandis Digital Home"
          >
            <MandisLogo height={68} color="#111113" glow className="group-hover:scale-[1.03] transition-transform duration-300" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1 bg-[#EFECE6]/80 p-1.5 rounded-full border border-[#E2DDD3] shadow-sm backdrop-blur-md">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#E05236] hover:bg-white rounded-full transition-all duration-200 block shadow-none hover:shadow-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="#contact" variant="primary" size="sm" icon={<ArrowUpRight className="w-4 h-4" />}>
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white border border-[#E6E3DB] text-stone-800 hover:text-[#E05236] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E05236] shadow-sm"
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
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-[#E6E3DB] shadow-lg overflow-hidden"
          >
            <Container size="lg" className="py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold text-stone-800 hover:text-[#E05236] py-2 transition-colors border-b border-stone-100"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
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
