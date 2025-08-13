import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Zap } from "lucide-react";
import heroBg from "@/assets/hero-investigacao.jpg";
const Hero = () => {
  return <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Investigação jurídica - lupa e documentos" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-navy/40"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/29baf211-1690-41fb-a006-0f6619e1ab63.png" 
                alt="Logo Digital - Leão dourado" 
                className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Localize Bens e Ativos dos
              <span className="text-gold block">devedores</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">Leve seu escritório ao próximo nível com tecnologias antes restritas à elite corporativa.

Automação avançada, IA e inteligência investigativa agora ao seu alcance.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg" className="group">
                Cadastre-se Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
            
          </div>
          <div className="relative">
            <div id="cadastro" className="bg-card rounded-2xl shadow-card p-8 backdrop-blur supports-[backdrop-filter]:bg-card/80">
              <h3 className="text-2xl font-bold text-navy mb-6">Cadastre-se para concorrer a uma vaga:</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Nome Completo
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    E-mail Profissional
                  </label>
                  <input type="email" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <input type="tel" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" placeholder="(11) 98765-4321" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Escritório/Empresa
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" placeholder="Nome do escritório" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Quantidade de casos</label>
                  <select defaultValue="" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
                    <option value="" disabled>Selecione</option>
                    <option>01 a 10</option>
                    <option>11 a 50</option>
                    <option>50 a 200</option>
                    <option>Acima de 200</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Ticket médio dos casos</label>
                  <select defaultValue="" className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all">
                    <option value="" disabled>Selecione</option>
                    <option>10 Mil a 100 Mil</option>
                    <option>100 Mil a 500 Mil</option>
                    <option>500 Mil a 1 Milhão</option>
                    <option>Acima de 1 Milhão</option>
                  </select>
                </div>
                <Button variant="gold" className="w-full mt-6 hover:scale-105 transition-transform" size="lg">Finalizar Cadastro</Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Seus dados estão protegidos e serão utilizados apenas para contato comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;