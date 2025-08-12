import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, Zap, Target, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Bases de Dados Integradas",
    description: "Acesso a múltiplas fontes de informação em uma única plataforma",
    highlight: "50+ Bases",
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Conformidade total com LGPD e protocolos de segurança avançados",
    highlight: "100% Seguro",
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Relatórios completos gerados em minutos, não em dias",
    highlight: "Em Minutos",
  },
  {
    icon: Target,
    title: "Precisão Máxima",
    description: "Algoritmos especializados para detectar ativos ocultos",
    highlight: "95% Assertivo",
  },
  {
    icon: FileCheck,
    title: "Relatórios Detalhados",
    description: "Documentação completa para uso em processos judiciais",
    highlight: "Juridicamente Válidos",
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Equipe de especialistas em investigação patrimonial",
    highlight: "24/7",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50" id="beneficios">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-gold bg-gold-light">Diferenciais</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">Por que Localize Digital?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Tecnologia, segurança e precisão para acelerar a localização de bens e ativos.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Card key={idx} className="border-0 shadow-card hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-primary text-navy">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-navy">{f.title}</CardTitle>
                  </div>
                  <CardDescription className="pt-2">{f.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-gold border-gold/30">{f.highlight}</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Features;
