import { Search, Share2, Code, Megaphone, TrendingUp, Palette, Video, MapPin, LucideIcon } from 'lucide-react';

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
    title: "Search Engine Optimization – SEO",
    category: "Search & Organic",
    description: "Rank higher on search engines, boost organic traffic, and capture high-intent customers actively searching for your services.",
    problem: "Low website visibility and missing out on valuable local and global search traffic to competitors.",
    solution: "Comprehensive technical SEO audits, keyword intent strategy, high-quality content architecture, and search optimization.",
    outcome: "Sustainable organic growth with top search engine rankings and qualified leads.",
    icon: Search,
    badge: "Organic Growth",
    metrics: "High Organic Rankings",
    features: [
      "Technical & On-Page SEO Audits",
      "Search Intent & Keyword Strategy",
      "Local & Regional SEO Optimization",
      "Content Architecture & Link Building"
    ]
  },
  {
    id: "social-media",
    title: "Social Media Marketing – SMM",
    category: "Social Engagement",
    description: "Build brand awareness, engage your target audience, and foster active communities across Instagram, Facebook, and LinkedIn.",
    problem: "Inconsistent social media posts, low engagement, and weak brand presence across key platforms.",
    solution: "Strategic content planning, captivating post designs, short-form reels, and dedicated audience engagement.",
    outcome: "Elevated brand equity, loyal customer followings, and consistent lead generation.",
    icon: Share2,
    badge: "Audience Growth",
    metrics: "+10x Engagement",
    features: [
      "Strategic Content Calendars",
      "Engaging Posts & Short-Form Reels",
      "Community Management & Audience Outreach",
      "Multi-Platform Brand Consistency"
    ]
  },
  {
    id: "web-development",
    title: "Website Design & Development",
    category: "Digital Platforms",
    description: "We develop business websites, landing pages, portfolio websites, and e-commerce solutions with SEO and conversions in mind.",
    problem: "Outdated or slow websites that fail to represent your business properly and turn visitors into clients.",
    solution: "Modern, high-performance responsive web design, conversion-focused user flows, and SEO-ready development.",
    outcome: "A stunning digital storefront that builds instant trust and converts visitors into leads and sales.",
    icon: Code,
    badge: "SEO & Conversions",
    metrics: "High Conversion Rate",
    features: [
      "Custom Business & Corporate Websites",
      "High-Converting Landing Pages",
      "E-Commerce Online Stores",
      "Mobile-First Responsive Architecture"
    ]
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    category: "Paid Social Media",
    description: "Reach targeted audiences on Facebook and Instagram with eye-catching ad creatives engineered to drive quality leads and sales.",
    problem: "Wasted advertising budget on ineffective targeting without driving measurable customer leads.",
    solution: "Hyper-targeted audience segmentation, A/B creative testing, lead generation funnels, and performance optimization.",
    outcome: "Maximised return on ad spend (ROAS) and scalable customer acquisition.",
    icon: Megaphone,
    badge: "Targeted Leads",
    metrics: "High Campaign ROAS",
    features: [
      "Targeted Audience Segmentation",
      "Lead Generation & Retargeting Ads",
      "Creative Ad Visuals & Copywriting",
      "Performance Tracking & Optimization"
    ]
  },
  {
    id: "google-ads",
    title: "Google Ads",
    category: "Pay-Per-Click (PPC)",
    description: "Be visible right when potential clients search for your services with targeted Google Search and Display ad campaigns.",
    problem: "Missing out on ready-to-buy customers searching for your products and services online.",
    solution: "High-intent keyword targeting, compelling search copy, conversion tracking, and continuous campaign optimization.",
    outcome: "Immediate high-quality traffic, increased phone calls, and direct sales inquiries.",
    icon: TrendingUp,
    badge: "Instant Visibility",
    metrics: "High Intent Leads",
    features: [
      "Search & Display Campaign Setup",
      "High-Intent Keyword Bidding",
      "Conversion Rate Tracking & Analytics",
      "Budget & Negative Keyword Management"
    ]
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    category: "Visual Identity",
    description: "Create a strong identity for your brand with professional logo design, visual brand guidelines, and marketing collateral.",
    problem: "Generic or inconsistent visual presentation that fails to convey quality and trustworthiness.",
    solution: "Comprehensive visual identity systems, typography, color palettes, logo suites, and promotional designs.",
    outcome: "A memorable brand identity that positions your business professionally across all digital touchpoints.",
    icon: Palette,
    badge: "Creative Identity",
    metrics: "Distinctive Branding",
    features: [
      "Logo Design & Visual Strategy",
      "Brand Guidelines & Identity Systems",
      "Social Media & Ad Graphic Design",
      "Print & Digital Promotional Materials"
    ]
  },
  {
    id: "content-marketing",
    title: "Video & Content Marketing",
    category: "Content Strategy",
    description: "Engage your audience and build trust through high-quality video production, promotional reels, and strategic storytelling.",
    problem: "Difficulty capturing consumer attention and conveying key value propositions effectively.",
    solution: "High-impact video production, promotional reels, storytelling scripts, and valuable content creation.",
    outcome: "Deeper customer engagement, higher video retention, and boosted conversion rates.",
    icon: Video,
    badge: "High Engagement",
    metrics: "Strong Storytelling",
    features: [
      "Promotional & Commercial Videos",
      "Short-Form Social Video Content",
      "Content Strategy & Copywriting",
      "Brand Storytelling & Video Editing"
    ]
  },
  {
    id: "gbp-optimization",
    title: "Google Business Profile Optimization",
    category: "Local SEO",
    description: "Optimize your Google Business Profile to rank higher on local Google Maps and search results in Palakkad and beyond.",
    problem: "Low local visibility causing nearby customers to discover competitor businesses instead.",
    solution: "Profile setup, category tuning, geotagged image updates, review strategy, and local post updates.",
    outcome: "Increased phone calls, store visits, and local service inquiries every day.",
    icon: MapPin,
    badge: "Local Dominance",
    metrics: "More Calls & Store Visits",
    features: [
      "Local Maps Ranking Optimization",
      "Accurate Business Information Setup",
      "Geotagged Photo & Post Updates",
      "Review & Reputation Optimization"
    ]
  }
];
