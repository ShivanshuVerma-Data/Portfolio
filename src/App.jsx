import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;