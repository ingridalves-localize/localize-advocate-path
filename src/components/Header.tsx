import { Button } from "@/components/ui/button";
const Header = () => {
  return <header id="topo" className="w-full bg-gradient-hero shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9f7e0379-b04c-4e26-a349-8b315920d052.png" 
              alt="Localize Digital Logo" 
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Localize</h1>
              <p className="text-sm text-gold-light">Digital</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            
            
            
            
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;