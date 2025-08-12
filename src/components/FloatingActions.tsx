import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="#cadastro" aria-label="Ir para cadastro">
        <Button variant="gold" size="lg" className="shadow-button hover:scale-105 transition-transform">
          Quero me cadastrar
        </Button>
      </a>
      <a href="#contato" aria-label="Ir para contato">
        <Button variant="outline-white" size="lg" className="backdrop-blur">
          <MessageCircle className="mr-2" /> Falar com especialista
        </Button>
      </a>
      <a href="#topo" aria-label="Voltar ao topo" className="hidden md:block">
        <Button variant="secondary" size="icon" className="rounded-full">
          <ArrowUp />
        </Button>
      </a>
    </div>
  );
};

export default FloatingActions;
