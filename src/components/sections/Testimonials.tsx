import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Responsive items per view (1 on small screens, 2 on desktop)
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const goToPage = (pageIndex: number) => {
    setDirection(pageIndex > currentIndex ? 1 : -1);
    setCurrentIndex(pageIndex);
  };

  // Get active pair or item for current page
  const visibleItems = testimonialsData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="testimonials" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E05236]/05 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Client Testimonials"
          title="Our Work Speaks Through Our Clients"
          subtitle="Discover how Mandis Digital empowers businesses across industries with structured online presences, powerful branding, and consistent marketing performance."
        />

        {/* Carousel Container with Arrow Navigation */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Testimonials"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#E6E3DB] text-stone-800 flex items-center justify-center hover:bg-[#FDF1EE] hover:text-[#E05236] hover:border-[#E05236] hover:scale-110 transition-all shadow-md focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Testimonials"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-[#E6E3DB] text-stone-800 flex items-center justify-center hover:bg-[#FDF1EE] hover:text-[#E05236] hover:border-[#E05236] hover:scale-110 transition-all shadow-md focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Cards Slide */}
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {visibleItems.map((t) => (
                  <div
                    key={t.id}
                    className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E6E3DB] hover:border-[#E05236] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group min-h-[340px]"
                  >
                    <div>
                      {/* Rating Stars & Quote Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(t.stars)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-[#E05236]/20 group-hover:text-[#E05236]/40 transition-colors" />
                      </div>

                      <p className="text-stone-700 text-base leading-relaxed italic mb-8 font-normal">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author / Client Footer */}
                    <div>
                      <div className="p-3.5 rounded-2xl bg-[#FDF1EE] border border-[#F8D7D0] mb-6 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#E05236] flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#E05236]" />
                          Focus Area
                        </span>
                        <span className="text-xs font-extrabold text-[#111113]">{t.metrics}</span>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <div className="w-12 h-12 rounded-2xl bg-[#181C30] text-white flex items-center justify-center font-extrabold text-base shadow-md shrink-0">
                          {t.company.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-display font-extrabold text-[#111113] text-lg">{t.company}</h4>
                          <p className="text-xs text-stone-500 font-medium">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots Row */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToPage(idx)}
                aria-label={`Go to slide page ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-[#E05236] shadow-sm'
                    : 'w-2.5 h-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
