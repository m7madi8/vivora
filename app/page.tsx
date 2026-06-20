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
    <main className="mx-auto max-w-[430px]">
      <Hero />
      <BrandSection />
      <ProductsSection />
      <IngredientsSection />
      <JournalSection />
      <InstagramSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
