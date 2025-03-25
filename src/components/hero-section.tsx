"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail, Linkedin, Twitter, ExternalLink, Code, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Particles } from "./ui/particles";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoaded(true), 100);

        // Check if device is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const nameLetters = profileData.name.split('');

    return (
        <section className="py-20 md:py-28 min-h-screen relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute -right-32 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -left-32 bottom-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute left-1/3 top-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
            </div>

            <div className="absolute inset-0 opacity-70 z-0">
                {!isMobile && (
                    <Particles
                        quantity={120}
                        lightModeColor="#141414"
                        darkModeColor="#ee581b"
                        particleSize={2}
                        ease={20}
                        staticity={40}
                    opacity={0.5}
                    connectParticles={true}
                    connectionDistance={150}
                        connectionOpacity={0.1}
                        minSpeed={0.1}
                        maxSpeed={0.2}
                    />
                )}
            </div>

            <div className="layout-wrapper relative z-10" ref={containerRef}>
                <div className="flex flex-col items-center text-center select-none">
                    <div className="overflow-hidden mb-8 relative w-full max-w-7xl px-4">
                        {isLoaded && (
                            <div className="flex justify-center relative">
                                {nameLetters.map((letter, i) => (
                                    <span
                                        key={`letter-${i}`}
                                        className="text-4xl md:text-7xl font-bold tracking-tight gradient-text inline-block"
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-5">
                            <span className="text-4xl md:text-6xl inline-block">
                                👋
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center mb-6">
                        <div className="px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary inline-flex items-center space-x-2 relative overflow-hidden shadow-lg backdrop-blur-sm">
                            <Zap size={16} className="text-primary" />
                            <span className="text-sm font-medium">Software Engineer</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-8">
                        <div className="bg-card/30 backdrop-blur-md border border-border rounded-xl p-6 shadow-xl relative overflow-hidden md:col-span-2">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full"></div>
                            <div className="absolute right-12 bottom-12 w-16 h-16 bg-primary/10 rounded-full"></div>

                            <h2 className="text-xl md:text-2xl font-medium mb-3">
                                <span className="text-foreground">Building digital experiences at </span>
                                <span className="font-bold text-primary">{profileData.workExperience[0].company}</span>
                            </h2>

                            <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
                                Passionate about crafting scalable, user-friendly applications and solving complex problems with elegant solutions.
                            </p>
                        </div>

                        <div className="bg-card/20 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg relative overflow-hidden">
                            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-blue-500/5 rounded-full"></div>

                            <div className="flex items-center mb-4">
                                <Code className="h-5 w-5 mr-2 text-blue-400" />
                                <h3 className="text-lg font-medium">Tech Stack</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {profileData.skills[1].items.slice(0, 6).map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card/20 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg relative overflow-hidden">
                            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full"></div>

                            <div className="flex items-center mb-4">
                                <ExternalLink className="h-5 w-5 mr-2 text-primary" />
                                <h3 className="text-lg font-medium">Connect</h3>
                            </div>

                            <div className="flex flex-wrap gap-3 items-center justify-center">
                                {profileData.links.github && (
                                    <Link
                                        href={profileData.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center rounded-md bg-background/80 border border-border px-4 py-2 text-sm font-medium cursor-pointer"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                )}

                                <Link
                                    href={`mailto:${profileData.email}`}
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md cursor-pointer"
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact
                                </Link>

                                {profileData.links.linkedin && (
                                    <Link
                                        href={profileData.links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/80 border border-border text-sm font-medium cursor-pointer"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                )}

                                {profileData.links.twitter && (
                                    <Link
                                        href={profileData.links.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/80 border border-border text-sm font-medium cursor-pointer"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 