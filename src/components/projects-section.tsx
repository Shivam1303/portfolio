"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="projects" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-center">
                    My Projects
                </h2>
                <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                    Check out my latest work
                </p>

                <div className="flex flex-col gap-10">
                    {profileData.projects.map((project, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-2xl font-semibold">{project.title}</h3>
                            <p className="text-lg text-muted-foreground">{project.description}</p>
                            {project.link && (
                                <Link
                                    href={project.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-base font-medium text-primary hover:underline mt-1"
                                >
                                    {project.link.text}
                                    <ExternalLink className="ml-1 h-4 w-4" />
                                </Link>
                            )}

                            {index < profileData.projects.length - 1 && (
                                <div className="pt-6 mt-6 border-t border-border/30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 