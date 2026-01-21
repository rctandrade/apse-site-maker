import { Facebook, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";
import apseLogo from "@/assets/apse-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", bg: "bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", bg: "bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", bg: "bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", bg: "bg-red-600" },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <img
                src={apseLogo}
                alt="APSE Logo"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="block font-heading font-bold text-xl">
                  APSE
                </span>
                <span className="block text-xs text-footer-foreground/70">
                  Amazon Process & Safety Engineering
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-footer-foreground/70 hover:text-footer-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-10 h-10 rounded-full ${social.bg} flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all`}
              >
                <social.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-footer-foreground/10 my-8 max-w-6xl mx-auto" />

        {/* Copyright */}
        <p className="text-sm text-footer-foreground/50 text-center">
          © {new Date().getFullYear()} APSE - Amazon Process & Safety Engineering. Todos os direitos reservados.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:bg-secondary/90 hover:scale-110 transition-all flex items-center justify-center z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
