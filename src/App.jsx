import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./project";
import Education from "./education";
import Contact from "./contact";
import useScrollReveal from "./useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Shubham Tyagi. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;