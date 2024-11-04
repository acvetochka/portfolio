import styles from "./page.module.css";
import { HeroSection } from "@/sections/HeroSection";
import { About } from "@/sections/About/About";
import { SkillsSection } from "@/sections/Skills/SkillsSection";
import { Projects } from "@/sections/Projects/Projects";

export default function Home() {
  return (
    
    <>
      <main className={styles.main}>
        <HeroSection />  
        <About/>
        <SkillsSection/>
        <Projects/>
      </main>
      <footer className={styles.footer}>

      </footer>

    </>
  );
}
