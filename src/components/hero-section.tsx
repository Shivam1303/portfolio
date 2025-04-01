"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Particles } from "./ui/particles";
import { useTheme } from './theme-provider';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useTheme();

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

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden bg-gradient-dark">
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Particles
            quantity={100}
            lightModeColor="#121212"
            darkModeColor="#ffffff"
            particleSize={1.5}
            ease={25}
            staticity={50}
            opacity={0.3}
            connectParticles={true}
            connectionDistance={120}
            connectionOpacity={0.08}
            minSpeed={0.05}
            maxSpeed={0.15}
          />
        </div>
      )}

      <div className="layout-wrapper relative z-10 flex flex-col items-center">
        <div className="text-center mb-8 max-w-4xl">
          {isLoaded && (
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                <span className="gradient-text">{profileData.name}</span>
              </h1>

              <p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                {'I craft beautiful digital experiences that connect people and technology'}
              </p>

              <div
                className="flex flex-wrap gap-4 justify-center mt-8 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/20"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#projects"
                  className="px-6 py-3 border border-border bg-secondary/50 text-foreground rounded-md font-medium transition-all hover:translate-y-[-5px] hover:bg-secondary hover:border-primary/30"
                >
                  View my work
                </Link>
              </div>
            </div>
          )}
        </div>

        <div
          className="mt-12 glass-card p-6 rounded-xl w-full max-w-2xl opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h2 className="text-xl font-medium mb-2">Software Engineer</h2>
              <p className="text-muted-foreground text-sm">
                Currently crafting digital experiences at{' '}
                <span className="text-primary font-medium">
                  {profileData.workExperience[0]?.company}
                </span>
              </p>
            </div>

            <div className="flex gap-3">
              {profileData.links.github && (
                <Link
                  href={profileData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border hover:border-primary/30 transition-all"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}

              {profileData.links.linkedin && (
                <Link
                  href={profileData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border hover:border-primary/30 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}

              {profileData.links.twitter && (
                <Link
                  href={profileData.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border hover:border-primary/30 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              )}

              <Link
                href={`mailto:${profileData.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 