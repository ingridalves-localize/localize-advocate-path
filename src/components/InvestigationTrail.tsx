import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Circle, Network, Search, Target, Zap } from "lucide-react";
const investigationSteps = [{
  id: 1,
  title: "Levantamento Relacional",
  subtitle: "Radar de Conexões",
  icon: Network,
  description: "Mapeamento inicial das conexões e relacionamentos do devedor para identificar possíveis caminhos de investigação.",
  features: ["Análise de vínculos societários", "Mapeamento de relacionamentos familiares", "Identificação de parceiros comerciais", "Conexões em redes sociais profissionais"],
  color: "from-blue-500 to-blue-600"
}, {
  id: 2,
  title: "Levantamento Primário",
  subtitle: "Investigação Base",
  icon: Search,
  description: "Coleta sistemática de informações básicas e documentos públicos disponíveis sobre o devedor.",
  features: ["Consulta a bases públicas", "Levantamento de CPF/CNPJ", "Histórico de endereços", "Informações cartoriais básicas"],
  color: "from-green-500 to-green-600"
}, {
  id: 3,
  title: "Levantamento Secundário",
  subtitle: "Investigação Avançada",
  icon: Target,
  description: "Aprofundamento da investigação com análise de fontes especializadas e cruzamento de dados.",
  features: ["Análise patrimonial detalhada", "Histórico financeiro", "Movimentações societárias", "Cruzamento de bases especializadas"],
  color: "from-amber-500 to-amber-600"
}, {
  id: 4,
  title: "Levantamento Tático",
  subtitle: "Investigação Estratégica",
  icon: Zap,
  description: "Estratégias avançadas de localização de ativos ocultos e análise de padrões complexos.",
  features: ["Análise de ativos ocultos", "Padrões de movimentação", "Estratégias de ocultação", "Relatório executivo completo"],
  color: "from-purple-500 to-purple-600"
}];
const InvestigationTrail = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Metodologia de Investigação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo estruturado em 4 etapas para garantir resultados precisos e eficazes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investigationSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Etapa {step.id}</Badge>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {step.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default InvestigationTrail;