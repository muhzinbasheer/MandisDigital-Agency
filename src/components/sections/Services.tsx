import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData, Service } from '../../data/services';
import { Button } from '../common/Button';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service>(servicesData[0]);

  return (
    <section id="services" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E05236]/05 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#181C30]/05 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Our Services"
          title="Everything Your Business Needs to Grow Online"
          subtitle="We provide innovative, result-driven digital marketing solutions that help businesses build a stronger online presence, connect with the right audience, and achieve sustainable growth. As the Best Marketing Agency in Palakkad, we create customized marketing strategies that deliver measurable results and long-term success. Partner with the Best Marketing Agency in Palakkad to grow your brand, generate quality leads, and stay ahead of the competition."
        />

        {/* Services Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector List (8 Services) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService.id === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E05236] ${
                    isSelected
                      ? 'bg-white border-[#E05236] shadow-md shadow-[#E05236]/10'
                      : 'bg-white/60 border-[#E6E3DB] hover:border-stone-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#E05236] text-white font-bold shadow-sm'
                          : 'bg-[#F4F1EA] text-stone-700 group-hover:text-[#E05236]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm sm:text-base transition-colors ${isSelected ? 'text-[#111113]' : 'text-stone-700'}`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isSelected ? 'text-[#E05236] translate-x-1' : 'text-stone-400 group-hover:text-stone-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Service Deep Breakdown */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E6E3DB] shadow-xl relative overflow-hidden"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6E3DB]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E05236]">
                      {selectedService.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111113] mt-1">
                      {selectedService.title}
                    </h3>
                  </div>

                  {selectedService.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FDF1EE] text-[#E05236] border border-[#F8D7D0]">
                      {selectedService.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-6 text-stone-700 text-base leading-relaxed font-normal">
                  {selectedService.description}
                </p>

                {/* Problem vs Solution vs Outcome Breakdown */}
                <div className="mt-8 space-y-4">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-0.5">
                        Common Challenge
                      </span>
                      <p className="text-sm text-stone-700">{selectedService.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-[#FDF1EE] border border-[#F8D7D0] flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-[#E05236] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E05236] block mb-0.5">
                        Mandis Digital Solution
                      </span>
                      <p className="text-sm text-stone-700">{selectedService.solution}</p>
                    </div>
                  </div>

                  {/* Business Outcome */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-0.5">
                        Business Growth Outcome
                      </span>
                      <p className="text-sm font-bold text-[#111113]">{selectedService.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Feature Bullets */}
                <div className="mt-8 pt-6 border-t border-[#E6E3DB]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">Core Deliverables & Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-stone-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E05236] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA inside detail card */}
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#E6E3DB]">
                  <div className="text-xs text-stone-500 font-medium">Ready to grow your business online?</div>
                  <Button href="#contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
