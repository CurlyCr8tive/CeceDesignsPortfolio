import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section id="featured" className="py-16 md:py-20 px-4" data-testid="section-featured">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-featured-title">
          Featured Work
        </h2>
        <p className="text-lg text-muted-foreground mb-12" data-testid="text-featured-subtitle">
          A deeper look into my end-to-end UX process.
        </p>

        <Card className="overflow-hidden bg-primary text-primary-foreground border-0" data-testid="card-featured-project">
          <CardHeader className="pb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" data-testid="badge-health-tech">
                Health tech
              </Badge>
              <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30" data-testid="badge-ux-ui">
                UX • UI
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-project-title">
              Nephra – Kidney Health Companion
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-base md:text-lg leading-relaxed" data-testid="text-project-description">
              Built for late-stage kidney disease patients. Nephra tracks daily symptoms (blood pressure, water intake, pain, stress, and more), 
              pairs them with an AI journal companion, and organizes education, questions, and next steps to help people prepare for nephrology 
              appointments and move through the transplant process with less confusion and delay.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                onClick={() => console.log('Navigate to live demo')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                data-testid="button-live-demo"
              >
                Live / demo link
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => console.log('View GitHub')}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-github"
              >
                View code on GitHub
                <Github className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
