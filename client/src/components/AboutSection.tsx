import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Palette, Zap, Users, Globe, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import headshotImage1 from "@/../../attached_assets/Gemini_Generated_Image_9cb6ne9cb6ne9cb6_1769554395185.png";
import headshotImage2 from "@/../../attached_assets/Gemini_Generated_Image_9cb6ne9cb6ne9cb6_(1)_1769554395185.png";
import headshotImage3 from "@/../../attached_assets/Gemini_Generated_Image_9cb6ne9cb6ne9cb6_(2)_1769554395185.png";

const skills = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Code, label: "Frontend Development" },
  { icon: Zap, label: "Performance Optimization" },
  { icon: Users, label: "User Research" },
  { icon: Globe, label: "Responsive Design" },
  { icon: Lightbulb, label: "Creative Problem Solving" },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const flowerVariants = {
    hidden: { scale: 0.3, opacity: 0, rotate: -15 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: custom * 0.2
      }
    })
  };

  const floatVariants = {
    float: (custom: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: custom * 0.3
      }
    })
  };

  return (
    <section id="about" className="py-20 md:py-32 px-4" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex justify-center lg:justify-start self-start pt-4">
            <div className="relative flex flex-col gap-4 w-full max-w-[240px]">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
              {[headshotImage1, headshotImage2, headshotImage3].map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={flowerVariants}
                  initial={shouldReduceMotion ? { opacity: 0 } : "hidden"}
                  whileInView={shouldReduceMotion ? { opacity: 1, transition: { delay: idx * 0.2 } } : "visible"}
                  viewport={{ once: true, amount: 0.3 }}
                  custom={idx}
                >
                  <motion.div
                    variants={floatVariants}
                    animate={shouldReduceMotion ? undefined : "float"}
                    custom={idx}
                    className="bg-transparent"
                  >
                    <img
                      src={img}
                      alt={idx === 0 ? "Equity" : idx === 1 ? "Accessibility" : "Clarity"}
                      className="w-full aspect-[3/4] object-contain mix-blend-multiply"
                      style={{
                        filter: 'contrast(1.2) brightness(0.95)',
                        backgroundColor: 'transparent'
                      }}
                      data-testid={`img-headshot-${idx}`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8" data-testid="text-about-title">
              About Me
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-about-bio">
              <p>
                I'm Cherice Heron, a UX/Product Designer focused on turning complex health and accessibility challenges into clear, human-centered interfaces. I combine research, inclusive design, and rapid prototyping to move ideas into working products without losing sight of the people who rely on them.
              </p>
              <p>
                My recent work includes Nephra, an AI-assisted kidney health companion; Health Equity NYC, a public health dashboard for residents and community health workers; and Influencer Scouting Automation (ISA) for 1v1Me, a data-driven creator scoring and outreach tool. Across projects, I prioritize accessibility, thoughtful empty states, and fast validation cycles grounded in real user needs.
              </p>
              <p>
                I've trained with General Assembly, Springboard, and the Pursuit AI-Native Fellowship, and I bring a background in research and direct care to every build.
              </p>
              <p>
                When I'm not refining flows, I'm watching K-dramas, playing RPGs, or being supervised by my two cats.
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
