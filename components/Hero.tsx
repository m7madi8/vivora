'use client'

import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`
          absolute inset-0 h-full w-full object-cover
          transition-all duration-[2000ms] ease-out
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}
        `}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className={`
        absolute inset-0 bg-black/30
        transition-opacity duration-1000
        ${loaded ? "opacity-100" : "opacity-0"}
      `} />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full flex-col px-5">

        {/* HEADER */}
        <header className={`
          flex items-center justify-between pt-5
          transition-all duration-1000
          ${loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        `}>

          <button className="flex h-10 w-10 flex-col justify-center gap-[6px]">
            <span className="h-[1.5px] w-[22px] bg-white" />
            <span className="h-[1.5px] w-[22px] bg-white" />
          </button>

          <h1 className="text-white">
            <BrandLogo className="text-[1.15rem] tracking-[0.18em]" />
          </h1>

          <button className="h-10 w-10 flex items-center justify-end">
            🛍️
          </button>

        </header>

        {/* HERO TEXT */}
        <div className="flex flex-1 flex-col items-center justify-center pb-28 text-center">

          <h2 className="max-w-[80%] text-white leading-[1.05]">

            {/* LINE 1 */}
            <span className={`
              block mb-4 text-[18px] uppercase tracking-[0.35em]
              transition-all duration-1000 delay-200
              ${loaded ? "opacity-80 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur"}
            `}>
              Your Daily Ritual
            </span>

            {/* LINE 2 */}
            <span className={`
              block text-[44px] font-medium tracking-[-0.02em]
              transition-all duration-1000 delay-[500ms]
              ${loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm"}
            `}>
              Soft. Honest.
            </span>

            {/* LINE 3 */}
            <span
  className={`
    block mt-1
    text-[62px]
    font-semibold
    tracking-[-0.05em]
    leading-[1]
    text-white
    drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]
    transition-all duration-1000 delay-[800ms]
    ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.95]"}
  `}
>
  Care
</span>

          </h2>

        </div>

        {/* CTA */}
        <div className="absolute bottom-9 left-5 right-5">

          <button className={`
            flex h-[52px] w-full items-center justify-between
            rounded-full bg-[#f2eeed] pl-7 pr-1
            transition-all duration-1000 delay-[1000ms]
            ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.9]"}
          `}>

            <span className="text-[10.5px] tracking-[0.16em] text-[#2a2a2a] underline underline-offset-[4px]">
              EXPLORE ALL PRODUCTS
            </span>

            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#2a2a2a]">
              →
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}
