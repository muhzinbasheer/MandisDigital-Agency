import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, Lightbulb } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const steps = [
  {
    number: "01",
    phaseLabel: "01 Discover",
    icon: Compass,
    title: "We Start With Your Business",
    description: "We understand your business, services, target customers, current digital presence and marketing goals."
  },
  {
    number: "02",
    phaseLabel: "02 Analyse",
    icon: Search,
    title: "We Find the Opportunities",
    description: "We analyse your competitors, website, social media, Google presence and current marketing performance."
  },
  {
    number: "03",
    phaseLabel: "03 Strategise",
    icon: Lightbulb,
    title: "We Build Your Growth Plan",
    description: "Based on our analysis, we create a customized digital marketing strategy."
  },
  {
    number: "04",
    phaseLabel: "04 Create & Launch",
    icon: Rocket,
    title: "We Turn Strategy Into Action",
    description: "Our team develops the required content, creatives, videos, landing pages and campaigns."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#EFECE6]/40 relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E05236]/05 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="OUR PROCESS"
          title="From Business Goals to Business Growth"
          subtitle="Our proven 4-stage digital marketing process turns your business objectives into tangible growth, quality leads, and online success."
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
                className="p-6 rounded-3xl bg-white border border-[#E6E3DB] hover:border-[#E05236] shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-extrabold text-[#E05236]/30 group-hover:text-[#E05236] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#FDF1EE] text-[#E05236] border border-[#F8D7D0]">
                      {step.phaseLabel}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FDF1EE] border border-[#F8D7D0] text-[#E05236] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-[#111113] mb-2 group-hover:text-[#E05236] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-stone-700 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E3DB] flex items-center justify-between text-xs font-semibold text-stone-500">
                  <span>Step {step.number}</span>
                  <span className="w-2 h-2 rounded-full bg-[#E05236]/40 group-hover:bg-[#E05236] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
