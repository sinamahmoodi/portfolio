import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Github from "@/components/sections/Github";
import Hero from "@/components/sections/Hero";
import Learning from "@/components/sections/Learning";
import Projeacts from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return(
    <>
     <Hero />
     <About />
     <Skills />
     <Experience />
     <Projeacts />
     <Github />
     <Learning />
     <Contact />
    </>
    );
}
