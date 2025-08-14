import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Zap } from "lucide-react";
import heroBg from "@/assets/hero-investigacao.jpg";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
const Hero = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    office: "",
    caseQuantity: "",
    averageTicket: ""
  });

  // ajuste a URL do seu endpoint aqui:
const CUSTOM_ENDPOINT = "https://localizedigital.com.br/endpoint.php";

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.office ||
    !formData.caseQuantity ||
    !formData.averageTicket
  ) {
    toast({
      title: "Campos obrigatórios",
      description: "Por favor, preencha todos os campos.",
      variant: "destructive",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    // ===== envio principal: seu endpoint =====
    const resp = await fetch(CUSTOM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // seu backend deve aceitar JSON
      body: JSON.stringify(formData),
    });

    if (!resp.ok) {
      // tenta ler msg do servidor pra facilitar debug
      const msg = await resp.text().catch(() => "");
      throw new Error(msg || `Falha no endpoint (HTTP ${resp.status})`);
    }

    // sucesso -> mesma UX
    toast({
      title: "Agradecemos o cadastro!",
      description: "Iremos analisar o perfil e enviaremos o resultado no dia 10 de Setembro! Boa sorte!",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      office: "",
      caseQuantity: "",
      averageTicket: "",
    });

  } catch (primaryErr) {
    console.error("Falha no endpoint próprio:", primaryErr);

    // ===== fallback opcional: mantém integração com Supabase Edge Function =====
    try {
      const { error } = await supabase.functions.invoke("send-registration", {
        body: formData,
      });
      if (error) throw error;

      toast({
        title: "Agradecemos o cadastro!",
        description: "Iremos analisar o perfil e enviaremos o resultado no dia 10 de Setembro! Boa sorte!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        office: "",
        caseQuantity: "",
        averageTicket: "",
      });

    } catch (fallbackErr) {
      console.error("Falha também no fallback (Supabase):", fallbackErr);
      toast({
        title: "Erro no envio",
        description: "Não foi possível enviar seus dados agora. Tente novamente em instantes.",
        variant: "destructive",
      });
    }

  } finally {
    setIsSubmitting(false);
  }
};


  return <section className="relative bg-gradient-hero py-2 lg:py-3 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="Investigação jurídica - lupa e documentos" className="w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-navy/40"></div>
      </div>
      <div className="container mx-auto px-6">
        {/* Logo centralizado acima */}
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/29baf211-1690-41fb-a006-0f6619e1ab63.png" 
            alt="Logo Digital - Leão dourado" 
            className="w-80 h-80 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Texto e formulário na mesma altura */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Localize Bens e Ativos dos
              <span className="text-gold block">devedores</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">Leve seu escritório ao próximo nível com tecnologias antes restritas à elite corporativa.

Automação avançada, IA e inteligência investigativa agora ao seu alcance.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg" className="group">
                Cadastre-se Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
            
          </div>
          <div className="relative">
            <div id="cadastro" className="bg-card rounded-2xl shadow-card p-8 backdrop-blur supports-[backdrop-filter]:bg-card/80">
              <h3 className="text-2xl font-bold text-navy mb-6">Cadastre-se para concorrer a uma vaga:</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="Seu nome completo"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    E-mail Profissional
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="seu@email.com"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Telefone
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="(11) 98765-4321"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Escritório/Empresa
                  </label>
                  <input 
                    type="text" 
                    name="office"
                    value={formData.office}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all" 
                    placeholder="Nome do escritório"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Quantidade de casos</label>
                  <select 
                    name="caseQuantity"
                    value={formData.caseQuantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="01 a 10">01 a 10</option>
                    <option value="11 a 50">11 a 50</option>
                    <option value="50 a 200">50 a 200</option>
                    <option value="Acima de 200">Acima de 200</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Ticket médio dos casos</label>
                  <select 
                    name="averageTicket"
                    value={formData.averageTicket}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    required
                  >
                    <option value="" disabled>Selecione</option>
                    <option value="10 Mil a 100 Mil">10 Mil a 100 Mil</option>
                    <option value="100 Mil a 500 Mil">100 Mil a 500 Mil</option>
                    <option value="500 Mil a 1 Milhão">500 Mil a 1 Milhão</option>
                    <option value="Acima de 1 Milhão">Acima de 1 Milhão</option>
                  </select>
                </div>
                <Button 
                  type="submit"
                  variant="gold" 
                  className="w-full mt-6 hover:scale-105 transition-transform" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Seus dados estão protegidos e serão utilizados apenas para contato comercial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;