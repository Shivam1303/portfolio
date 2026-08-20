import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/profile";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return <article className="project-card reveal"><Link href={`/projects/${project.slug}`} className="project-image" aria-label={`View ${project.title} project details`}>{project.image ? <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 768px) 50vw, 100vw" priority={priority} className="object-cover" /> : <div />}</Link><div className="project-content"><div className="project-topline"><p>{project.year ?? "Selected work"}</p><p>{project.role}</p></div><h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><div className="project-footer"><ul className="tag-list">{project.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}</ul><Link className="project-arrow" href={`/projects/${project.slug}`} aria-label={`View ${project.title} details`}><ArrowUpRight aria-hidden="true" /></Link></div></div></article>;
}
