"use client";

import { profileData } from "@/data/profile";
import Link from "next/link";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t py-16">
      <div className="layout-wrapper">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-2">Shivam Trivedi</h2>
          <p className="text-muted-foreground mb-8">
            Associate Software Engineer
          </p>

          <div className="flex items-center gap-6 mb-12">
            {profileData.links.github && (
              <Link
                href={profileData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
            )}

            {profileData.links.linkedin && (
              <Link
                href={profileData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            )}

            {profileData.links.twitter && (
              <Link
                href={profileData.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            )}

            <Link
              href={`mailto:${profileData.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          <div className="w-full h-px bg-border mb-8"></div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Shivam Trivedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 