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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recursos Avançados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta para investigação patrimonial eficiente
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                  <Badge variant="secondary" className="text-xs">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;