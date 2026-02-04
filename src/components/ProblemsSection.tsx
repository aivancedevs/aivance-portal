import { useState, type MouseEvent } from "react";
import { Rocket, Settings, Compass, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { problemsBackgroundConfig } from "./AnimatedBackground";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const problems = [
  {
    icon: Rocket,
    titleKey: "problems.manual.title",
    descriptionKey: "problems.manual.description",
    badgeKey: "problems.subtitle",
    tagsKeys: ["End-to-end", "Custom", "Production", "Integration"],
  },
  {
    icon: Settings,
    titleKey: "problems.friction.title",
    descriptionKey: "problems.friction.description",
    badgeKey: "problems.subtitle",
    tagsKeys: ["Monitoring", "Optimization", "Updates", "Support"],
  },
  {
    icon: Compass,
    titleKey: "problems.scaling.title",
    descriptionKey: "problems.scaling.description",
    badgeKey: "problems.subtitle",
    tagsKeys: ["Strategy", "Advisory", "ROI", "Mentorship"],
  },
  {
    icon: Users,
    titleKey: "problems.integrations.title",
    descriptionKey: "problems.integrations.description",
    badgeKey: "problems.subtitle",
    tagsKeys: ["ML Engineers", "AI Architects", "Data Scientists", "Flexible"],
  },
];

interface ProblemCardProps {
  problem: (typeof problems)[number];
  index: number;
}

const ProblemCard = ({ problem, index }: ProblemCardProps) => {
  const { t } = useLanguage();
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

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

  // Obtener el título traducido y dividirlo en partes
  const title = t(problem.titleKey) || problem.titleKey;
  const titleParts = title.split('\n');

  return (
    <div
      className="perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`
          flex flex-col gap-5 justify-start items-start w-full 
          bg-primary-foreground/5 rounded-xl p-6 
          border border-primary-foreground/10
          shadow-[0px_4px_12px_rgba(148,246,222,0.15)]
          transition-all duration-300 ease-out
          ${isHover ? "shadow-[0px_8px_24px_rgba(148,246,222,0.25)] bg-primary-foreground/10" : ""}
        `}
        style={{
          transform,
          transformStyle: "preserve-3d",
          transitionDelay: `${index * 100}ms`,
        }}
      >
        {/* Icon and Badge */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <problem.icon className="w-5 h-5 text-accent" />
          </div>
          <span className="text-xs font-semibold text-accent-foreground bg-accent rounded-full px-3 py-1">
            {t(problem.badgeKey)}
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col gap-3 justify-start w-full">
          <h3 className="text-xl font-bold leading-tight text-primary-foreground whitespace-pre-line">
            <span className="text-accent">{titleParts[0]}</span>
            {titleParts[1] && (
              <>
                {'\n'}
                {titleParts[1]}
              </>
            )}
          </h3>
          <span className="w-full h-[1px] bg-accent/50" />
          <div className="w-full min-h-[80px]">
            <p className="text-sm font-normal leading-relaxed text-primary-foreground/70">
              {t(problem.descriptionKey)}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-row flex-wrap gap-2 justify-start items-center w-full mt-auto">
          {problem.tagsKeys.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-primary-foreground bg-primary-foreground/10 rounded-md px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProblemsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground circles={problemsBackgroundConfig} />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 justify-start items-center w-full mb-12 lg:mb-16">
          <p className="text-sm font-medium text-accent">
            {t("problems.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center text-primary-foreground w-full lg:w-[90%] text-balance">
            {t("problems.title")}
          </h2>
          <p className="text-lg text-primary-foreground/70 text-center max-w-2xl text-balance">
            {t("problems.description")}
          </p>
          <div className="w-24 h-[2px] bg-accent mt-2" />
        </div>

        {/* Mobile: carrusel una card por slide */}
        <div className="md:hidden w-full">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {problems.map((problem, index) => (
                <CarouselItem key={`${problem.titleKey}-${index}`} className="pl-2 basis-full">
                  <ProblemCard problem={problem} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {problems.map((problem, index) => (
            <ProblemCard key={`${problem.titleKey}-${index}`} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;