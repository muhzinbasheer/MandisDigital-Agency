export interface Project {
  id: string;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    label: string;
    value: string;
  }[];
  tags: string[];
  imageBg: string;
  accentColor: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "englishoo",
    client: "Englishoo",
    industry: "Education / English Learning",
    title: "Structured Digital Presence, Website & Organic SEO Growth",
    challenge: "Englishoo needed a structured online presence, a responsive web experience, and targeted social media marketing to reach language learners.",
    strategy: "Mandis Digital built a modern, conversion-focused website, implemented targeted SEO for educational search terms, and managed multi-channel social advertising.",
    execution: "Developed responsive landing pages, launched targeted Meta & Google Ads, optimized organic search visibility, and produced engaging promotional graphics.",
    results: [
      { label: "Online Reach", value: "+350%" },
      { label: "Lead Inquiries", value: "3.2x" },
      { label: "Organic Search", value: "Top 5" }
    ],
    tags: ["SEO", "Web Development", "Social Media", "Meta Ads"],
    imageBg: "from-teal-900/60 to-emerald-900/60",
    accentColor: "#10b981",
    featured: true
  },
  {
    id: "18-smell",
    client: "18 Smell Perfumery",
    industry: "Perfume & Fragrance Brand",
    title: "Brand Identity, Product Presentation & Digital Launch",
    challenge: "18 Smell required a strong visual identity, premium product presentation, and impactful promotional content across digital platforms.",
    strategy: "Engineered a cohesive brand identity, high-end graphic assets, product showcase layouts, and targeted promotional ad campaigns.",
    execution: "Designed brand guidelines, created promotional visual content, produced product reels, and managed targeted ad rollouts across Instagram & Facebook.",
    results: [
      { label: "Brand Impression", value: "4.5x" },
      { label: "Customer Inquiries", value: "+280%" },
      { label: "Visual Authority", value: "100%" }
    ],
    tags: ["Branding", "Graphic Design", "Video Marketing", "Meta Ads"],
    imageBg: "from-amber-900/60 to-purple-900/60",
    accentColor: "#f59e0b",
    featured: true
  }
];
