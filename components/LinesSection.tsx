import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { formatPrice, lines, products, type LineId } from "@/lib/products";

const panels: {
  id: LineId;
  image: string;
  alt: string;
  position: string;
  surface: string;
  muted: string;
  rule: string;
}[] = [
  {
    id: "glow",
    image: "/vivora.beauty.jpg",
    alt: "Woman holding a cream-white Vivora Glow pump bottle",
    position: "object-[50%_30%]",
    surface: "bg-vivora-glow text-vivora-ink",
    muted: "text-vivora-bark",
    rule: "border-vivora-ink/15",
  },
  {
    id: "essence",
    image: "/vivora.beauty.official-20260620-0007.jpg",
    alt: "Hands holding the Vivora Essence shower gel, body butter, body mist and body cream",
    position: "object-[50%_45%]",
    surface: "bg-vivora-walnut text-vivora-linen",
    muted: "text-vivora-champagne",
    rule: "border-vivora-linen/20",
  },
];

export default function LinesSection() {
  return (
    <section id="lines" aria-labelledby="lines-title" className="py-[clamp(4rem,3rem+4vw,8rem)]">
      <div className="page-x mx-auto max-w-site">
        <div className="reveal grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="t-label text-vivora-stone">Two lines</p>
            <h2 id="lines-title" className="t-h2 mt-4">
              Glow <span className="t-accent">&amp;</span> Essence
            </h2>
          </div>
          <p className="max-w-[40ch] text-[16px] leading-[1.6] text-vivora-bark lg:col-span-5 lg:justify-self-end">
            Vivora body care comes in two lines. Here is what sits in each one.
          </p>
        </div>

        <div className="mt-10 grid gap-[var(--gutter)] lg:mt-14 lg:grid-cols-2">
          {panels.map((panel) => {
            const line = lines[panel.id];
            const priced = products.filter((product) => product.line === panel.id);
            const pricedNames = new Set(priced.map((product) => product.name));
            const alsoInLine = line.range.filter((name) => !pricedNames.has(name));

            return (
              <article
                key={panel.id}
                aria-labelledby={`line-${panel.id}`}
                className={`panel flex flex-col p-[var(--pad)] [container-type:inline-size] ${panel.surface}`}
              >
                <h3
                  id={`line-${panel.id}`}
                  className="font-brand text-[clamp(2.5rem,13cqi,7rem)] font-bold uppercase leading-[0.8] tracking-[0.05em]"
                >
                  {line.name}
                </h3>

                <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-[var(--radius-sm)] bg-vivora-sand sm:aspect-[4/3]">
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className={`reveal-media object-cover ${panel.position}`}
                  />
                </div>

                <div className="mt-auto pt-8">
                  <p className={`t-label ${panel.muted}`}>In the collection</p>
                  <ul className="mt-3">
                    {priced.map((product) => (
                      <li key={product.id} className={`border-t ${panel.rule}`}>
                        <a
                          href={`#${product.id}`}
                          className="group flex min-h-14 items-center justify-between gap-4 py-3 text-[16px] leading-snug"
                        >
                          <span className="group-hover:underline group-hover:underline-offset-4">
                            {product.name}
                          </span>
                          <span className="tabular flex shrink-0 items-center gap-3">
                            {formatPrice(product.price)}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                              <ArrowIcon />
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  {alsoInLine.length > 0 ? (
                    <p className={`border-t ${panel.rule} pt-4 text-[14px] leading-[1.6] ${panel.muted}`}>
                      Also in the line: {alsoInLine.join(", ")}.
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
