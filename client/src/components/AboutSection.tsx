import { Card } from "@/components/ui/card";
import portraitImage from "@assets/ChatGPT Image Sep 22, 2025, 01_50_17 AM_1763425821495.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-4" data-testid="section-about">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={portraitImage}
              alt="Portrait of Cherice Heron"
              className="rounded-2xl w-full max-w-md aspect-square object-cover"
              data-testid="img-portrait"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">
              About
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed" data-testid="text-about-bio">
              <p>
                I come from direct care and research, and I design like someone who has sat with people in real-world systems: 
                I care about clarity, emotional safety, and making complex flows feel human-scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
