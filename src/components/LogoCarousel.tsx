const logos = [
  "TechCorp",
  "Innovate Inc",
  "DataFlow",
  "CloudScale",
  "AutoSys",
  "IntegrateAI",
  "FlowOps",
  "ScaleUp",
];

const LogoCarousel = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by forward-thinking companies
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index}
              className="flex-shrink-0 px-12 py-4"
            >
              <div className="text-lg font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
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
