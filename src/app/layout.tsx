import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { metadataBase: new URL("https://shivamtrivedi.in"), title: { default: "Shivam Trivedi — Software Engineer", template: "%s — Shivam Trivedi" }, description: "Software engineer building thoughtful, high-performance digital products.", alternates: { canonical: "/" }, openGraph: { type: "website", url: "/", siteName: "Shivam Trivedi", title: "Shivam Trivedi — Software Engineer", description: "Thoughtful, high-performance digital products.", images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Shivam Trivedi, Software Engineer" }] }, twitter: { card: "summary_large_image", images: ["/og-image.webp"] }, robots: { index: true, follow: true } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><body className={`${archivo.variable} ${spaceGrotesk.variable}`}><ThemeProvider><StructuredData /><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /></ThemeProvider></body></html>; }
