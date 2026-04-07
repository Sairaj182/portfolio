import { testimonials } from "../constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-dotted">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Testimonials
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--color-card)] p-6 rounded-2xl
                         border border-[var(--color-text)]/10
                         hover:border-[var(--color-primary)]/40
                         hover:-translate-y-1
                         transition duration-300"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-5">

                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover
                             border border-[var(--color-text)]/20"
                />

                <div>
                  <h3 className="text-lg font-semibold">
                    {t.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text)]/60">
                    {t.role}
                  </p>
                </div>

              </div>

              {/* Feedback */}
              <p className="text-[var(--color-text)]/80 leading-7">
                “{t.feedback}”
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}