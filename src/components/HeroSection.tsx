import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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
              <span className="block sm:inline animate-float-text" style={{ animationDelay: "0s" }}>Automate processes</span>
              <span className="hidden sm:inline-block w-px h-6 md:h-10 lg:h-12 bg-accent/30 mx-3 md:mx-6 align-middle"></span>
              <span className="block sm:inline mt-2 sm:mt-0 animate-float-text" style={{ animationDelay: "1.5s" }}>
                <span className="text-accent">Scale operations</span>
              </span>
            </h1>
            
            {/* Enhanced enumeration */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Messaging agents
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Voice agents
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Metrics panel
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                Complex automations
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button
                variant="default"
                size="lg"
                className="gap-2 w-full sm:w-auto sm:min-w-[200px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Meeting
                </a>
              </Button>
              <span className="text-xs sm:text-sm text-primary-foreground/60">or</span>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px] gradient-accent text-accent-foreground hover:opacity-90" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.55.02.37 5.2.39 11.69c0 2.06.54 4.07 1.57 5.85L0 24l6.63-1.94a11.76 11.76 0 0 0 5.4 1.37h.01c6.49 0 11.77-5.18 11.79-11.67A11.64 11.64 0 0 0 20.52 3.48Zm-8.48 18.2h-.01a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.94 1.15 1.17-3.84-.24-.39a9.73 9.73 0 0 1-1.5-5.17C2.14 6.3 6.29 2.16 11.53 2.16c2.61 0 5.07 1.02 6.92 2.87a9.73 9.73 0 0 1 2.88 6.9c-.02 5.26-4.19 9.75-9.29 9.75Zm5.1-7.28c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32Z" />
                  </svg>
                  Send a WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;