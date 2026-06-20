import ResponsiveImage from "@/components/ResponsiveImage";

const articles = [
  {
    image: "/vivora.beauty.official-20260620-0007.jpg",
    tag: "SKINCARE",
    title: "Beauty Secrets From Around the World: Rituals & Ingredients You Need to Try",
    date: "12 May, 2025",
    bg: "#d4c4b0",
  },
  {
    image: "/vivora.beauty.official-20260620-0008.jpg",
    tag: "WELLNESS",
    title: "The Power of Natural Ingredients in Your Daily Body Care Routine",
    date: "18 May, 2025",
    bg: "#f0d4dc",
  },
  {
    image: "/vivora.beauty.official-20260620-0009.jpg",
    tag: "GLOW",
    title: "How to Choose the Right Skincare Products for Your Skin Type",
    date: "24 May, 2025",
    bg: "#ebe4d8",
  },
];

export default function JournalSection() {
  return (
    <section className="bg-[#1f1f1f] px-4 pb-12 pt-10 text-white">
      <div className="mb-8 text-center">
        <h2 className="leading-none">
          <span
            className="block text-[34px] italic text-white/90"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 400 }}
          >
            clean
          </span>
          <span
            className="mt-1 block text-[28px] font-bold uppercase tracking-[0.04em]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Journal
          </span>
        </h2>
        <p
          className="mx-auto mt-3 max-w-[280px] text-[11px] leading-[1.55] text-white/60"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          New tips and tricks for a radiant and healthy skin.
        </p>
      </div>

      <div className="space-y-5">
        {articles.map((article) => (
          <article
            key={article.title}
            className="overflow-hidden rounded-[12px] bg-white text-[#2a2a2a] shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="relative">
              <ResponsiveImage
                src={article.image}
                alt={article.title}
                width={1200}
                height={900}
                bg={article.bg}
                rounded="rounded-none"
                className="shadow-none"
              />
              <span
                className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[8px] tracking-[0.08em] text-[#555] shadow-sm"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {article.tag}
              </span>
            </div>
            <div className="p-4">
              <h3
                className="text-[15px] font-semibold leading-[1.3] text-[#2a2a2a]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {article.title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span
                  className="text-[10px] text-[#888]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {article.date}
                </span>
                <button
                  type="button"
                  className="text-[10px] uppercase tracking-[0.08em] text-[#2a2a2a] underline underline-offset-2"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Read more
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <button
          type="button"
          aria-label="See all articles"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="#2a2a2a"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span
          className="mt-2 text-[10px] uppercase tracking-[0.1em] text-white/70"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          See All
        </span>
      </div>
    </section>
  );
}
