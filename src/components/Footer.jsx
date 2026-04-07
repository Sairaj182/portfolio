export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t border-[var(--color-text)]/10
                 bg-[var(--color-bg)] text-center"
    >
      <div className="max-w-5xl mx-auto">

        {/* Name / Brand */}
        <h2 className="font-pixel mb-4 text-[var(--color-text)]">
          SAIRAJ
        </h2>

        {/* Divider text */}
        <p className="text-[var(--color-text)]/60 text-sm">
          Building scalable systems & meaningful products.
        </p>

        {/* Copyright */}
        <p className="mt-4 text-[var(--color-text)]/50 text-sm">
          © {new Date().getFullYear()} Sairaj. All rights reserved.
        </p>

      </div>
    </footer>
  );
}