import { useState, type MouseEvent } from "react";
import { AlertCircle, RefreshCcw, TrendingDown, Unplug } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { problemsBackgroundConfig } from "./AnimatedBackground";

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

interface ProblemCardProps {
  problem: (typeof problems)[number];
  index: number;
}

const ProblemCard = ({ problem, index }: ProblemCardProps) => {
  const { t } = useLanguage();
  const [transform, setTransform] = useState<string>("rotateX(0deg) rotateY(0deg)");
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Efecto 3D un poco más notorio
    const rotateX = ((y - midY) / midY) * 14;
    const rotateY = ((x - midX) / midX) * -14;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    if (!isHover) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
    setIsHover(false);
  };

  return (
    <div
      className="p-[1px] rounded-2xl bg-gradient-to-br from-primary-foreground/5 via-primary-foreground/10 to-transparent"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 px-5 py-5 sm:px-6 sm:py-6 shadow-card/0 hover:shadow-card hover:border-primary-foreground/30 hover:bg-primary-foreground/10 hover:shadow-[0_0_40px_rgba(148,246,222,0.28)] transition-all duration-300"
        style={{
          transform: `${transform} ${isHover ? "scale(1.05)" : "scale(1)"}`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <div
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-accent flex items-center justify-center mb-3 sm:mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
        </div>
        <h3
          className="text-base sm:text-lg font-semibold text-primary-foreground mb-2"
          style={{ transform: "translateZ(15px)" }}
        >
          {t(problem.titleKey)}
        </h3>
        <p
          className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed"
          style={{ transform: "translateZ(10px)" }}
        >
          {t(problem.descriptionKey)}
        </p>
      </div>
    </div>
  );
};

const ProblemsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="problems" className="relative py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <AnimatedBackground circles={problemsBackgroundConfig} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">{t("problems.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            {t("problems.title")}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            {t("problems.description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto [perspective:1400px]">
          {problems.map((problem, index) => (
            <ProblemCard key={problem.titleKey} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
