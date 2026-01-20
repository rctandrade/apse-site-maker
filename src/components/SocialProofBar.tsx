import { Shield, Award, CheckCircle, BadgeCheck, Star, Verified } from "lucide-react";

const SocialProofBar = () => {
  const logos = [
    { icon: Shield, label: "ISO 9001" },
    { icon: Award, label: "ISO 14001" },
    { icon: CheckCircle, label: "OHSAS 18001" },
    { icon: BadgeCheck, label: "NBR 16001" },
    { icon: Star, label: "CREA" },
    { icon: Verified, label: "INMETRO" },
  ];

  return (
    <section className="py-8 bg-background border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
          Certificações e Parcerias
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
            >
              <item.icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" strokeWidth={1.5} />
              <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
