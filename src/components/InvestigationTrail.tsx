import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Network, Search, Target, Zap } from "lucide-react";

const investigationSteps = [
  {
    id: 1,
    title: "Levantamento Relacional",
    subtitle: "Radar de Conexões",
    icon: Network,
    description: "Mapeamento inicial das conexões e relacionamentos do devedor para identificar possíveis caminhos de investigação.",
    features: [
      "Análise de vínculos societários",
      "Mapeamento de relacionamentos familiares",
      "Identificação de parceiros comerciais",
      "Conexões em redes sociais profissionais"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Levantamento Primário",
    subtitle: "Investigação Base",
    icon: Search,
    description: "Coleta sistemática de informações básicas e documentos públicos disponíveis sobre o devedor.",
    features: [
      "Consulta a bases públicas",
      "Levantamento de CPF/CNPJ",
      "Histórico de endereços",
      "Informações cartoriais básicas"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "Levantamento Secundário",
    subtitle: "Investigação Avançada",
    icon: Target,
    description: "Aprofundamento da investigação com análise de fontes especializadas e cruzamento de dados.",
    features: [
      "Análise patrimonial detalhada",
      "Histórico financeiro",
      "Movimentações societárias",
      "Cruzamento de bases especializadas"
    ],
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 4,
    title: "Levantamento Tático",
    subtitle: "Investigação Estratégica",
    icon: Zap,
    description: "Estratégias avançadas de localização de ativos ocultos e análise de padrões complexos.",
    features: [
      "Análise de ativos ocultos",
      "Padrões de movimentação",
      "Estratégias de ocultação",
      "Relatório executivo completo"
    ],
    color: "from-purple-500 to-purple-600"
  }
];

const InvestigationTrail = () => {
  return (
    <section className="py-20 bg-gray-50" id="como-funciona">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-gold bg-gold-light">
            Metodologia Localize
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Trilha de Investigação Guiada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia proprietária garante resultados assertivos através de 4 etapas 
            estruturadas de investigação patrimonial.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {investigationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.id} className="relative overflow-hidden border-0 shadow-card hover:shadow-gold transition-all duration-500 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            Etapa {step.id}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-navy">{step.title}</CardTitle>
                        <CardDescription className="text-gold font-semibold">
                          {step.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-200 group-hover:text-gold transition-colors">
                      0{step.id}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-4xl mx-auto shadow-card">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Resultados Garantidos em Cada Etapa
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa trilha de investigação é progressiva e cada etapa constrói sobre a anterior, 
              garantindo eficiência máxima e resultados assertivos para seu caso.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">95%</div>
                <div className="text-sm text-gray-600">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">24h</div>
                <div className="text-sm text-gray-600">Tempo Médio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">+1000</div>
                <div className="text-sm text-gray-600">Casos Resolvidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestigationTrail;