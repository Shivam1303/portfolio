import { Header } from "@/components/header";
import { HeroSection } from '@/components/hero-section';
import { FreelancingSection } from '@/components/freelancing-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { OpenSourceSection } from '@/components/open-source-section';
import { ContactSection } from '@/components/contact-section';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { fadeInUp } from '@/components/ui/animation-variants';
import { Footer } from '@/components/footer';
import { ScrollProgress } from '@/components/scroll-progress';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex flex-col gap-16 py-16">
        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <HeroSection />
          </div>
        </ScrollAnimation>

        {/* <div className="md:min-h-screen">
          <ExperienceSection />
        </div> */}

        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <FreelancingSection />
          </div>
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <SkillsSection />
          </div>
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <ProjectsSection />
          </div>
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <OpenSourceSection />
          </div>
        </ScrollAnimation>

        <ScrollAnimation variants={fadeInUp}>
          <div className="md:min-h-screen">
            <ContactSection />
          </div>
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
