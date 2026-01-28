import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, Globe, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resume() {
  const contactInfo = [
    { icon: Mail, label: "chericeheron@gmail.com", href: "mailto:chericeheron@gmail.com" },
    { icon: Phone, label: "646-806-1204", href: "tel:6468061204" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chericeheron" },
    { icon: Globe, label: "Portfolio", href: "https://cecedesignsportfolio.netlify.app" },
    { icon: MapPin, label: "New York, NY" },
  ];

  const skills = {
    design: ["Figma", "Adobe Creative Suite", "Prototyping", "Wireframing", "User Research", "Accessibility (WCAG)", "Design Systems"],
    development: ["HTML/CSS", "JavaScript/TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "SQL", "API Integration", "Vector Databases", "RAG Systems", "AI Integration"],
    tools: ["Git/GitHub", "Jira", "Notion", "Miro", "FigJam", "Google Analytics"],
  };

  const experience = [
    {
      title: "UX/Product Designer & Frontend Developer",
      company: "Freelance",
      location: "Remote",
      period: "January 2024 – Present",
      achievements: [
        "Designed and developed 3+ full-stack web applications focused on health, gaming, and data visualization",
        "Conducted user research and usability testing to validate design decisions and improve user experience",
        "Implemented responsive, accessible interfaces using React, TypeScript, and modern CSS frameworks",
        "Collaborated with stakeholders to define product requirements and deliver pixel-perfect designs",
      ],
    },
    {
      title: "Direct Support Professional",
      company: "Various Organizations",
      location: "New York, NY",
      period: "2019 – 2023",
      achievements: [
        "Provided personalized care and support for individuals with developmental disabilities",
        "Developed individualized care plans and tracked progress toward goals",
        "Facilitated community integration activities and medical appointment coordination",
        "Maintained detailed documentation in compliance with regulatory standards",
      ],
    },
  ];

  const projects = [
    {
      name: "Health Equity NYC",
      description: "Dashboard visualizing NYC health data by neighborhood with AI-driven insights",
      tech: ["Next.js", "TypeScript", "Recharts", "OpenAI API", "Tailwind CSS"],
    },
    {
      name: "Nephra",
      description: "Health tracking app for kidney disease patients with symptom logging and AI chat",
      tech: ["React", "Supabase", "OpenAI", "Recharts"],
    },
    {
      name: "Influencer CRM (1v1Me)",
      description: "Creator relationship platform automating influencer discovery and outreach",
      tech: ["React", "Express", "PostgreSQL", "Drizzle ORM"],
    },
    {
      name: "My Makeup Bag",
      description: "Mobile app design for personalized makeup organization and recommendations",
      tech: ["Figma", "UI/UX Design", "Mobile Design"],
    },
  ];

  const education = [
    {
      degree: "AI-Native Full-Stack Development Fellowship",
      institution: "Pursuit",
      location: "New York, NY",
      period: "2024 – 2025",
    },
    {
      degree: "UX/UI Design Bootcamp",
      institution: "Springboard",
      period: "2023 – 2024",
    },
    {
      degree: "UX Design Immersive (Remote Flex)",
      institution: "General Assembly",
      period: "2023",
    },
    {
      degree: "Bachelor of Science - Major in Biology, Minor in Psychology",
      institution: "City College of New York",
      location: "New York, NY",
    },
    {
      degree: "Bachelor of Science - Major in Physical Anthropology, Minor in History",
      institution: "Hunter College",
      location: "New York, NY",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4" data-testid="text-resume-name">
            Cherice Heron
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            UX/Product Designer & Creative Developer
          </p>
          
          <div className="flex flex-wrap gap-4">
            {contactInfo.map((contact, index) => (
              contact.href ? (
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
              ) : (
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-md border bg-background/50">
                  <contact.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{contact.label}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-4" data-testid="section-summary">
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 hover-elevate">
            <h2 className="text-3xl font-serif font-bold mb-4">Professional Summary</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Product Designer and Creative Developer with expertise in designing and building accessible, user-centered digital products. Combines strong visual design skills with frontend development to create end-to-end solutions that prioritize usability and inclusion. Experienced in conducting user research, rapid prototyping, and implementing responsive interfaces. Passionate about leveraging AI and modern web technologies to solve real-world problems in health, accessibility, and community-focused applications.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-skills">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Skills & Technologies</h2>
          
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
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-muted/30" data-testid="section-projects">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-project-${index}`}>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4" data-testid="section-education">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Education & Training</h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-education-${index}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    {edu.location && <p className="text-muted-foreground text-sm">{edu.location}</p>}
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">{edu.period}</p>
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
