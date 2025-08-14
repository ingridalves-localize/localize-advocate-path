import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InvestigationTrail from "@/components/InvestigationTrail";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ClientLogos from "@/components/ClientLogos";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <InvestigationTrail />
      
      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        
      </section>
      
      <Footer />
      
      {/* Logo Section */}
      <section className="py-1 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center">
            <img src="/lovable-uploads/dda72357-f260-44c1-b1aa-e45ae500ff72.png" alt="Logo" className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain transition-all duration-300 hover:scale-105" />
          </div>
        </div>
      </section>
      
      <FloatingActions />
    </div>;
};
export default Index;