import Image from "next/image";
import type { CSSProperties } from "react";
import AmbientVideo from "@/components/AmbientVideo";
import { ArrowIcon } from "@/components/icons";
import { formatPrice, lines, products } from "@/lib/products";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="page-x">
      <div className="hero-grid mx-auto max-w-site">
        <div className="hero-media panel bg-vivora-walnut">
          <AmbientVideo
            src="/hero.mp4"
            poster="/posters/hero.jpg"
            eager
            label="Essence shower gel film"
            className="settle"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/0 lg:hidden"
          />
        </div>

        <div className="hero-copy">
          <div className="flex items-start justify-between gap-6">
            <p className="t-label rise" style={delay(100)}>
              Your beauty code
            </p>
            <p className="t-label hidden text-vivora-espresso rise lg:block" style={delay(100)}>
              Glow <span aria-hidden="true">/</span> Essence
            </p>
          </div>

          <div className="mt-auto lg:mt-0">
            <h1 id="hero-title" className="t-display">
              <span className="block rise" style={delay(200)}>
                Soft. Honest.
              </span>{" "}
              <span className="t-accent block text-[1.12em] leading-[0.85] rise" style={delay(320)}>
                care.
              </span>
            </h1>

            <p className="t-lede mt-5 max-w-[30ch] rise lg:mt-7 lg:text-vivora-espresso" style={delay(440)}>
              Body care in two lines, Glow and Essence. True to oneself, kind to nature.
            </p>

            <div className="mt-7 flex flex-col gap-1 rise sm:flex-row sm:gap-3 lg:mt-9" style={delay(540)}>
              <a href="#shop" className="btn btn-light hero-cta w-full sm:w-auto">
                Shop the collection
                <span className="btn-arrow">
                  <ArrowIcon />
                </span>
              </a>
              <a href="#story" className="btn btn-outline hidden sm:inline-flex">
                Our story
              </a>
              <a href="#story" className="flex min-h-11 items-center justify-center text-[14px] underline underline-offset-4 sm:hidden">
                Our story
              </a>
            </div>
          </div>

          <ul className="mt-10 hidden grid-cols-3 gap-5 border-t border-vivora-ink/15 pt-5 unveil lg:grid" style={delay(700)}>
            {products.map((product) => (
              <li key={product.id}>
                <a href={`#${product.id}`} className="group flex items-center gap-3">
                  <span className="relative aspect-[4/5] w-12 shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-vivora-linen/40">
                    <Image src={product.image} alt="" fill sizes="48px" className="media-zoom object-cover" />
                  </span>
                  <span className="min-w-0 text-[13px] leading-[1.35]">
                    <span className="block text-vivora-espresso">{lines[product.line].name}</span>
                    <span className="block font-medium group-hover:underline">{product.name}</span>
                    <span className="tabular block text-vivora-espresso">{formatPrice(product.price)}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
