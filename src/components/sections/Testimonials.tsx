import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Client Testimonials"
          title="Our Work Speaks Through Our Clients"
          subtitle="Discover how Mandis Digital empowers businesses across industries with structured online presences, powerful branding, and consistent marketing performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0b0f19]/90 border border-[#1e2438] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors" />
                </div>

                <p className="text-slate-300 text-base leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author / Client Footer */}
              <div>
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-400" />
                    Focus Area
                  </span>
                  <span className="text-xs font-extrabold text-white">{t.metrics}</span>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white font-extrabold text-base shadow-lg shrink-0`}>
                    {t.company.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">{t.company}</h4>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
