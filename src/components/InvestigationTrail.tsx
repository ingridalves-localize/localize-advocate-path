import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Target, FileText, Building, Home, TrendingUp, Users, UserCheck, DollarSign } from "lucide-react";

const statistics = [
  {
    id: 1,
    icon: DollarSign,
    value: "+ 450 BI",
    label: "em Dívidas Investigadas (R$)",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Target,
    value: "+ 100mil",
    label: "Levantamentos Estratégicos",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    icon: FileText,
    value: "+ 10M",
    label: "Processos Analisados",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    icon: Building,
    value: "+ 2,5M",
    label: "Imóveis Mapeados",
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 5,
    icon: Home,
    value: "+ 500 Mil",
    label: "Imóveis Analisados",
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    icon: TrendingUp,
    value: "+ 2,5 Tri",
    label: "Imóveis Avaliados (R$)",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: 7,
    icon: Database,
    value: "+ 2 M",
    label: "Demais Ativos Mapeados",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 8,
    icon: Users,
    value: "+ 2,5 M",
    label: "CPF's / CNPJ's Investigados",
    color: "from-teal-500 to-teal-600"
  },
  {
    id: 9,
    icon: UserCheck,
    value: "+ 410 BI",
    label: "Ativos Alcançáveis (R$)",
    color: "from-orange-500 to-orange-600"
  }
];
const InvestigationTrail = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Localize em Números
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados comprovados através de nossa tecnologia avançada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statistics.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.id} className="relative overflow-hidden hover:shadow-md transition-shadow text-center">
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${stat.color}`} />
                <CardHeader className="pb-2 pt-4">
                  <div className="flex justify-center mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                  <p className="text-xs font-medium text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
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