import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingIcons from "@/components/FloatingIcons";
import ProductGrid from "@/components/ProductGrid";
import FeatureShowcase from "@/components/FeatureShowcase";
import Testimonials from "@/components/Testimonials";
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
        <Testimonials />
        <BrandMarquee />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
