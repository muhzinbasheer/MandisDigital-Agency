export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string;
  avatarBg: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "Mandis Digital completely transformed our digital customer acquisition. Their strategy isn't just about traffic—it's laser-focused on bottom-line profit and pipeline growth.",
    author: "Elena Rostova",
    role: "VP of Marketing",
    company: "Apex Financial",
    metrics: "3.2x Revenue Growth",
    avatarBg: "from-indigo-500 to-purple-600"
  },
  {
    id: "t2",
    quote: "Working with Mandis Digital felt like having an elite, internal growth team. They delivered our rebrand and performance campaigns 2 weeks ahead of deadline with unbelievable quality.",
    author: "Marcus Chen",
    role: "Co-Founder & CEO",
    company: "Lumina Health",
    metrics: "4.8x ROAS Sustained",
    avatarBg: "from-cyan-500 to-blue-600"
  },
  {
    id: "t3",
    quote: "The organic search strategy Mandis Digital designed unlocked enterprise contracts we'd been trying to land for years. Their technical precision is unmatched.",
    author: "Sarah Jenkins",
    role: "Chief Growth Officer",
    company: "Nexus Cloud",
    metrics: "+410% Organic Leads",
    avatarBg: "from-emerald-500 to-teal-600"
  }
];
