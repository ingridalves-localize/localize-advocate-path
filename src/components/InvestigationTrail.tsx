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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Trilha de Investigação Sistemática
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa metodologia comprovada em 4 etapas para maximizar resultados em investigações patrimoniais
          </p>
        </div>

        <div className="space-y-8">
          {investigationSteps.map((step, index) => (
            <Card key={step.id} className="overflow-hidden border-0 shadow-card hover:shadow-gold transition-all duration-300">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 p-6 bg-gradient-to-br from-navy to-navy-light text-white">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 bg-gold text-navy">
                        Etapa {step.id}
                      </Badge>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-gold text-sm">{step.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="lg:w-2/3 p-6">
                  <h4 className="text-lg font-semibold text-navy mb-4">Principais Atividades:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
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