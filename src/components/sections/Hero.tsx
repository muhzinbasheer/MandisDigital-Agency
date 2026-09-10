import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Award, CheckCircle } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden noise-bg">
      {/* Glow background atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Brand Statement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <MandisLogo size={16} glow />
              <span>Performance Marketing & Digital Engineering</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              Turn Attention Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                Measurable Growth.
              </span>
            </motion.h1>

            {/* Subtitle Statement */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              Mandis Digital combines creative authority, technical SEO, and conversion science to scale revenue and build high-ROI customer acquisition engines.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                href="#contact"
                variant="glow"
                size="lg"
                magnetic
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>

              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Case Studies
              </Button>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-[#212638] flex flex-wrap items-center gap-8 text-slate-400 text-xs font-semibold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified 4.8x Avg ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Data-Driven Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>$40M+ Revenue Scaled</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Creative Image & Interactive Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glowing orbital rings behind creative portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-indigo-500/20 animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-cyan-400/20 border-dashed animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-400/20 blur-3xl" />
            </div>

            {/* Main Creative Portrait Frame */}
            <div className="relative z-10 w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/15 bg-[#0e101a]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <img
                src="/hero-agency.png"
                alt="Mandis Digital Creative Executive"
                className="w-full h-auto object-cover rounded-3xl transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent opacity-80" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#08090d]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center">
                    <MandisLogo size={18} glow />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Mandis Growth Studio</div>
                    <div className="text-[10px] text-slate-400">Digital Strategy & Engineering</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Floating Badge 1: Project Done 4,875+ (Inspired by Reference Image 1) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:right-0 z-20 p-3.5 rounded-2xl bg-[#0f111a]/95 backdrop-blur-xl border border-emerald-500/40 shadow-2xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-extrabold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Projects Delivered</div>
                <div className="text-base font-extrabold text-white">4,875+ Done</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Award Rating (Inspired by Reference Image 2) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -left-4 sm:-left-8 z-20 p-3.5 rounded-2xl bg-[#0f111a]/95 backdrop-blur-xl border border-indigo-500/40 shadow-2xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Best Agency Award</div>
                <div className="text-xs font-extrabold text-white flex items-center gap-1">
                  4.8x Avg ROAS <span className="text-amber-400">★ 5.0</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 3: Team Avatar Stack (Inspired by Reference Image 1) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 right-4 z-20 px-3.5 py-2.5 rounded-2xl bg-[#0f111a]/95 backdrop-blur-xl border border-cyan-500/30 shadow-2xl flex items-center gap-3"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0f111a] bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0f111a] bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white">SK</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#0f111a] bg-cyan-500 flex items-center justify-center text-[10px] font-bold text-white">AM</div>
              </div>
              <div className="text-xs font-bold text-slate-200">
                Growth Team <span className="text-indigo-400">(50+)</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

