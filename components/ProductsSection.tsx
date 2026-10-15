"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import AddToBagButton from "@/components/cart/AddToBagButton";
import { ArrowIcon } from "@/components/icons";
import { formatPrice, lines, products } from "@/lib/products";

export default function ProductsSection() {
  const scroller = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ prev: false, next: true, scrollable: true });

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    const measure = () => {
      const scrollable = el.scrollWidth > el.clientWidth + 4;
      const prev = el.scrollLeft > 4;
      const next = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
      setEdges((current) =>
        current.prev === prev && current.next === next && current.scrollable === scrollable
          ? current
          : { prev, next, scrollable },
      );
    };

    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = (card?.offsetWidth ?? 300) + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * amount, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="shop" aria-labelledby="shop-title" className="py-[clamp(4rem,3rem+4vw,8rem)]">
      <div className="page-x mx-auto max-w-site">
        <div className="flex items-end justify-between gap-6">
          <div className="reveal">
            <p className="t-label text-vivora-stone">The collection</p>
            <h2 id="shop-title" className="t-h2 mt-4">
              Three <span className="t-accent">essentials</span>
            </h2>
          </div>

          {edges.scrollable ? (
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                className="icon-btn rounded-full border border-vivora-ink/20 transition-opacity disabled:opacity-30"
                aria-label="Previous product"
                aria-controls="shop-list"
                disabled={!edges.prev}
                onClick={() => scrollByCard(-1)}
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                className="icon-btn rounded-full border border-vivora-ink/20 transition-opacity disabled:opacity-30"
                aria-label="Next product"
                aria-controls="shop-list"
                disabled={!edges.next}
                onClick={() => scrollByCard(1)}
              >
                <ArrowIcon />
              </button>
            </div>
          ) : (
            <p className="hidden max-w-[34ch] text-right text-[15px] leading-[1.55] text-vivora-bark lg:block">
              A body oil, a body butter and a shower gel, across Glow and Essence.
            </p>
          )}
        </div>
      </div>

      <ul
        id="shop-list"
        ref={scroller}
        aria-label="Products"
        className="scroll-row mx-auto mt-10 flex max-w-site snap-x snap-mandatory scroll-px-[var(--gutter)] gap-[var(--gutter)] overflow-x-auto page-x lg:mt-14 lg:grid lg:grid-cols-3 lg:overflow-visible"
      >
        {products.map((product, index) => (
          <li
            key={product.id}
            id={product.id}
            className="w-[min(80vw,24rem)] shrink-0 snap-start sm:w-[calc((100%-var(--gutter))/2.15)] lg:w-auto"
          >
            <article aria-labelledby={`${product.id}-name`} className="group flex h-full flex-col">
              <div className="panel aspect-[4/5] bg-vivora-sand">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 80vw"
                  className="media-zoom object-cover"
                />
                <p aria-hidden="true" className="t-label absolute left-4 top-4 text-vivora-ink/70">
                  0{index + 1}
                </p>
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <p className="t-label text-vivora-stone">{lines[product.line].name}</p>
                <p className="tabular text-[16px] font-medium">{formatPrice(product.price)}</p>
              </div>
              <h3 id={`${product.id}-name`} className="t-h3 mt-2">
                {product.name}
              </h3>
              <div className="mt-auto">
                <AddToBagButton product={product} />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
