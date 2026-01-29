import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const whatsappNumber = "5592994340022";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento para serviços de engenharia.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Leandro Ferreira, 79, Sala 8",
      subContent: "Zumbi dos Palmares, CEP 69084-463, Manaus/AM",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+55 (92) 99434-0022",
      isLink: true,
      href: whatsappLink,
    },
    {
      icon: Mail,
      title: "Email",
      content: "allisson.eq@gmail.com",
      isLink: true,
      href: "mailto:allisson.eq@gmail.com",
    },
    {
      icon: Clock,
      title: "Atendimento",
      content: "Seg - Sex: 08h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-16 md:py-24 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-primary-foreground/80 text-base lg:text-lg max-w-2xl mx-auto">
            Atendemos Manaus e Região. Solicite sua proposta comercial técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 rounded-xl p-5 lg:p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.isLink ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-primary-foreground/80 text-sm lg:text-base">{item.content}</p>
                      {item.subContent && (
                        <p className="text-primary-foreground/60 text-xs lg:text-sm mt-1">{item.subContent}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            
            {/* WhatsApp CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-base lg:text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </a>

            <div className="p-5 lg:p-6 bg-secondary/20 rounded-xl">
              <p className="text-primary-foreground font-medium text-center text-sm lg:text-base">
                🚀 Resposta garantida em até 24 horas úteis
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="animate-slide-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 lg:p-10 shadow-2xl"
            >
              <h3 className="font-heading font-bold text-lg lg:text-xl text-foreground mb-6">
                Solicite um Orçamento
              </h3>
              <div className="space-y-4 lg:space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-11 lg:h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Corporativo
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@empresa.com.br"
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-11 lg:h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tipo de Serviço
                  </label>
                  <Input
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Ex: PGR, Laudo Técnico, Treinamento NR..."
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-11 lg:h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Detalhes do Projeto
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva brevemente suas necessidades..."
                    rows={4}
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-5 lg:py-6 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
