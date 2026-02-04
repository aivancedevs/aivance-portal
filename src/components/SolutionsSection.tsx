import { Cog, MessageSquare, BarChart, Zap, Users, Target, Link2, Play, Bell, RefreshCw, Database, FileText, LayoutDashboard, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { solutionsBackgroundConfig } from "./AnimatedBackground";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import agenteIa from "@/assets/img/agente-ia.png";
import agenteVoz from "@/assets/img/agente-voz.png";
import flujoN8n from "@/assets/img/flujo-n8n.png";
import panelMetricas from "@/assets/img/panel-metricas.png";
import { useEffect, useRef, useState } from "react";

interface Feature {
  icon: typeof CheckSquare;
  textKey: string;
}

interface SolutionCardProps {
  solution: {
    icon: typeof Cog;
    titleKey: string;
    descriptionKey: string;
    imageSrc?: string;
    features?: Feature[];
  };
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -50px 0px", // Se activa un poco antes de que esté completamente visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group h-full transition-opacity duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div 
        className="flex flex-col h-full rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 overflow-hidden transition-all duration-500 group-hover:border-accent/60 group-hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Área superior tipo ilustración genérica */}
        {/* RECUADRO EXTERIOR: Controla el fondo y borde superior */}
        <div className="relative w-full bg-gradient-to-br from-primary-foreground/5 via-accent/20 to-accent/40 border-b border-primary-foreground/10 overflow-hidden">
          {/* Efecto de ola animado */}
          {isHovered && (
            <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '-200% 0',
                  animation: 'wave 2s ease-in-out',
                }}
              ></div>
            </div>
          )}
          {/* RECUADRO CONTENEDOR: Controla la proporción (aspect-ratio) y padding interno */}
          <div className="aspect-[11/10] w-full flex items-center justify-center px-4 sm:px-8 py-4 sm:py-6 transition-transform duration-500 group-hover:scale-[1.02] relative z-10">
            {solution.imageSrc ? (
              <img
                src={solution.imageSrc}
                alt={t(solution.titleKey)}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl"
              />
            ) : (
              <div className="w-full max-w-md h-full rounded-2xl bg-background/80 backdrop-blur-md border border-primary-foreground/10 shadow-lg flex items-center justify-center">
                <solution.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
            )}
          </div>
        </div>

        {/* Contenido textual */}
        <div className="px-5 sm:px-6 py-4 sm:py-5 -mt-4 sm:-mt-11 transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="text-left">
            <h3 className="text-lg sm:text-2xl font-semibold text-primary-foreground relative z-20 drop-shadow-lg">
              <span className="inline-block px-3 py-1.5 rounded-lg bg-primary/70 backdrop-blur-md border border-primary-foreground/20 shadow-lg">
                {t(solution.titleKey)}
              </span>
            </h3>
            <p className="mt-1 text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              {t(solution.descriptionKey)}
            </p>
            {solution.features && solution.features.length > 0 && (
              <div className="mt-4 rounded-xl bg-gradient-to-b from-primary-foreground/5 to-accent/20 p-4">
                <ul className="space-y-2.5">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <feature.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed">
                        {t(feature.textKey)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
      icon: MessageSquare,
      titleKey: "solutions.messaging.title",
      descriptionKey: "solutions.messaging.description",
      imageSrc: agenteIa,
      features: [
        { icon: MessageSquare, textKey: "solutions.messaging.feature1" },
        { icon: Users, textKey: "solutions.messaging.feature2" },
        { icon: Target, textKey: "solutions.messaging.feature3" },
        { icon: Link2, textKey: "solutions.messaging.feature4" },
      ],
    },
    {
      icon: Cog,
      titleKey: "solutions.automation.title",
      descriptionKey: "solutions.automation.description",
      imageSrc: flujoN8n,
      features: [
        { icon: Zap, textKey: "solutions.automation.feature1" },
        { icon: Play, textKey: "solutions.automation.feature2" },
        { icon: Bell, textKey: "solutions.automation.feature3" },
        { icon: RefreshCw, textKey: "solutions.automation.feature4" },
      ],
    },
    {
      icon: BarChart,
      titleKey: "solutions.metrics.title",
      descriptionKey: "solutions.metrics.description",
      imageSrc: panelMetricas,
      features: [
        { icon: TrendingUp, textKey: "solutions.metrics.feature1" },
        { icon: Database, textKey: "solutions.metrics.feature2" },
        { icon: FileText, textKey: "solutions.metrics.feature3" },
        { icon: LayoutDashboard, textKey: "solutions.metrics.feature4" },
      ],
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
            dragFree: false,
          }}
          className="max-w-6xl mx-auto w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {solutions.map((solution, index) => (
              <CarouselItem
                key={solution.titleKey + index}
                className="pl-2 md:pl-4 basis-full md:basis-1/2"
              >
                <div className="h-full">
                  <SolutionCard solution={solution} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-background/40 border-primary-foreground/20 text-primary-foreground/70 hover:bg-background/70" />
          <CarouselNext className="hidden md:flex bg-background/40 border-primary-foreground/20 text-primary-foreground/70 hover:bg-background/70" />
        </Carousel>
      </div>
      <style>{`
        @keyframes wave {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;
