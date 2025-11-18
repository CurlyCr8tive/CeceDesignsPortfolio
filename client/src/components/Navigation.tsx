import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About,", id: "about" },
    { label: "Projects,", id: "projects" },
    { label: "Resume", id: "resume" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="font-serif text-xl md:text-2xl font-bold hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="button-logo"
            >
              Portfolio
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.id}
                  variant="ghost"
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`button-nav-${link.id}`}
                  className="text-primary hover:text-primary font-semibold"
                >
                  {link.label}
                </Button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden" data-testid="mobile-menu">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-3xl font-serif font-semibold text-primary hover-elevate active-elevate-2 px-6 py-3 rounded-md"
                data-testid={`button-mobile-nav-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
