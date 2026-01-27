import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/Screenshot (228)_1763438686608.png";

export default function HealthEquityCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-20 md:py-32">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate active-elevate-2">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-foreground">
          Health Equity NYC
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          A community-focused data visualization and analytics dashboard that empowers NYC residents, health workers, and advocates to understand health disparities across the five boroughs.
        </p>

        <img 
          src={heroImage} 
          alt="Health Equity NYC Dashboard" 
          className="w-full rounded-xl shadow-lg mb-12 border border-border"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="font-bold mb-2 text-foreground">Role</h3>
            <p className="text-muted-foreground">Product Designer & Developer</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-foreground">Timeline</h3>
            <p className="text-muted-foreground">2023 - Present</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-foreground">Stack</h3>
            <p className="text-muted-foreground">Next.js, Recharts, OpenAI API</p>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Health Equity NYC combines real-world health data with environmental factors to tell the story of health equity in New York City in plain, accessible language. The application translates complex health statistics into actionable community insights, enabling residents to advocate for better health resources.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Core Problem Solved</h2>
            <p className="text-muted-foreground leading-relaxed">
              Health data exists, but most people don't understand it. This dashboard translates complex health statistics into actionable community insights, enabling residents to advocate for better health resources and understand what's happening in their neighborhoods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Key Features</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li><strong>Advanced Multi-Dimensional Filtering:</strong> Filter by 10+ health conditions and 200+ neighborhoods.</li>
              <li><strong>Interactive NYC Health Map:</strong> Color-coded risk levels with environmental overlays.</li>
              <li><strong>Plain-Language Community Insights:</strong> Simple metrics like "X out of 100 neighbors affected".</li>
              <li><strong>AI-Powered Report Generation:</strong> Automated community health reports using OpenAI.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Technical Architecture</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Built with Next.js 15, React 19, and Tailwind CSS. Data visualization is powered by Recharts, and AI insights are generated via the OpenAI API.
            </p>
          </section>

          <div className="flex gap-4 pt-8">
            <Button asChild size="lg" className="rounded-full">
              <a href="https://vercel.com/cherice-herons-projects/v0-health-equity-nyc-8b" target="_blank" rel="noopener noreferrer">
                View Live Demo <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
