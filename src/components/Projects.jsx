import { projects } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[var(--color-card)] p-6 rounded-2xl 
                         border border-[var(--color-text)]/10
                         hover:border-[var(--color-primary)]/40
                         hover:-translate-y-1 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-text)]/70 mt-3 leading-7">
                {p.description}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-text)]/70">
  {p.details?.map((d, i) => (
    <li key={i}>• {d}</li>
  ))}
</ul>

              {/* Tech Stack */}
              <div className="flex gap-2 mt-4 flex-wrap">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-[var(--color-text)]/10
                               text-[var(--color-text)]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex gap-4 flex-wrap">

                {/* GitHub */}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-primary)] font-medium 
                               hover:underline"
                  >
                    Code →
                  </a>
                )}

                {/* Live Demo (optional) */}
                {p.deployed && (
                  <a
                    href={p.deployed}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-text)]/80 hover:underline"
                  >
                    Live →
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}