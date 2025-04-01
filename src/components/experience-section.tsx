"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-background via-secondary/10 to-background py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className=" mb-16 text-center">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and achievements</p>
        </div>

        <div className="relative flex flex-col gap-12 before:absolute before:left-0 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-primary/20 before:to-transparent">
          {profileData.workExperience.map((job, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="group space-y-4 rounded-2xl border border-border/50 bg-secondary/20 p-6 transition-all hover:border-primary/50 hover:bg-secondary/30">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xl text-muted-foreground">{job.company}</p>
                  <span className="mt-1 inline-block text-sm text-primary/80">{job.period}</span>
                </div>

                <ul className="space-y-3 border-t border-border/50 pt-4">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="relative flex gap-2 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                      <p className="text-base leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 