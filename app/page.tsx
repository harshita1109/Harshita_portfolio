import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { GitHub } from "@/components/GitHub";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SignalDivider } from "@/components/SignalDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SignalDivider />
        <Skills />
        <SignalDivider />
        <Experience />
        <SignalDivider />
        <Projects />
        <SignalDivider />
        <Achievements />
        <SignalDivider />
        <Certifications />
        <SignalDivider />
        <Education />
        <SignalDivider />
        <GitHub />
        <SignalDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
