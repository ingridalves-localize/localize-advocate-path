import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clientLogos = [
  {
    name: "Veirano Advogados",
    src: "/lovable-uploads/7d08363f-c751-4832-bf45-9eb0b52af5ce.png"
  },
  {
    name: "InterCement Brasil",
    src: "/lovable-uploads/6f4d3788-a122-4e85-a5de-1efc557cba41.png"
  },
  {
    name: "Cogna Educação",
    src: "/lovable-uploads/b7760890-748a-4d93-b397-1a19815e342d.png"
  },
  {
    name: "Hypera Pharma",
    src: "/lovable-uploads/b2109876-130d-4a3c-a189-7ccc35134dc5.png"
  },
  {
    name: "Banco BRB",
    src: "/lovable-uploads/eb6d7281-d4de-4c76-b177-de584e7f1778.png"
  },
  {
    name: "JHSF",
    src: "/lovable-uploads/f2344ec9-5168-44c9-afaf-8dcfc407e9ff.png"
  },
  {
    name: "Claro",
    src: "/lovable-uploads/65edd14f-12b3-433b-ac2e-70f272df57e6.png"
  },
  {
    name: "Cutrale",
    src: "/lovable-uploads/7c676398-156f-4663-a96b-d132ec4a7dfb.png"
  },
  {
    name: "Usiminas",
    src: "/lovable-uploads/97417538-9f65-4213-81c4-8466981cc65c.png"
  },
  {
    name: "Cargill",
    src: "/lovable-uploads/4f29b527-2cb7-435b-a0cb-04e4c1213945.png"
  }
];

const ClientLogos = () => {
  return (
    <div className="mt-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {clientLogos.map((logo, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div className="flex items-center justify-center p-4 h-24 bg-white rounded-lg shadow-sm border">
                <img
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ClientLogos;