import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Code2, Link2, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const contactInfo = [
    { icon: Mail, label: "ChericeHeron@gmail.com", href: "mailto:ChericeHeron@gmail.com" },
    { icon: Phone, label: "(646) 806-1204", href: "tel:6468061204" },
    { icon: Code2, label: "GitHub", href: "https://github.com/CurlyCre8ive" },
    { icon: Link2, label: "LinkedIn", href: "https://www.linkedin.com/in/chericeheron" },
    { icon: Globe, label: "Portfolio", href: "https://cecedesignsportfolio.netlify.app" },
  ];

  const skills = {
    design: ["UX UI Design", "User Research and Analysis", "Product Strategy", "Compliance and Regulation"],
    development: ["HTML and CSS", "VS Code", "GitHub", "Claude Code", "Codex"],
    tools: ["Figma", "Large Language Models", "Optimal Workshop", "Maze", "UsabilityHub", "Canva", "Aider", "Pinecone"],
  };

  const experience = [
    {
      title: "Assistant Director",
      company: "Wayside Out-Reach Development Inc.",
      location: "NY",
      period: "2021 – 2024",
      achievements: [
        "Managed program operations, documentation, and compliance while supporting recreational and educational services for seniors",
        "Maintained funding records, synthesized reports, and coordinated support services including entitlement counseling and crisis referrals",
      ],
    },
    {
      title: "Support Services Planner",
      company: "Job Path",
      location: "NY",
      period: "2019 – 2021",
      achievements: [
        "Provided supportive care for individuals with intellectual and developmental disabilities in alignment with OPWDD guidelines",
        "Supported daily living, safety, and treatment plans while promoting independence and well being",
        "Built trust with clients and supported engagement in daily routines and community activities",
      ],
    },
    {
      title: "Retail Sales Associate",
      company: "American's Best",
      location: "NY",
      period: "2018 – 2019",
      achievements: [
        "Educated patients on eyewear options, lens care, and frame selection based on prescriptions and lifestyle needs",
        "Supported patient experience by dispensing glasses, managing appointments, verifying insurance, and addressing questions",
        "Conducted vision tests and maintained accurate prescription and diagnostic records to support clinical workflows",
      ],
    },
    {
      title: "Hiring Manager",
      company: "Paging Zone",
      location: "NY",
      period: "2017 – 2018",
      achievements: [
        "Managed high volume recruitment across multiple locations for entry level and management roles within wireless retail",
        "Identified qualified candidates and supported the hiring process from approval through onboarding",
        "Partnered with hiring managers to align hiring needs and coordinated interviews to ensure strong candidate fit",
      ],
    },
  ];

  const education = [
    {
      program: "AI Native Program",
      institution: "Pursuit",
      location: "New York, NY",
      year: "2025",
    },
    {
      program: "UX/UI Design",
      institution: "Springboard",
      location: "New York, NY",
      year: "2023",
    },
    {
      program: "Biology",
      institution: "City College of New York",
      location: "New York, NY",
      year: "2015",
    },
    {
      program: "Anthropology",
      institution: "Hunter College",
      location: "New York, NY",
      year: "2010",
    },
  ];

  const featuredBuilds = [
    { name: "Nephra", href: "https://nephra-production.up.railway.app/auth" },
    { name: "Pursuit Connection OS", href: "https://connectionos.vercel.app" },
  ];

  const featuredDesigns = [
    { name: "Influencer CRM", href: "https://www.figma.com/proto/P7CFHupP8gjnQlTDUl0E6R/1V1-Me-Frames?node-id=1-1015&p=f&t=kKh5C1k4HFk6FveG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
    { name: "My Makeup Bag", href: "https://www.figma.com/proto/mLU5fl7zKiiqdQR0cuojyS/My-Makeup-Bag-Prototype?node-id=95-2150&t=MkHqGgaIilkdP5Jx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-3" data-testid="text-resume-name">
            Cherice Heron
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium mb-6">
            AI Product Designer | UX/UI Designer | AI Solutions Architect
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {contactInfo.map((contact, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="hover-elevate"
                data-testid={`button-contact-${index}`}
              >
                <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <contact.icon className="w-4 h-4 mr-2" />
                  {contact.label}
                  {contact.href.startsWith('http') && <ExternalLink className="w-3 h-3 ml-2" />}
                </a>
              </Button>
            ))}
          </div>

          {/* Featured Work */}
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Featured AI Builds</p>
              <div className="flex gap-3">
                {featuredBuilds.map((item, i) => (
                  item.href ? (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-sm">
                      {item.name}
                    </a>
                  ) : (
                    <span key={i} className="text-foreground font-medium text-sm">{item.name}</span>
                  )
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Featured Figma Designs</p>
              <div className="flex gap-3">
                {featuredDesigns.map((item, i) => (
                  item.href ? (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium text-sm">
                      {item.name}
                    </a>
                  ) : (
                    <span key={i} className="text-foreground font-medium text-sm">{item.name}</span>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4" data-testid="section-summary">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 hover-elevate">
            <h2 className="text-3xl font-serif font-bold mb-4">Professional Summary</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              AI Product Designer specializing in compliant, accessibility‑first UI with expert skills in research and design principles, product management, AI implementation and ethical AI design. Led AI and consumer product builds that transform complex data into usable experiences while maintaining clear boundaries around risk, interpretation, and trust.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-skills">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Key Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover-elevate" data-testid="card-design-skills">
              <h3 className="text-xl font-semibold mb-4 text-primary">Design</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-dev-skills">
              <h3 className="text-xl font-semibold mb-4 text-primary">Development</h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover-elevate" data-testid="card-tools-skills">
              <h3 className="text-xl font-semibold mb-4 text-primary">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-4" data-testid="section-experience">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Professional Experience</h2>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="p-8 hover-elevate" data-testid={`card-experience-${index}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-lg text-primary font-medium">{job.company}</p>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 md:text-right">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-education">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Education</h2>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-education-${index}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{edu.program}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0 font-medium">{edu.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
