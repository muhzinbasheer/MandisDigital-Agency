import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const pillars = [
  {
    icon: Target,
    title: "1. Revenue First, Vanity Second",
    description: "We don't celebrate useless metrics like impression counts. Our targets are bound strictly to pipeline revenue, customer acquisition cost, and bottom-line margin.",
    color: "from-indigo-500 to-purple-600",
    badge: "Strategy"
  },
  {
    icon: Cpu,
    title: "2. Technical & Data Engineering",
    description: "Marketing is software. We engineer blazing-fast headless web experiences, custom attribution pipelines, and deep search schema architectures.",
    color: "from-cyan-500 to-blue-600",
    badge: "Technology"
  },
  {
    icon: MandisLogo,
    title: "3. Uncompromising Visual Polish",
    description: "Aesthetics dictate consumer trust. We craft high-end visual systems, bespoke video creative, and typography that projects category leadership.",
    color: "from-purple-500 to-pink-600",
    badge: "Creative"
  },
  {
    icon: LineChart,
    title: "4. Rapid Creative Testing",
    description: "We continuously test positioning variations, ad angles, and user flows to find winning scalable hooks before scaling ad spend.",
    color: "from-emerald-500 to-teal-600",
    badge: "Performance"
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#0a0c13] relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="The Mandis Standard"
          title="Why Ambitious Brands Choose Mandis Digital"
          subtitle="Legacy marketing agencies operate on slow retainers and vanity reports. We function as your dedicated growth engineering office."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#0f1118]/80 border border-[#212638] hover:border-indigo-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#171a26] text-slate-300 border border-[#212638]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {pillar.description}
                </p>

                {/* Subtle bottom highlight bar */}
                <div className="mt-8 pt-4 border-t border-[#1a1d2b] flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <span>Mandis Guarantee</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
