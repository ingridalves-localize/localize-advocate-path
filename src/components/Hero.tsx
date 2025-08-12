import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Zap } from "lucide-react";
const Hero = () => {
  return <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Localize Ativos e Bens de
              <span className="text-gold block">Devedores</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">Leve seu escritório ao próximo nível com tecnologias antes restritas à elite corporativa.

Automação avançada, IA e inteligência investigativa agora ao seu alcance.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg" className="group">
                Cadastre-se Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-gold" />
                <div>
                  <p className="font-semibold">100% Seguro</p>
                  <p className="text-sm text-gray-300">Dados protegidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-gold" />
                <div>
                  <p className="font-semibold">Assertivo</p>
                  <p className="text-sm text-gray-300">Resultados precisos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-gold" />
                <div>
                  <p className="font-semibold">Rápido</p>
                  <p className="text-sm text-gray-300">Resultados em minutos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-gold p-8">
              <h3 className="text-2xl font-bold text-navy mb-6">Cadastre-se para concorrer a uma vaga:</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Nome Completo
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    E-mail Profissional
                  </label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    OAB
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="OAB/UF 123456" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Escritório/Empresa
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="Nome do escritório" />
                </div>
                <Button variant="gold" className="w-full mt-6" size="lg">
                  Solicitar Acesso à Plataforma
                </Button>
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