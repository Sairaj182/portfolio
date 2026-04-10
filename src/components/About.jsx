export default function About({dark}) {
  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono">
          About Me
        </h2>
        {/* Content */}
        <p className="text-[var(--color-text)]/80 leading-8 text-lg max-w-3xl">
          I’m a backend developer focused on building scalable systems and enterprise solutions.
<br /><br />
I work extensively with APIs, authentication systems, and databases, aiming to create efficient and reliable applications. I enjoy breaking down complex problems and turning them into structured, working solutions.
<br /><br />
Alongside development, I’m actively improving my Data Structures and Algorithms skills as I prepare for SDE roles.
        </p>
        <a
          href="/resume.pdf"
          className="group mt-8 inline-flex items-center gap-2
                     px-6 py-3 rounded-xl
                     border border-[var(--color-text)]/20
                     text-[var(--color-text)]
                     hover:bg-[var(--color-text)]/10
                     hover:scale-105
                     transition duration-200"
        >
          {/* Icon */}
          <img
            src={dark ? "/assets/vieweyedark.svg" : "/assets/vieweye.svg"}
            alt="Download Resume"
            className="w-5 h-5 object-contain transition group-hover:translate-y-0.5"
          />

          {/* Text */}
          <span className="font-medium">
            Resume
          </span>
        </a>
      </div>
    </section>
  );
}