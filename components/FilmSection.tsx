import AmbientVideo from "@/components/AmbientVideo";
import { ArrowIcon } from "@/components/icons";

export default function FilmSection() {
  return (
    <section aria-labelledby="film-title" className="page-x">
      <div className="panel mx-auto grid max-w-site gap-10 bg-vivora-ink p-[var(--pad)] text-vivora-linen lg:grid-cols-[1fr_minmax(0,24rem)_1fr] lg:gap-[var(--pad)] xl:grid-cols-[1fr_minmax(0,27rem)_1fr]">
        <div className="flex flex-col gap-8 lg:items-end lg:text-right">
          <p className="t-label text-vivora-champagne lg:self-start">On film</p>
          <h2 id="film-title" className="t-h2 reveal lg:mt-24">
            True to oneself,{" "}
            <span className="t-accent block text-vivora-champagne lg:sr-only">kind to nature.</span>
          </h2>
        </div>

        <div className="panel aspect-[9/16] max-h-[82svh] w-full justify-self-center bg-vivora-walnut [border-radius:var(--radius-sm)] max-lg:max-w-[26rem]">
          <AmbientVideo src="/sam.mp4" poster="/posters/film.jpg" label="Vivora campaign film" />
        </div>

        <div className="flex flex-col justify-end gap-10">
          <p aria-hidden="true" className="t-h2 t-accent reveal hidden text-vivora-champagne lg:mb-24 lg:block">
            kind to nature.
          </p>
          <div>
            <a href="#shop" className="btn btn-light">
              Shop the collection
              <span className="btn-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
