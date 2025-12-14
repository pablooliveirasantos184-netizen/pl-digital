import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a compra?",
    answer: "É simples! Escolha o produto desejado e clique em 'Comprar Agora'. Você será direcionado ao nosso WhatsApp para combinar o pagamento via PIX e receber seu produto instantaneamente."
  },
  {
    question: "Como recebo meu produto?",
    answer: "Após a confirmação do pagamento via PIX, enviamos seu produto digital diretamente pelo WhatsApp em poucos minutos."
  },
  {
    question: "Qual forma de pagamento é aceita?",
    answer: "Trabalhamos exclusivamente com PIX para garantir um processo rápido e seguro. Você recebe os dados para pagamento diretamente no WhatsApp."
  },
  {
    question: "Os produtos funcionam no celular?",
    answer: "Sim! Todos os nossos produtos são compatíveis com celular, tablet e computador. O sistema de delivery funciona em qualquer navegador."
  },
  {
    question: "Vocês oferecem suporte?",
    answer: "Sim, oferecemos suporte completo via WhatsApp. Nossa equipe está pronta para ajudar com qualquer dúvida sobre os produtos."
  },
  {
    question: "Posso usar os produtos comercialmente?",
    answer: "Sim! Todos os nossos produtos têm licença para uso comercial. Você pode usar as artes, prompts e sistemas no seu negócio sem restrições."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos produtos
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
