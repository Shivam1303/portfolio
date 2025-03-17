"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
                    : "bg-transparent"
            )}
        >
            <div className="layout-wrapper">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold text-xl">
                        ST
                    </Link>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    "text-foreground/70"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center rounded-full p-2 text-foreground/60 hover:bg-accent hover:text-foreground"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/40">
                    <div className="layout-wrapper py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={cn(
                                    "block py-2 text-base font-medium transition-colors hover:text-primary",
                                    "text-foreground/70"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
} 