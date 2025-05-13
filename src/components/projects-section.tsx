"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-background via-secondary/10 to-background py-20"
    >
      <div
        className="layout-wrapper"
        ref={containerRef}
      >
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my best work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-secondary/20 hover:border-primary/50 hover:bg-secondary/30 transition-all"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  {project.links && project.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-base font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {link.text}
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
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