import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shivamtrivedi.in";

  // Set specific dates for different sections to indicate content freshness
  const homeLastModified = new Date();
  const experienceLastModified = new Date("2024-04-05"); // Update when you change work experience
  const projectsLastModified = new Date("2024-04-01"); // Update when you add new projects
  const skillsLastModified = new Date("2024-03-15"); // Update when you update skills

  return [
    {
      url: baseUrl,
      lastModified: homeLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: homeLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#experience`,
      lastModified: experienceLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#freelancing`,
      lastModified: experienceLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: skillsLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: projectsLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#open-source`,
      lastModified: projectsLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
