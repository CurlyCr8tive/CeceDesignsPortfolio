import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap, Users, Globe, Lightbulb } from "lucide-react";
import headshotImage from "@/../../attached_assets/69c60adf-621b-42c2-96ac-3307bdf605cc_1769553104922.jpeg";

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
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
              <img
                src={headshotImage}
                alt="Equity Accessibility Clarity"
                className="w-full max-w-xl transition-all duration-700 rounded-2xl mix-blend-multiply"
                data-testid="img-headshot"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8" data-testid="text-about-title">
              About Me
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-about-bio">
              <p>
                I'm Cherice Heron, a UX/Product Designer who turns complex health and accessibility challenges into interfaces that feel simple, clear, and humane. I blend user research, inclusive design standards, and rapid prototyping to move teams from idea to working product without losing sight of the people who need it most. I believe design should reduce cognitive load and increase dignity; when products meet users where they are, outcomes improve for everyone.
              </p>
              <p>
                Recent work includes Nephra, an AI-assisted kidney-health companion that helps patients track symptoms and prepare for appointments; Health Equity NYC, a dashboard that makes dense public data easy to navigate for residents and community health workers; and Influencer Scouting Automation (ISA) for 1v1Me, which pulls creator and match data, scores fit and momentum, and generates outreach briefs so teams can prioritize the right players and creators. Across projects I focus on accessible patterns, clear empty states, and rapid prototyping loops to validate decisions with users.
              </p>
              <p>
                I've completed UX/UI coursework and project work with General Assembly (Remote Flex), Springboard, and the Pursuit AI-Native Fellowship, and I bring earlier experience in research and direct care to every project.
              </p>
              <p>
                When I'm not polishing flows, you'll find me enjoying K-dramas, playing RPGs, or hanging out with my two cats—who insist on supervising every prototype.
              </p>
              <div className="pt-4 pb-12">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="rounded-full px-6 py-2 h-auto text-base"
                >
                  Get in Touch
                </Button>
              </div>
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
