"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="projects" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-4 text-center">
                    My Projects
                </h2>
                <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
                    Check out my latest work
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profileData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg border bg-background p-2 hover:shadow-lg transition-shadow"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-md">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                {project.link && (
                                    <Link
                                        href={project.link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-base font-medium text-primary hover:underline"
                                    >
                                        {project.link.text}
                                        <ExternalLink className="ml-1 h-4 w-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 