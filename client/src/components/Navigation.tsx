import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
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
    { label: "Work", id: "projects", type: "scroll" },
    { label: "About", id: "about", type: "scroll" },
    { label: "Resume", path: "/resume", type: "link" },
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
            <Link href="/">
              <button
                className="font-serif text-2xl font-bold tracking-tighter hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid="button-logo"
              >
                Cherice Heron.
              </button>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.type === "link" ? (
                  <Link key={link.label} href={link.path!}>
                    <button className="text-foreground hover:text-primary font-medium transition-colors" data-testid={`button-nav-${link.label.toLowerCase()}`}>
                      {link.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.id!)}
                    data-testid={`button-nav-${link.id}`}
                    className="text-foreground hover:text-primary font-medium transition-colors"
                    disabled={location !== "/"}
                  >
                    {link.label}
                  </button>
                )
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
              link.type === "link" ? (
                <Link key={link.label} href={link.path!}>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif font-semibold text-primary hover-elevate active-elevate-2 px-6 py-3 rounded-md"
                    data-testid={`button-mobile-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-3xl font-serif font-semibold text-primary hover-elevate active-elevate-2 px-6 py-3 rounded-md"
                  data-testid={`button-mobile-nav-${link.id}`}
                  disabled={location !== "/"}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </>
  );
}
