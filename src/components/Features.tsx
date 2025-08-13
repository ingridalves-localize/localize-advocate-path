import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, Zap, Target, FileCheck, Users } from "lucide-react";
const features = [{
  icon: Database,
  title: "Bases de Dados Integradas",
  description: "Acesso a múltiplas fontes de informação em uma única plataforma",
  highlight: "50+ Bases"
}, {
  icon: Shield,
  title: "Segurança e Privacidade",
  description: "Conformidade total com LGPD e protocolos de segurança avançados",
  highlight: "100% Seguro"
}, {
  icon: Zap,
  title: "Resultados Rápidos",
  description: "Relatórios completos gerados em minutos, não em dias",
  highlight: "Em Minutos"
}, {
  icon: Target,
  title: "Precisão Máxima",
  description: "Algoritmos especializados para detectar ativos ocultos",
  highlight: "95% Assertivo"
}, {
  icon: FileCheck,
  title: "Relatórios Detalhados",
  description: "Documentação completa para uso em processos judiciais",
  highlight: "Juridicamente Válidos"
}, {
  icon: Users,
  title: "Suporte Especializado",
  description: "Equipe de especialistas em investigação patrimonial",
  highlight: "24/7"
}];
const Features = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Tecnologia de Ponta para Investigação Jurídica
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma revoluciona a forma como escritórios de advocacia conduzem investigações patrimoniais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-gold transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-navy group-hover:text-gold transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;