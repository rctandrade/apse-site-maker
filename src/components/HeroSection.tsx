import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const whatsappNumber = "5592994340022";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um diagnóstico técnico.`;

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroIndustrial})` }}
      />
      
      {/* Dark Teal Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 lg:mb-6 max-w-5xl mx-auto animate-fade-in">
          Engenharia de Processos e Segurança Operacional.
        </h1>
        <p
          className="text-primary-foreground/90 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 lg:mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Diagnósticos técnicos, conformidade normativa e otimização de fluxo produtivo para indústrias na Amazônia.
        </p>
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 lg:px-12 py-6 lg:py-7 text-base lg:text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Solicitar Diagnóstico Técnico
          </Button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 lg:px-12 py-6 lg:py-7 text-base lg:text-lg rounded-md shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
