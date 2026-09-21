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
  image: string;
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
    image: "/projects/englishoo.png",
    imageBg: "from-[#005B60] to-[#00383C]",
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
    image: "/projects/18-smell.png",
    imageBg: "from-[#4A5D6A] to-[#2C3844]",
    accentColor: "#f59e0b",
    featured: true
  },
  {
    id: "littledavinci",
    client: "LittleDavinci",
    industry: "Educational Products",
    title: "Branding, Catalogue Design & Educational Product Presentation",
    challenge: "LittleDavinci needed a more professional, engaging visual presentation for their educational products and brand identity.",
    strategy: "Mandis Digital designed cohesive branding, product catalogue layouts, and engaging digital marketing content.",
    execution: "Developed brand guidelines, designed product catalogues, created promotional visual content, and enhanced online product presentation.",
    results: [
      { label: "Brand Presence", value: "100%" },
      { label: "Product Appeal", value: "3.8x" },
      { label: "Customer Reach", value: "+260%" }
    ],
    tags: ["Branding", "Graphic Design", "Social Media"],
    image: "/projects/littledavinci.png",
    imageBg: "from-[#FAF8F5] to-[#EFECE6]",
    accentColor: "#8b5cf6",
    featured: true
  },
  {
    id: "mandis-ecommerce",
    client: "Mandis International",
    industry: "E-commerce & Distribution",
    title: "E-Commerce Product Presentation & Promotional Creatives",
    challenge: "Mandis needed improved online product presentation and promotional creatives to communicate product value clearly to customers.",
    strategy: "Created clear product presentation frameworks, high-converting ad creatives, and optimized the online store experience.",
    execution: "Designed promotional ad graphics, optimized e-commerce product pages, and launched multi-channel promotional campaigns.",
    results: [
      { label: "Conversion Rate", value: "+210%" },
      { label: "Product Clarity", value: "100%" },
      { label: "Sales Growth", value: "2.8x" }
    ],
    tags: ["Web Development", "Branding", "Meta Ads"],
    image: "/projects/mandis-international-transparent.png",
    imageBg: "from-[#0F172A] to-[#181C30]",
    accentColor: "#06b6d4",
    featured: true
  }
];
