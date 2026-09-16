import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Code, Award, CheckCircle2 } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-ai-grid">
      {/* Glow background atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-500/20 via-indigo-600/25 to-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-fuchsia-600/10 blur-[100px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Brand Statement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            >
              <span>Best Marketing Agency in Palakkad</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Innovative Digital Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-400 drop-shadow-sm">
                Sustainable Growth.
              </span>
            </motion.h1>

            {/* Subtitle Statement */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              We provide innovative, result-driven digital marketing solutions that help businesses build a stronger online presence, connect with the right audience, and achieve measurable long-term growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                href="#services"
                variant="glow"
                size="lg"
                magnetic
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Explore Services
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-[#1e2438] flex flex-wrap items-center gap-8 text-slate-400 text-xs font-semibold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                <span>SEO & Organic Search</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Google & Meta Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-violet-400" />
                <span>Web Design & Dev</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Creative Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glowing orbital rings behind creative portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-cyan-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-violet-500/25 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-600/25 to-violet-600/20 blur-3xl" />
            </div>

            {/* Main Creative Graphic Frame */}
            <div className="relative z-10 w-full max-w-[420px] rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#090d16]/90 shadow-[0_0_40px_rgba(6,182,212,0.2)] group">
              <img
                src="/hero-agency.png"
                alt="Mandis Digital Marketing Solutions"
                className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#070b14]/85 backdrop-blur-md border border-cyan-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">Mandis Digital</div>
                  <div className="text-[10px] text-cyan-300">Palakkad, Kerala</div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  PALAKKAD #1
                </span>
              </div>
            </div>

            {/* Floating Badge 1: Proven Strategy */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:right-0 z-20 p-3.5 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-cyan-500/40 shadow-2xl flex items-center gap-3 shadow-cyan-950/40"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-extrabold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Result-Driven</div>
                <div className="text-sm font-extrabold text-white">Customized Strategies</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Client Rating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -left-4 sm:-left-8 z-20 p-3.5 rounded-2xl bg-[#0b0f19]/95 backdrop-blur-xl border border-violet-500/40 shadow-2xl flex items-center gap-3 shadow-violet-950/40"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/20">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Client Satisfaction</div>
                <div className="text-xs font-extrabold text-white flex items-center gap-1">
                  Top Rated Agency <span className="text-amber-400">★ 5.0</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
