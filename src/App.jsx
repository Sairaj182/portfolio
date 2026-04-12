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
import { Counter } from "counterapi";
import { useRef } from "react";



const counter = new Counter({
    workspace: "11ladkjfj3290h4iuh9we", 
  });

  
export default function App() {
  const [dark, setDark] = useState(false);
  const [visits, setVisits] = useState(null);
  const [displayCount, setDisplayCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const hasRun = useRef(false);
  const [showTooltip, setShowTooltip] = useState(false);


  useEffect(() => {
  if (!showTooltip) return;

  const timer = setTimeout(() => {
    setShowTooltip(false);
  }, 2000);

  return () => clearTimeout(timer);
}, [showTooltip]);

  useEffect(() => {
  if (visits === null) return;

  let start = 0;
  const end = visits;
  const duration = 800;

  const increment = end / (duration / 16);

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      setDisplayCount(end);
      clearInterval(timer);
    } else {
      setDisplayCount(Math.floor(start));
    }
  }, 16);

  return () => clearInterval(timer);
}, [visits]);

  useEffect(() => {
  if (hasRun.current) return;  
  hasRun.current = true;
  counter
    .up("11ladkjfj3290h4iuh9we")
    .then((res) => {

      // handle both possible response shapes
      const value =
        res?.data?.up_count ??
        res?.data?.value ??
        res?.value ??
        null;

      setVisits(value);
      setShowPlus(true);
      setTimeout(() => setShowPlus(false), 800);
    })
    .catch((err) => {
      console.error("Counter error:", err);
      setVisits(0); // fallback
    });
}, []);
  // 🌙 Theme toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const formatCount = (num) => {
  if (num === null) return "...";

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }

  return num.toString();
};
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
    {/* 👁 Visitor Counter */}

    </>
  );
}