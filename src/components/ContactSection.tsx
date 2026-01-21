import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
      content: "Manaus, Amazonas - Brasil",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (92) 99999-9999",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@apse.com.br",
    },
    {
      icon: Clock,
      title: "Atendimento",
      content: "Seg - Sex: 08h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Contato
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Atendemos Manaus e Região. Solicite sua proposta comercial técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-primary-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-primary-foreground/80">{item.content}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-secondary/20 rounded-xl">
              <p className="text-primary-foreground font-medium text-center">
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
              className="bg-card rounded-2xl p-8 lg:p-10 shadow-2xl"
            >
              <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                Solicite um Orçamento
              </h3>
              <div className="space-y-5">
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
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-12"
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
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-12"
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
                    placeholder="Ex: Diagnóstico de Riscos, Laudo Técnico..."
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-12"
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
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
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
