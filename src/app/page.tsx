import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Experience } from "@/sections/experience";
import { Services } from "@/sections/services";
import { Testimonials } from "@/sections/testimonials";
import { Stats } from "@/sections/stats";
import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
