import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import BrandSection from "@/components/BrandSection";
import ProductsSection from "@/components/ProductsSection";
import IngredientsSection from "@/components/IngredientsSection";
import JournalSection from "@/components/JournalSection";
import InstagramSection from "@/components/InstagramSection";
import NewsletterSection from "@/components/NewsletterSection";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <SiteHeader />

      <main
        id="main"
        className="mx-auto max-w-[430px] bg-vivora-bg shadow-[0_0_80px_rgba(22,20,15,0.12)]"
      >
        <Hero />

        <div id="story" className="anchor-section">
          <BrandSection />
        </div>

        {/* ProductsSection carries its own id="products" */}
        <div className="anchor-section">
          <ProductsSection />
        </div>

        <IngredientsSection />

        <div id="bundles" className="anchor-section">
          <JournalSection />
        </div>

        <InstagramSection />
        <NewsletterSection />

        <div id="contact" className="anchor-section">
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
