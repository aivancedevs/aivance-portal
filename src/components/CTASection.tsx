import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();

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
            {t("cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            {t("cta.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
