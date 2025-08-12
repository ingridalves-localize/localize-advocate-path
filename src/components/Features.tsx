import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Target, Database, FileCheck, Users } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Bases de Dados Integradas",
    description: "Acesso a múltiplas fontes de informação em uma única plataforma",
    highlight: "50+ Bases"
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    description: "Conformidade total com LGPD e protocolos de segurança avançados",
    highlight: "100% Seguro"
  },
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Relatórios completos gerados em minutos, não em dias",
    highlight: "Em Minutos"
  },
  {
    icon: Target,
    title: "Precisão Máxima",
    description: "Algoritmos especializados para detectar ativos ocultos",
    highlight: "95% Assertivo"
  },
  {
    icon: FileCheck,
    title: "Relatórios Detalhados",
    description: "Documentação completa para uso em processos judiciais",
    highlight: "Juridicamente Válidos"
  },
  {
    icon: Users,
    title: "Suporte Especializado",
    description: "Equipe de especialistas em investigação patrimonial",
    highlight: "24/7"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="solucoes">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gold bg-gold-light">
            Por que escolher a Localize?
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Tecnologia de Ponta para
            <span className="text-gold block">Investigação Patrimonial</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos inteligência artificial, big data e expertise jurídica para 
            entregar os melhores resultados em investigação de ativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-gold transition-all duration-500 group">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-navy" />
                  </div>
                  <Badge variant="outline" className="text-xs mb-2 text-gold border-gold">
                    {feature.highlight}
                  </Badge>
                  <CardTitle className="text-xl text-navy">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center text-white shadow-gold">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para revolucionar suas investigações?
          </h3>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Junte-se a centenas de advogados que já utilizam a Localize Digital 
            para localizar ativos de forma rápida e eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-navy font-semibold px-8 py-4 rounded-lg shadow-button hover:shadow-gold transition-all duration-300 hover:scale-105">
              Solicitar Demonstração
            </button>
            <button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy transition-all duration-300 px-8 py-4 rounded-lg">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;