import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";
import project1 from "@assets/Screenshot (213)_1763432063864.png";
import project2 from "@assets/Screenshot (217)_1763434952523.png";
import makeupBagImage from "@/../../attached_assets/Screenshot (229)_1763466455741.png";
import connectionOsImage from "@/../../attached_assets/connectionos-featured.png";

const projects = [
  {
    title: "Nephra",
    description: "A comprehensive health tracking web application designed to support individuals managing chronic kidney disease (CKD).",
    image: project1,
    imageClassName: "object-[40%_center]",
    tags: ["React", "Anthropic Claude", "Supabase"],
    liveLink: "https://nephra-production.up.railway.app/auth",
    link: "https://www.figma.com/make/tKrAyJkyDSXWm43uKcZTxO/Add-final-product-screenshots?fullscreen=1&t=c4P2npoTfH7iz9Ta-1",
    ctaLabel: "View Case Study"
  },
  {
    title: "Influencer CRM",
    description: "A comprehensive influencer relationship management platform designed specifically for gaming content creators.",
    image: project2,
    tags: ["TypeScript", "Tailwind CSS", "Figma"],
    liveLink: "https://www.figma.com/proto/P7CFHupP8gjnQlTDUl0E6R/1V1-Me-Frames?node-id=1-1015&p=f&t=kKh5C1k4HFk6FveG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    liveLinkLabel: "View Prototype",
    link: "https://roof-tutu-33395121.figma.site/"
  },
  {
    title: "Connection OS",
    description: "A private weekly AI digest platform for Pursuit leadership, combining dashboard archives, automated synthesis, and scheduled email delivery during parental leave.",
    image: connectionOsImage,
    tags: ["Next.js 14", "FastAPI", "Supabase", "Claude API"],
    link: "https://connectionos.vercel.app",
    ctaLabel: "View Live Project"
  },
  {
    title: "My Makeup Bag",
    description: "A mobile app design that transforms makeup organization from a stressful chore into a delightful, time-saving experience.",
    image: makeupBagImage,
    tags: ["Figma", "SurveyMonkey", "TryMata"],
    liveLink: "https://www.figma.com/make/QFQ16dsM1I4ohhCXxMA2Vs/My-Makeup-Bag-Case-Study?fullscreen=1&t=77ZH6M4sICXud6U0-1",
    liveLinkLabel: "View Case Study",
    link: "https://www.figma.com/proto/mLU5fl7zKiiqdQR0cuojyS/My-Makeup-Bag-Prototype?node-id=95-2150&t=MkHqGgaIilkdP5Jx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    ctaLabel: "View Prototype"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-background px-1 py-20 md:px-2 md:py-32" data-testid="section-projects">
      <div className="mx-auto max-w-[110rem]">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-center" data-testid="text-projects-title">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto" data-testid="text-projects-subtitle">
          A selection of recent work that showcases my design and development expertise
        </p>

        <div className="grid gap-5 lg:grid-cols-2 lg:gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6"
              data-testid={`card-project-${index}`}
            >
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:shadow-md">
                <div className="aspect-[2/1] overflow-hidden bg-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${project.imageClassName ?? ""}`}
                    data-testid={`img-project-${index}`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4 px-1">
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
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto text-lg font-bold group/btn no-default-hover-elevate no-default-active-elevate hover:bg-transparent"
                    >
                      {project.liveLinkLabel ?? "View Live Project"}
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                )}
                {project.link.startsWith("http") ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto text-lg font-bold group/btn no-default-hover-elevate no-default-active-elevate hover:bg-transparent"
                      data-testid={`button-view-project-${index}`}
                    >
                      {project.ctaLabel ?? "View Case Study"}
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </a>
                ) : project.link !== "#" ? (
                  <Link href={project.link}>
                    <Button
                      variant="ghost"
                      className="text-primary p-0 h-auto text-lg font-bold group/btn no-default-hover-elevate no-default-active-elevate hover:bg-transparent"
                      data-testid={`button-view-project-${index}`}
                    >
                      {project.ctaLabel ?? "View Case Study"}
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    className="text-primary p-0 h-auto text-lg font-bold group/btn no-default-hover-elevate no-default-active-elevate hover:bg-transparent"
                    onClick={() => console.log(`View project: ${project.title}`)}
                    data-testid={`button-view-project-${index}`}
                  >
                    {project.ctaLabel ?? "View Project"}
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
