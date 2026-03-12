import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingIcons from "@/components/FloatingIcons";
import ProductGrid from "@/components/ProductGrid";
import FeatureShowcase from "@/components/FeatureShowcase";
import Metrics from "@/components/Metrics";
import BrandMarquee from "@/components/BrandMarquee";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FloatingIcons />
        <ProductGrid />
        <FeatureShowcase />
        <Metrics />
        <BrandMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
