'use client'

import { useEffect, useRef, useState } from "react";
import ResponsiveImage from "@/components/ResponsiveImage";
import DecorativeArc from "@/components/DecorativeArc";

export default function BrandSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const vh = window.innerHeight;

        const value = 1 - rect.top / vh;
        setProgress(Math.max(0, Math.min(1, value)));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { icon: LeafIcon, title: "Clean, Beyond", sub: "Reproach" },
    { icon: MagnifierIcon, title: "Radical", sub: "Transparency" },
    { icon: FlaskIcon, title: "Potent & Multi", sub: "Tasking" },
    { icon: HeartHandIcon, title: "Conscious &", sub: "Responsible" },
  ];

  return (
    <section ref={ref} className="bg-[#efefef] pb-20 pt-20 overflow-hidden">

      {/* HEADER */}
      <div className="px-6">

        <h2 className="text-[36px] uppercase leading-[1.1] text-[#3a3a3a]">

          {["CLEAN,", "CONSCIOUS,", "PERFORMANCE"].map((word, i) => (
            <span
              key={i}
              className="block"
              style={{
                transform: `translateY(${(1 - progress) * (40 + i * 10)}px)`,
                opacity: progress,
                filter: `blur(${(1 - progress) * 6}px)`,
                transition: "all 0.25s ease-out"
              }}
            >
              {word}
            </span>
          ))}

        </h2>

        <p className="mt-2 text-[36px] italic text-[#3a3a3a]">
          <span
            style={{
              transform: `translateY(${(1 - progress) * 50}px)`,
              opacity: progress,
              filter: `blur(${(1 - progress) * 6}px)`,
              transition: "all 0.3s ease-out"
            }}
          >
            skincare.
          </span>
        </p>

        {/* ARC */}
        <div
          className="mt-8 flex items-start justify-between gap-6"
          style={{
            transform: `translateY(${(1 - progress) * 60}px)`,
            opacity: progress,
          }}
        >
          <DecorativeArc />

          <p className="max-w-[180px] text-right text-[12px] leading-[1.6] text-[#6f6f6f]">
            Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
          </p>
        </div>

      </div>

      {/* IMAGE */}
      <div className="mt-14 px-4">
        <div
          className="overflow-hidden rounded-[60%_40%_60%_40%/60%_40%_60%_40%]"
          style={{
            transform: `translateY(${progress * -40}px) scale(${0.95 + progress * 0.05})`,
            transition: "transform 0.2s ease-out"
          }}
        >
          <ResponsiveImage
            src="/vivora.beauty.jpg"
            alt="Vivora Beauty"
            width={1080}
            height={1350}
            bg="#f0e4dc"
          />
        </div>
      </div>

      {/* FEATURES */}
      <div className="mt-14 grid grid-cols-2 gap-px bg-[#dcdcdc]">

        {features.map((item, i) => {
          const Icon = item.icon; // ✅ الحل الصحيح

          return (
            <div
              key={i}
              className="
                flex flex-col items-center justify-center
                bg-[#efefef] px-5 py-10 text-center
                transition-all duration-500 hover:bg-white
              "
              style={{
                transform: `translateY(${(1 - progress) * (60 + i * 20)}px)`,
                opacity: progress,
              }}
            >
              <div className="
                mb-4 flex h-[64px] w-[64px]
                items-center justify-center
                rounded-full bg-white
                shadow-[0_6px_20px_rgba(0,0,0,0.05)]
              ">
                <Icon />
              </div>

              <p className="text-[13px] text-[#3a3a3a] leading-[1.4]">
                {item.title} <br /> {item.sub}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}

/* ✅ ICONS PREMIUM */

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M20 4C14 4 6 6 6 14C6 16 7 18 8 19C8 15 10 10 20 4Z" stroke="#2a2a2a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MagnifierIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="10.5" cy="10.5" r="5" stroke="#2a2a2a" strokeWidth="1.3"/>
      <path d="M15 15L20 20" stroke="#2a2a2a" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M9 3H15M10 3V9L5 19C4.5 20 5.2 21 6.3 21H17.7C18.8 21 19.5 20 19 19L14 9V3" stroke="#2a2a2a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14H16" stroke="#2a2a2a" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

function HeartHandIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 16L10 14C8 12.5 6 10.5 6 9C6 7.5 7 6.5 8.5 6.5C9.5 6.5 10.5 7 11 8C11.5 7 12.5 6.5 13.5 6.5C15 6.5 16 7.5 16 9C16 10.5 14 12.5 12 14" stroke="#2a2a2a" strokeWidth="1.3"/>
      <path d="M4 20C4 20 6 18 9 18C12 18 14 20 14 20" stroke="#2a2a2a" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
``