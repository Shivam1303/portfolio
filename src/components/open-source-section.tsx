"use client";

import { profileData } from "@/data/profile";
import { useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function OpenSourceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        console.log("Current theme:", theme);
        console.log("HTML classes:", document.documentElement.classList.toString());
    }, [theme]);

    return (
        <section id="open-source" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-10 text-center">
                    Open Source Contributions
                </h2>

                <div className="flex flex-col gap-10">
                    {profileData.openSourceContributions.map((contribution, index) => (
                        <div key={index}>
                            <div className="mb-3">
                                <h3 className="text-2xl font-semibold mb-2">{contribution.title}</h3>
                                <p className="text-lg text-muted-foreground">{contribution.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {contribution.techStack.map((tech, i) => (
                                    <span
                                        key={i}

                                        className="px-2 py-1 bg-primary rounded-md text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {contribution.packages && (
                                <div className="mt-4">
                                    <h4 className="text-xl font-medium mb-3">Packages</h4>
                                    <div className="space-y-4">
                                        {contribution.packages.map((pkg, i) => (
                                            <div key={i} className="border-l-2 border-primary pl-4">
                                                <div className="text-lg font-medium">{pkg.name}</div>
                                                <div className="text-base text-muted-foreground">{pkg.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {index < profileData.openSourceContributions.length - 1 && (
                                <div className="pt-6 mt-6 border-t border-border/30"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 