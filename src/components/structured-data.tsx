import React from 'react';
import { profileData } from '@/data/profile';

export const StructuredData = () => {
  // Get social media links from profile data
  const { github, linkedin, twitter, npm } = profileData.links;

  // Extract skills from profile data for comprehensive knowsAbout
  const skills = profileData.skills.flatMap((category) => category.items);

  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shivam Trivedi - Software Engineer & Freelance Developer',
    url: 'https://shivamtrivedi.in',
    description: profileData.about[0],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://shivamtrivedi.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  // Main person schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shivam Trivedi',
    url: 'https://shivamtrivedi.in',
    email: profileData.email,
    jobTitle: 'Software Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Helios Solutions',
    },
    alumniOf: profileData.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.institution,
      description: `${edu.degree}, ${edu.period}`,
    })),
    knowsAbout: [
      'Software Development',
      'Web Development',
      'React',
      'Next.js',
      'Angular',
      '.NET Core',
      'JavaScript',
      'TypeScript',
      'Full-Stack Development',
      'Frontend Development',
      'Backend Development',
      'Freelance Development',
      'UI/UX Implementation',
      'RESTful API Design',
      'GraphQL',
      'Web Performance Optimization',
      'Responsive Web Design',
      'State Management',
      'Component Libraries',
      'Modern Web Frameworks',
      ...skills,
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Freelance Web Development',
        description: 'Custom web applications, landing pages, and e-commerce solutions.',
        price: 'Varies by project scope',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'UI Component Library Development',
        description: 'Custom, reusable UI components for web applications.',
        price: 'Varies by project scope',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Web Application Optimization',
        description: 'Performance improvements and optimization for existing web applications.',
        price: 'Varies by project scope',
        priceCurrency: 'USD',
      },
    ],
    sameAs: [github, linkedin, twitter, npm],
    description: profileData.about[0],
    additionalName: 'Shivam',
    gender: 'Male',
    nationality: 'Indian',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Engineer',
      description:
        'Develops web applications and software solutions using modern technologies like React, Next.js, Angular, and .NET.',
      skills: skills.join(', '),
    },
  };

  // Professional service schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Shivam Trivedi - Freelance Software Development Services',
    description:
      'Professional software and web development services specializing in custom solutions for businesses and individuals.',
    url: 'https://shivamtrivedi.in',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vadodara',
      addressRegion: 'Gujarat',
      addressCountry: 'India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.3072',
      longitude: '73.1812',
    },
    email: profileData.email,
    sameAs: [github, linkedin, twitter, npm],
    openingHours: 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00',
    priceRange: '$$',
    serviceType: [
      'Web Development',
      'Software Engineering',
      'Frontend Development',
      'Backend Development',
      'Full-Stack Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Web Development Services',
          itemListElement: profileData.freelancingExperience.map((exp) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: exp.title,
              description: exp.description,
            },
          })),
        },
      ],
    },
  };

  // Project schemas
  const projectSchemas = profileData.projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    codeRepository: project.link.url,
    programmingLanguage: {
      '@type': 'ComputerLanguage',
      name: 'JavaScript/TypeScript',
    },
    author: {
      '@type': 'Person',
      name: 'Shivam Trivedi',
      url: 'https://shivamtrivedi.in',
    },
    image: `https://shivamtrivedi.in${project.image}`,
  }));

  // Open source contribution schemas
  const openSourceSchemas = profileData.openSourceContributions.map((contribution) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: contribution.title,
    description: contribution.description,
    programmingLanguage: {
      '@type': 'ComputerLanguage',
      name: contribution.techStack.join(', '),
    },
    author: {
      '@type': 'Person',
      name: 'Shivam Trivedi',
      url: 'https://shivamtrivedi.in',
    },
    codeRepository: contribution.packages[0].link,
  }));

  // FAQ schema for common questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What services does Shivam Trivedi offer as a freelance developer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I specialize in full-stack web development services including custom web applications, responsive landing pages, e-commerce solutions, UI component libraries, performance optimization, and business application development using React, Next.js, Angular, and .NET technologies.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technologies does Shivam Trivedi work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "I work with modern web technologies including JavaScript, TypeScript, React, Next.js, Angular, Node.js, .NET Core, SQL and NoSQL databases, and cloud platforms. I'm particularly experienced with building high-performance, scalable applications.",
        },
      },
      {
        '@type': 'Question',
        name: 'How can I hire Shivam Trivedi for my project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can reach out to me via email at shivam.trivedi.dev@gmail.com or connect with me on LinkedIn. I'm available for freelance projects, consultation, and full-time opportunities.",
        },
      },
      {
        '@type': 'Question',
        name: "What is Shivam Trivedi's experience level?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'I have professional experience working as a Software Engineer at Helios Solutions, developing and optimizing web applications. Additionally, I have freelance experience building internal portals, landing pages, and other web solutions for various clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'Has Shivam Trivedi contributed to open source projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, I've developed and published several NPM packages under the Fleek UI Components suite, including typify, fleek-infinite-scroll, fleek-data-table, and fleek-multistepform. These are reusable UI components and utilities for modern web applications.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {projectSchemas.map((schema, index) => (
        <script
          key={`project-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {openSourceSchemas.map((schema, index) => (
        <script
          key={`opensource-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}; 