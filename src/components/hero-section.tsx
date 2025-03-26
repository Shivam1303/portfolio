"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Particles } from "./ui/particles";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="layout-wrapper relative z-10 min-h-[calc(100vh-6rem)] flex flex-col justify-center" ref={containerRef}>
            {/* Subtle background particles */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <Particles
                    quantity={30}
                    darkModeColor="hsl(245, 60%, 75%)"
                    particleSize={1}
                    ease={50}
                    staticity={80}
                    opacity={0.2}
                    connectParticles={false}
                    minSpeed={0.03}
                    maxSpeed={0.08}
                />
            </div>

            {/* Gradient background */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-background via-background/90 to-transparent"></div>
            </div>

            <div className="w-full max-w-3xl mx-auto text-center">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl font-light tracking-tight gradient-text display-text mb-4"
                >
                    {profileData.name}
                </motion.h1>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl md:text-2xl text-foreground body-text mb-6"
                >
                    Software Engineer
                </motion.p>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg text-foreground/80 max-w-2xl mx-auto body-text mb-10"
                >
                    Passionate about crafting intuitive digital experiences and solving
                    complex problems with elegant solutions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Link
                        href={`mailto:${profileData.email}`}
                        className="btn btn-primary"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Get in touch
                    </Link>
                    {profileData.links.github && (
                        <Link
                            href={profileData.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            View GitHub
                        </Link>
                    )}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="h-12 w-[1px] bg-foreground/10 relative">
                    <motion.div
                        className="absolute top-0 h-4 w-[1px] bg-primary"
                        animate={{
                            top: ["0%", "100%", "0%"],
                            height: ["20%", "10%", "20%"]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
} 