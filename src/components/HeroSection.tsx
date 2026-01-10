import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import heroVideo from "@/assets/videos/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content positioned at bottom */}
      <div className="relative z-10 flex items-end justify-center min-h-screen pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-cursive text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Automate processes <span className="inline-block w-px h-8 md:h-10 lg:h-12 bg-accent/30 mx-4 md:mx-6 align-middle"></span> <span className="text-accent">Scale operations</span>
            </h1>
            
            {/* Enhanced enumeration */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-sm md:text-base text-foreground border border-accent/20">
                Messaging agents
              </span>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-sm md:text-base text-foreground border border-accent/20">
                Voice agents
              </span>
              <span className="hidden md:inline text-muted-foreground">•</span>
              <span className="px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-sm md:text-base text-foreground border border-accent/20">
                System integrations
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="default" size="lg" className="gap-2 w-full sm:w-64">
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-64">
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default HeroSection;