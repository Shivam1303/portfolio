import { Metadata } from 'next';
import { profileData } from '@/data/profile';

// Base URL of the website
const baseUrl = 'https://shivamtrivedi.in';

// Construct skills array from profile data
const skills = profileData.skills.flatMap((category) => category.items);

// Create specific keyword sets for better targeting
const engineeringKeywords = [
  'software engineer',
  'full-stack developer',
  'front-end developer',
  'back-end developer',
  'web developer',
  'JavaScript developer',
  'TypeScript developer',
  'React developer',
  'Next.js developer',
  'Angular developer',
  '.NET developer',
  'C# developer',
];

const freelancingKeywords = [
  'freelance developer',
  'freelance software engineer',
  'remote developer',
  'website development services',
  'custom software development',
  'landing page developer',
  'ecommerce developer',
  'developer for hire',
  'Vadodara software engineer',
  'India software developer',
];

const projectKeywords = [
  "portfolio website",
  "software projects",
  "open source contributor",
  "NPM package developer",
  "UI component library",
  "TypeScript utility library",
  "Typify NPM package",
  "Fleek UI components",
  "Spotify AI playlist generator",
  "URL shortener project",
  "React developer portfolio",
  "Next.js portfolio site",
];

// Location-specific keywords
const locationKeywords = [
  'Gujarat developer',
  'Vadodara software engineer',
  'Vadodara web developer',
  'India remote developer',
  'Gujarat IT professional',
  'Pune software engineer',
  'Pune web developer',
  'Banglore software engineer',
  'Full Stack Developer pune',
  'Indian software engineer',
];

// Industry-specific keywords
const industryKeywords = [
  'ecommerce developer',
  'fintech developer',
  'edtech software engineer',
  'SaaS developer',
  'enterprise application developer',
  'business software developer',
  'startup developer',
];

// Create a metadata configuration
export const sharedMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Shivam Trivedi - Software Engineer & Freelance Developer',
    default: 'Shivam Trivedi | Software Engineer & Freelance Developer in Vadodara, India',
  },
  description: `Experienced Software Engineer from ${profileData.location} specializing in ${skills
    .slice(0, 5)
    .join(
      ', '
    )}. Full-stack developer offering freelance development services for web applications, landing pages, and custom software solutions. Available for remote work worldwide.`,
  keywords: [
    'Shivam Trivedi',
    'Software Engineer',
    'Web Developer',
    'Portfolio',
    'Hire Developer',
    ...skills,
    ...engineeringKeywords,
    ...freelancingKeywords,
    ...projectKeywords,
    ...locationKeywords,
    ...industryKeywords,
  ],
  authors: [{ name: profileData.name, url: baseUrl }],
  creator: profileData.name,
  publisher: profileData.name,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Shivam Trivedi | Software Engineer & Freelance Developer in Vadodara, India',
    description: `${profileData.about[0]} Available for freelance projects and full-time opportunities. Based in ${profileData.location}.`,
    siteName: 'Shivam Trivedi - Software Engineer & Freelance Developer',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Shivam Trivedi - Software Engineer & Freelance Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivam Trivedi | Software Engineer & Freelance Developer',
    description: `${profileData.about[0]} Available for freelance projects and full-time opportunities. Based in ${profileData.location}.`,
    creator: '@io_shivam',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
};
