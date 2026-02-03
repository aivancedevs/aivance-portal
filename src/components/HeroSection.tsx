import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { heroBackgroundConfig } from "./AnimatedBackground";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const services = [
    t("hero.badge.messaging"),
    t("hero.badge.voice"),
    t("hero.badge.metrics"),
    t("hero.badge.automations"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsVisible(true);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground circles={heroBackgroundConfig} />

      {/* Dark container with rounded corners - Adalove style */}
      <div className="relative z-10 w-[95%] lg:w-[90%] mx-4 lg:mx-12 -mt-20 lg:-mt-24">
        <div 
          className="relative rounded-[40px] lg:rounded-[50px] px-6 sm:px-10 lg:px-14 pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, hsl(222 47% 10% / 0.95) 0%, hsl(222 47% 13% / 0.92) 40%, hsl(173 40% 22% / 0.88) 100%)',
          }}
        >
          {/* Animated gradient overlay - con todas las esquinas redondeadas y menos iluminado */}
          <div 
            className="absolute inset-0 opacity-45 animate-gradient-shift rounded-[40px] lg:rounded-[50px]"
            style={{
              background: 'linear-gradient(45deg, transparent 0%, hsl(173 58% 39% / 0.16) 25%, transparent 50%, hsl(187 64% 45% / 0.12) 75%, transparent 100%)',
              backgroundSize: '400% 400%',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 lg:gap-10">
            {/* Badge with gradient text */}
            <p 
              className="text-sm lg:text-base font-medium tracking-wide text-transparent bg-clip-text animate-fade-in uppercase"
              style={{
                backgroundImage: 'linear-gradient(90deg, hsl(173 58% 50%) 0%, hsl(187 64% 55%) 50%, hsl(173 58% 45%) 100%)',
              }}
            >
              {t("hero.title.part1")} | {t("hero.title.part2")}
            </p>

            {/* Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center text-primary-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-accent italic font-medium">{t("hero.ai")}</span> {t("hero.main.title")}
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                {t("hero.main.subtitle")}
              </span>
            </h1>

            {/* Rotating service badge */}
            <div 
              className="h-12 flex items-center justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className={`
                  px-6 py-2.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm
                  transition-all duration-400 ease-out
                  ${isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-2 scale-95'
                  }
                `}
              >
                <span className="text-base lg:text-lg font-medium text-primary-foreground">
                  {services[currentIndex]}
                </span>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsVisible(true);
                    }, 200);
                  }}
                  className={`
                    w-1.5 h-1.5 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-accent w-4' 
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                    }
                  `}
                  aria-label={`Go to ${services[index]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-20"
        style={{
          background: 'linear-gradient(to top, hsl(222 47% 11%), transparent)',
        }}
      />
    </section>
  );
};

export default HeroSection;