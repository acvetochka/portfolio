import styles from "./page.module.css";
import { HeroSection } from "@/sections/HeroSection/HeroSection";
import { About } from "@/sections/About/About";
import { SkillsSection } from "@/sections/Skills/SkillsSection";
import { Projects } from "@/sections/Projects/Projects";
import { Contacts } from "@/sections/Contacts/Contacts";
import { Footer } from "@/sections/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <About />
        <SkillsSection />
        <Projects />
        <Contacts />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}
