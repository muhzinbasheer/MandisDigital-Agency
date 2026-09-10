import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, Repeat } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Technical & Funnel Audit",
    description: "We deep-dive into your existing analytics, ad account data, SEO site health, and conversion friction to uncover immediate high-yield growth opportunities.",
    duration: "Week 1"
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategic Blueprint & Positioning",
    description: "We map target audience intent clusters, architect high-converting offer hooks, define campaign budgets, and build custom multi-touch attribution frameworks.",
    duration: "Week 2"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Engineering & Launch",
    description: "Our team deploys optimized landing pages, launches targeted PPC search & social campaigns, publishes schema-backed content, and sets up real-time analytics.",
    duration: "Weeks 3 - 4"
  },
  {
    number: "04",
    icon: Repeat,
    title: "Compound CRO & Scale",
    description: "Through continuous A/B split testing, creative ad refreshes, and conversion rate optimization, we scale profitable campaigns while driving down CAC.",
    duration: "Ongoing"
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#0a0c13] relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="Growth Engine Framework"
          title="How We Deliver Predictable Scale"
          subtitle="A systematic, 4-stage agency methodology refined across millions of dollars in managed ad spend and organic search."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-6 rounded-3xl bg-[#0f1118] border border-[#212638] hover:border-indigo-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-extrabold text-indigo-500/40 group-hover:text-indigo-400 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#171a26] text-slate-400 border border-[#212638]">
                      {step.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a1d2b] flex items-center justify-between text-xs text-slate-500">
                  <span>Phase {step.number}</span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
