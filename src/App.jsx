import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/shared/CursorGlow";
import ScrollProgressBar from "./components/shared/ScrollProgressBar";

/**
 * App
 * Composes the single-page portfolio with clean section routing.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-(--color-bg) text-(--color-text)">
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
