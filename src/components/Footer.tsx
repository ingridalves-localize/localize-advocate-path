import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return <footer className="bg-navy text-white py-16" id="contato">
      <div className="container mx-auto px-6">
        

        <Separator className="bg-gray-600 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
            
            
            
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Localize Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;