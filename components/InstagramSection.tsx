import ResponsiveImage from "@/components/ResponsiveImage";

export default function InstagramSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-10">
      <h2
        className="text-center text-[15px] font-semibold uppercase tracking-[0.12em] text-[#2a2a2a]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Connect With Us
      </h2>

      <div className="relative mt-6">
        <ResponsiveImage
          src="/vivora.beauty.jpg"
          alt="Vivora Beauty on Instagram"
          width={1080}
          height={1350}
          bg="#f0e4dc"
          rounded="rounded-[32px]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-[32px] bg-gradient-to-t from-black/50 via-black/20 to-transparent pb-8 pt-20">
          <p
            className="text-center text-[38px] italic leading-none text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            on instagram
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mx-auto mt-6 flex h-11 items-center gap-2 rounded-full border border-[#ddd] px-6 shadow-sm"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="4" stroke="#2a2a2a" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="#2a2a2a" />
        </svg>
        <span className="text-[11px] uppercase tracking-[0.1em] text-[#2a2a2a]">Follow Us</span>
      </button>

      <p
        className="mt-4 text-center text-[10px] leading-[1.5] text-[#888]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Follow us for more tips, tricks and exclusive offers.
      </p>
    </section>
  );
}
