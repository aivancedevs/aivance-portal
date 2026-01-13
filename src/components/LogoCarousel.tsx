const logos = [
  "Calacoop",
  "Tegete",
  "Flosol Chevrolet",
  "Dala Solutions",
  "GBA Importaciones",
  "Horizon",
  "FlowOps",
  "ScaleUp",
];

const LogoCarousel = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-y border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <p className="text-center text-xs sm:text-sm text-primary-foreground/70">
          Trusted by forward-thinking companies
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-6 sm:px-8 md:px-12 py-4"
            >
              <div className="text-sm sm:text-base md:text-lg font-medium text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors whitespace-nowrap">
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
