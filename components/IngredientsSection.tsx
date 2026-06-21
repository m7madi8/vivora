'use client'

import { useEffect, useRef } from "react";

export default function IngredientsSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      el.style.setProperty("--p", progress.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white px-4 pb-14 pt-10 overflow-hidden"
      style={{ "--p": 0 } as React.CSSProperties}
    >

      {/* 🎬 VIDEO */}
      <div
        className="relative mb-8 w-full overflow-hidden rounded-[32px]"
        style={{ aspectRatio: "9 / 16" }}
      >

        {/* ✅ VIDEO FIX */}
        <video
          src="/sam.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: "scale(calc(1 + var(--p) * 0.05))",
            transition: "transform 0.2s linear"
          }}
        />

        {/* ✅ OVERLAY FIX (no multiline string error) */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
        />

        {/* ✨ TEXT */}
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-8 text-white">

          <p className="fade-1 text-[11px] tracking-[0.3em] uppercase opacity-80">
            Vivora Beauty
          </p>

          <h2 className="fade-2 mt-2 leading-[1.2]">

            <span className="block text-[18px] opacity-90">
              Founded by
            </span>

            <span
              className="block text-[28px] italic"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Samar Alrashed
            </span>

          </h2>

          <p className="fade-3 mt-2 text-[12px] text-white/70 max-w-[80%]">
            Pure vision. Honest care.
          </p>

        </div>

      </div>

      {/* 🧴 TEXT */}
      <span className="inline-block rounded-full bg-[#f0ebe4] px-4 py-1 text-[9px] tracking-[0.12em] text-[#555]">
        ABOUT
      </span>

      <h2 className="mt-4 text-[28px] leading-[1.25] text-[#2a2a2a] max-w-[90%]">
        Only proven ingredients,
        <br />
        refined with purpose.
      </h2>

      <p className="mt-3 text-[13px] leading-[1.7] text-[#777] max-w-[85%]">
        Formulations designed to restore balance and reveal natural radiance.
      </p>

      {/* 🎬 ANIMATIONS */}
      <style jsx>{`

        .fade-1 {
          opacity: 0;
          transform: translateY(25px);
          animation: fadeUp 1s ease forwards;
          animation-delay: 0.5s;
        }

        .fade-2 {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 1.2s ease forwards;
          animation-delay: 1.2s;
        }

        .fade-3 {
          opacity: 0;
          transform: translateY(35px);
          animation: fadeUp 1.2s ease forwards;
          animation-delay: 1.8s;
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

      `}</style>

    </section>
  )
}