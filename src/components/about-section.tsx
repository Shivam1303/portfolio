"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-background to-secondary/20 py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 text-muted-foreground">
            {profileData.about.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary">Location</h3>
              <p className="text-muted-foreground">{profileData.location}</p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary">Email</h3>
              <p className="text-muted-foreground break-all">{profileData.email}</p>
            </div>

            <div className="col-span-2 p-6 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-primary">Currently Working With</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  .NET
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 