import { Header } from "@/components/header";
import { HeroSlider } from "@/components/hero-slider";
import { ServiceOptions } from "@/components/service-options";
import { AboutPreview } from "@/components/about-preview";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <ServiceOptions />
        <AboutPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
