import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import BrandSection from "@/components/BrandSection";
import LinesSection from "@/components/LinesSection";
import FilmSection from "@/components/FilmSection";
import NewsletterSection from "@/components/NewsletterSection";
import SiteFooter from "@/components/SiteFooter";
import BagDrawer from "@/components/cart/BagDrawer";
import BagAnnouncer from "@/components/cart/BagAnnouncer";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <ProductsSection />
        <BrandSection />
        <LinesSection />
        <FilmSection />
        <NewsletterSection />
      </main>

      <SiteFooter />
      <BagDrawer />
      <BagAnnouncer />
    </>
  );
}
