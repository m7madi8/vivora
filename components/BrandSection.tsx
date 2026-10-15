import AmbientVideo from "@/components/AmbientVideo";

const principles = [
  "Clean, beyond reproach",
  "Radical transparency",
  "Potent & multi-tasking",
  "Conscious & responsible",
];

export default function BrandSection() {
  return (
    <section id="story" aria-labelledby="story-title" className="page-x">
      <div className="mx-auto grid max-w-site gap-[var(--gutter)] md:grid-cols-12">
        <div className="panel flex flex-col bg-vivora-bg p-[var(--pad)] md:col-span-7">
          <p className="t-label text-vivora-espresso">Our story</p>

          <h2 id="story-title" className="t-h2 reveal mt-10 max-w-[13ch] lg:mt-16">
            Clean, conscious, performance <span className="t-accent">skincare.</span>
          </h2>

          <p className="t-lede reveal mt-6 max-w-[38ch] text-vivora-espresso lg:mt-8">
            Unreservedly honest products that truly work, kind to skin and the planet. No exceptions.
          </p>

          <ol className="mt-12 grid gap-x-8 sm:max-md:grid-cols-2 lg:grid-cols-2 md:mt-auto md:pt-12 lg:pt-16">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="flex items-baseline gap-4 border-t border-vivora-ink/15 py-4 text-[16px]"
              >
                <span aria-hidden="true" className="tabular text-[12px] text-vivora-espresso">
                  0{index + 1}
                </span>
                {principle}
              </li>
            ))}
          </ol>
        </div>

        <div className="panel aspect-[4/5] bg-vivora-sand md:col-span-5 md:aspect-auto md:min-h-[36rem] lg:min-h-[44rem]">
          <AmbientVideo
            src="/vivora.beauty.official-20260620-0002.mp4"
            poster="/posters/story.jpg"
            label="Essence body mist film"
          />
        </div>
      </div>
    </section>
  );
}
