import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { fadeInUp } from "@/components/ui/animation-variants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-col gap-16 py-16">
        <HeroSection />

        <ScrollAnimation variants={fadeInUp}>
          <AboutSection />
        </ScrollAnimation>

        {/* <EducationSection /> */}

        <ScrollAnimation variants={fadeInUp}>
          <ExperienceSection />
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <SkillsSection />
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <ProjectsSection />
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <OpenSourceSection />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
