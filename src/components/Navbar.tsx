import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/img/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img 
            src={logo} 
            alt="AIVANCE Logo" 
            className="h-8 w-auto"
          />
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("problems")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Problems
            </button>
            <button 
              onClick={() => scrollToSection("solutions")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How We Work
            </button>
          </div>

          <Button 
            size="sm"
            className="gap-2 gradient-accent text-accent-foreground hover:opacity-90"
            asChild
          >
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Contact Us</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
