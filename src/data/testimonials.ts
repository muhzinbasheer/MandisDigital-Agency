export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string;
  avatarBg: string;
  logoText?: string;
  stars: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "englishoo",
    quote: "Mandis Digital helped us build a more structured online presence, from our website and SEO to social media content and advertising. Their team understands our requirements and consistently supports our digital marketing activities.",
    author: "Englishoo Team",
    role: "Education / English Learning",
    company: "Englishoo",
    metrics: "Structured Digital Growth & SEO",
    avatarBg: "from-teal-500 to-emerald-600",
    logoText: "Englishoo",
    stars: 5
  },
  {
    id: "18-smell",
    quote: "From branding and product presentation to promotional content, Mandis Digital helped us create a stronger identity for 18 Smell. The creative approach made our products look more professional across digital platforms.",
    author: "18 Smell Team",
    role: "Perfume Brand",
    company: "18 Smell Perfumery",
    metrics: "Stronger Identity & Visual Brand",
    avatarBg: "from-amber-500 to-indigo-600",
    logoText: "18 Smell",
    stars: 5
  },
  {
    id: "littledavinci",
    quote: "Mandis Digital helped us present our educational products in a more professional and engaging way. Their support with branding, catalogue design and digital content has been valuable in building our brand presence.",
    author: "LittleDavinci Team",
    role: "Educational Products",
    company: "LittleDavinci",
    metrics: "Branding, Catalogue & Digital Content",
    avatarBg: "from-purple-500 to-indigo-600",
    logoText: "LittleDavinci",
    stars: 5
  },
  {
    id: "mandis-ecommerce",
    quote: "The team supported us in improving our online product presentation, promotional creatives and overall digital presence. Their marketing approach helped us communicate our products more clearly to customers.",
    author: "Mandis E-commerce Team",
    role: "E-commerce",
    company: "Mandis",
    metrics: "Product Presentation & Creatives",
    avatarBg: "from-cyan-500 to-blue-600",
    logoText: "Mandis",
    stars: 5
  }
];
