export const profileData = {
  name: "SHIVAM TRIVEDI",
  location: "Vadodara, Gujarat",
  email: "shivam.trivedi.dev@gmail.com",
  links: {
    github: "https://github.com/Shivam1303",
    npm: "https://www.npmjs.com/~sliderzz",
    linkedin: "https://www.linkedin.com/in/shivam-trivedi-io/",
    twitter: "https://twitter.com/io_shivam",
  },
  about: [
    "I'm a software engineer who loves building fast, scalable, and user-friendly applications. Whether it's crafting sleek UIs, optimizing backend performance, or creating reusable component libraries, I thrive on solving real-world problems with code. Passionate about modern JavaScript frameworks and .NET technologies, I'm always experimenting with new tools and ideas.",
    "Beyond the screen, I'm an explorer—hopping into new places, meeting people, and soaking in fresh perspectives. Whether it's tech or travel, I believe the best discoveries happen when you're willing to dive in and see where the journey takes you. 🚀",
  ],
  workExperience: [
    {
      title: "Associate Software Engineer",
      company: "Helios Solutions",
      period: "Jan 2024 – Present",
      achievements: [
        "Optimized a certification and quote generation system (Angular, .NET, MSSQL), boosting document generation speed by 40% and improving sales accuracy by 45%.",
        "Enhanced an admin support interface, reducing ticket response time by 25% and boosting agent efficiency by 15%.",
        "Developed a product customization platform (Fabric.js, Knockout.js, Three.js, .NET), processing 5K+ images daily, cutting server response time by 35%.",
        "Upgraded a .NET project from 4.8.1 to 8, reducing server response time by 35% and improving code structure by applying SOLID principles.",
        "Integrated an Excel import module into an AI-driven EdTech platform, accelerating CSV processing by 40% and optimizing data workflows.",
        "Developed and optimized an e-commerce Progressive Web App (PWA) with Adobe PWA Studio, reducing page load times by 30% and implementing GraphQL for improved API efficiency.",
        "Created dynamic PDF generation system with customizable certificate templates, increasing client customization efficiency by 50%.",
        "Led migration of a critical web application from Angular 13 to 17, modernizing API integrations and slashing load times by 40% (from 8s to 4.8s).",
      ],
    },
  ],
  freelancingExperience: [
    {
      title: "Internal Portal Development",
      period: "2024 - 2025",
      techStack: [
        "Next.js",
        "Payload CMS",
        "Microsoft Authentication",
        "TypeScript",
        "Tailwind CSS",
      ],
      description:
        "Architected and delivered a unified internal portal, enhancing cross-departmental collaboration and boosting operational efficiency by 35%",
      features: [
        "Implemented secure, version-controlled document management with granular access controls",
        "Deployed a dynamic news/announcements platform with an intuitive rich text editor",
        "Integrated an event management system with seamless calendar synchronization",
        "Enabled secure enterprise access via Microsoft Authentication protocols",
        "Developed dynamic, CMS-driven landing pages for targeted internal communication",
        "Created a custom Payload CMS dashboard for intuitive content administration",
      ],
    },
    {
      title: "Landing Pages Development",
      period: "2022 - Present",
      techStack: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS"],
      description:
        "Engineered high-performance, SEO-focused landing pages, driving client conversion rate increases between 25% and 40%",
      features: [
        "Built pixel-perfect, responsive landing pages optimized for core web vitals",
        "Applied technical SEO and structured data strategies for enhanced search visibility",
        "Integrated headless CMS solutions for effortless client-side content updates",
        "Set up comprehensive analytics for data-driven performance optimization",
        "Developed reusable component libraries ensuring brand consistency and accelerated development",
        "Employed advanced asset optimization techniques for sub-second loading times",
      ],
    },
  ],
  education: [
    {
      degree: "B-Tech in Computer Engineering",
      institution: "University of Engineering and Technology",
      period: "2021 - 2024",
    },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "C#", "Dart"],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        "Node.js",
        "React",
        "Angular",
        ".NET Core",
        ".NET Framework",
        "Entity Framework",
        "Adobe PWA Studio",
        "Knockout.js",
        "Fabric.js",
        "Three.js",
        "Flutter",
      ],
    },
    {
      category: "Databases",
      items: [
        "MySQL",
        "MSSQL",
        "PostgreSQL",
        "Google BigQuery",
        "MongoDB",
        "Firebase",
        "Redis",
        "Supabase",
      ],
    },
    {
      category: "Other Tools",
      items: [
        "GraphQL",
        "REST APIs",
        "Webpack",
        "Redux",
        "Git",
        "Agile Development",
        "NPM Package Development",
        "Docker",
        "CI/CD Pipelines",
      ],
    },
  ],
  openSourceContributions: [
    {
      title: "Fleek UI (NPM Packages)",
      description:
        "Developed & published a suite of scalable UI components for modern web apps, enhancing performance & UX. Packages have over 5,000 monthly downloads.",
      techStack: ["TypeScript", "React", "Node.js", "Webpack", "NPM"],
      packages: [
        {
          name: "@sliderzz/typify",
          description: "Effortlessly convert from javascript to typescript.",
          link: "https://www.npmjs.com/package/@sliderzz/typify",
        },
        {
          name: "@sliderzz/fleek-infinite-scroll",
          description: "High-performance infinite scrolling for dynamic content.",
          link: "https://www.npmjs.com/package/@sliderzz/fleek-infinite-scroll",
        },
        {
          name: "@sliderzz/fleek-data-table",
          description: "Customizable and optimized data table for handling large datasets.",
          link: "https://www.npmjs.com/package/@sliderzz/fleek-data-table",
        },
        {
          name: "@sliderzz/fleek-multistepform",
          description: "Smooth multi-step form library with advanced state management.",
          link: "https://www.npmjs.com/package/@sliderzz/fleek-multistepform",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Typify (JavaScript to TypeScript)",
      description:
        "Designed and published a type utility library for TypeScript, simplifying deep object type management. Provides schema validation, deep type transformations, and type utilities, improving developer experience in TypeScript projects. Achieved 3,000+ monthly downloads.",
      image: "/projects/typify.png",
      link: {
        url: "https://www.npmjs.com/package/@sliderzz/typify",
        text: "NPM",
      },
    },
    {
      title: "Playlist Heaven",
      description:
        "Developed an AI-powered playlist generator that analyzes your Spotify listening history and music preferences to create personalized playlists. By understanding your taste in music, favorite artists, and listening patterns, it generates mood-based playlists that perfectly match your style while introducing you to new tracks you'll love. Used by 500+ users with a 4.8/5 satisfaction rating.",
      image: "/projects/playlist-heaven.png",
      link: {
        url: "https://github.com/Shivam1303/spotify-ai-playlist",
        text: "GitHub",
      },
    },
    {
      title: "URL Shortener",
      description:
        "Built a URL shortening service using Node.js and MySQL, optimizing query performance by 30%. Features include custom aliases, QR code generation, and click analytics. Processes 10,000+ URL redirects monthly with 99.9% uptime.",
      image: "/projects/url-shortener.png",
      link: {
        url: "https://github.com/Shivam1303/url-shortener",
        text: "GitHub",
      },
    },
  ],
}; 