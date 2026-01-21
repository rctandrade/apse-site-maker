import { MapPin, FileText, CheckCircle, RefreshCw } from "lucide-react";

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const Step = ({ number, icon, title, description, isLast }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-border" />
      )}
      
      {/* Icon Circle */}
      <div className="relative z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
        <div className="text-primary-foreground">{icon}</div>
      </div>
      
      {/* Step Number */}
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm mb-4">
        {number}
      </span>
      
      {/* Content */}
      <h3 className="font-heading font-bold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm max-w-[200px]">
        {description}
      </p>
    </div>
  );
};

const MethodologySection = () => {
  const steps = [
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Visita e Medição",
      description: "Coleta de dados in-loco com equipamentos calibrados.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Análise e Relatórios",
      description: "Elaboração de laudos técnicos e plano de ação detalhado.",
    },
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Entrega Técnica",
      description: "Reunião de apresentação e entrega da ART registrada.",
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Monitoramento",
      description: "Ciclo de auditoria e melhoria contínua garantida.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/60">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossa Metodologia
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Processo de Entrega
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma metodologia estruturada para garantir resultados consistentes e conformidade total.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
