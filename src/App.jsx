import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hire from "./components/Hire"
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  // 🌙 Theme toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <Toaster position="bottom-right" />
      <Navbar dark={dark} setDark={setDark}/>
      <Hero />
      <About dark={dark} />
      <Experience dark={dark} />
      <Projects />
      <Testimonials />
      <Hire />
      <Contact />
      <Footer />

      <a
  href="#hire"
  className="fixed bottom-6 left-6 z-50
             inline-flex items-center gap-2
             px-4 py-2 rounded-full
             border border-[var(--color-text)]/20
             bg-[var(--color-bg)] shadow-md
             hover:shadow-lg
             transition hover:scale-110 opacity-80"
>

  {/* 🟢 Blinking dot */}
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
  </span>

  <span className="text-sm font-medium text-[var(--color-text)]">
    Hire Me
  </span>

</a>
    </>
  );
}