"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export function EducationSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="education" className="bg-accent/10">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="text-3xl w-full border-b pb-4 font-bold tracking-tight mb-12 text-center">
                    Education
                </h2>

                <div className="flex flex-col gap-8">
                    {profileData.education.map((edu, index) => (
                        <div
                            key={index}
                            className="hover-card rounded-lg border p-8"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                            <p className="text-xl text-muted-foreground mb-2">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 