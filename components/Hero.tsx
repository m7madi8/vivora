import BrandLogo from "@/components/BrandLogo";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col px-5">
        {/* Header */}
        <header className="flex items-center justify-between pt-5">
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 flex-col items-start justify-center gap-[7px]"
          >
            <span className="block h-[1.5px] w-[22px] bg-white" />
            <span className="block h-[1.5px] w-[22px] bg-white" />
          </button>

          <h1 className="text-white">
            <BrandLogo className="text-[1.15rem] tracking-[0.18em]" />
          </h1>

          <button type="button" aria-label="Shopping bag" className="flex h-10 w-10 items-center justify-end">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5.5 7.5V6.5C5.5 3.73858 7.73858 1.5 10.5 1.5C13.2614 1.5 15.5 3.73858 15.5 6.5V7.5"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M3 7.5H18L16.5 22H5L3 7.5Z"
                stroke="white"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>

        {/* Hero text */}
        <div className="flex flex-1 flex-col items-center justify-center pb-32 pt-6 text-center">
          <h2 className="max-w-[92%] text-[34px] leading-[1.12] text-white">
            <span className="block">
              <span
                className="font-semibold"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Your Daily Dose
              </span>
            </span>
            <span className="mt-1 block">
              <span
                className="font-semibold"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Of Soft, Honest{" "}
              </span>
              <span
                className="italic"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
              >
                Vaer
              </span>
            </span>
          </h2>

          <p
            className="mt-6 max-w-[88%] text-[12.5px] leading-[1.6] text-white/95"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
          >
            Unreservedly honest products that truly work, be kind to skin and the planet – no
            exceptions!
          </p>
        </div>

        {/* CTA */}
        <div className="absolute bottom-9 left-5 right-5">
          <button
            type="button"
            className="flex h-[52px] w-full items-center justify-between rounded-full bg-[#f2eeed] pl-7 pr-1"
          >
            <span
              className="text-[10.5px] font-normal tracking-[0.16em] text-[#2a2a2a] underline decoration-1 underline-offset-[4px]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              EXPLORE ALL PRODUCTS
            </span>
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#2a2a2a]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
