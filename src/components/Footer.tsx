import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return <footer className="bg-navy text-white py-16" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              
              <div>
                <h3 className="text-xl font-bold">Localize</h3>
                <p className="text-sm text-gold">Digital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">Leve seu escritório ao próximo nível com tecnologias antes restritas à elite corporativa. Automação avançada, IA e inteligência investigativa agora ao seu alcance.</p>
          </div>

          

          

          
        </div>

        <Separator className="bg-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">LGPD</a>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Localize Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;