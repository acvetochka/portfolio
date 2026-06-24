import {
  About,
  Contacts,
  HeroSection,
  Projects,
  SkillsSection,
} from "@/sections";

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
      {/* <Footer /> */}
    </>
  );
}
