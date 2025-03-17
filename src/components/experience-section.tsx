"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="experience" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-10 text-center">
                    Work Experience
                </h2>

                <div className="flex flex-col gap-10">
                    {profileData.workExperience.map((job, index) => (
                        <div key={index} className="space-y-3">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-2xl font-semibold">{job.title}</h3>
                                <p className="text-xl text-muted-foreground">{job.company}</p>
                                <span className="text-muted-foreground text-sm">{job.period}</span>
                            </div>

                            <ul className="space-y-2 mt-3">
                                {job.achievements.map((achievement, i) => (
                                    <li key={i} className="relative pl-6">
                                        <span className="absolute left-0 top-2.5 w-2 h-2 bg-primary rounded-full" />
                                        <p className="text-lg text-muted-foreground">{achievement}</p>
                                    </li>
                                ))}
                            </ul>

                            {index < profileData.workExperience.length - 1 && (
                                <div className="pt-6 mt-6 border-t border-border/30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 