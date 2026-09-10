import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#08090d] relative overflow-hidden">
      <Container size="lg">
        <SectionHeading
          badge="Executive Endorsements"
          title="What Growth Leaders Say"
          subtitle="Direct feedback from marketing leaders and founders partnering with Mandis Digital to scale their business."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0f1118]/80 border border-[#212638] hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" />
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Key Result
                  </span>
                  <span className="text-xs font-extrabold text-white">{t.metrics}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-400">{t.role}, <span className="text-indigo-300">{t.company}</span></p>
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
