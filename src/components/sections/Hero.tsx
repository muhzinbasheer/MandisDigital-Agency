import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, TrendingUp, Code, Share2, Target, Globe, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-[#FAF8F5] bg-ai-grid">
      {/* Glow background atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-[#E05236]/10 via-[#FDF1EE]/80 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#E05236]/05 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] bg-[#181C30]/05 blur-[100px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Brand Statement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF1EE] border border-[#F8D7D0] text-[#E05236] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E05236] animate-pulse" />
              <span>Best Marketing Agency in Palakkad</span>
            </motion.div>

            {/* Giant Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111113] tracking-tight leading-[1.08] mb-6"
            >
              Innovative Digital Solutions for <br />
              <span className="text-[#E05236] drop-shadow-sm">
                Sustainable Growth.
              </span>
            </motion.h1>

            {/* Subtitle Statement */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed max-w-2xl mb-8"
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
                variant="primary"
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
              className="mt-12 pt-8 border-t border-[#E6E3DB] flex flex-wrap items-center gap-8 text-stone-600 text-xs font-bold uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#E05236]" />
                <span>SEO & Organic Search</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#181C30]" />
                <span>Google & Meta Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#E05236]" />
                <span>Web Design & Dev</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Visual Showcase: Minimalist Floating Metric Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative w-full flex flex-col justify-center gap-4 py-4"
          >
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E05236]/08 via-[#181C30]/03 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Metric Card 1: Client Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative z-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-lg hover:shadow-xl transition-all flex items-center justify-between gap-4 max-w-md ml-0 lg:ml-auto w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FDF1EE] text-[#E05236] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#111113] tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium">
                    Client Commitment
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-semibold shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Guaranteed
              </span>
            </motion.div>

            {/* Floating Metric Card 2: ROI Focus (Highlighted Primary Dark Card) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative z-10 bg-gradient-to-br from-[#181C30] to-[#252B46] text-white p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-between gap-4 max-w-md w-full ml-0 sm:ml-6 lg:ml-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E05236] text-white flex items-center justify-center shrink-0 shadow-md">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#E05236] tracking-tight">
                    120x
                  </div>
                  <div className="text-xs sm:text-sm text-stone-300 font-medium">
                    ROI Focus & Growth
                  </div>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block">Performance</span>
                <span className="text-xs text-amber-400 font-semibold">Data-Driven</span>
              </div>
            </motion.div>

            {/* Floating Metric Card 3: Value Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative z-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-lg hover:shadow-xl transition-all flex items-center justify-between gap-4 max-w-md ml-0 lg:ml-auto w-full"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-100 text-[#181C30] flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-[#E05236]" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#111113] tracking-tight">
                    10x
                  </div>
                  <div className="text-xs sm:text-sm text-stone-600 font-medium">
                    Value & Scale Impact
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold shrink-0">
                Long-Term
              </span>
            </motion.div>

            {/* Bottom Service Pill Tags (Clean Minimalist Badges) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative z-10 flex flex-wrap items-center justify-start lg:justify-end gap-2.5 mt-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200/80 text-stone-700 text-xs font-semibold shadow-sm hover:border-[#E05236]/40 transition-colors">
                <Search className="w-3.5 h-3.5 text-[#E05236]" />
                SEO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200/80 text-stone-700 text-xs font-semibold shadow-sm hover:border-[#E05236]/40 transition-colors">
                <Target className="w-3.5 h-3.5 text-[#E05236]" />
                Google & Meta Ads
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200/80 text-stone-700 text-xs font-semibold shadow-sm hover:border-[#E05236]/40 transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#181C30]" />
                Web Dev
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-stone-200/80 text-stone-700 text-xs font-semibold shadow-sm hover:border-[#E05236]/40 transition-colors">
                <Share2 className="w-3.5 h-3.5 text-[#E05236]" />
                SMM
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
