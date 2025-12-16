import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle } from "lucide-react";

import productDelivery from "@/assets/product-delivery-system.png";
import productCanva from "@/assets/product-canva-pack.png";
import productPrompts400 from "@/assets/product-prompts-400.png";
import productPromptsBonus from "@/assets/product-prompts-bonus.png";
import productCourseAI from "@/assets/product-course-ai.png";

const whatsappNumber = "5522997455396";

const products = {
  sistemas: [
    {
      id: 1,
      image: productDelivery,
      badge: "MAIS VENDIDO",
      badgeColor: "bg-primary text-primary-foreground",
      title: "Sistema SaaS Delivery",
      description: "Sistema completo de pedidos online para delivery. Receba pedidos, gerencie entregas e aumente suas vendas.",
      features: ["Sistema completo", "Pedidos online", "Gestão de entregas"],
      originalPrice: "121,00",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir o Sistema SaaS Delivery agora!"
    }
  ],
  packs: [
    {
      id: 2,
      image: productCanva,
      badge: "SUPER OFERTA",
      badgeColor: "bg-orange-500 text-white",
      title: "Pack 10k Artes Canva",
      description: "+10.000 artes editáveis profissionais para Canva. Posts, stories, banners e muito mais para suas redes.",
      features: ["+10.000 templates", "100% editáveis", "Uso comercial"],
      originalPrice: "48,90",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir o Pack 10k Artes Canva agora!"
    },
    {
      id: 3,
      image: productPrompts400,
      badge: "LUCRE COM IA",
      badgeColor: "bg-purple-500 text-white",
      title: "400 Prompts ChatGPT",
      description: "Prompts apelativos e estratégicos para lucrar com inteligência artificial. Copy, vendas e muito mais.",
      features: ["400 prompts", "Estratégias de lucro", "Uso imediato"],
      originalPrice: "97,00",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir os 400 Prompts ChatGPT agora!"
    },
    {
      id: 6,
      image: productPromptsBonus,
      badge: "OFERTA ESPECIAL",
      badgeColor: "bg-pink-500 text-white",
      title: "30+ Prompts Lucrativos + Bônus",
      description: "Mais de 30 prompts lucrativos para monetizar com IA, incluindo bônus exclusivos para acelerar seus resultados.",
      features: ["30+ prompts", "Bônus exclusivos", "Resultados rápidos"],
      originalPrice: "52,90",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir os 30+ Prompts Lucrativos + Bônus agora!"
    }
  ],
  cursos: [
    {
      id: 4,
      image: productCourseAI,
      badge: "CURSO COMPLETO",
      badgeColor: "bg-emerald-500 text-white",
      title: "Mestres da IA",
      description: "Treinamento completo para dominar a inteligência artificial e aplicar no seu negócio. Do básico ao avançado.",
      features: ["Aulas práticas", "Certificado", "Suporte exclusivo"],
      originalPrice: "297,00",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir o Curso Mestres da IA agora!"
    }
  ]
};

const ProductCard = ({ product, index }: { product: typeof products.sistemas[0]; index: number }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <Card 
      className="bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative p-0">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          <Badge className={`${product.badgeColor} absolute top-4 left-4`}>
            {product.badge}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative pt-4">
        <h3 className="font-display font-bold text-2xl text-foreground mb-3">
          {product.title}
        </h3>
        <p className="text-muted-foreground mb-6">
          {product.description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-muted-foreground line-through text-lg">
            R$ {product.originalPrice}
          </span>
          <span className="text-4xl font-display font-bold text-primary">
            R$ {product.price}
          </span>
        </div>
      </CardContent>

      <CardFooter className="relative">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group-hover:box-glow transition-all">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comprar Agora
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Produtos Digitais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a ferramenta ideal para impulsionar seu negócio. Preços promocionais por tempo limitado!
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
            <TabsTrigger value="packs">Packs</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
          </TabsList>

          <TabsContent value="todos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...products.sistemas, ...products.packs, ...products.cursos].map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sistemas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.sistemas.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.packs.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cursos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.cursos.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductsSection;
