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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Trilha de Investigação Guiada</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia estruturada em 4 etapas para maximizar a eficácia na localização de ativos
          </p>
        </div>
        <div className="space-y-8">
          {investigationSteps.map((step, index) => (
            <Card key={step.id} className="border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className={`rounded-full p-4 bg-gradient-to-r ${step.color} text-white`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="outline" className="text-sm">
                        Etapa {step.id}
                      </Badge>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mb-4">
                      {step.subtitle}
                    </CardDescription>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Circle className="h-3 w-3 fill-primary text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InvestigationTrail;