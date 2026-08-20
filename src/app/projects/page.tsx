import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/profile";
export const metadata: Metadata = { title: "Projects", description: "Selected projects by Shivam Trivedi." };
export default function ProjectsPage() { return <main id="main-content" className="page-top site-container"><SectionHeading index="Archive" eyebrow="All projects" title="Things I&apos;ve made." description="Each project starts with a practical problem and ends with a durable, usable solution." /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}</div></main>; }
