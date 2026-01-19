import { AlertCircle, RefreshCcw, TrendingDown, Unplug } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemsSection = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: RefreshCcw,
      titleKey: "problems.manual.title",
      descriptionKey: "problems.manual.description",
    },
    {
      icon: AlertCircle,
      titleKey: "problems.friction.title",
      descriptionKey: "problems.friction.description",
    },
    {
      icon: TrendingDown,
      titleKey: "problems.scaling.title",
      descriptionKey: "problems.scaling.description",
    },
    {
      icon: Unplug,
      titleKey: "problems.integrations.title",
      descriptionKey: "problems.integrations.description",
    },
  ];

  return (
    <section id="problems" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">{t("problems.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            {t("problems.title")}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            {t("problems.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.titleKey}
              className="p-4 sm:p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:shadow-card transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent flex items-center justify-center mb-3 sm:mb-4">
                <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-primary-foreground mb-2">
                {t(problem.titleKey)}
              </h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                {t(problem.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
