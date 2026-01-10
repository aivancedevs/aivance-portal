import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Ready to automate?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance">
            Let's discuss how we can eliminate manual work and 
            help your team focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2 w-full sm:w-auto" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto" asChild>
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
