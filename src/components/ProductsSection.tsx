import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Clock, Flame } from "lucide-react";
import productDelivery from "@/assets/product-delivery-system.png";
import productCanva from "@/assets/product-canva-pack.png";
import productPrompts400 from "@/assets/product-prompts-400.png";
import productPromptsBonus from "@/assets/product-prompts-bonus.png";
import productCourseAI from "@/assets/product-course-ai.png";
import productDarkChannel from "@/assets/product-dark-channel.png";
import logoInstagram from "@/assets/logo-instagram.jpg";
import logoTiktok from "@/assets/logo-tiktok.png";
import logoKwai from "@/assets/logo-kwai.png";

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
    },
    {
      id: 7,
      image: productDarkChannel,
      badge: "CONTEÚDO DARK",
      badgeColor: "bg-violet-600 text-white",
      title: "Pack Conteúdo Canal Dark",
      description: "Pack completo de conteúdo para canais dark no YouTube. Vídeos, thumbnails e scripts prontos para usar.",
      features: ["Vídeos prontos", "Thumbnails editáveis", "Scripts inclusos"],
      originalPrice: "97,00",
      price: "19,98",
      whatsappMessage: "Olá! Quero adquirir o Pack Conteúdo Canal Dark agora!"
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
  ],
  servicos: [
    {
      id: 8,
      customHeader: true,
      badge: "DESTAQUE",
      badgeColor: "bg-sky-500 text-white",
      title: "Pacote Seguidores",
      description: "Aumente sua presença nas redes sociais! Pacote completo com 1500 seguidores + 3000 views + 550 curtidas.",
      features: ["1500 seguidores", "3000 views", "550 curtidas"],
      originalPrice: "149,90",
      price: "49,98",
      whatsappMessage: "Olá! Quero adquirir meus seguidores agora!"
    }
  ]
};

// Custom header for followers product with real logos
const FollowersHeader = () => (
  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500">
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
      <div className="flex items-center justify-center gap-4">
        <img src={logoInstagram} alt="Instagram" className="w-14 h-14 rounded-xl shadow-lg" />
        <img src={logoTiktok} alt="TikTok" className="w-14 h-14 rounded-xl shadow-lg" />
        <img src={logoKwai} alt="Kwai" className="w-14 h-14 rounded-xl shadow-lg" />
      </div>
      <span className="text-white font-bold text-2xl tracking-wide drop-shadow-lg">SEGUIDORES</span>
    </div>
    <Badge className="bg-sky-500 text-white absolute top-4 left-4">
      DESTAQUE
    </Badge>
  </div>
);

type Product = {
  id: number;
  image?: string;
  customHeader?: boolean;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: string[];
  originalPrice: string;
  price: string;
  whatsappMessage: string;
};

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <Card 
      className="bg-card border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative p-0">
        {product.customHeader ? (
          <FollowersHeader />
        ) : (
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
        )}
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

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when timer reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold text-primary font-display">{formatNumber(timeLeft.hours)}</span>
        <span className="text-xs text-muted-foreground uppercase">Horas</span>
      </div>
      <span className="text-2xl font-bold text-primary animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold text-primary font-display">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-xs text-muted-foreground uppercase">Min</span>
      </div>
      <span className="text-2xl font-bold text-primary animate-pulse">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold text-primary font-display">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-xs text-muted-foreground uppercase">Seg</span>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Countdown Timer Banner */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl px-6 md:px-10 py-5 flex flex-col md:flex-row items-center gap-4 animate-fade-in [animation-duration:0.6s]">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
              <span className="text-foreground font-bold text-lg md:text-xl">OFERTA EXPIRA EM:</span>
              <Flame className="w-6 h-6 text-orange-500 animate-pulse" />
            </div>
            <CountdownTimer />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nossos <span className="gradient-text">Produtos Digitais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha a ferramenta ideal para impulsionar seu negócio. Preços promocionais por tempo limitado!
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-5 mb-12">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="sistemas">Sistemas</TabsTrigger>
            <TabsTrigger value="packs">Packs</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
            <TabsTrigger value="servicos">Serviços</TabsTrigger>
          </TabsList>

          <TabsContent value="todos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...products.sistemas, ...products.packs, ...products.cursos, ...products.servicos].map((product, index) => (
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

          <TabsContent value="servicos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.servicos.map((product, index) => (
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
