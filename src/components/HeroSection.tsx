import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
      {/* Animated breathing gradient circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Circle 1 - Top Left */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/50 via-accent/25 to-transparent blur-3xl animate-breathe"
          style={{ 
            top: "-200px",
            left: "-200px",
          }}
        />
        {/* Circle 2 - Top Right */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/45 via-accent/20 to-transparent blur-3xl animate-breathe-2"
          style={{ 
            top: "-150px",
            right: "-150px",
            animationDelay: "2s",
          }}
        />
        {/* Circle 3 - Bottom Left */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/40 via-accent/15 to-transparent blur-3xl animate-breathe-3"
          style={{ 
            bottom: "120px",
            left: "100px",
            animationDelay: "4s",
          }}
        />
        {/* Circle 4 - Center Right */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/35 via-accent/12 to-transparent blur-3xl animate-breathe"
          style={{ 
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            animationDelay: "6s",
          }}
        />
      </div>

      {/* Content positioned near navbar */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="block sm:inline">Automate processes</span>
              <span className="hidden sm:inline-block w-px h-6 md:h-10 lg:h-12 bg-accent/30 mx-3 md:mx-6 align-middle"></span>
              <span className="block sm:inline mt-2 sm:mt-0">
                <span className="text-accent">Scale operations</span>
              </span>
            </h1>
            
            {/* Enhanced enumeration */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Messaging agents
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Voice agents
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                System integrations
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="default" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px] bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px] gradient-accent text-accent-foreground hover:opacity-90">
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;