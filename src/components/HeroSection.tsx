import { Button } from "@/components/ui/button";
import heroIndustrial from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroIndustrial})` }}
      />
      
      {/* Dark Teal Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 max-w-5xl mx-auto animate-fade-in">
          Engenharia de Processos e Segurança Operacional.
        </h1>
        <p
          className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Diagnósticos técnicos, conformidade normativa e otimização de fluxo produtivo para indústrias na Amazônia.
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Solicitar Diagnóstico Técnico
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
