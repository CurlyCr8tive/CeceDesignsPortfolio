import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatarImage from "@/../../attached_assets/ChatGPT_Image_Jan_27,_2026,_02_08_19_PM_1769540958819.png";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left z-10">
          <h1 className="font-serif font-bold mb-6 text-foreground leading-tight" data-testid="text-hero-name">
            <span className="text-5xl md:text-7xl lg:text-8xl block mb-2">Hi, I'm Cherice.</span>
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-medium">A Product Designer & Creative Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed" data-testid="text-hero-tagline">
            Crafting beautiful digital experiences that blend great design with real functionality.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="rounded-full px-8 py-6 text-lg"
              data-testid="button-hero-cta"
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary/5"
              data-testid="button-hero-about"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
          <img 
            src={avatarImage} 
            alt="Cherice Heron" 
            className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
