import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import project1 from "@assets/Screenshot (213)_1763432063864.png";
import project2 from "@assets/Screenshot (217)_1763434952523.png";
import project3 from "@assets/Screenshot (228)_1763438686608.png";
import makeupBagImage from "@/../../attached_assets/Screenshot (229)_1763466455741.png";

const projects = [
  {
    title: "Nephra",
    description: "A comprehensive health tracking web application designed to support individuals managing chronic kidney disease (CKD).",
    image: project1,
    tags: ["React", "Anthropic Claude", "Supabase"],
    link: "#"
  },
  {
    title: "Influencer CRM",
    description: "A comprehensive influencer relationship management platform designed specifically for gaming content creators.",
    image: project2,
    tags: ["TypeScript", "Tailwind CSS", "Figma"],
    link: "#"
  },
  {
    title: "Health Equity NYC",
    description: "A community-focused data visualization and analytics dashboard that empowers NYC residents, health workers, and advocates to understand health disparities across the five boroughs.",
    image: project3,
    tags: ["Recharts", "Next.js API Routes", "OpenAI API"],
    link: "/projects/health-equity-nyc"
  },
  {
    title: "My Makeup Bag",
    description: "A mobile app design that transforms makeup organization from a stressful chore into a delightful, time-saving experience.",
    image: makeupBagImage,
    tags: ["Figma", "SurveyMonkey", "TryMata"],
    link: "#"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-background" data-testid="section-projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto" data-testid="text-projects-subtitle">
          A selection of recent work that showcases my design and development expertise
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6"
              data-testid={`card-project-${index}`}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:shadow-md">
                <div className={index <= 2 ? "overflow-hidden" : "aspect-video overflow-hidden"}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={index <= 2 ? "w-full object-contain transition-transform duration-700 group-hover:scale-105" : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}
                    data-testid={`img-project-${index}`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 px-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-primary/5 text-primary border-none rounded-full px-4" data-testid={`badge-project-${index}-tag-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                {project.link !== "#" ? (
                  <Link href={project.link}>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto text-lg font-bold group/btn"
                      data-testid={`button-view-project-${index}`}
                    >
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="link"
                    className="text-primary p-0 h-auto text-lg font-bold group/btn"
                    onClick={() => console.log(`View project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}