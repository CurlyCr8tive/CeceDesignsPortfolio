import { Button } from "@/components/ui/button";
import heroIllustration from "@assets/ChatGPT Image Nov 12, 2025, 03_58_08 PM_1763425811961.png";

export default function HeroSection() {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = () => {
    const element = document.getElementById("resume");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm md:text-base font-medium text-muted-foreground mb-4" data-testid="text-hero-subtitle">
              UX • Accessibility • Product Design
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-hero-name">
              Hi, I'm Cece.
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-tagline">
              I design accessible products that delight and empower.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl" data-testid="text-hero-description">
              Currently focused on AI-native experiences, chronic illness support, and pet-centric tools like Whisker Wise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={scrollToWork}
                className="px-8 py-6 text-base rounded-full"
                data-testid="button-see-work"
              >
                See my work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToResume}
                className="px-8 py-6 text-base rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                data-testid="button-resume"
              >
                Resume
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroIllustration}
              alt="Illustration of Cherice with mobile app designs"
              className="w-full max-w-2xl rounded-2xl"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
