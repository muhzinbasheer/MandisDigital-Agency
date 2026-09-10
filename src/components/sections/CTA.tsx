import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, Calendar } from 'lucide-react';
import { MandisLogo } from '../common/MandisLogo';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const CTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SEO & Organic Growth',
    budget: '$5k - $10k / mo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#08090d] relative overflow-hidden noise-bg">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="rounded-3xl bg-glass-card border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-6">
                <MandisLogo size={16} glow />
                Growth Strategy Discovery
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Ready to Scale Your Customer Pipeline?
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Book a 30-minute growth consultation with our partners. We'll analyze your traffic bottlenecks, review competitor positioning, and build a high-ROI strategy roadmap.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span>Direct founder-level strategy review (No pushy sales reps)</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>Response guaranteed within 4 business hours</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>Custom audit deliverables included post-call</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#0a0c14] border border-emerald-500/30 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Strategy Request Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md leading-relaxed mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth engineer will review your application and reach out to <span className="text-indigo-300">{formData.email}</span> shortly.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} variant="secondary" size="sm">
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#0a0c14]/90 border border-[#212638] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121522] border border-[#212638] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121522] border border-[#212638] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Company / Website
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="acme.com"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121522] border border-[#212638] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Primary Goal
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#121522] border border-[#212638] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      >
                        <option>SEO & Organic Growth</option>
                        <option>Performance Paid Media</option>
                        <option>Web Platform Engineering</option>
                        <option>Full Omnichannel Scale</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Tell us about your growth goals
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="We are looking to scale our B2B pipeline from $100k to $300k MRR..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121522] border border-[#212638] text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="glow" size="lg" className="w-full justify-center" icon={<Send className="w-4 h-4" />}>
                    Request Strategy Call
                  </Button>

                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    🔒 No spam. Your information is protected under NDA.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
