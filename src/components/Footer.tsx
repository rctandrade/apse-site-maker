import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import apseLogo from "@/assets/apse-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", bg: "bg-blue-600" },
    { icon: Instagram, href: "#", label: "Instagram", bg: "bg-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", bg: "bg-red-600" },
  ];

  return (
    <footer className="bg-footer text-footer-foreground relative">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={apseLogo}
              alt="APSE Logo"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <div>
              <span className="block font-heading font-bold text-2xl">
                APSE
              </span>
              <span className="block text-sm text-footer-foreground/70">
                Amazon Process & Safety Engineering
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-12 h-12 rounded-full ${social.bg} flex items-center justify-center hover:opacity-80 hover:scale-110 transition-all`}
              >
                <social.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-footer-foreground/20" />

          {/* Copyright */}
          <p className="text-sm text-footer-foreground/60 text-center">
            Copyright © 2023 APSE. All Rights Reserved.
          </p>
        </div>
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
