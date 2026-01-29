import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import apseLogo from "@/assets/apse-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", bg: "bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", bg: "bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", bg: "bg-blue-700" },
    { icon: Youtube, href: "#", label: "YouTube", bg: "bg-red-600" },
  ];

  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={apseLogo}
                alt="APSE Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <div>
                <span className="block font-heading font-bold text-lg">
                  APSE
                </span>
                <span className="block text-xs text-footer-foreground/70">
                  Amazon Process & Safety Engineering
                </span>
              </div>
            </div>
            <p className="text-footer-foreground/60 text-sm leading-relaxed">
              Soluções integradas em engenharia de segurança do trabalho, 
              engenharia química e consultoria técnica.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/70 hover:text-footer-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-footer-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Rua Leandro Ferreira, 79, Sala 8<br />Zumbi dos Palmares, Manaus/AM<br />CEP 69084-463</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-footer-foreground/70">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a 
                  href="https://wa.me/5592994340022" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-footer-foreground transition-colors"
                >
                  +55 (92) 99434-0022
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-footer-foreground/70">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a 
                  href="mailto:allisson.eq@gmail.com"
                  className="hover:text-footer-foreground transition-colors"
                >
                  allisson.eq@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Redes Sociais</h4>
            <div className="flex items-center gap-3">
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
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-footer-foreground/10 my-8 max-w-6xl mx-auto" />

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-footer-foreground/50 text-center">
          © {new Date().getFullYear()} APSE - Amazon Process & Safety Engineering. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
