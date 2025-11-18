import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import project1 from "@assets/generated_images/Dashboard_web_app_project_358be8d2.png";
import project2 from "@assets/generated_images/Mobile_shopping_app_project_7ce73043.png";
import project3 from "@assets/generated_images/Creative_agency_website_project_553b8582.png";
import project4 from "@assets/generated_images/Productivity_app_project_0633417a.png";

const projects = [
  {
    title: "Nephra",
    description: "A comprehensive health tracking web application designed to support individuals managing chronic kidney disease (CKD).",
    image: project1,
    tags: ["React", "Anthropic Claude", "Supabase"],
  },
  {
    title: "E-Commerce Mobile App",
    description: "Beautiful shopping experience with seamless checkout and personalized recommendations.",
    image: project2,
    tags: ["React Native", "Node.js", "Stripe"],
  },
  {
    title: "Creative Agency Website",
    description: "Modern, bold website design for a creative agency with smooth animations and interactive elements.",
    image: project3,
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Task Management System",
    description: "Intuitive productivity app with kanban boards, team collaboration, and deadline tracking.",
    image: project4,
    tags: ["Vue.js", "Firebase", "Vuetify"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-card" data-testid="section-projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto" data-testid="text-projects-subtitle">
          A selection of recent work that showcases my design and development expertise
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 group"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-project-${index}`}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-serif" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" data-testid={`badge-project-${index}-tag-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="default"
                  onClick={() => console.log(`View project: ${project.title}`)}
                  data-testid={`button-view-project-${index}`}
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
