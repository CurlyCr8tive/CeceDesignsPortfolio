import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";

const projects = [
  {
    title: "Health Equity NYC Dashboard",
    description: "A data-to-UI exploration that surfaces asthma, diabetes, and hypertension trends across NYC in plain language for community health workers and residents.",
    tags: ["Civic / public health", "Data visualization"],
    links: [
      { label: "Live / demo link", icon: ExternalLink, testId: "button-health-equity-demo" },
      { label: "View code on GitHub", icon: Github, testId: "button-health-equity-github" },
    ],
  },
  {
    title: "My Makeup Bag – Virtual Inventory",
    description: "A UX case study and Figma prototype for a virtual makeup inventory that lets users log what they own, see smart VR-style overlay suggestions for looks using their existing products, and get ideas for physical organizers that match their real makeup collection.",
    tags: ["UX case study", "Figma prototype"],
    links: [
      { label: "View Figma prototype", icon: ExternalLink, testId: "button-makeup-prototype" },
      { label: "View case study", icon: FileText, testId: "button-makeup-case-study" },
    ],
  },
  {
    title: "Whisker Wise – ESA & Cat Care Companion",
    description: "A guided experience for ESA cat guardians that explains legitimate housing accommodations, flags predatory 'ESA registry' scams, and helps people understand and respond to their cat's behavior.",
    tags: ["UX research", "IA", "Interaction design"],
    links: [
      { label: "View clickable prototype", icon: ExternalLink, testId: "button-whisker-prototype" },
      { label: "Read case study", icon: FileText, testId: "button-whisker-case-study" },
    ],
  },
];

export default function MoreWork() {
  return (
    <section id="work" className="py-16 md:py-20 px-4 bg-card" data-testid="section-more-work">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-more-work-title">
          More work
        </h2>
        <p className="text-lg text-muted-foreground mb-12" data-testid="text-more-work-subtitle">
          In-progress builds and shipped experiments across health, civic, and lifestyle.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-project-${index}`}>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs" data-testid={`badge-project-${index}-tag-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold mb-2" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="ghost"
                      size="sm"
                      onClick={() => console.log(`Navigate to: ${link.label}`)}
                      className="justify-start px-2"
                      data-testid={link.testId}
                    >
                      <link.icon className="mr-2 w-4 h-4" />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
