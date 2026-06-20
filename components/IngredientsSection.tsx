import ResponsiveImage from "@/components/ResponsiveImage";

export default function IngredientsSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-8">
      <ResponsiveImage
        src="/vivora.beauty.official-20260620-0009.jpg"
        alt="Vivora Glow collection"
        width={1200}
        height={900}
        bg="#ebe4d8"
        rounded="rounded-[24px]"
        className="mb-6"
      />

      <span
        className="inline-block rounded-full bg-[#f0ebe4] px-4 py-1 text-[9px] tracking-[0.1em] text-[#555]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        ABOUT
      </span>

      <h2
        className="mt-4 text-[22px] font-semibold leading-[1.2] text-[#2a2a2a]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        Only proven ingredients, quality over quantity always!
      </h2>

      <p
        className="mt-3 text-[12.5px] leading-[1.65] text-[#777]"
        style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
      >
        We believe in using only the highest quality ingredients in our products. Our formulas are
        carefully crafted to deliver real results — salt and paraben free, made for skin that
        deserves honesty.
      </p>
    </section>
  );
}
