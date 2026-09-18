import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, LineChart, Award } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

const pillars = [
  {
    icon: Target,
    title: "1. Result-Oriented Digital Strategies",
    description: "We don't focus on vanity metrics. Our strategies are built around your actual business goals—generating quality leads, increasing sales, and improving online visibility.",
    color: "from-indigo-500 to-purple-600",
    badge: "Results First"
  },
  {
    icon: Cpu,
    title: "2. Tailored to Your Business Goals",
    description: "Whether you are a startup establishing your brand or an established enterprise aiming for higher revenue, every strategy is customized to your audience and budget.",
    color: "from-cyan-500 to-blue-600",
    badge: "Custom Strategy"
  },
  {
    icon: Award,
    title: "3. Full-Service Digital Capability",
    description: "From SEO, Google & Meta Ads to web design, branding, and video marketing—we provide end-to-end digital solutions under one roof.",
    color: "from-purple-500 to-pink-600",
    badge: "Full-Service"
  },
  {
    icon: LineChart,
    title: "4. Sustainable Long-Term Growth",
    description: "We help businesses build strong digital foundations that deliver continuous, compounding returns and outpace industry competitors.",
    color: "from-emerald-500 to-teal-600",
    badge: "Sustainable Scale"
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#EFECE6]/40 relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E05236]/05 blur-[150px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Why Choose Us"
          title="Why Businesses Partner With Mandis Digital"
          subtitle="As the Best Marketing Agency in Palakkad, we partner with businesses to deliver customized marketing strategies that create lasting impact."
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
                className="p-8 rounded-3xl bg-white border border-[#E6E3DB] hover:border-[#E05236] shadow-sm hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#E05236] text-white flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FDF1EE] text-[#E05236] border border-[#F8D7D0]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-[#111113] mb-3 group-hover:text-[#E05236] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-stone-700 text-base leading-relaxed font-normal">
                  {pillar.description}
                </p>

                {/* Bottom highlight bar */}
                <div className="mt-8 pt-4 border-t border-[#E6E3DB] flex items-center gap-2 text-xs font-bold text-stone-500 group-hover:text-[#E05236] transition-colors">
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
