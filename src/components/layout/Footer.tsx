import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050609] border-t border-[#1a1d2b] pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Glow ambient background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1a1d2b]">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#121520] border border-indigo-500/30 flex items-center justify-center text-white group-hover:border-indigo-500/60 transition-colors">
                <MandisLogo size={20} glow />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                MANDIS<span className="text-indigo-400">.</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              Mandis Digital is a performance marketing & digital engineering agency. We combine creative authority with data science to turn digital traffic into measurable business growth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Page"
                className="w-10 h-10 rounded-full bg-[#121520] border border-[#212638] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-10 h-10 rounded-full bg-[#121520] border border-[#212638] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="w-10 h-10 rounded-full bg-[#121520] border border-[#212638] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-10 h-10 rounded-full bg-[#121520] border border-[#212638] flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Mandis</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Growth Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Capabilities</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance PPC Ads</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Social Media Strategy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">High-Speed Web Platforms</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Conversion Rate Optimization</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Systems & Identity</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Get in Touch</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>hello@mandisdigital.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>+1 (800) 482-9012</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Financial District, Suite 400<br />New York, NY 10005</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mandis Digital Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
