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
    <section id="services" className="py-24 bg-[#08090d] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Core Capabilities"
          title="Revenue-Driven Digital Services"
          subtitle="We don't just sell services—we engineer targeted acquisition frameworks designed to solve specific growth bottlenecks and maximize ROI."
        />

        {/* Services Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {servicesData.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService.id === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isSelected
                      ? 'bg-[#121522] border-indigo-500/60 shadow-lg shadow-indigo-500/10'
                      : 'bg-[#0f1118]/60 border-[#212638] hover:border-slate-700 hover:bg-[#121520]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-[#191d2b] text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-base transition-colors ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{service.category}</p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Problem -> Solution -> Outcome Breakdown */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="p-8 sm:p-10 rounded-3xl bg-glass-card border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#212638]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {selectedService.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {selectedService.title}
                    </h3>
                  </div>

                  {selectedService.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {selectedService.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-6 text-slate-300 text-base leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Problem vs Solution vs Outcome Breakdown */}
                <div className="mt-8 space-y-4">
                  {/* Problem */}
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-0.5">
                        The Bottleneck
                      </span>
                      <p className="text-sm text-slate-300">{selectedService.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20 flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-0.5">
                        Our Solution
                      </span>
                      <p className="text-sm text-slate-300">{selectedService.solution}</p>
                    </div>
                  </div>

                  {/* Business Outcome */}
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                        Business Outcome ({selectedService.metrics})
                      </span>
                      <p className="text-sm font-semibold text-white">{selectedService.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Feature Bullets */}
                <div className="mt-8 pt-6 border-t border-[#212638]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Included Execution Deliverables:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA inside detail card */}
                <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#212638]">
                  <div className="text-xs text-slate-400 font-medium">Ready to deploy this capability?</div>
                  <Button href="#contact" variant="primary" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                    Discuss Strategy
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
