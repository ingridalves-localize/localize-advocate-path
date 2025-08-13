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
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">+ de 5.000 Clientes acelerados por nossas soluções</h2>
          
        </div>
        
        
      </div>
    </section>;
};
export default Features;