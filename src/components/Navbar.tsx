import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { id: "problems", label: "Problems" },
    { id: "solutions", label: "Solutions" },
    { id: "process", label: "How We Work" },
  ];

  return (
    <>
    <nav className="fixed left-0 right-0 top-4 z-50 bg-transparent border-transparent transition-all duration-300">
      {/* Light effect at top - always visible */}
      <>
        {/* Background blur layer - same color as HeroSection */}
        <div className="absolute top-0 left-0 right-0 h-[100px] -mt-[20px] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 via-primary/70 to-transparent" />
        </div>
        
        {/* Light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] -mt-[260px] pointer-events-none">
          <div 
            className="absolute inset-0 bg-gradient-radial from-accent/40 via-accent/20 to-transparent blur-3xl" 
            style={{
              clipPath: 'ellipse(100% 50% at 50% 100%)',
            }}
          />
        </div>
      </>
      
      <div className="container mx-auto px-4 sm:px-6 py-2 transition-all duration-300 relative z-10">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="AIVANCE Logo"
            className="h-7 sm:h-8 w-auto transition-all duration-300 filter brightness-0 invert drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
          />
          
          {/* Desktop Navigation - Absolutely centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300 text-primary-foreground border-accent/70 bg-accent/20 hover:bg-accent hover:text-accent-foreground shadow-lg shadow-black/20"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left text-xl font-semibold px-2.5 py-3.5 rounded-lg border transition-all duration-300 text-primary-foreground border-accent/70 bg-accent/20 hover:bg-accent hover:text-accent-foreground shadow-lg shadow-black/20"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button
                    size="lg"
                    className="gap-2 gradient-accent text-accent-foreground hover:opacity-90 mt-4"
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
                      Contact Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>

    {/* Floating Contact Button - Bottom Right - Always visible */}
    <div className="fixed bottom-6 right-6 z-[60] opacity-100 translate-y-0 transition-all duration-300">
      <Button
        size="icon"
        className="w-16 h-16 rounded-full gradient-accent text-accent-foreground hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
        asChild
      >
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="Contact Us">
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.55.02.37 5.2.39 11.69c0 2.06.54 4.07 1.57 5.85L0 24l6.63-1.94a11.76 11.76 0 0 0 5.4 1.37h.01c6.49 0 11.77-5.18 11.79-11.67A11.64 11.64 0 0 0 20.52 3.48Zm-8.48 18.2h-.01a9.77 9.77 0 0 1-4.98-1.37l-.36-.21-3.94 1.15 1.17-3.84-.24-.39a9.73 9.73 0 0 1-1.5-5.17C2.14 6.3 6.29 2.16 11.53 2.16c2.61 0 5.07 1.02 6.92 2.87a9.73 9.73 0 0 1 2.88 6.9c-.02 5.26-4.19 9.75-9.29 9.75Zm5.1-7.28c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3 .14.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.11-.26-.18-.54-.32Z" />
          </svg>
        </a>
      </Button>
    </div>
  </>
  );
};

export default Navbar;
