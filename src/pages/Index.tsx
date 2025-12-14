import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const ValueProposition = lazy(() => import("@/components/ValueProposition"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pl Digital - Soluções Digitais para seu Negócio</title>
        <meta 
          name="description" 
          content="Sistemas SaaS, artes editáveis para Canva e prompts para ChatGPT. Ferramentas digitais profissionais com preços promocionais." 
        />
        <meta name="keywords" content="sistema delivery, artes canva, prompts chatgpt, produtos digitais" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="h-96" />}>
            <ValueProposition />
            <ProductsSection />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
