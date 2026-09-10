export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What makes Mandis Digital different from traditional marketing agencies?",
    answer: "Unlike traditional agencies that focus on vanity metrics like clicks and impressions, Mandis Digital operates as a performance-driven revenue partner. We align our strategies directly with revenue growth, CAC reduction, and measurable ROI. Everything we execute—from SEO content to high-speed web apps—is built for conversion.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How quickly can we expect to see results from performance campaigns?",
    answer: "Paid media campaigns (PPC, Meta, Google Ads) typically generate initial data and qualified conversions within the first 7 to 14 days during our audit and testing phase. Organic SEO and content cluster architectures compound over 60 to 90 days, delivering long-term, scalable low-cost traffic.",
    category: "Results"
  },
  {
    id: "faq-3",
    question: "What industries does Mandis Digital specialize in?",
    answer: "We specialize in B2B SaaS, FinTech, High-Growth E-commerce/D2C, HealthTech, and Professional Services. Our core strategies translate across any sector where customer trust, brand authority, and digital conversion are critical.",
    category: "Services"
  },
  {
    id: "faq-4",
    question: "How do you track and report campaign performance?",
    answer: "Transparency is our foundation. You receive access to custom real-time dashboards mapping ad spend, cost per acquisition (CAC), pipeline volume, conversion rates, and total generated revenue. We schedule bi-weekly strategy calls to review performance and optimize tactics.",
    category: "Reporting"
  },
  {
    id: "faq-5",
    question: "How do we get started with a project?",
    answer: "It starts with a 30-minute strategic discovery call. We analyze your current digital footprint, review past campaign performance, identify your core growth bottlenecks, and provide a tailored digital expansion roadmap.",
    category: "Onboarding"
  }
];
