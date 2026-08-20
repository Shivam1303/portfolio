"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";

const links = [{ href: "/#projects", label: "Work" }, { href: "/#experience", label: "Experience" }, { href: "/#about", label: "About" }, { href: "/#contact", label: "Contact" }];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="site-header"><div className="site-container nav-row"><Link className="brand" href="/" onClick={() => setOpen(false)}><span>{profile.initials}</span><b>{profile.name}</b></Link><nav className="desktop-nav" aria-label="Primary">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<ThemeToggle /></nav><div className="mobile-controls"><ThemeToggle /><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></div>{open && <nav className="mobile-nav" aria-label="Mobile primary">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}</header>;
}
