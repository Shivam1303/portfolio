"use client";

import { profileData } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px"
            }
        );

        const elements = containerRef.current?.querySelectorAll(".reveal-item");
        elements?.forEach((el) => observer.observe(el));

        return () => {
            elements?.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section id="skills" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-12 text-center">
                    Skills
                </h2>

                <div className="flex flex-col gap-4">
                    {profileData.skills.map((skillCategory, index) => (
                        <div
                            key={index}
                            className="rounded-lg py-4"
                        >
                            <h3 className="text-2xl font-semibold mb-6">{skillCategory.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillCategory.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className={cn(
                                            "skill-tag border px-4 py-2 rounded-md text-base font-medium",
                                            "bg-secondary text-secondary-foreground"
                                        )}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 