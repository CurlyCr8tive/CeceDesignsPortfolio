import { Card } from "@/components/ui/card";
import { Code, Palette, Zap, Users, Globe, Lightbulb } from "lucide-react";
import headshotImage from "@assets/ChatGPT Image Sep 22, 2025, 01_50_17 AM_1763426260043.png";

const skills = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Code, label: "Frontend Development" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Users, label: "User Research" },
  { icon: Globe, label: "Responsive Design" },
  { icon: Lightbulb, label: "Creative Problem Solving" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src={headshotImage}
              alt="Professional headshot"
              className="rounded-2xl w-full max-w-md object-contain"
              data-testid="img-headshot"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8" data-testid="text-about-title">
              About Me
            </h2>
            <div className="space-y-4 text-base md:text-lg max-w-prose mb-8" data-testid="text-about-bio">
              <p>
                I'm a passionate designer and developer with over 5 years of experience creating
                digital products that users love. My work sits at the intersection of beautiful
                design and clean, efficient code.
              </p>
              <p>
                I specialize in building responsive web applications with modern frameworks,
                always keeping the user experience at the forefront. From concept to deployment,
                I bring ideas to life with attention to detail and a commitment to quality.
              </p>
              <p>
                When I'm not coding or designing, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the dev community.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-4 flex flex-col items-center text-center gap-3 hover-elevate"
                  data-testid={`card-skill-${index}`}
                >
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{skill.label}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
