'use client'

import { useState } from 'react'

export default function IngredientsSection() {
  const [soundOn, setSoundOn] = useState(false)

  return (
    <section className="bg-white px-4 pb-10 pt-8">

      <div
        className="relative mb-6 w-full overflow-hidden rounded-[24px] bg-[#ebe4d8]"
        style={{ aspectRatio: '9 / 16' }}
      >
        <video
          src="/sam.mp4"
          autoPlay
          loop
          playsInline
          muted={!soundOn}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* SOUND BUTTON */}
        <button
          onClick={() => setSoundOn(!soundOn)}
          className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-[10px] text-white backdrop-blur"
        >
          {soundOn ? '🔊 SOUND ON' : '🔇 SOUND OFF'}
        </button>

        {/* TEXT OVERLAYS */}
        <div className="absolute inset-0 flex flex-col justify-end gap-2 p-5 text-white">

          <div className="animate-fadeUp opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
            <p className="text-[12px] tracking-[0.2em]">
              VIVORA BEAUTY BY SAMAR AL-RASHED
            </p>
          </div>

          <div className="animate-fadeUp opacity-0 [animation-delay:1.5s] [animation-fill-mode:forwards]">
            <h2 className="text-[18px] font-semibold leading-snug">
              Crafted with vision & purity
            </h2>
          </div>

          <div className="animate-fadeUp opacity-0 [animation-delay:2.5s] [animation-fill-mode:forwards]">
            <p className="text-[11px] text-white/80">
              A skincare philosophy created by Samar Al-Rashed — where science meets honesty.
            </p>
          </div>

        </div>
      </div>

      <span className="inline-block rounded-full bg-[#f0ebe4] px-4 py-1 text-[9px] tracking-[0.1em] text-[#555]">
        ABOUT
      </span>

      <h2 className="mt-4 text-[22px] font-semibold leading-[1.2] text-[#2a2a2a]">
        Only proven ingredients, quality over quantity always!
      </h2>

      <p className="mt-3 text-[12.5px] leading-[1.65] text-[#777]">
        We believe in using only the highest quality ingredients in our products.
      </p>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>

    </section>
  )
}