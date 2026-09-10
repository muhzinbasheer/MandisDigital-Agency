import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common/Container';

const stats = [
  { value: "$40M+", label: "Client Revenue Generated", description: "Directly attributable to performance channels" },
  { value: "4.8x", label: "Average Return on Ad Spend", description: "Across paid search, social, and display" },
  { value: "+340%", label: "Average Organic Traffic Lift", description: "Compound search engine growth within 6 months" },
  { value: "99.4%", label: "Client Retention Rate", description: "Long-term revenue partnership satisfaction" },
];

export const Metrics: React.FC = () => {
  return (
    <section className="py-16 bg-[#0a0c13] border-y border-[#1a1d2b] relative overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0f1118]/60 border border-[#212638] hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400 group-hover:to-cyan-400 transition-all">
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
