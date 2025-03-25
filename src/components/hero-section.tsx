"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail, ArrowDown, Linkedin, Twitter, ExternalLink, Code, Zap } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Particles } from "./ui/particles";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CursorEffect } from "./ui/cursor-effect";
import { MagneticEffect } from "./ui/magnetic-effect";
import { CustomCursor } from "./ui/custom-cursor";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const titleY = useTransform(scrollY, [0, 500], [0, 50]);
    const cardsY = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const bentoCardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 + (i * 0.1),
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const nameLetters = profileData.name.split('');

    return (
        <section className="py-20 md:py-28 min-h-screen relative overflow-hidden flex flex-col justify-center">
            {!isMobile && (
                <CustomCursor
                    color="#ee581b"
                />
            )}

            {!isMobile && <MagneticEffect />}

            {!isMobile && (
                <CursorEffect
                    quantity={30}
                    interactionDistance={120}
                    colors={["#ee581b", "#313bac", "#f2f2f2"]}
                />
            )}

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    className="absolute -right-32 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute -left-32 bottom-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
                    animate={{
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 18,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 1,
                    }}
                />
                <motion.div 
                    className="absolute left-1/3 top-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: 2,
                    }}
                />
            </div>

            {!isMobile && (
                <div className="absolute inset-0 opacity-30 z-0">
                    <Particles
                        quantity={80}
                        lightModeColor="#141414"
                        darkModeColor="#ee581b"
                        particleSize={1.2}
                        ease={20}
                        staticity={50}
                        opacity={0.2}
                        connectParticles={true}
                        connectionDistance={100}
                        connectionOpacity={0.05}
                        minSpeed={0.05}
                        maxSpeed={0.15}
                    />
                </div>
            )}

            <div className="layout-wrapper relative z-10" ref={containerRef}>
                <motion.div
                    className="flex flex-col items-center text-center select-none"
                    style={{ y: titleY, opacity }}
                >
                    <div className="overflow-hidden mb-8 relative w-full max-w-7xl px-4">
                        <AnimatePresence>
                            {isLoaded && (
                                <div className="flex justify-center relative">
                                    {nameLetters.map((letter, i) => (
                                        <motion.span
                                            key={`letter-${i}`}
                                            className="text-5xl md:text-7xl font-bold tracking-tight gradient-text inline-block"
                                            custom={i}
                                            initial="hidden"
                                            animate="visible"
                                            variants={letterVariants}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </motion.span>
                                    ))}
                                </div>
                            )}
                        </AnimatePresence>

                        <div
                            className="absolute top-1/2 -translate-y-1/2 right-0 md:right-5"
                        >
                            <span className="text-4xl md:text-6xl inline-block">
                                👋
                            </span>
                        </div>
                    </div>

                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className="px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary inline-flex items-center space-x-2 relative overflow-hidden shadow-lg backdrop-blur-sm">
                            <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></span>
                            <Zap size={16} className="text-primary" />
                            <span className="text-sm font-medium">Software Engineer</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mt-8"
                        style={{ y: isMobile ? 0 : cardsY }}
                    >
                        <motion.div
                            className="bg-card/30 backdrop-blur-md border border-border rounded-xl p-6 shadow-xl relative overflow-hidden md:col-span-2"
                            custom={0}
                            initial="hidden"
                            animate="visible"
                            variants={bentoCardVariants}
                        >
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/5 rounded-full"></div>
                            <div className="absolute right-12 bottom-12 w-16 h-16 bg-primary/10 rounded-full"></div>

                            <h2 className="text-xl md:text-2xl font-medium mb-3">
                                <span className="text-foreground">Building digital experiences at </span>
                                <span className="font-bold text-primary">{profileData.workExperience[0].company}</span>
                            </h2>

                            <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
                                Passionate about crafting scalable, user-friendly applications and solving complex problems with elegant solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-card/20 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg relative overflow-hidden"
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={bentoCardVariants}
                        >
                            <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-blue-500/5 rounded-full"></div>

                            <div className="flex items-center mb-4">
                                <Code className="h-5 w-5 mr-2 text-blue-400" />
                                <h3 className="text-lg font-medium">Tech Stack</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {profileData.skills[1].items.slice(0, 6).map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-background/50 border border-border"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + (index * 0.1), duration: 0.3 }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: "rgba(238, 88, 27, 0.1)",
                                            borderColor: "rgba(238, 88, 27, 0.3)"
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>


                        <motion.div 
                            className="bg-card/20 backdrop-blur-md border border-border rounded-xl p-6 shadow-lg relative overflow-hidden"
                            custom={2}
                            initial="hidden"
                            animate="visible"
                            variants={bentoCardVariants}
                        >
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
                                        className="inline-flex items-center justify-center rounded-md bg-background/80 border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 hover:shadow-md cursor-active"
                                    >
                                        <Github className="mr-2 h-4 w-4" />
                                        GitHub
                                    </Link>
                                )}

                                <Link
                                    href={`mailto:${profileData.email}`}
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-lg cursor-active"
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact
                                </Link>

                                {profileData.links.linkedin && (
                                    <Link
                                        href={profileData.links.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/80 border border-border text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 hover:shadow-md cursor-active"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </Link>
                                )}

                                {profileData.links.twitter && (
                                    <Link
                                        href={profileData.links.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-background/80 border border-border text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-1 hover:shadow-md cursor-active"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col items-center space-y-2"
                        >
                            <span className="text-sm text-muted-foreground">Scroll down</span>
                            <ArrowDown size={16} className="text-primary animate-bounce" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
} 