import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Teal Overlay */}
      <div className="absolute inset-0 bg-primary/85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto animate-fade-in">
          APSE: Engenharia e Segurança de Ponta na Amazônia
        </h1>
        <p
          className="text-primary-foreground/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Soluções integradas para otimizar processos e garantir segurança industrial.
        </p>
        <Button
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
