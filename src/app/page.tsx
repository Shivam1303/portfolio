import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { FreelancingSection } from "@/components/freelancing-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { OpenSourceSection } from "@/components/open-source-section";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { fadeInUp } from "@/components/ui/animation-variants";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Dot pattern */}
        <div className="dot-pattern"></div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-accent/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-accent/10 to-transparent"></div>

        {/* Glow effects */}
        <div className="absolute top-[10%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/10 blur-[120px] opacity-30"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[25vw] h-[25vw] rounded-full bg-accent/10 blur-[100px] opacity-30"></div>
      </div>

      <Header />

      <main className="flex flex-col py-0">
        {/* Hero section */}
        <section className="min-h-screen py-10">
          <ScrollAnimation variants={fadeInUp}>
            <HeroSection />
          </ScrollAnimation>
        </section>

        {/* About section with dark panel */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-card/50 -z-10"></div>
          <ScrollAnimation variants={fadeInUp}>
            <AboutSection />
          </ScrollAnimation>
        </section>

        {/* Experience section */}
        <section className="py-20">
          <ScrollAnimation variants={fadeInUp}>
            <ExperienceSection />
          </ScrollAnimation>
        </section>

        {/* Freelancing section with dark panel */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-card/50 -z-10"></div>
          <ScrollAnimation variants={fadeInUp}>
            <FreelancingSection />
          </ScrollAnimation>
        </section>

        {/* Skills section */}
        <section className="py-20">
          <ScrollAnimation variants={fadeInUp}>
            <SkillsSection />
          </ScrollAnimation>
        </section>

        {/* Projects section with glass panel */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-card/50 -z-10"></div>
          <ScrollAnimation variants={fadeInUp}>
            <div className="layout-wrapper">
              <div className="glass-panel p-8 md:p-10">
                <ProjectsSection />
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Open source section */}
        <section className="py-20">
          <ScrollAnimation variants={fadeInUp}>
            <div className="layout-wrapper">
              <div className="glass-panel p-8 md:p-10">
                <OpenSourceSection />
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>

      <Footer />
    </div>
  );
}
