import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Permanent light effect at bottom - semicircle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -mb-[230px]">
        <div className="absolute inset-0 bg-gradient-radial from-accent/40 via-accent/20 to-transparent blur-3xl" 
          style={{
            clipPath: 'ellipse(100% 50% at 50% 0%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            Ready to automate?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 mb-8 sm:mb-10 text-balance">
            Let's discuss how we can eliminate manual work and 
            help your team focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button variant="default" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px] bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto sm:min-w-[200px] gradient-accent text-accent-foreground hover:opacity-90" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
