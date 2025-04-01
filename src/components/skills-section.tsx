"use client";

import { profileData } from '@/data/profile';
import { useEffect, useRef } from "react";

export const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-background via-secondary/10 to-background py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {profileData.skills.map((skillCategory, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 p-8 transition-all hover:border-primary/50 hover:bg-secondary/30 reveal-item"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl text-primary">
                      {getSkillIcon(skillCategory.category)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get icons for skill categories
const getSkillIcon = (category: string): string => {
  const icons: { [key: string]: string } = {
    Frontend: '🎨',
    Backend: '⚙️',
    Database: '🗄️',
    'Tools & Others': '🛠️',
    // Add more mappings as needed
  };
  return icons[category] || '💻';
}; 