import {
  Settings,
  GitBranch,
  Search,
  FlaskConical,
  Drum,
  ShieldCheck,
  Handshake,
  Presentation,
} from "lucide-react";

interface ServiceCardProps {
  letter: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: "primary" | "secondary" | "accent";
}

const ServiceCard = ({
  letter,
  title,
  description,
  icon,
  colorClass,
}: ServiceCardProps) => {
  const bgColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <div className="group p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div
        className={`w-14 h-14 rounded-xl ${bgColors[colorClass]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
        <span className="text-primary">{letter})</span> {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      letter: "A",
      title: "Engenharia",
      description:
        "Gerenciamento e execução de projetos de engenharia com excelência técnica e compromisso com prazos.",
      icon: <Settings className="w-7 h-7 text-primary-foreground" />,
      colorClass: "primary",
    },
    {
      letter: "B",
      title: "Consultoria em Gestão",
      description:
        "Otimização de processos empresariais e implementação de sistemas de gestão integrada.",
      icon: <GitBranch className="w-7 h-7 text-secondary-foreground" />,
      colorClass: "secondary",
    },
    {
      letter: "C",
      title: "Perícia Técnica",
      description:
        "Inspeções técnicas, laudos periciais e relatórios especializados para suporte jurídico e técnico.",
      icon: <Search className="w-7 h-7 text-primary-foreground" />,
      colorClass: "primary",
    },
    {
      letter: "D",
      title: "Testes e Análises",
      description:
        "Ensaios laboratoriais e análises de materiais com precisão e confiabilidade.",
      icon: <FlaskConical className="w-7 h-7 text-accent-foreground" />,
      colorClass: "accent",
    },
    {
      letter: "E",
      title: "Comércio de Produtos Químicos",
      description:
        "Importação, exportação e distribuição de produtos químicos com segurança e conformidade.",
      icon: <Drum className="w-7 h-7 text-primary-foreground" />,
      colorClass: "primary",
    },
    {
      letter: "G",
      title: "Comércio de EPIs",
      description:
        "Fornecimento de equipamentos de proteção individual de alta qualidade para sua equipe.",
      icon: <ShieldCheck className="w-7 h-7 text-secondary-foreground" />,
      colorClass: "secondary",
    },
    {
      letter: "H",
      title: "Representação Comercial",
      description:
        "Representação de marcas e produtos nacionais e internacionais no mercado regional.",
      icon: <Handshake className="w-7 h-7 text-primary-foreground" />,
      colorClass: "primary",
    },
    {
      letter: "I",
      title: "Treinamentos e Cursos",
      description:
        "Capacitação profissional e desenvolvimento de competências em segurança e engenharia.",
      icon: <Presentation className="w-7 h-7 text-accent-foreground" />,
      colorClass: "accent",
    },
  ];

  return (
    <section id="servicos" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
