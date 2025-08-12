import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-gradient-hero shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d9366945-7a21-4cc6-921f-3f63d8ae72b8.png" 
              alt="Localize Logo" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Localize</h1>
              <p className="text-sm text-gold-light">Digital</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#solucoes" className="text-white hover:text-gold transition-colors">
              Soluções
            </a>
            <a href="#como-funciona" className="text-white hover:text-gold transition-colors">
              Como Funciona
            </a>
            <a href="#contato" className="text-white hover:text-gold transition-colors">
              Contato
            </a>
            <Button variant="gold" size="sm">
              Acessar Plataforma
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;