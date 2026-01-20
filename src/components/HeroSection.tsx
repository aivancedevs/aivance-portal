import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { heroBackgroundConfig } from "./AnimatedBackground";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-primary-foreground">
      <AnimatedBackground circles={heroBackgroundConfig} />

      {/* Content positioned near navbar */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="block sm:inline animate-float-text" style={{ animationDelay: "0s" }}>{t("hero.title.part1")}</span>
              <span className="hidden sm:inline-block w-px h-6 md:h-10 lg:h-12 bg-accent/30 mx-3 md:mx-6 align-middle"></span>
              <span className="block sm:inline mt-2 sm:mt-0 animate-float-text" style={{ animationDelay: "1.5s" }}>
                <span className="text-accent">{t("hero.title.part2")}</span>
              </span>
            </h1>
            
            {/* Enhanced enumeration */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 max-w-3xl mx-auto mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                {t("hero.badge.messaging")}
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                {t("hero.badge.voice")}
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                {t("hero.badge.metrics")}
              </span>
              <span className="hidden sm:inline text-primary-foreground/50 text-sm">•</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-xs sm:text-sm md:text-base text-primary-foreground border border-primary-foreground/20">
                {t("hero.badge.automations")}
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;