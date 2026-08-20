export type ProjectLink = {
  label: "GitHub" | "Live" | "NPM";
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  role: string;
  results?: string[];
  image?: string;
  year?: string;
  featured: boolean;
  links: ProjectLink[];
};

export const profile = {
  name: "Shivam Trivedi",
  initials: "ST",
  role: "Software Engineer",
  location: "Vadodara, Gujarat",
  email: "shivam.trivedi.dev@gmail.com",
  introduction:
    "I build thoughtful, high-performance web products—from polished interfaces to dependable systems behind them.",
  about: [
    "I’m a software engineer who enjoys building fast, scalable, user-friendly applications. I work across modern JavaScript frameworks and .NET, from reusable interface systems to backend performance work.",
    "I’m drawn to practical problems, clear product thinking, and the details that make software feel considered. Outside of code, I enjoy exploring new places and fresh perspectives.",
  ],
  links: {
    github: "https://github.com/Shivam1303",
    npm: "https://www.npmjs.com/~sliderzz",
    linkedin: "https://www.linkedin.com/in/shivam-trivedi-io/",
    twitter: "https://twitter.com/io_shivam",
  },
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Helios Solutions",
      period: "Jan 2024 — Present",
      achievements: [
        "Optimized a certification and quote generation system using Angular, .NET, and MSSQL, improving document generation speed by 40% and sales accuracy by 45%.",
        "Developed a product customization platform with Fabric.js, Knockout.js, Three.js, and .NET that processes 5K+ images daily and reduced server response time by 35%.",
        "Modernized a critical web application from Angular 13 to 17, improving API integrations and reducing load time from 8s to 4.8s.",
      ],
    },
  ],
  freelanceWork: [
    {
      title: "Casino Game Application",
      period: "Freelance engagement",
      description: "Built a casino gaming application with cryptocurrency payment and payout flows, including Aviator, coin machine, dice, and slot machine games.",
      technologies: ["Cryptocurrency payments", "Game development"],
    },
    {
      title: "Internal Portal Development",
      period: "2024 — 2025",
      description: "A unified internal portal that improved cross-department collaboration and operational efficiency by 35%.",
      technologies: ["Next.js", "Payload CMS", "Microsoft Authentication", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Tourism Landing Page",
      period: "2022 — Present",
      description: "A dynamic tourism website with real-time content updates and Payload CMS integration, increasing visitor engagement by 30%.",
      technologies: ["Next.js", "Payload CMS", "React", "Node.js", "TypeScript"],
    },
    {
      title: "City Management Agency Landing Page",
      period: "2022 — Present",
      description: "A high-performance, SEO-focused site that streamlined citizen engagement and increased service request submissions by 25%.",
      technologies: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
    },
  ],
  skills: [
    { category: "Languages", items: ["JavaScript", "TypeScript", "C#", "Dart"] },
    { category: "Product engineering", items: ["React", "Next.js", "Angular", ".NET Core", "Node.js", "GraphQL"] },
    { category: "Data & platform", items: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Supabase", "Firebase"] },
    { category: "Interface & delivery", items: ["Tailwind CSS", "Three.js", "Fabric.js", "Git", "REST APIs", "NPM packages"] },
  ],
  education: { degree: "B-Tech in Computer Engineering", institution: "University of Engineering and Technology", period: "2021 — 2024" },
  openSource: {
    title: "Fleek UI",
    description: "A collection of reusable UI packages for modern web applications, with over 5,000 monthly downloads.",
    packages: [
      { name: "@sliderzz/typify", description: "A CLI utility for easing JavaScript to TypeScript migrations.", href: "https://www.npmjs.com/package/@sliderzz/typify" },
      { name: "@sliderzz/fleek-infinite-scroll", description: "High-performance infinite scrolling for dynamic content.", href: "https://www.npmjs.com/package/@sliderzz/fleek-infinite-scroll" },
      { name: "@sliderzz/fleek-data-table", description: "A customizable data table for handling datasets.", href: "https://www.npmjs.com/package/@sliderzz/fleek-data-table" },
    ],
  },
} as const;

export const projects: Project[] = [
  {
    slug: "think-sight",
    title: "ThinkSight",
    summary: "An AI-powered product-market-fit analyzer that turns an early product idea into actionable market and growth insights.",
    description: "Built a web product for rapid idea validation, combining a PMF score with competitor mapping, persona generation, risk analysis, demand signals, stack recommendations, and a tactical growth plan.",
    technologies: ["Next.js", "AI analysis"],
    role: "Product developer",
    results: ["PMF scorecard and market-fit report", "Competitor, persona, demand, and risk analysis", "Growth-plan and stack recommendations"],
    image: "/projects/think-sight.png",
    year: "2026",
    featured: true,
    links: [{ label: "Live", href: "https://think-sight.vercel.app/" }],
  },
  {
    slug: "hunt-os",
    title: "HuntOS",
    summary: "An AI-assisted, human-reviewed lead-hunting system for freelancers and small technical agencies.",
    description: "Built a lead-hunting workflow that imports and structures freelance opportunities, scores them with deterministic rules, supports client research, and generates personalized proposal drafts while keeping outbound actions behind human approval.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Streamlit", "SQLAlchemy", "Google Gemini"],
    role: "Developer",
    results: ["CSV opportunity import and structured parsing", "Deterministic lead scoring with AI-assisted analysis", "Human-reviewed proposal drafting workflow"],
    image: "/projects/hunt-os.svg",
    year: "2026",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/Shivam1303/HuntOs" }],
  },
  {
    slug: "indexeddb-workbench",
    title: "IndexedDB Workbench",
    summary: "A Chrome MV3 workbench for inspecting and safely working with live IndexedDB databases or imported Dexie exports.",
    description: "Built a full-page Chrome extension workspace that connects to a selected site tab, browses, filters, sorts, edits, and deletes records, and can import Dexie exports into an extension-owned local copy.",
    technologies: ["TypeScript", "React", "Dexie.js", "Chrome MV3", "Vite"],
    role: "Developer",
    results: ["Live browsing and inline record editing", "Local-copy workflow for imported Dexie exports", "Scoped per-tab access without standing host permissions"],
    image: "/projects/indexeddb-workbench.png",
    year: "2026",
    featured: false,
    links: [{ label: "GitHub", href: "https://github.com/Shivam1303/dexie-visualizer-extension" }],
  },
  {
    slug: "typify",
    title: "Typify",
    summary: "A CLI utility that makes JavaScript-to-TypeScript migration less intimidating.",
    description: "Developed and published a command-line utility to help developers begin JavaScript to TypeScript migrations with less manual setup.",
    technologies: ["TypeScript", "Node.js", "NPM"],
    role: "Developer & maintainer",
    image: "/projects/typify.png",
    year: "2024",
    featured: true,
    links: [{ label: "NPM", href: "https://www.npmjs.com/package/@sliderzz/typify" }, { label: "GitHub", href: "https://github.com/Shivam1303/typify" }],
  },
  {
    slug: "playlist-heaven",
    title: "Playlist Heaven",
    summary: "An AI-powered playlist generator built around Spotify listening preferences.",
    description: "Built a playlist generator that analyzes Spotify listening history and preferences to create personalized, mood-based playlists while introducing new music.",
    technologies: ["React", "Next.js", "Spotify API", "AI"],
    role: "Full-stack developer",
    results: ["Used by 500+ users", "4.8/5 satisfaction rating"],
    image: "/projects/playlist-heaven.png",
    year: "2024",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/Shivam1303/spotify-ai-playlist" }, { label: "Live", href: "https://playlist-heaven.vercel.app" }],
  },
  {
    slug: "twizzli",
    title: "Twizzli",
    summary: "A tweet scheduler with AI-assisted writing capabilities.",
    description: "A product for planning and scheduling tweets, with built-in AI assistance for generating post ideas and copy.",
    technologies: [],
    role: "Developer",
    image: "/projects/twizzli.png",
    featured: false,
    links: [{ label: "GitHub", href: "https://github.com/Shivam1303/automate-twitter" }, { label: "Live", href: "https://automate-twitter.vercel.app" }],
  },
  {
    slug: "url-shortener",
    title: "URL Shortener",
    summary: "A URL shortening service with analytics, custom aliases, and QR codes.",
    description: "Built a URL shortening service with Node.js and MySQL. It includes custom aliases, QR code generation, and click analytics.",
    technologies: ["Node.js", "MySQL"],
    role: "Developer",
    results: ["Optimized query performance by 30%", "Processes 10,000+ redirects monthly", "99.9% uptime"],
    image: "/projects/url-shortener.png",
    featured: false,
    links: [{ label: "GitHub", href: "https://github.com/Shivam1303/url-shortener" }],
  },
  // Add new portfolio work here. Keep claims, links, and metrics factual.
];

/** Copy this entry into `projects` when you are ready to publish a new case study. */
export const newProjectTemplate: Project = {
  slug: "new-project-name",
  title: "NEW PROJECT NAME",
  summary: "Add a concise project summary.",
  description: "Add the project description.",
  technologies: [],
  role: "Add your role",
  featured: true,
  links: [],
};

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
