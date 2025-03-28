import React from 'react';
import { profileData } from '@/data/profile';

export function StructuredData() {
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
        "nationality": "Indian",
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Engineer",
            "occupationLocation": {
                "@type": "City",
                "name": "Vadodara"
            },
            "qualifications": "Bachelor of Technology in Computer Engineering",
            "skills": skills.join(", ")
        },
        "knowsLanguage": ["English", "Hindi", "Gujarati"]
    };

    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://shivamtrivedi.in",
        "name": "Shivam Trivedi | Software Engineer & Freelance Developer",
        "description": profileData.about[0],
        "author": {
            "@type": "Person",
            "name": "Shivam Trivedi"
        },
        "potentialAction": [
            {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://shivamtrivedi.in/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            },
            {
                "@type": "CommunicateAction",
                "name": "Contact",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://shivamtrivedi.in/contact",
                    "inLanguage": "en-US"
                }
            }
        ],
        "inLanguage": "en-US",
        "mainEntity": {
            "@type": "WebPage",
            "name": "Shivam Trivedi - Software Engineer Portfolio",
            "description": "Portfolio website of Shivam Trivedi, Software Engineer specializing in full-stack development with React, Next.js, Angular, and .NET."
        }
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
            },
            {
                "@type": "Question",
                "name": "What is Shivam Trivedi's portfolio website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "My portfolio is available at https://shivamtrivedi.in, showcasing my projects, skills, experience, and freelance services. You can view my work history, technical expertise, and contact me directly through the website."
                }
            },
            {
                "@type": "Question",
                "name": "What is Shivam Trivedi's experience level?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "I am a Software Engineer with experience in full-stack development, having worked at Helios Solutions where I developed and optimized applications. I also have freelance experience creating landing pages, internal portals, and custom web applications."
                }
            }
        ]
    };

    // BreadcrumbList schema for better navigation understanding
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://shivamtrivedi.in"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://shivamtrivedi.in/#about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Experience",
                "item": "https://shivamtrivedi.in/#experience"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Freelancing",
                "item": "https://shivamtrivedi.in/#freelancing"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Skills",
                "item": "https://shivamtrivedi.in/#skills"
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "Projects",
                "item": "https://shivamtrivedi.in/#projects"
            },
            {
                "@type": "ListItem",
                "position": 7,
                "name": "Open Source",
                "item": "https://shivamtrivedi.in/#open-source"
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
} 