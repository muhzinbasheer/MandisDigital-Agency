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
    id: "apex-fintech",
    client: "Apex Financial",
    industry: "FinTech & Banking",
    title: "Scaling B2B Lead Engine for Enterprise Payments",
    challenge: "Struggling with a high $420 CAC on Google Ads and stagnant organic search visibility against established legacy banks.",
    strategy: "Shifted positioning to high-intent comparison search clusters, combined with dedicated fast-loading interactive landing pages.",
    execution: "Rebuilt digital web platform, targeted 180+ decision-maker keyword clusters, and deployed automated LinkedIn lead retargeting.",
    results: [
      { label: "Pipeline Growth", value: "+320%" },
      { label: "CAC Reduction", value: "-54%" },
      { label: "Qualified Leads", value: "4,200+" }
    ],
    tags: ["SEO", "PPC", "Web Development", "CRO"],
    imageBg: "from-indigo-900/60 to-purple-900/60",
    accentColor: "#6366f1",
    featured: true
  },
  {
    id: "lumina-health",
    client: "Lumina Health",
    industry: "Health & Telewellness",
    title: "Direct-to-Consumer Growth & Viral Creative Engine",
    challenge: "Low ad conversion on Instagram with high user drop-off before subscription checkout.",
    strategy: "Engineered authentic video content storytelling around real patient recovery journeys and restructured the 3-step checkout flow.",
    execution: "Produced 45+ vertical UGC video ad variations per month, optimized mobile UI/UX, and implemented cart abandonment SMS sequences.",
    results: [
      { label: "Monthly Revenue", value: "3.8x" },
      { label: "ROAS Increase", value: "4.2x" },
      { label: "Ad Impressions", value: "18M+" }
    ],
    tags: ["Social Media", "Performance Marketing", "CRO"],
    imageBg: "from-cyan-900/60 to-teal-900/60",
    accentColor: "#00f2fe",
    featured: true
  },
  {
    id: "nexus-cloud",
    client: "Nexus Cloud Software",
    industry: "SaaS & Enterprise IT",
    title: "Category Dominance via Organic Content Clusters",
    challenge: "Zero organic footprint for core cloud infrastructure terms, relying 100% on expensive trade shows.",
    strategy: "Architected a hub-and-spoke technical documentation and thought leadership ecosystem.",
    execution: "Published 60+ technical guides, built interactive ROI cloud cost calculators, and secured tier-1 tech publisher coverage.",
    results: [
      { label: "Organic Traffic", value: "+410%" },
      { label: "Demo Requests", value: "+185%" },
      { label: "Organic Revenue", value: "$2.4M" }
    ],
    tags: ["SEO", "Content Marketing", "Web Development"],
    imageBg: "from-blue-900/60 to-indigo-900/60",
    accentColor: "#3b82f6",
    featured: true
  },
  {
    id: "velox-auto",
    client: "Velox EV Mobility",
    industry: "Automotive Tech",
    title: "Global Rebrand & Omnichannel Launch Campaign",
    challenge: "Launching a new luxury EV mobility line in a competitive market requiring high consumer trust.",
    strategy: "Crafted a futuristic digital brand aesthetic with immersive 3D-style web previews and high-impact digital PR.",
    execution: "Developed responsive web portal with real-time customizer tool, launched targeted Youtube & Meta pre-order ads.",
    results: [
      { label: "Pre-orders Booked", value: "8,500+" },
      { label: "Media Features", value: "40+" },
      { label: "Brand Recall Rate", value: "84%" }
    ],
    tags: ["Branding", "Performance Marketing", "Web Development"],
    imageBg: "from-emerald-900/60 to-teal-900/60",
    accentColor: "#10b981",
    featured: false
  }
];
