import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/CurlyCr8tive" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4" data-testid="section-contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-contact-title">
          Let's Work Together
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8" data-testid="text-contact-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <Card className="p-8 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-primary" />
            <a
              href="mailto:ChericeHeron@gmail.com"
              className="text-2xl md:text-3xl font-semibold hover:text-primary transition-colors"
              data-testid="link-email"
            >
              ChericeHeron@gmail.com
            </a>
          </div>
          <p className="text-muted-foreground mb-6">
            Drop me an email and I'll get back to you as soon as possible
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = "mailto:ChericeHeron@gmail.com"}
            className="px-8"
            data-testid="button-contact-email"
          >
            Send Email
          </Button>
        </Card>

        <div>
          <p className="text-sm text-muted-foreground mb-4">Or find me on social media</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                onClick={() => {
                  console.log(`Navigate to ${social.label}`);
                  window.open(social.url, '_blank');
                }}
                data-testid={`button-social-${social.label.toLowerCase()}`}
                className="w-12 h-12"
              >
                <social.icon className="w-5 h-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
