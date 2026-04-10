import { experiences, tech } from "../constants";

export default function Experience({dark}) {
  return (
    <section id="experience" className="py-24 px-6 bg-dotted">
      <div className="max-w-5xl mx-auto">
        {/* 🔥 TECH STACK FLOW */}
        <div className="relative overflow-hidden mb-16">

          {/* Gradient fade */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10"></div>

          {/* Track */}
          <div className="flex gap-12 animate-scroll w-max">

            {[...tech, ...tech].map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <img
                  src={dark? t.iconlight : t.icondark}
                  alt={t.name}
                  className="w-10 h-10 object-contain 
                             opacity-100 
                             transition duration-200"
                />
                <span className="text-xs text-[var(--color-text)]/70">
                  {t.name}
                </span>
              </div>
            ))}

          </div>
        </div>
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