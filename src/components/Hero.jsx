import { useEffect, useState } from "react";
import { socialLinks } from "../constants";


const skills = [
  "Cloud Computing",
  "AWS",
  "System Design",
  "Backend Development",
  "Redis",
  "Background Jobs Processing",
];


export default function Hero() {
    const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === skills[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % skills.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(skills[index].substring(0, subIndex));
    }, deleting ? 20 : 40);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-dotted px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (TEXT) */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl mt-20 md:text-5xl mt-10 font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-[var(--color-primary)">
              Sairaj
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-text)]/70">
            Backend Developer building scalable systems
          </p>
          <p className="mt-6 text-lg text-[var(--color-text)]/70">
      {text}
      <span className="animate-pulse">|</span>
    </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">

            <div className="mt-10 flex flex-row justify-center md:justify-start gap-5 items-center">
           {socialLinks.map((social, i) => (
    <a
      key={i}
      href={social.url}
      target="_blank"
      rel="noreferrer"
      title={social.name}
      className="p-3 rounded-full 
                 border border-[var(--color-text)]/20
                 hover:border-[var(--color-primary)]/40
                 hover:scale-110
                 transition duration-200"
    >
      <img
  src={social.icon}
  alt={social.name}
  className="w-7 h-7 object-contain 
             block
             opacity-80 hover:opacity-100
             transition"
/>
    </a>
  ))}

        </div>

          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="flex justify-center md:justify-center h-120 w-80">

          <div
            className="w-full h-full object-cover 
           rounded-2xl 
           border border-[var(--color-text)]/20
           shadow-xl
           hover:scale-105 transition duration-300"
          >
            <img
              src="/profile.jpeg"
              alt="Sairaj"
              className="w-full h-full object-cover"
            />

            {/* Optional glow effect */}
            <div className="absolute inset-0 bg-[var(--color-primary)]/10 pointer-events-none" />
          </div>

        </div>
        
        <div className="flex justify-center md:justify-end">

  <div className="relative group">

    {/* Glow background */}
    <div className="absolute -inset-1 rounded-2xl 
                    bg-[var(--color-primary)]/20 blur-xl opacity-0 
                    group-hover:opacity-100 transition duration-300" />

  </div>

</div>
      </div>
    </section>
  );
}