import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="page-shell">
      <Navbar />

      <div className="container">
        <Hero />
      </div>

      <Projects />

      <AboutSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}