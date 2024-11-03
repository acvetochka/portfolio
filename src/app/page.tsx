import styles from "./page.module.css";
import { HeroSection } from "@/sections/HeroSection";
import { About } from "@/sections/About/About";
import { Skills } from "@/sections/Skills/Skills";
import { Projects } from "@/sections/Projects/Projects";

export default function Home() {
  return (
    
    <>
      <main className={styles.main}>
        <HeroSection />  
        <About/>
        <Skills/>
        <Projects/>
      </main>
      <footer className={styles.footer}>

      </footer>

    </>
  );
}
