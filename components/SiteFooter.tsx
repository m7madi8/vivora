import { navLinks } from "@/lib/navigation";
import { lines, products } from "@/lib/products";

export default function SiteFooter() {
  return (
    <footer className="page-x border-t border-vivora-ink/10 pt-[clamp(3rem,2rem+3vw,5rem)]">
      <div className="mx-auto grid max-w-site gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="t-h3 max-w-[18ch]">
            Your daily dose of soft, honest <span className="t-accent">care.</span>
          </p>
          <p className="t-label mt-6 text-vivora-stone">True to oneself, kind to nature</p>
        </div>

        <nav aria-label="Shop" className="lg:col-span-3 lg:col-start-7">
          <p className="t-label text-vivora-stone">Shop</p>
          <ul className="mt-4">
            {products.map((product) => (
              <li key={product.id}>
                <a href={`#${product.id}`} className="link-underline min-h-11 text-[15px]">
                  {lines[product.line].name} {product.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className="t-label text-vivora-stone">Explore</p>
          <ul className="mt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline min-h-11 text-[15px]">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="link-underline min-h-11 text-[15px]">
                Back to top
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-[clamp(3rem,2rem+4vw,6rem)] max-w-site">
        <p
          aria-hidden="true"
          className="footer-mark font-brand font-bold uppercase leading-[0.78] text-vivora-ink"
        >
          Vivora
        </p>
        <div className="flex flex-col gap-2 border-t border-vivora-ink/10 py-6 text-[13px] text-vivora-stone sm:flex-row sm:justify-between">
          <p>© 2026 Vivora Beauty. All rights reserved.</p>
          <p>Prices in Israeli new shekels (₪).</p>
        </div>
      </div>
    </footer>
  );
}
