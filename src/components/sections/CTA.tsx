import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export const CTA: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Search Engine Optimization (SEO)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden bg-ai-grid">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#E05236]/05 blur-[150px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="rounded-3xl bg-white border border-[#E6E3DB] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF1EE] text-[#E05236] border border-[#F8D7D0] mb-6 shadow-sm">
                Get in Touch With Us
              </span>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111113] tracking-tight leading-[1.15] mb-6">
                Ready to Grow Your Business Online?
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Partner with the Best Marketing Agency in Palakkad to grow your brand, generate quality leads, and stay ahead of the competition. Reach out today for a customized digital marketing strategy tailored to your goals.
              </p>

              <div className="space-y-4 w-full">
                <div className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-[#FDF1EE] text-[#E05236] flex items-center justify-center shrink-0 border border-[#F8D7D0]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href="mailto:mandisdigital@gmail.com" className="hover:text-[#E05236] transition-colors">mandisdigital@gmail.com</a>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-[#181C30]/10 text-[#181C30] flex items-center justify-center shrink-0 border border-[#181C30]/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a href="tel:+916282615630" className="hover:text-[#E05236] transition-colors">+91 6282 615 630</a>
                </div>

                <div className="flex items-center gap-3 text-sm font-semibold text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Palakkad, Kerala</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#FAF8F5] border border-emerald-200 text-center flex flex-col items-center justify-center shadow-md"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-[#111113] mb-2">Message Sent Successfully!</h3>
                  <p className="text-stone-700 text-sm max-w-md leading-relaxed mb-6 font-normal">
                    Thank you, <strong className="text-[#111113]">{formData.name}</strong>. Our team will review your inquiry and get back to you at <span className="text-[#E05236] font-bold">{formData.email}</span> as soon as possible.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} variant="secondary" size="sm">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6E3DB] space-y-4 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E3DB] text-[#111113] text-sm focus:outline-none focus:border-[#E05236] transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E3DB] text-[#111113] text-sm focus:outline-none focus:border-[#E05236] transition-colors shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 6282 615 630"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E3DB] text-[#111113] text-sm focus:outline-none focus:border-[#E05236] transition-colors shadow-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E3DB] text-[#111113] text-sm focus:outline-none focus:border-[#E05236] transition-colors shadow-sm"
                      >
                        <option>Search Engine Optimization (SEO)</option>
                        <option>Social Media Marketing (SMM)</option>
                        <option>Website Design & Development</option>
                        <option>Meta Ads (Facebook & IG)</option>
                        <option>Google Ads</option>
                        <option>Branding & Graphic Design</option>
                        <option>Video & Content Marketing</option>
                        <option>Google Business Profile Optimization</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Tell Us About Your Business Goals
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Share details about your business goals and marketing requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6E3DB] text-[#111113] text-sm focus:outline-none focus:border-[#E05236] transition-colors resize-none shadow-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    isLoading={isSubmitting}
                    loadingText="Sending Message..."
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
