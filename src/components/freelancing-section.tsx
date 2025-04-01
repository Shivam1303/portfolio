"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export const FreelancingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="freelancing"
      className="bg-gradient-to-b from-background via-secondary/10 to-background py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Freelance Work</h2>
          <p className="section-subtitle">Independent projects and client collaborations</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {profileData.freelancingExperience.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 p-8 hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 border-t border-border/50 pt-6">
                  <h4 className="text-lg font-medium text-foreground/90 mb-4">
                    Key Features & Achievements
                  </h4>
                  <ul className="grid gap-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="relative flex gap-3 text-muted-foreground group/item"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                        <p className="text-base leading-relaxed group-hover/item:text-foreground transition-colors">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
