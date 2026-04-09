import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function Hire() {

  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown === 0) return;

    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldown]);


  const handleSubmit = async (e) => {
    e.preventDefault(); // ❗ prevents redirect

    if (cooldown > 0) {
      toast.error(`Wait ${cooldown}s before sending again`);
      return;
    }
    
    
    const formData = new FormData(e.target);
    if (formData.get("botcheck")) return;
    
    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!");
        e.target.reset(); // clear form
        setCooldown(60);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      
      toast.error("Network error!");
    }

    setLoading(false);
  };

  return (
    <section id="hire" className="py-24 px-6">
      <div className="max-w-3xl mx-auto w-[75%]">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Hire Me
        </h2>

        <p className="text-center text-[var(--color-text)]/70 mb-10">
          Looking to collaborate or hire? Fill the form below.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input type="hidden" name="access_key" value="70af5062-39d9-461d-ae45-389cc2b0bdfc" />
          <input type="hidden" name="captcha" value="true" />
          <input type="text" name="botcheck" className="hidden" />
          
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            required
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Role / Post */}
          <input
            type="text"
            name="role"
            placeholder="Role / Position"
            required
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Optional: Budget */}
          <input
            type="text"
            name="budget"
            placeholder="Budget (optional)"
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Description */}
          <textarea
            name="message"
            placeholder="Project Description"
            rows="4"
            required
            className="p-3 rounded-lg border border-[var(--color-text)]/20 bg-transparent outline-none placeholder:text-[var(--color-text)]/50
           focus:border-[var(--color-primary)]"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading  || cooldown > 0}
            className="mt-4 px-6 py-3 rounded-xl 
                       bg-[var(--color-text)]/85 text-[var(--color-bg)] font-medium
                       hover:scale-[1.03] transition"
          >
            {loading ? "Sending..." : cooldown > 0 ? `Wait ${cooldown}s`: "Send Request"} 
          </button>

        </form>

      </div>
    </section>
  );
}