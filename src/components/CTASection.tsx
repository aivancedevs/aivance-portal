import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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
            <Button
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto sm:min-w-[200px] gradient-accent text-accent-foreground hover:opacity-90"
              asChild
            >
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
    </section>
  );
};

export default CTASection;
