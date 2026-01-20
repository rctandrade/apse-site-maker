import { ArrowRight } from "lucide-react";
import apseLogo from "@/assets/apse-logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Sobre a APSE
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
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
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold text-lg hover:gap-4 transition-all group"
            >
              Leia mais sobre nossa história
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Logo Image */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl transform scale-110" />
              <img
                src={apseLogo}
                alt="APSE Logo"
                className="relative w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
