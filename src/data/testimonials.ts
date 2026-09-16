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
  }
];
