import { Search, Lightbulb, Rocket, BarChart3, HeartHandshake, LucideIcon } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground, { processBackgroundConfig } from "./AnimatedBackground";

interface StepItemProps {
  step: {
    number: string;
    icon: LucideIcon;
    titleKey: string;
    descriptionKey: string;
  };
  index: number;
}

const StepItem = ({ step, index }: StepItemProps) => {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      className={`relative flex items-start gap-4 sm:gap-6 mb-8 sm:mb-12 last:mb-0 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
      }}
    >
      {/* Number circle */}
      <div className="relative z-10 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center text-xs sm:text-sm font-semibold text-accent-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
        {step.number}
      </div>
      
      {/* Content */}
      <div className={`flex-1 md:w-1/2 ${
        index % 2 === 0 ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16'
      }`}>
        <div className="p-4 sm:p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
          <div className={`flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 ${
            index % 2 === 0 ? 'md:justify-end' : ''
          }`}>
            <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent md:hidden flex-shrink-0" />
            <h3 className="text-base sm:text-lg font-medium">{t(step.titleKey)}</h3>
            <step.icon className="w-5 h-5 text-accent hidden md:block flex-shrink-0" />
          </div>
          <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
            {t(step.descriptionKey)}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: Search,
      titleKey: "process.step1.title",
      descriptionKey: "process.step1.description",
    },
    {
      number: "02",
      icon: Lightbulb,
      titleKey: "process.step2.title",
      descriptionKey: "process.step2.description",
    },
    {
      number: "03",
      icon: Rocket,
      titleKey: "process.step3.title",
      descriptionKey: "process.step3.description",
    },
    {
      number: "04",
      icon: BarChart3,
      titleKey: "process.step4.title",
      descriptionKey: "process.step4.description",
    },
    {
      number: "05",
      icon: HeartHandshake,
      titleKey: "process.step5.title",
      descriptionKey: "process.step5.description",
    },
  ];

  return (
    <section id="process" className="relative py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <AnimatedBackground circles={processBackgroundConfig} />
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">{t("process.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-balance">
            {t("process.title")}
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            {t("process.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/10 md:-translate-x-px" />
            
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
