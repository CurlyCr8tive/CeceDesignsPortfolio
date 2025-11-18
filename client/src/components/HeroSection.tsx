import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@assets/generated_images/Creative_workspace_hero_background_affd3606.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6" data-testid="text-hero-name">
          Alex Rivera
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-4" data-testid="text-hero-title">
          Product Designer & Creative Developer
        </p>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90" data-testid="text-hero-tagline">
          Crafting beautiful digital experiences that blend stunning design with powerful functionality
        </p>
        <Button
          size="lg"
          onClick={scrollToAbout}
          className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-6 text-lg rounded-full"
          data-testid="button-hero-cta"
        >
          View My Work
        </Button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
