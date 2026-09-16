import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03050c] border-t border-cyan-500/20 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Glow ambient background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1e2438]">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center group" aria-label="Mandis Digital Home">
              <MandisLogo size={40} glow className="group-hover:scale-[1.02] transition-transform duration-300" />
            </a>
            <p className="text-sm leading-relaxed max-w-md text-slate-400">
              We create innovative digital experiences that help businesses strengthen their online presence, connect with the right audience, and achieve long-term growth through smart marketing solutions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-10 h-10 rounded-full bg-[#0b0f19] border border-[#1e2438] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full bg-[#0b0f19] border border-[#1e2438] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-10 h-10 rounded-full bg-[#0b0f19] border border-[#1e2438] flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#why-us" className="hover:text-cyan-300 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition-colors">Service</a></li>
              <li><a href="#process" className="hover:text-cyan-300 transition-colors">Our Process</a></li>
              <li><a href="#work" className="hover:text-cyan-300 transition-colors">Our Work</a></li>
              <li><a href="#faq" className="hover:text-cyan-300 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:mandisdigital@gmail.com" className="hover:text-cyan-300 transition-colors">mandisdigital@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+916282615630" className="hover:text-cyan-300 transition-colors">+91 6282 615 630</a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Palakkad, Kerala</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mandis Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
