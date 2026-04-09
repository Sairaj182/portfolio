export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dotted">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>

        {/* Description */}
        <p className="text-[var(--color-text)]/70 leading-7">
          Feel free to reach out for collaborations, projects,
          or any opportunities. I'm always open to connecting!
        </p>

        {/* Button */}
        <a
          href="mailto:sairajraithatha.official@gmail.com"
          className="inline-block mt-8 px-6 py-3 rounded-xl 
                     bg-[var(--color-text)]/80 text-[var(--contrast-text-color)] font-medium
                     hover:opacity-90 transition duration-200"
        >
          Email Me
        </a>

      </div>
    </section>
  );
}