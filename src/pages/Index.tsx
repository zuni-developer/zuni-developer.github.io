
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? "dark" : ""}`}>
      <button
        onClick={toggleTheme}
        className="fixed right-4 top-20 z-50 p-2 rounded-full bg-background/80 backdrop-blur border shadow-lg transition-colors hover:bg-secondary/80"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-slate-700" />
        )}
      </button>

      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
