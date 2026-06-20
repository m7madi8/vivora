import ResponsiveImage from "@/components/ResponsiveImage";

function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 19C11 19 3 14 3 8.5C3 5.5 5.5 3 8.5 3C9.5 3 10.5 3.3 11.5 4C12.5 3.3 13.5 3 14.5 3C17.5 3 20 5.5 20 8.5C20 14 11 19 11 19Z"
        stroke="#2a2a2a"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M11 19V8" stroke="#2a2a2a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function MagnifierIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="9.5" cy="9.5" r="5.5" stroke="#2a2a2a" strokeWidth="1.2" />
      <path d="M14 14L19 19" stroke="#2a2a2a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
      <path
        d="M7 2H13M9 2V8L4 18.5C3.5 19.5 4.2 20.5 5.3 20.5H14.7C15.8 20.5 16.5 19.5 16 18.5L11 8V2"
        stroke="#2a2a2a"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 14H14" stroke="#2a2a2a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function HeartHandIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" aria-hidden="true">
      <path
        d="M8 14C6 12.5 4 10.5 4 8.5C4 6.5 5.5 5 7.5 5C8.5 5 9.5 5.5 10 6.5C10.5 5.5 11.5 5 12.5 5C14.5 5 16 6.5 16 8.5C16 10.5 14 12.5 12 14L10 16L8 14Z"
        stroke="#2a2a2a"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M3 18C3 18 5 16 8 16C11 16 13 18 13 18"
        stroke="#2a2a2a"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DecorativeArc() {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M75 15C55 15 15 35 15 75"
        stroke="#1a1a1a"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const features = [
  { icon: LeafIcon, lines: ["Clean, Beyond", "Reproach"] },
  { icon: MagnifierIcon, lines: ["Radical", "Transparency"] },
  { icon: FlaskIcon, lines: ["Potent & Multi", "Tasking"] },
  { icon: HeartHandIcon, lines: ["Conscious &", "Responsible"] },
];

export default function BrandSection() {
  return (
    <section className="bg-[#f5f5f5]">
      <div className="px-6 pt-10">
        {/* Headline */}
        <h2
          className="text-[30px] font-bold uppercase leading-[1.14] tracking-[-0.01em] text-[#3a3a3a]"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Clean,
          <br />
          Conscious,
          <br />
          Performance
        </h2>
        <p
          className="mt-1 text-[30px] italic text-[#3a3a3a] underline decoration-[#3a3a3a] decoration-1 underline-offset-[5px]"
          style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
        >
          skincare.
        </p>

        {/* Arc + subtext */}
        <div className="mt-3 flex items-start justify-between gap-3">
          <div className="pt-2 pl-1">
            <DecorativeArc />
          </div>
          <p
            className="max-w-[175px] pt-6 text-right text-[11.5px] leading-[1.55] text-[#7a7a7a]"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
          >
            Unreservedly honest products that truly work, be kind to skin and the planet – no
            exceptions!
          </p>
        </div>
      </div>

      {/* Brand image — full visible, responsive */}
      <div className="px-4 pb-4 pt-6">
        <ResponsiveImage
          src="/vivora.beauty.jpg"
          alt="Woman with radiant natural skin"
          width={1080}
          height={1350}
          bg="#f0e4dc"
          rounded="rounded-[36px]"
          className="mx-auto max-w-full"
        />
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-2 border-t border-[#e0e0e0] bg-[#f5f5f5]">
        {features.map(({ icon: Icon, lines }, index) => (
          <div
            key={lines.join("-")}
            className={`flex flex-col items-center px-4 py-9 text-center ${
              index % 2 === 0 ? "border-r border-[#e0e0e0]" : ""
            } ${index < 2 ? "border-b border-[#e0e0e0]" : ""}`}
          >
            <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <Icon />
            </div>
            <p
              className="text-[12.5px] leading-[1.35] text-[#4a4a4a]"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
            >
              {lines[0]}
              <br />
              {lines[1]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
