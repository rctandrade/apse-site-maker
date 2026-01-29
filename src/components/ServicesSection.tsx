import { 
  FileText, 
  Shield, 
  ClipboardCheck, 
  GraduationCap, 
  Search, 
  Flame, 
  FlaskConical, 
  Briefcase,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
}

const ServiceCard = ({ category }: { category: ServiceCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = category.icon;

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border group">
      {/* Header */}
      <div className="p-6 lg:p-8">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-heading font-bold text-lg lg:text-xl text-foreground mb-3">
          {category.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base mb-4">
          {category.description}
        </p>
        
        {/* Expandable Items */}
        <div className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[1000px]" : "max-h-0"
        )}>
          <ul className="space-y-2 pt-4 border-t border-border">
            {category.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent/80 transition-colors"
        >
          {isExpanded ? (
            <>
              Ver menos
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Ver todos os serviços
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const serviceCategories: ServiceCategory[] = [
    {
      id: "programas",
      title: "Programas, Planos e Documentos",
      description: "Documentação técnica completa para adequação às normas regulamentadoras e gestão de riscos ocupacionais.",
      icon: FileText,
      items: [
        "PGR – Programa de Gerenciamento de Riscos (NR-01)",
        "GRO – Gerenciamento de Riscos Ocupacionais",
        "Inventário de Riscos Ocupacionais",
        "Plano de Ação em SST",
        "APR – Análise Preliminar de Riscos",
        "Permissão de Trabalho (PT)",
        "Ordens de Serviço de SST",
        "Mapa de Riscos",
        "Procedimentos Operacionais Padrão (POP)",
        "Plano de Emergência",
        "Plano de Atendimento a Emergências (PAE)",
        "Plano de Segurança do Trabalho",
        "Relatórios Técnicos de SST"
      ]
    },
    {
      id: "laudos",
      title: "Laudos Técnicos SST",
      description: "Laudos periciais e técnicos para caracterização de insalubridade, periculosidade e riscos ambientais.",
      icon: ClipboardCheck,
      items: [
        "LTCAT – Laudo Técnico das Condições Ambientais",
        "Laudo de Insalubridade (NR-15)",
        "Laudo de Periculosidade (NR-16)",
        "Laudo de Ruído Ocupacional",
        "Laudo de Calor (IBUTG)",
        "Laudo de Vibração (VCI / VMB)",
        "Laudo de Agentes Químicos",
        "Laudo de Poeiras Minerais",
        "Laudo de Iluminação",
        "Laudo de Conforto Térmico",
        "Laudo de Riscos Ambientais",
        "Laudo Técnico para PPP"
      ]
    },
    {
      id: "previdenciario",
      title: "Previdenciário / eSocial",
      description: "Suporte técnico completo para adequação ao eSocial SST e documentação previdenciária.",
      icon: Shield,
      items: [
        "PPP – Perfil Profissiográfico Previdenciário",
        "Elaboração e validação do PPP",
        "Integração LTCAT × PPP × PGR",
        "S-2240 (Agentes nocivos)",
        "S-2210 (CAT – suporte técnico)",
        "Assessoria técnica ao eSocial SST",
        "Parecer técnico previdenciário"
      ]
    },
    {
      id: "treinamentos",
      title: "Treinamentos e Capacitações",
      description: "Capacitação profissional conforme as Normas Regulamentadoras para sua equipe.",
      icon: GraduationCap,
      items: [
        "NR-01 – Integração de Segurança",
        "NR-05 – CIPA",
        "NR-06 – Equipamentos de Proteção Individual",
        "NR-10 – Segurança em Instalações Elétricas",
        "NR-11 – Movimentação de Cargas",
        "NR-12 – Máquinas e Equipamentos",
        "NR-17 – Ergonomia",
        "NR-18 – Construção Civil",
        "NR-20 – Inflamáveis e Combustíveis",
        "NR-23 – Proteção Contra Incêndios",
        "NR-33 – Espaço Confinado",
        "NR-35 – Trabalho em Altura",
        "Treinamentos personalizados de SST"
      ]
    },
    {
      id: "auditoria",
      title: "Auditoria, Inspeções e Fiscalizações",
      description: "Diagnóstico de conformidade e preparação para fiscalizações do trabalho.",
      icon: Search,
      items: [
        "Auditoria de SST (interna e externa)",
        "Inspeções técnicas de segurança",
        "Checklists de Normas Regulamentadoras",
        "Diagnóstico de conformidade legal",
        "Preparação para fiscalização MTE",
        "Parecer técnico em autos de infração",
        "Relatórios técnicos para ações judiciais trabalhistas"
      ]
    },
    {
      id: "incendio",
      title: "Engenharia de Incêndio e Emergências",
      description: "Projetos e documentação para prevenção e combate a incêndios e situações de emergência.",
      icon: Flame,
      items: [
        "PPCI / PSCIP / Projeto de Incêndio",
        "Renovação de AVCB",
        "Laudo de Segurança Contra Incêndio",
        "Dimensionamento de extintores",
        "Sinalização de emergência",
        "Iluminação de emergência",
        "Plano de abandono",
        "Treinamento de brigada"
      ]
    },
    {
      id: "quimica",
      title: "Engenharia Química",
      description: "Gestão de produtos químicos, classificação de riscos e adequação às normas de segurança química.",
      icon: FlaskConical,
      items: [
        "Laudo de agentes químicos ocupacionais",
        "Classificação de produtos químicos",
        "FISPQ / FDS",
        "Gerenciamento de produtos perigosos",
        "Plano de manuseio e armazenamento de químicos",
        "Avaliação de riscos químicos",
        "Plano de emergência química",
        "Parecer técnico químico-industrial",
        "Adequação ANVISA",
        "Plano de Controle Químico"
      ]
    },
    {
      id: "consultoria",
      title: "Consultoria Técnica Multidisciplinar",
      description: "Assessoria especializada para empresas, contadores, RH e processos licitatórios.",
      icon: Briefcase,
      items: [
        "Consultoria em SST",
        "Consultoria industrial",
        "Consultoria em processos seguros",
        "Consultoria para indústrias, comércios e serviços",
        "Suporte técnico a contadores e RH",
        "Suporte técnico para licitações",
        "Elaboração de Termo de Referência",
        "Análise técnica de editais",
        "Responsabilidade técnica (RT)",
        "ART no CREA",
        "Parecer técnico",
        "Relatórios periciais",
        "Assistência técnica judicial",
        "Laudo técnico para perícia trabalhista",
        "Laudo técnico administrativo"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Completas em Engenharia de Segurança
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços em Engenharia de Segurança do Trabalho, 
            Engenharia Química e Consultoria Técnica. Clique em cada categoria para ver todos os serviços disponíveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
