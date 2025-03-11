import { About, Contacts, Footer, HeroSection, Projects, SkillsSection } from "@/sections";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <About />
        <SkillsSection />
        <Projects />
        <Contacts />
      </main>
        <Footer />
    </>
  );
}
