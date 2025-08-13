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
  return;
};
export default InvestigationTrail;