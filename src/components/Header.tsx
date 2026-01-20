import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import apseLogo from "@/assets/apse-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
  ];

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={apseLogo}
              alt="APSE Logo"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="block font-heading font-bold text-primary text-lg leading-tight">
                APSE
              </span>
              <span className="block text-xs text-muted-foreground leading-tight">
                Amazon Process & Safety Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-5 py-2.5 rounded-lg font-medium text-sm text-foreground hover:bg-muted hover:text-primary transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToContact}
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 shadow-md hover:shadow-lg transition-all"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-muted transition-all"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={scrollToContact}
                className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
