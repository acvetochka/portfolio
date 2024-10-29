// import Image from "next/image";
// import { Title } from "@/components/Title/Title";
import styles from "./page.module.css";
// import { Logo } from "@/components/Logo/Logo";
import { HeroSection } from "@/sections/HeroSection";
// import { Text } from "@/components/Title/Text/Text";

export default function Home() {
  return (
    
    <>
      <main className={styles.main}>
        {/* <Logo /> */}
        <HeroSection />  
      </main>
      <footer className={styles.footer}>

      </footer>

    </>
  );
}
