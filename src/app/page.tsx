import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Code2, Mail, Network } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile, projects } from "@/data/profile";

const featuredProjects = projects.filter((project) => project.featured);

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero-shell">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span className="hero-pulse" aria-hidden="true" />Hi, I&apos;m Shivam · Software engineer</p>
            <h1 className="hero-title"><span className="hero-title-line"><span>I engineer digital</span></span><span className="hero-title-line"><span>products that feel</span></span><span className="hero-title-line"><span><em>considered.</em></span></span></h1>
            <p className="hero-intro hero-fade">{profile.introduction}</p>
            <div className="hero-actions hero-fade">
              <a href="#projects" className="button button-primary">Selected work <ArrowDownRight aria-hidden="true" /></a>
              <a href={`mailto:${profile.email}`} className="button button-secondary">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <dl className="hero-facts hero-fade"><div><dt>Currently</dt><dd>{profile.experience[0].title}<span>{profile.experience[0].company}</span></dd></div><div><dt>Based in</dt><dd>{profile.location}</dd></div></dl>
          </div>
          <div className="hero-canvas" aria-hidden="true"><div className="canvas-bar"><span>ST / BUILD SYSTEM</span><span className="canvas-status"><i />Live</span></div><div className="canvas-body"><p className="canvas-index">01 — 03</p><div className="canvas-statement"><span>Design.</span><span>Engineer.</span><strong>Deliver.</strong></div><div className="canvas-layers"><div className="canvas-layer"><span>01</span><b>Interface</b><i /></div><div className="canvas-layer"><span>02</span><b>Systems</b><i /></div><div className="canvas-layer"><span>03</span><b>Performance</b><i /></div></div><div className="canvas-scan" /></div><div className="canvas-footer"><span>Product thinking</span><span>Full-stack craft</span><span>Useful outcomes</span></div></div>
          <div className="hero-rail" aria-label="Areas of focus"><p>What I build</p><ul><li><span>01</span> Web products</li><li><span>02</span> Developer tools</li><li><span>03</span> Product systems</li></ul><a href="#projects" className="hero-scroll-cue"><span>Scroll to explore</span><i aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="projects" className="section site-container">
        <SectionHeading index="01" eyebrow="Selected work" title="Products, tools, and useful experiments." description="A selection of independently built projects, from developer tooling to consumer-facing experiences." />
        <div className="project-grid">
          {featuredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}
        </div>
        <div className="section-link"><Link href="/projects">Explore all projects <ArrowUpRight aria-hidden="true" /></Link></div>
      </section>

      <section id="skills" className="section section-rule"><div className="site-container"><SectionHeading index="02" eyebrow="Toolkit" title="Comfortable across the stack." /><div className="skills-grid">{profile.skills.map((group) => <article key={group.category}><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section site-container"><SectionHeading index="03" eyebrow="Independent work" title="Useful systems for real teams." /><div className="work-list">{profile.freelanceWork.map((work) => <article key={work.title}><div><p className="item-period">{work.period}</p><h3>{work.title}</h3></div><p>{work.description}</p><ul className="tag-list">{work.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>)}</div></section>

      <section className="section section-rule"><div className="site-container open-source"><div><p className="eyebrow">Open source</p><h2>{profile.openSource.title}</h2><p>{profile.openSource.description}</p><a className="text-link" href={profile.links.npm} target="_blank" rel="noreferrer">View on npm <ArrowUpRight aria-hidden="true" /></a></div><div className="package-list">{profile.openSource.packages.map((pkg) => <a key={pkg.name} href={pkg.href} target="_blank" rel="noreferrer"><strong>{pkg.name}</strong><span>{pkg.description}</span><ArrowUpRight aria-hidden="true" /></a>)}</div></div></section>

      <section id="contact" className="contact-section"><div className="site-container contact-inner"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something<br /><em>worth using.</em></h2><a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<ArrowUpRight aria-hidden="true" /></a><div className="contact-socials"><a href={profile.links.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 /></a><a href={profile.links.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Network /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></div></div></section>
    </main>
  );
}
