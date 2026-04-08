import { useEffect, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("");

  // 🌙 Theme toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // 📍 Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => document.getElementById(l.id));

      sections.forEach((sec) => {
        if (!sec) return;

        const rect = sec.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(sec.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed w-full z-50 backdrop-blur-md
                 bg-[var(--color-bg)]/70 border-b border-[var(--color-text)]/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-pixel text-[var(--color-text)]">
          SAIRAJ
        </h1>

        {/* Links */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-8">

  {navLinks.map((link) => (
    <a
      key={link.id}
      href={`#${link.id}`}
      className={`transition duration-200 
        text-[10px] sm:text-xs md:text-sm lg:text-base
        whitespace-nowrap
        ${
          active === link.id
            ? "text-[var(--color-primary)]"
            : "text-[var(--color-text)]/70 hover:text-[var(--color-text)]"
        }`}
    >
      {link.title}
    </a>
  ))}

  {/* 🌗 Theme Toggle */}
  <button
    onClick={() => setDark(!dark)}
    className="ml-1 p-1.5 sm:p-2 rounded-lg 
               border border-[var(--color-text)]/20
               hover:bg-[var(--color-text)]/10 
               transition flex items-center justify-center
               shrink-0"
  >
    <img
      src={dark ? "/assets/sun.svg" : "/assets/darkmode.svg"}
      alt="theme toggle"
      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
    />
  </button>

</div>
      </div>
    </nav>
  );
}