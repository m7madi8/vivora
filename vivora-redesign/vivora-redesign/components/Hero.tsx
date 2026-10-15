'use client'

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reduced-motion visitors see the still poster instead of a looping video.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      if (query.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* autoplay can be blocked; the poster stays visible */
        });
      }
    };

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-vivora-walnut"
    >
      {/* MEDIA */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        className="hero-settle absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Keeps white type readable over any frame of the video */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/65"
      />

      {/* CONTENT */}
      <div className="relative z-10 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 text-white">
        <p
          className="hero-rise text-[12px] font-medium uppercase tracking-[0.34em] text-white/85"
          style={{ "--d": "150ms" } as React.CSSProperties}
        >
          Your Daily Ritual
        </p>

        <h1
          id="hero-title"
          className="mt-4 font-display font-medium leading-[0.92] tracking-[-0.02em]"
        >
          <span
            className="hero-rise block text-[clamp(2.75rem,13.5vw,3.75rem)]"
            style={{ "--d": "350ms" } as React.CSSProperties}
          >
            Soft. Honest.
          </span>
          <span
            className="hero-rise block text-[clamp(4.5rem,23vw,6.25rem)] italic"
            style={{ "--d": "550ms" } as React.CSSProperties}
          >
            Care
          </span>
        </h1>

        <p
          className="hero-rise mt-5 max-w-[24ch] text-[15px] leading-[1.55] text-white/85"
          style={{ "--d": "750ms" } as React.CSSProperties}
        >
          True to oneself, kind to nature.
        </p>

        <div
          className="hero-rise mt-8"
          style={{ "--d": "900ms" } as React.CSSProperties}
        >
          <a
            href="#products"
            className="group flex h-14 w-full cursor-pointer items-center justify-between rounded-full bg-[#f2eeed] pl-7 pr-1.5 text-vivora-ink transition-colors duration-300 hover:bg-white focus-visible:outline-white"
          >
            <span className="text-[12px] font-medium uppercase tracking-[0.16em]">
              Explore all products
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-vivora-ink text-vivora-cream transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="#story"
            className="mt-2 flex h-11 cursor-pointer items-center justify-center text-[12px] font-medium uppercase tracking-[0.2em] text-white/85 underline underline-offset-[6px] transition-colors duration-200 hover:text-white"
          >
            Our story
          </a>
        </div>
      </div>
    </section>
  );
}
