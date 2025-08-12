import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d9366945-7a21-4cc6-921f-3f63d8ae72b8.png" 
                alt="Localize Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">Localize</h3>
                <p className="text-sm text-gold">Digital</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A primeira plataforma brasileira especializada em investigação patrimonial 
              para advogados e escritórios jurídicos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Soluções</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Investigação Patrimonial</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Localização de Bens</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Análise de Ativos</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Relatórios Especializados</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Metodologia</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cases de Sucesso</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>contato@localize.digital</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2 text-gold">Suporte</h5>
              <p className="text-sm text-gray-300">suporte@localize.digital</p>
              <p className="text-sm text-gray-300">Disponível 24/7</p>
            </div>
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
    </footer>
  );
};

export default Footer;