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
            Trilha de Investigação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo estruturado em 4 etapas para máxima eficiência
          </p>
        </div>
        
        <div className="space-y-8">
          {investigationSteps.map((step, index) => (
            <Card key={step.id} className="border-border overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-6 bg-gradient-to-br from-primary/10 to-primary/5">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${step.color} text-white mr-4`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Etapa {step.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {step.subtitle}
                  </p>
                </div>
                
                <div className="lg:w-2/3 p-6">
                  <CardDescription className="text-base mb-6">
                    {step.description}
                  </CardDescription>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InvestigationTrail;