"use client";

import { profileData } from "@/data/profile";
import { useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import Link from "next/link";

export const OpenSourceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Current theme:', theme);
    console.log('HTML classes:', document.documentElement.classList.toString());
  }, [theme]);

  return (
    <section
      id="open-source"
      className="bg-gradient-to-b from-background via-secondary/10 to-background py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Open Source</h2>
          <p className="section-subtitle">Contributing to the developer community</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {profileData.openSourceContributions.map((contribution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 p-8 hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {contribution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{contribution.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {contribution.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {contribution.packages && (
                  <div className="space-y-4 pt-6 border-t border-border/30">
                    <h4 className="text-xl font-semibold text-foreground/90">Packages</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {contribution.packages.map((pkg, i) => (
                        <div
                          key={i}
                          className="group/card relative overflow-hidden rounded-xl border border-border/40 bg-secondary/10 p-4 hover:border-primary/40 transition-colors"
                        >
                          <Link
                            href={pkg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <h5 className="text-lg font-medium mb-2 group-hover/card:text-primary transition-colors">
                              {pkg.name}
                            </h5>
                            <p className="text-sm text-muted-foreground">{pkg.description}</p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 