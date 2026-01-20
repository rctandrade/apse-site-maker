import {
  Settings,
  GitBranch,
  Search,
  FlaskConical,
  Drum,
  ShieldCheck,
  Handshake,
  Presentation,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  letter: string;
  title: string;
  summary: string;
  Icon: LucideIcon;
  colorClass: "primary" | "secondary" | "accent";
}

const ServiceCard = ({
  letter,
  title,
  summary,
  Icon,
  colorClass,
}: ServiceCardProps) => {
  const bgColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  const iconColors = {
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    accent: "text-accent-foreground",
  };

  return (
    <div className="group p-6 lg:p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <div
        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl ${bgColors[colorClass]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-7 h-7 lg:w-8 lg:h-8 ${iconColors[colorClass]}`} />
      </div>
      <h3 className="font-heading font-bold text-lg lg:text-xl text-foreground mb-3">
        <span className="text-primary">{letter})</span> {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {summary}
      </p>
      <span className="inline-flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Saiba Mais
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  );
};

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      letter: "A",
      title: "Engenharia",
      summary: "Gestão completa de projetos e produção industrial.",
      Icon: Settings,
      colorClass: "primary",
    },
    {
      letter: "B",
      title: "Consultoria em Gestão",
      summary: "Otimização de processos e sistemas de gestão.",
      Icon: GitBranch,
      colorClass: "secondary",
    },
    {
      letter: "C",
      title: "Perícia Técnica",
      summary: "Inspeções, laudos e relatórios especializados.",
      Icon: Search,
      colorClass: "primary",
    },
    {
      letter: "D",
      title: "Testes e Análises",
      summary: "Ensaios laboratoriais com precisão e confiabilidade.",
      Icon: FlaskConical,
      colorClass: "accent",
    },
    {
      letter: "E",
      title: "Produtos Químicos",
      summary: "Importação e distribuição com segurança.",
      Icon: Drum,
      colorClass: "primary",
    },
    {
      letter: "G",
      title: "Comércio de EPIs",
      summary: "Equipamentos de proteção de alta qualidade.",
      Icon: ShieldCheck,
      colorClass: "secondary",
    },
    {
      letter: "H",
      title: "Representação Comercial",
      summary: "Representação de marcas no mercado regional.",
      Icon: Handshake,
      colorClass: "primary",
    },
    {
      letter: "I",
      title: "Treinamentos e Cursos",
      summary: "Capacitação em segurança e engenharia.",
      Icon: Presentation,
      colorClass: "accent",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.letter}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
