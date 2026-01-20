import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
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
      content: "Rua Exemplo, 123 - Centro, Manaus - AM",
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
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Left Column - Text & Contact Info */}
          <div className="animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Fale Conosco
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Entre em contato conosco para saber mais sobre como podemos ajudar
              sua empresa a alcançar excelência em engenharia e segurança.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary-foreground/80">{item.content}</p>
                  </div>
                </div>
              ))}
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
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome
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
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Assunto
                  </label>
                  <Input
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Sua mensagem..."
                    rows={5}
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
