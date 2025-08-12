import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InvestigationTrail from "@/components/InvestigationTrail";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <InvestigationTrail />
      <Footer />
    </div>
  );
};

export default Index;
