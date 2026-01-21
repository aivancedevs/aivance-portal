import { Cog, MessageSquare, Phone, Link2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { solutionsBackgroundConfig } from "./AnimatedBackground";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import agenteIa from "@/assets/img/agente_ia.png";

interface SolutionCardProps {
  solution: {
    icon: typeof Cog;
    titleKey: string;
    descriptionKey: string;
    imageSrc?: string;
  };
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="group h-full">
      <div className="flex flex-col h-full rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 overflow-hidden transition-all duration-500 group-hover:border-accent/60 group-hover:shadow-xl">
        {/* Área superior tipo ilustración genérica */}
        <div className="relative w-full bg-gradient-to-br from-primary-foreground/5 via-accent/20 to-accent/40 border-b border-primary-foreground/10">
          <div className="aspect-[16/9] w-full flex items-center justify-center px-4 sm:px-8 py-4 sm:py-6 transition-transform duration-500 group-hover:scale-[1.02]">
            {solution.imageSrc ? (
              <img
                src={solution.imageSrc}
                alt={t(solution.titleKey)}
                className="w-full h-full object-contain rounded-2xl shadow-lg"
              />
            ) : (
              <div className="w-full max-w-md h-full rounded-2xl bg-background/80 backdrop-blur-md border border-primary-foreground/10 shadow-lg flex items-center justify-center">
                <solution.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
            )}
          </div>
        </div>

        {/* Contenido textual */}
        <div className="flex items-start gap-3 sm:gap-4 px-5 sm:px-6 py-4 sm:py-5 transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
            <solution.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
          </div>
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-semibold text-primary-foreground">
              {t(solution.titleKey)}
            </h3>
            <p className="mt-1 text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              {t(solution.descriptionKey)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Cog,
      titleKey: "solutions.automation.title",
      descriptionKey: "solutions.automation.description",
    },
    {
      icon: MessageSquare,
      titleKey: "solutions.messaging.title",
      descriptionKey: "solutions.messaging.description",
      imageSrc: agenteIa,
    },
    {
      icon: Phone,
      titleKey: "solutions.voice.title",
      descriptionKey: "solutions.voice.description",
    },
    {
      icon: Link2,
      titleKey: "solutions.integrations.title",
      descriptionKey: "solutions.integrations.description",
    },
  ];

  return (
    <section id="solutions" className="relative py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <AnimatedBackground circles={solutionsBackgroundConfig} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">{t("solutions.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            {t("solutions.title")}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            {t("solutions.description")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {[0, 1].map((pageIndex) => (
              <CarouselItem key={pageIndex} className="sm:basis-full">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                  {solutions
                    .slice(pageIndex * 2, pageIndex * 2 + 2)
                    .map((solution, index) => (
                      <SolutionCard key={solution.titleKey + index} solution={solution} />
                    ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-background/40 border-primary-foreground/20 text-primary-foreground/70 hover:bg-background/70" />
          <CarouselNext className="hidden sm:flex bg-background/40 border-primary-foreground/20 text-primary-foreground/70 hover:bg-background/70" />
        </Carousel>
      </div>
    </section>
  );
};

export default SolutionsSection;
