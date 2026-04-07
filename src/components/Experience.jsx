import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-dotted">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-[var(--color-text)]/20 pl-6">

          {experiences.map((exp, i) => (
            <div key={i} className="mb-10 relative">

              {/* Dot */}
              <div
                className="absolute -left-[10px] top-2 w-4 h-4 
                           bg-[var(--color-primary)] rounded-full"
              />

              {/* Card */}
              <div
                className="bg-[var(--color-card)] p-5 rounded-xl 
                           border border-[var(--color-text)]/10
                           hover:border-[var(--color-primary)]/40
                           transition duration-300"
              >
                {/* Role */}
                <h3 className="text-lg md:text-xl font-semibold">
                  {exp.role}{" "}
                  <span className="text-[var(--color-primary)]">
                    @ {exp.company}
                  </span>
                </h3>

                {/* Duration */}
                <p className="text-sm text-[var(--color-text)]/60 mt-1">
                  {exp.duration}
                </p>

                {/* Description */}
                <p className="text-[var(--color-text)]/80 mt-3 leading-7">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}