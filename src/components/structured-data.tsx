import React from 'react';
import { profileData } from '@/data/profile';

export const StructuredData = () => {
    // Get social media links from profile data
    const { github, linkedin, twitter, npm } = profileData.links;

    // Extract skills from profile data for comprehensive knowsAbout
    const skills = profileData.skills.flatMap(category => category.items);

    // Main person schema
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shivam Trivedi",
        "url": "https://shivamtrivedi.in",
        "email": profileData.email,
        "jobTitle": "Software Engineer",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "Helios Solutions"
        },
        "alumniOf": [
            {
                "@type": "EducationalOrganization",
                "name": "University of Engineering and Technology"
            }
        ],
        "knowsAbout": [
            "Software Development",
            "Web Development",
            "React",
            "Next.js",
            "Angular",
            ".NET Core",
            "JavaScript",
            "TypeScript",
            "Full-Stack Development",
            "Frontend Development",
            "Backend Development",
            "Freelance Development",
            "UI/UX Implementation",
            "RESTful API Design",
            "GraphQL",
            "Web Performance Optimization",
            "Responsive Web Design",
            "State Management",
            "Component Libraries",
            "Modern Web Frameworks",
            ...skills
        ],
        "makesOffer": [
            {
                "@type": "Offer",
                "name": "Freelance Web Development",
                "description": "Custom web applications, landing pages, and e-commerce solutions."
            },
            {
                "@type": "Offer",
                "name": "UI Component Library Development",
                "description": "Custom, reusable UI components for web applications."
            },
            {
                "@type": "Offer",
                "name": "Web Application Optimization",
                "description": "Performance improvements and optimization for existing web applications."
            }
        ],
        "sameAs": [
            github,
            linkedin,
            twitter,
            npm
        ],
        "description": profileData.about[0],
        "additionalName": "Shivam",
        "gender": "Male",
        "nationality": "Indian"
    };

    // FAQ schema for common questions
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does Shivam Trivedi offer as a freelance developer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I specialize in full-stack web development services including custom web applications, responsive landing pages, e-commerce solutions, UI component libraries, performance optimization, and business application development using React, Next.js, Angular, and .NET technologies."
                }
            },
            {
                "@type": "Question",
                "name": "What technologies does Shivam Trivedi work with?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I work with modern web technologies including JavaScript, TypeScript, React, Next.js, Angular, Node.js, .NET Core, SQL and NoSQL databases, and cloud platforms. I'm particularly experienced with building high-performance, scalable applications."
                }
            },
            {
                "@type": "Question",
                "name": "How can I hire Shivam Trivedi for my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach out to me via email at shivam.trivedi.dev@gmail.com or connect with me on LinkedIn. I'm available for freelance projects, consultation, and full-time opportunities."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
} 