"use client";

import { profileData } from "@/data/profile";
import { useRef } from "react";

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="about" className="">
            <div className="layout-wrapper" ref={containerRef}>
                <h2 className="w-full border-b pb-4 text-3xl font-bold tracking-tight mb-10 text-center">
                    About
                </h2>

                <div className="space-y-5 text-muted-foreground mb-10">
                    {profileData.about.map((paragraph, index) => (
                        <p key={index} className="text-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Contact</h3>
                        <div className="space-y-3">
                            <p className="flex flex-col">
                                <span className="font-medium">Location</span>
                                <span className="text-muted-foreground">{profileData.location}</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="font-medium">Email</span>
                                <span className="text-muted-foreground">{profileData.email}</span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-3">Currently Working With</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">React</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">Next.js</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">.NET</span>
                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm">TypeScript</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
} 