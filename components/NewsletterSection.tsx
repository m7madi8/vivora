export default function NewsletterSection() {
  return (
    <section className="bg-[#1f1f1f] px-4 py-12 text-center text-white">
      <h2
        className="text-[18px] font-semibold uppercase tracking-[0.08em]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Hear More From Us
      </h2>
      <p
        className="mx-auto mt-3 max-w-[260px] text-[11px] leading-[1.6] text-white/60"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        At the heart of everything we do is our community. Sign up for exclusive updates and offers.
      </p>

      <button
        type="button"
        className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#555]"
        aria-label="Sign up for newsletter"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 3V13M8 3L4 7M8 3L12 7"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p
        className="mt-3 text-[10px] uppercase tracking-[0.12em] text-white/80"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Sign Up
      </p>

      <p
        className="mx-auto mt-6 max-w-[280px] text-[9px] leading-[1.5] text-white/40"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        By signing up, you agree to receive marketing emails from Vivora Beauty.
      </p>
    </section>
  );
}
