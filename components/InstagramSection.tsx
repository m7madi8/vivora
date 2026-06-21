'use client'

import { useEffect, useRef, useState } from "react";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function InstagramSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  /* 🎬 scroll reveal */
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const value = 1 - rect.top / vh;
      setProgress(Math.max(0, Math.min(1, value)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="bg-white px-4 pb-16 pt-16 overflow-hidden"
    >

      {/* 💎 TITLE */}
      <div className="text-center">

        <p
          style={{
            transform: `translateY(${(1 - progress) * 25}px)`,
            opacity: progress
          }}
          className="text-[13px] uppercase tracking-[0.32em] text-[#777]"
        >
          Connect With Us
        </p>

        <h2
          style={{
            transform: `translateY(${(1 - progress) * 35}px)`,
            opacity: progress
          }}
          className="mt-2 text-[36px] italic text-[#2f2f2f]"
        >
          on instagram
        </h2>

      </div>

      {/* 💣 IMAGE BLOCK */}
      <div
        className="group relative mt-10"
        style={{
          transform: `translateY(${(1 - progress) * 40}px)`,
          opacity: progress
        }}
      >

        <div className="relative overflow-hidden rounded-[32px]">

          {/* IMAGE */}
          <div
            className="transition-all duration-700 will-change-transform"
            style={{
              transform: `scale(${1.05 - progress * 0.05})`
            }}
          >
            <ResponsiveImage
              src="/vivora.beauty.official-20260620-0008.jpg"
              alt="Vivora Instagram"
              width={1080}
              height={1350}
              bg="#f0e4dc"
              rounded="rounded-[32px]"
            />
          </div>

          {/* CINEMATIC OVERLAY */}
          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/60 via-black/10 to-transparent
          " />

          {/* 💎 FLOATING TEXT */}
          <div className="
            pointer-events-none absolute inset-0
            flex flex-col justify-end items-center
            pb-8 text-white
          ">

            {/* username */}
            <p
              className="tracking-[0.2em] text-[11px] uppercase opacity-80"
              style={{
                transform: `translateY(${(1 - progress) * 20}px)`,
                opacity: progress
              }}
            >
            </p>

            {/* headline */}
            <h3
  style={{
    transform: `translateY(${(1 - progress) * 30}px)`,
    opacity: progress,
    fontFamily: "var(--font-cormorant), serif",
  }}
  className="
    mt-2 text-[46px]
    leading-[1.05]
    tracking-[-0.015em]
    font-medium
    text-white
    transition-all duration-700
    group-hover:translate-y-[-4px]
  "
>
  Stay Inspired
</h3>

          </div>

          {/* LIGHT EFFECT */}
          <div className="
            pointer-events-none absolute inset-0
            bg-[linear-gradient(120deg,rgba(255,255,255,0.25),transparent_50%)]
            opacity-40 transition
            group-hover:opacity-70
          " />

        </div>

      </div>

      {/* 💣 BUTTON */}
      <div
        className="mt-10 flex flex-col items-center"
        style={{
          transform: `translateY(${(1 - progress) * 40}px)`,
          opacity: progress
        }}
      >

        <button
          className="
            group relative flex items-center gap-3
            rounded-full border border-[#e5e5e5]
            px-6 py-3 bg-white
            transition-all duration-500
            hover:bg-black hover:text-white
            hover:scale-[1.06] hover:-translate-y-1
          "
        >
          {/* icon */}
          <svg
            className="transition group-hover:rotate-12"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>

          <span className="text-[11px] uppercase tracking-[0.18em]">
            Follow Us
          </span>

          {/* glow */}
          <div className="
            absolute inset-0 rounded-full
            bg-black/10 blur-xl opacity-0
            transition group-hover:opacity-40
          " />

        </button>

        {/* caption */}
        <p className="mt-6 text-[11px] max-w-[260px] text-center text-[#666] leading-[1.6]">
          Follow us for daily rituals, skincare insights, and exclusive drops.
        </p>

      </div>

    </section>
  );
}