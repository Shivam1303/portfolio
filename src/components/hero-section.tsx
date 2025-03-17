"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { useRef } from "react";
import { Particles } from "./ui/particles";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 md:py-28 lg:h-[100vh] relative overflow-hidden">
            {/* Particles background */}
            <Particles
                className="z-0"
                quantity={120}
                lightModeColor="#141414"
                darkModeColor="#ee581b"
                particleSize={1.8}
                ease={30}
                staticity={20}
                opacity={0.3}
                connectParticles={true}
                connectionDistance={120}
                connectionOpacity={0.12}
                minSpeed={0.05}
                maxSpeed={0.2}
            />

            <div className="layout-wrapper relative z-10" ref={containerRef}>
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text">
                        Hi, I'm {profileData.name} 👋
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                        Associate Software Engineer at {profileData.workExperience[0].company}. I love building things and solving problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center">
                        {profileData.links.github && (
                            <Link
                                href={profileData.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        )}

                        <Link
                            href={`mailto:${profileData.email}`}
                            className="w-full inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 