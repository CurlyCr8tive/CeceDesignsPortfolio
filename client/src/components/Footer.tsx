import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, label: "GitHub" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Twitter, label: "Twitter" },
  ];

  return (
    <footer className="py-12 px-4 border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © {currentYear} Alex Rivera. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1" data-testid="text-built-with">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          <nav className="flex gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => console.log(`Navigate to ${social.label}`)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`button-footer-social-${social.label.toLowerCase()}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
