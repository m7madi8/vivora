export default function NewsletterSection() {
  return (
    <section className="relative overflow-hidden bg-[#1f1f1f] px-4 py-16 text-center text-white">

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <h2
          className="text-[20px] uppercase tracking-[0.28em] text-white/90"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Stay Connected
        </h2>

        {/* MAIN HEADLINE */}
        <p
          className="mt-4 text-[34px] italic leading-[1.1] text-white"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          A more refined
          <br />
          kind of care
        </p>

        {/* DESCRIPTION */}
        <p
          className="mx-auto mt-5 max-w-[280px] text-[12px] leading-[1.7] text-white/60"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Be the first to discover new rituals, exclusive releases, and elevated skincare experiences.
        </p>

        {/* BUTTON */}
        <div className="mt-10">

          <button
            type="button"
            className="
              group relative flex items-center justify-center
              mx-auto h-[60px] w-[60px]
              rounded-full
              bg-white/10
              backdrop-blur
              border border-white/20
              transition-all duration-500 ease-out
              hover:[transform:scale(1.1)_rotate(6deg)]
              hover:bg-white/20
              active:scale-95
            "
            aria-label="Sign up for newsletter"
          >
            {/* glow layer */}
            <div className="
              absolute inset-0 rounded-full
              bg-white/20 blur-xl
              opacity-0 transition-all duration-500
              group-hover:opacity-60
            " />

            {/* icon */}
            <svg
              className="
                relative z-10
                transition-all duration-500
                group-hover:-translate-y-1
              "
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 3V13M8 3L4 7M8 3L12 7"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </button>

          {/* LABEL */}
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.25em] text-white/80"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Join Now
          </p>

        </div>

        {/* FOOTNOTE */}
        <p
          className="mx-auto mt-8 max-w-[300px] text-[9px] leading-[1.6] text-white/40"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          By subscribing, you agree to receive occasional updates from Vivora.
        </p>

      </div>

    </section>
  );
}
``