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
  },
  {
    name: "Camil",
    src: "/lovable-uploads/03714bb7-8c55-4db8-9515-b4a386842784.png"
  },
  {
    name: "BV",
    src: "/lovable-uploads/83f29bf6-962b-4747-80b5-4e00d0e4cada.png"
  },
  {
    name: "BRF",
    src: "/lovable-uploads/947f954b-197c-4666-b51e-3f0700cb7c19.png"
  },
  {
    name: "Alpargatas",
    src: "/lovable-uploads/eaeab96b-915b-4415-b993-da5731dba952.png"
  },
  {
    name: "Bermudes Advogados",
    src: "/lovable-uploads/5ffd75fb-6715-4a70-acb0-bcda5f18f41e.png"
  },
  {
    name: "Energisa",
    src: "/lovable-uploads/25e31d2f-3571-49ae-9410-c9061fd6bb17.png"
  },
  {
    name: "Saint-Gobain",
    src: "/lovable-uploads/89b32d82-9fa1-4505-bbab-669a9b391f53.png"
  },
  {
    name: "Pirelli",
    src: "/lovable-uploads/f30e425f-2eb3-47ea-91c5-98886c14a9b9.png"
  },
  {
    name: "Cyrela",
    src: "/lovable-uploads/aa86e764-8c8d-4585-89b3-d954881046b7.png"
  },
  {
    name: "Siemens",
    src: "/lovable-uploads/b77db4a2-8ca7-4114-8e0b-325501d1cb2b.png"
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