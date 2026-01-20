import { Settings, HardHat, Waves } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full gradient-hero overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl z-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in">
              APSE: Soluções Integradas em Engenharia e Segurança
            </h1>
            <p
              className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Excelência em serviços de engenharia, consultoria e segurança do
              trabalho para a região amazônica.
            </p>
          </div>

          {/* Right Graphic - Abstract Logo representation */}
          <div
            className="flex-1 flex justify-center lg:justify-end animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer gear shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Settings
                  className="w-full h-full text-primary-foreground/10"
                  strokeWidth={0.5}
                />
              </div>
              {/* Inner elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <HardHat
                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 text-primary-foreground/20"
                    strokeWidth={1}
                  />
                  <Waves
                    className="w-24 h-24 md:w-32 md:h-32 text-primary-foreground/15"
                    strokeWidth={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 100V50C240 0 480 0 720 50C960 100 1200 100 1440 50V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
