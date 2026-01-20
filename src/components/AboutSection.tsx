import { Button } from "@/components/ui/button";
import apseLogo from "@/assets/apse-logo.png";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              O que é
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">APSE - Amazon Process & Safety Engineering</strong> é
                uma empresa especializada em soluções integradas de engenharia,
                segurança do trabalho e consultoria empresarial.
              </p>
              <p>
                Atuamos com excelência na região amazônica, oferecendo serviços
                de alta qualidade que atendem às necessidades específicas de
                cada cliente, sempre priorizando a segurança, a eficiência e o
                desenvolvimento sustentável.
              </p>
              <p>
                Nossa equipe é composta por profissionais altamente
                qualificados, comprometidos em entregar resultados que superem
                as expectativas.
              </p>
            </div>
            <Button
              className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Logo Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-hero opacity-10 rounded-3xl blur-3xl transform scale-110" />
              <img
                src={apseLogo}
                alt="APSE Logo"
                className="relative w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
