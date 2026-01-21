import { ArrowRight } from "lucide-react";
import serviceDiagnostico from "@/assets/service-diagnostico.jpg";
import serviceProcessos from "@/assets/service-processos.jpg";
import serviceConformidade from "@/assets/service-conformidade.jpg";
import serviceMedicoes from "@/assets/service-medicoes.jpg";
import serviceTreinamento from "@/assets/service-treinamento.jpg";
import serviceGestao from "@/assets/service-gestao.jpg";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-border">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-6 lg:p-8">
        <h3 className="font-heading font-bold text-lg lg:text-xl text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4 text-sm lg:text-base">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Saiba Mais
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services: ServiceCardProps[] = [
    {
      title: "Diagnóstico e Análise de Riscos",
      description:
        "Realizamos um diagnóstico técnico profundo para identificar gargalos operacionais e riscos ocultos. O escopo inclui análise preliminar de perigos e classificação de riscos conforme as normas atuais.",
      image: serviceDiagnostico,
    },
    {
      title: "Engenharia de Processos e Fluxo",
      description:
        "Otimização do fluxo produtivo para reduzir desperdícios. Analisamos a entrada de matéria-prima e a logística interna para garantir máxima eficiência no 'chão de fábrica'.",
      image: serviceProcessos,
    },
    {
      title: "Conformidade NR e Emissão de ART",
      description:
        "Adequação completa às Normas Regulamentadoras (NRs). Entregamos toda a documentação fiscalizatória necessária com a respectiva Anotação de Responsabilidade Técnica (ART) inclusa.",
      image: serviceConformidade,
    },
    {
      title: "Medições e Laudos Técnicos",
      description:
        "Execução de vistorias técnicas com medições precisas. Elaboramos laudos periciais e pareceres técnicos fundamentados para auditorias e fiscalizações do trabalho.",
      image: serviceMedicoes,
    },
    {
      title: "Treinamentos e Capacitação",
      description:
        "Treinamentos obrigatórios e desenvolvimento gerencial. Capacitamos sua equipe não apenas para cumprir a lei, mas para criar uma cultura ativa de segurança e produtividade.",
      image: serviceTreinamento,
    },
    {
      title: "Gestão Recorrente (Pós-Venda)",
      description:
        "Não abandonamos sua empresa após a entrega. Oferecemos acompanhamento mensal, auditorias semestrais de manutenção e renovação contínua dos planos de ação.",
      image: serviceGestao,
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Completas para sua Indústria
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da análise inicial à gestão contínua, oferecemos todo o suporte técnico que sua operação precisa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
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
