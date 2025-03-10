import { WobbleCards } from "@/components/home/Descriptions";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServiceSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";


export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WobbleCards/>
      <TestimonialsSection />
      <Footer />
    </div>
  </div>
  );
}