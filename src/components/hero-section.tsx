"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail } from "lucide-react";
import { useRef } from "react";
import { Particles } from "./ui/particles";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const titleY = useTransform(scrollY, [0, 500], [0, 100]);
    const descriptionY = useTransform(scrollY, [0, 500], [0, 150]);
    const buttonsY = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Particles parallax
    const particlesY = useTransform(scrollY, [0, 500], [0, 150]);

    return (
      <section className="py-20 md:py-28 min-h-screen relative overflow-hidden flex flex-col justify-center">
        {/* Particles background with parallax */}
        <motion.div
          style={{ y: particlesY }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Particles
            className="z-0"
            quantity={100}
            lightModeColor="#141414"
            darkModeColor="#ee581b"
            particleSize={1.8}
            ease={20}
            staticity={30}
            opacity={0.25}
            connectParticles={true}
            connectionDistance={100}
            connectionOpacity={0.1}
            minSpeed={0.1}
            maxSpeed={0.3}
          />
        </motion.div>

        <div className="layout-wrapper relative z-10" ref={containerRef}>
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text"
              style={{ y: titleY, opacity }}
            >
              Hi, I&apos;m {profileData.name} 👋
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
              style={{ y: descriptionY, opacity }}
            >
              Associate Software Engineer at{" "}
              {profileData.workExperience[0].company}. I love building things
              and solving problems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center"
              style={{ y: buttonsY, opacity }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>
    );
} 