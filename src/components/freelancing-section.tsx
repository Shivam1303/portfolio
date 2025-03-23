"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export function FreelancingSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="freelancing">
      <div className="layout-wrapper" ref={containerRef}>
        <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-10 text-center">
          Freelance Experience
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
          Independent projects and client work
        </p>

        <div className="flex flex-col gap-10">
          {profileData.freelancingExperience.map((project, index) => (
            <div key={index} className="space-y-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <span className="text-muted-foreground text-sm">
                  {project.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-lg text-muted-foreground">
                {project.description}
              </p>

              <ul className="space-y-2 mt-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="relative pl-6">
                    <span className="absolute left-0 top-2.5 w-2 h-2 bg-primary rounded-full" />
                    <p className="text-lg text-muted-foreground">{feature}</p>
                  </li>
                ))}
              </ul>

              {index < profileData.freelancingExperience.length - 1 && (
                <div className="pt-6 mt-6 border-t border-border/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
