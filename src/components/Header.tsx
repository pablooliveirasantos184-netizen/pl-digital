import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoPlDigital from "@/assets/logo-pl-digital.png";

const Header = () => {
  const whatsappLink = "https://wa.me/5522997455396?text=Olá! Tenho interesse nos produtos digitais da PL Digital!";

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoPlDigital} alt="PL Digital" className="w-10 h-10 rounded-lg object-cover" />
          <span className="font-display font-bold text-xl text-foreground">PL Digital</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={scrollToProducts}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Produtos
          </button>
          <a 
            href="#como-funciona" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Como Funciona
          </a>
          <a 
            href="#faq" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
