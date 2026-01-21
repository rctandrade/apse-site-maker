import { Building2, Award, Shield, Factory } from "lucide-react";

const SocialProofBar = () => {
  const partners = [
    { name: "FIEAM", Icon: Building2 },
    { name: "SENAI", Icon: Factory },
    { name: "SEDECTI", Icon: Building2 },
    { name: "SUFRAMA", Icon: Shield },
    { name: "CREA-AM", Icon: Award },
  ];

  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider whitespace-nowrap">
            Parceiros Institucionais:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
              >
                <partner.Icon className="w-6 h-6 text-muted-foreground" />
                <span className="font-heading font-bold text-muted-foreground text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
