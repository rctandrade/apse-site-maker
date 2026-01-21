import teamEngineers from "@/assets/team-engineers.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={teamEngineers}
                alt="Equipe de engenheiros APSE"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Sobre a APSE
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              A Força da Tripla Formação
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Não entregamos apenas papéis. Nossa metodologia integra{" "}
                <strong className="text-foreground">Química</strong>,{" "}
                <strong className="text-foreground">Segurança do Trabalho</strong> e{" "}
                <strong className="text-foreground">Engenharia de Produção</strong>.
              </p>
              <p>
                Isso nos permite mitigar riscos regulatórios ao mesmo tempo que
                aumentamos a eficiência do seu chão de fábrica.
              </p>
              <p className="font-medium text-foreground">
                Atuamos com emissão de ART e responsabilidade técnica completa.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-primary">
                  15+
                </span>
                <span className="text-sm text-muted-foreground">Anos de Experiência</span>
              </div>
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-secondary">
                  200+
                </span>
                <span className="text-sm text-muted-foreground">Projetos Entregues</span>
              </div>
              <div>
                <span className="block font-heading text-3xl md:text-4xl font-bold text-accent">
                  100%
                </span>
                <span className="text-sm text-muted-foreground">Conformidade NR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
