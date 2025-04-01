'use client';

import { profileData } from '@/data/profile';
import Link from 'next/link';
import { Github, Mail, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-border/10 py-16 mt-16 bg-background/30 backdrop-blur-sm">
      <div className="layout-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <Link
            href="/"
            className="text-2xl font-bold"
          >
            <span className="gradient-text">ST</span>
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {profileData.links.github && (
              <Link
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            )}

            {profileData.links.linkedin && (
              <Link
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            )}

            {profileData.links.twitter && (
              <Link
                href={profileData.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            )}

            <Link
              href={`mailto:${profileData.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary/80 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="w-full h-px bg-border/20 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Shivam Trivedi. All rights reserved.</p>

          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-3.5 w-3.5 text-primary" /> in React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};
