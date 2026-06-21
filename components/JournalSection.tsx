'use client'

import { useEffect, useRef, useState } from "react";
import ResponsiveImage from "@/components/ResponsiveImage";

const articles = [
  {
    image: "/vivora.beauty.official-20260620-0007.jpg",
    tag: "BUNDLES",
    title: "Glow Essentials Package: Your Full Skincare Routine in One Set",
    date: "Limited Offer",
    bg: "#d4c4b0",
  },
  {
    image: "/vivora.beauty.official-20260620-0008.jpg",
    tag: "PACKAGES",
    title: "Deep Hydration Body Care Pack for Smooth & Soft Skin",
    date: "Best Seller",
    bg: "#f0d4dc",
  },
  {
    image: "/vivora.beauty.official-20260620-0009.jpg",
    tag: "OFFERS",
    title: "Travel Skincare Mini Kit: Everything You Need On the Go",
    date: "New Drop",
    bg: "#ebe4d8",
  },
];

export default function JournalSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  /* 🎬 Scroll reveal */
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
      className="bg-[#1f1f1f] px-4 pb-16 pt-14 text-white overflow-hidden"
    >

      {/* 💎 HEADER */}
      <div className="mb-10 text-center">

        <h2 className="leading-none">

          <span
            style={{
              transform: `translateY(${(1 - progress) * 25}px)`,
              opacity: progress
            }}
            className="block text-[38px] italic text-white/90 transition"
          >
            clean
          </span>

          <span
            style={{
              transform: `translateY(${(1 - progress) * 35}px)`,
              opacity: progress
            }}
            className="mt-1 block text-[30px] font-bold uppercase tracking-[0.08em] transition"
          >
            Bundles
          </span>

        </h2>

        <p
          style={{
            transform: `translateY(${(1 - progress) * 40}px)`,
            opacity: progress
          }}
          className="mx-auto mt-4 max-w-[280px] text-[11px] leading-[1.6] text-white/60"
        >
          Curated skincare sets designed for effortless routines and lasting glow.
        </p>

      </div>

      {/* 💣 CARDS */}
      <div className="space-y-6">

        {articles.map((article, i) => (

          <article
            key={article.title}
            className="group relative overflow-hidden rounded-[16px] bg-white text-[#2a2a2a]"
            style={{
              transform: `translateY(${(1 - progress) * (60 + i * 20)}px)`,
              opacity: progress,
              transition: "all 0.5s ease-out"
            }}
          >

            {/* SHADOW DEPTH */}
            <div className="
              absolute inset-0
              translate-y-8 scale-[0.95]
              rounded-[16px]
              bg-black/20 blur-2xl opacity-40
              transition-all duration-500
              group-hover:translate-y-10 group-hover:opacity-60
            "/>

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <div className="
                transition-all duration-700
                group-hover:scale-[1.05]
              ">
                <ResponsiveImage
                  src={article.image}
                  alt={article.title}
                  width={1200}
                  height={900}
                  bg={article.bg}
                  rounded="rounded-none"
                  className="shadow-none"
                />
              </div>

              {/* TAG */}
              <span className="
                absolute left-3 top-3
                rounded-full bg-white px-3 py-1
                text-[8px] tracking-[0.08em]
                text-[#555]
                shadow-sm
                transition
                group-hover:scale-105
              ">
                {article.tag}
              </span>

              {/* GRADIENT OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/20 to-transparent
                opacity-0 group-hover:opacity-100
                transition
              "/>

            </div>

            {/* TEXT */}
            <div className="p-4">

              <h3 className="
                text-[15px] font-semibold leading-[1.35]
                transition group-hover:translate-y-[-2px]
              ">
                {article.title}
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <span className="text-[10px] text-[#888]">
                  {article.date}
                </span>

                <button className="
                  text-[10px] uppercase tracking-[0.08em]
                  underline underline-offset-2
                  transition group-hover:translate-x-1
                ">
                  View pack →
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>

      {/* 💎 CTA */}
      <div className="mt-10 flex flex-col items-center">

        <button className="
          flex h-11 w-11
          items-center justify-center
          rounded-full bg-white text-black
          transition hover:scale-110
        ">
          →
        </button>

        <span className="mt-2 text-[10px] uppercase tracking-[0.1em] text-white/70">
          See All Bundles
        </span>

      </div>

    </section>
  );
}