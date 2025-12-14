import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, MessageCircle, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Escolha seu Produto",
    description: "Navegue pelos nossos produtos digitais e clique em 'Comprar Agora' no que desejar."
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Fale Conosco no WhatsApp",
    description: "Você será direcionado ao nosso WhatsApp para finalizar a compra e combinar o pagamento via PIX."
  },
  {
    number: "03",
    icon: Package,
    title: "Receba seu Produto",
    description: "Após confirmação do pagamento, enviamos seu produto digital instantaneamente pelo WhatsApp."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Processo simples e rápido em apenas 3 passos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative"
            >
              <CardContent className="p-8 text-center">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display font-bold text-lg px-4 py-1 rounded-full">
                  {step.number}
                </div>

                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
