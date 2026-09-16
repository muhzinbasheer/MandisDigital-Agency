import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';

const stats = [
  { value: "8 Core", label: "Digital Solutions", description: "From SEO & Ads to Web Dev, Branding, and Content" },
  { value: "100%", label: "Customized Strategy", description: "Tailored to your specific goals, audience, and budget" },
  { value: "Palakkad", label: "Local & Regional Reach", description: "Empowering businesses in Palakkad, Kerala and beyond" },
  { value: "Result", label: "Driven Execution", description: "Focused on generating quality leads, calls, and growth" },
];

export const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-[#070b14] border-y border-[#1e2438] relative overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0b0f19]/80 border border-[#1e2438] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-300 group-hover:to-cyan-400 transition-all">
                {stat.value}
              </div>
              <div className="mt-2 text-base font-bold text-white tracking-tight">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
