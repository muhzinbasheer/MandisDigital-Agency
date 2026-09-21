import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { projectsData, Project } from '../../data/projects';
import { Button } from '../common/Button';

export const Work: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filterTag, setFilterTag] = useState<string>('All');

  const tags = ['All', 'SEO', 'PPC', 'Web Development', 'Social Media', 'CRO', 'Branding'];

  const filteredProjects = filterTag === 'All'
    ? projectsData
    : projectsData.filter(p => p.tags.includes(filterTag));

  return (
    <section id="work" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E05236]/05 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          badge="Growth Frameworks & Case Studies"
          title="Engineered for Category Dominance"
          subtitle="Explore our growth frameworks and pilot client outcomes across B2B SaaS, FinTech, Telehealth, and Commerce."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilterTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E05236] ${filterTag === tag
                  ? 'bg-[#E05236] text-white shadow-md shadow-[#E05236]/25'
                  : 'bg-white text-stone-700 hover:text-[#E05236] border border-[#E6E3DB] shadow-sm'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-white border border-[#E6E3DB] overflow-hidden group hover:border-[#E05236] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header with Transparent Cutout Logo (Clickable) */}
              <div
                onClick={() => setActiveProject(project)}
                className={`relative h-64 sm:h-72 overflow-hidden flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br ${project.imageBg} cursor-pointer`}
              >
                {/* Transparent PNG Cutout Logo */}
                <div className="absolute inset-0 p-8 sm:p-10 flex items-center justify-center pointer-events-none">
                  <img
                    src={project.image}
                    alt={project.client}
                    className="max-h-36 sm:max-h-40 max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                  />
                </div>

                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                <div className="flex items-center justify-between z-10 relative">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                    {project.industry}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    aria-label={`View details for ${project.title}`}
                    className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-[#E05236] group-hover:text-white group-hover:border-[#E05236] transition-all shadow-md hover:scale-110 focus:outline-none"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="z-10 relative">
                  <span className="text-xs font-bold text-white/90 block uppercase tracking-wider drop-shadow-sm">{project.client}</span>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-white mt-0.5 group-hover:text-[#F8D7D0] transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Key Outcome Pills */}
              <div className="p-6 bg-white flex flex-col justify-between flex-1 gap-6">
                <p className="text-sm text-stone-700 line-clamp-2 font-normal">
                  <strong className="text-[#111113]">Challenge:</strong> {project.challenge}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-[#FDF1EE] border border-[#F8D7D0]">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base font-extrabold text-[#E05236] font-display">{res.value}</div>
                      <div className="text-[10px] text-stone-600 font-medium truncate">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between pt-2 border-t border-[#E6E3DB]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F4F1EA] text-stone-600 border border-[#E6E3DB]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-bold text-[#E05236] hover:text-[#C9432A] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    View Details
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detailed Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-[#E6E3DB] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 z-20 p-2 rounded-full bg-black/60 text-white hover:text-[#E05236] border border-white/30 backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header Banner with Cutout Image */}
                <div className={`relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 p-6 sm:p-8 flex flex-col justify-between text-white bg-gradient-to-br ${activeProject.imageBg}`}>
                  <div className="absolute inset-0 p-6 sm:p-8 flex items-center justify-center pointer-events-none">
                    <img
                      src={activeProject.image}
                      alt={activeProject.client}
                      className="max-h-36 max-w-[80%] object-contain drop-shadow-xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  <div className="z-10 relative">
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block">
                      {activeProject.industry}
                    </span>
                  </div>

                  <div className="z-10 relative">
                    <span className="text-xs font-bold text-white/90 block uppercase tracking-wider">{activeProject.client}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-1">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm text-stone-700">{activeProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-xs font-bold text-[#181C30] uppercase tracking-wider mb-1">Strategic Framework</h4>
                    <p className="text-sm text-stone-700">{activeProject.strategy}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-xs font-bold text-[#E05236] uppercase tracking-wider mb-1">Technical Execution</h4>
                    <p className="text-sm text-stone-700">{activeProject.execution}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FDF1EE] border border-[#F8D7D0]">
                    <h4 className="text-xs font-bold text-[#E05236] uppercase tracking-wider mb-3">Verified Results</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {activeProject.results.map((r, idx) => (
                        <div key={idx}>
                          <div className="text-xl font-extrabold text-[#111113] font-display">{r.value}</div>
                          <div className="text-xs text-stone-600 font-medium">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setActiveProject(null)} variant="primary" size="md">
                    Close Details
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
