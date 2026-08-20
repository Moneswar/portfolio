import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";

/**
 * HomePage
 * Main single-page portfolio layout composing all core sections.
 */
const HomePage = () => {
  const location = useLocation();

  // Handle hash scrolling when navigated from project detail pages
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
};

export default HomePage;
