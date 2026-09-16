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
    <section id="work" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Ambient glowing orb */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

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
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                filterTag === tag
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-[#0b0f19] text-slate-400 hover:text-cyan-300 border border-[#1e2438] hover:border-cyan-500/30'
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
              className="rounded-3xl bg-[#0b0f19] border border-[#1e2438] overflow-hidden group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Card Header */}
              <div className={`p-8 bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex flex-col justify-between min-h-[220px]`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {project.industry}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="z-10">
                  <span className="text-xs font-semibold text-cyan-300 block uppercase tracking-wider">{project.client}</span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body & Key Outcome Pills */}
              <div className="p-6 bg-[#0b0f19] flex flex-col justify-between flex-1 gap-6">
                <p className="text-sm text-slate-300 line-clamp-2">
                  <strong className="text-white">Challenge:</strong> {project.challenge}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-[#121626] border border-cyan-500/20">
                  {project.results.map((res, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base font-extrabold text-cyan-300 font-display">{res.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between pt-2 border-t border-[#1e2438]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-[#121626] text-slate-400 border border-[#1e2438]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#0b0f19] border border-cyan-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 relative"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-[#121626] text-slate-300 hover:text-cyan-300 border border-cyan-500/30"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  {activeProject.client} • {activeProject.industry}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-6">
                  {activeProject.title}
                </h3>

                <div className="space-y-5">
                  <div className="p-4 rounded-xl bg-[#121626] border border-[#1e2438]">
                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm text-slate-300">{activeProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121626] border border-[#1e2438]">
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Strategic Framework</h4>
                    <p className="text-sm text-slate-300">{activeProject.strategy}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121626] border border-[#1e2438]">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Technical Execution</h4>
                    <p className="text-sm text-slate-300">{activeProject.execution}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Verified Results</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {activeProject.results.map((r, idx) => (
                        <div key={idx}>
                          <div className="text-xl font-extrabold text-white font-display">{r.value}</div>
                          <div className="text-xs text-slate-400">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setActiveProject(null)} variant="glow" size="md">
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
