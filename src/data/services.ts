import { Search, TrendingUp, Share2, Code, Zap, Award, LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  icon: LucideIcon;
  badge?: string;
  metrics: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: "seo",
    title: "Organic Search Optimization (SEO)",
    category: "Organic Growth",
    description: "Dominant organic search visibility engineered to capture high-intent buyers before your competitors do.",
    problem: "High ad costs and invisible search rankings throttling customer acquisition.",
    solution: "Technical website optimization, entity-rich content architecture, and strategic digital PR authority building.",
    outcome: "Long-term compound traffic growth with up to 3.4x lower customer acquisition cost.",
    icon: Search,
    badge: "High ROI",
    metrics: "+240% Organic Revenue",
    features: [
      "Technical & Schema SEO Audit",
      "Search Intent & Keyword Strategy",
      "Content Cluster Architecture",
      "High-Authority Backlink Acquisition"
    ]
  },
  {
    id: "performance-marketing",
    title: "Performance & Paid Media (PPC)",
    category: "Paid Acquisition",
    description: "Data-backed paid advertising campaigns across Google, Meta, LinkedIn, and TikTok designed for positive ROI from Day 1.",
    problem: "Wasted ad budget on unoptimized channels with unmeasurable or negative return on ad spend.",
    solution: "Deep audience segmentation, rapid creative testing frameworks, and multi-touch conversion tracking.",
    outcome: "Predictable, scalable customer generation with maximum ROAS clarity.",
    icon: TrendingUp,
    badge: "Scalable",
    metrics: "4.8x Average ROAS",
    features: [
      "Cross-Channel Campaign Strategy",
      "Creative Ad Design & Copywriting",
      "Retargeting & LTV Optimization",
      "Real-Time Attribution Analytics"
    ]
  },
  {
    id: "social-media",
    title: "Social Growth & Community",
    category: "Brand Awareness",
    description: "Turn passive social media scrollers into passionate brand advocates through viral-focused creative direction.",
    problem: "Stagnant engagement and inconsistent brand storytelling across digital customer touchpoints.",
    solution: "Original short-form video production, brand voice positioning, and active audience engagement.",
    outcome: "Elevated brand equity and strong organic customer loyalty.",
    icon: Share2,
    badge: "Viral Growth",
    metrics: "+1.2M Brand Impressions",
    features: [
      "Short-Form Video Production (Reels/TikTok)",
      "Strategic Content Calendars",
      "Community Management & Outreach",
      "Influencer & Creator Partnerships"
    ]
  },
  {
    id: "web-development",
    title: "High-Converting Web Experiences",
    category: "Digital Products",
    description: "Custom, ultra-fast websites and landing pages engineered specifically to turn attention into sales.",
    problem: "Slow, outdated agency websites that fail to convert traffic into qualified leads.",
    solution: "Modern headless React/Vite web apps, high-contrast visual systems, and friction-free user flows.",
    outcome: "Blazing fast page performance with measurable conversion lifts.",
    icon: Code,
    badge: "99/100 Speed",
    metrics: "2.8x Conversion Rate",
    features: [
      "Custom React & Next.js Development",
      "Conversion Rate Optimization (CRO)",
      "UI/UX Design Systems",
      "Mobile-First Responsive Architecture"
    ]
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    category: "Revenue Science",
    description: "Maximize the revenue potential of your existing web traffic through rigorous data science and A/B testing.",
    problem: "High web traffic volumes with poor conversion rates leaving money on the table.",
    solution: "User behavior heatmaps, checkout funnel audits, interactive prototyping, and split testing.",
    outcome: "Immediate revenue growth without spending an extra dollar on advertising.",
    icon: Zap,
    badge: "Immediate Impact",
    metrics: "+42% Checkout Conversion",
    features: [
      "Funnel Drop-off Analysis",
      "A/B & Multivariate Testing",
      "UX Friction Reduction",
      "Copywriting & Offer Engineering"
    ]
  },
  {
    id: "branding",
    title: "Brand Systems & Strategy",
    category: "Identity",
    description: "Position your company as the undisputed leader in your sector with modern visual positioning.",
    problem: "Generic visual design and weak messaging that makes your company blend in with competitors.",
    solution: "Comprehensive visual strategy, brand design guidelines, typography hierarchy, and key narrative craft.",
    outcome: "Instant category dominance and pricing power.",
    icon: Award,
    badge: "Premium Design",
    metrics: "Category Leader Status",
    features: [
      "Visual Brand Identity Systems",
      "Value Proposition Frameworks",
      "Design Systems & Component Kits",
      "Brand Messaging & Copy Guidelines"
    ]
  }
];
