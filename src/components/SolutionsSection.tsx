import { Cog, MessageSquare, Phone, Link2, Play } from "lucide-react";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import processAutomationVideo from "@/assets/videos/process-automation.mp4";
import systemIntegrationsVideo from "@/assets/videos/system-integrations.mp4";

const solutions = [
  {
    icon: Cog,
    title: "Process Automation",
    description: "Transform manual workflows into automated systems that run 24/7 without intervention.",
    videoType: "local" as const,
    videoSrc: processAutomationVideo,
  },
  {
    icon: MessageSquare,
    title: "Messaging Agents",
    description: "Intelligent chatbots for WhatsApp, web, and internal tools that handle conversations at scale.",
    videoType: "youtube" as const,
    videoSrc: "https://www.youtube.com/embed/soBKKk4YOWg",
  },
  {
    icon: Phone,
    title: "Voice Agents",
    description: "AI-powered voice assistants for customer support, scheduling, and outbound calls.",
    videoType: "youtube" as const,
    videoSrc: "https://www.youtube.com/embed/k5vIklklj64",
  },
  {
    icon: Link2,
    title: "System Integrations",
    description: "Connect your tools and databases to create seamless data flow across your entire stack.",
    videoType: "local" as const,
    videoSrc: systemIntegrationsVideo,
  },
];

interface SolutionCardProps {
  solution: typeof solutions[0];
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group p-4 sm:p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/50 hover:shadow-card transition-all duration-300">
      {/* Video Container */}
      <div className="mb-4 sm:mb-5 rounded-lg overflow-hidden bg-primary-foreground/10">
        <AspectRatio ratio={1}>
          {solution.videoType === "local" ? (
            <video
              src={solution.videoSrc}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              autoPlay
            />
          ) : (
            <>
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full relative bg-primary-foreground/10 flex items-center justify-center group/play cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${solution.videoSrc.split('/').pop()}/maxresdefault.jpg`}
                    alt={solution.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center group-hover/play:scale-110 transition-transform">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-accent-foreground fill-current ml-1" />
                  </div>
                </button>
              ) : (
                <iframe
                  src={`${solution.videoSrc}?autoplay=1`}
                  title={solution.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </>
          )}
        </AspectRatio>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
          <solution.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
        </div>
        <h3 className="text-base sm:text-lg font-medium text-primary-foreground">
          {solution.title}
        </h3>
      </div>
      <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
        {solution.description}
      </p>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">What We Build</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            Automation that works for you
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            We design and implement solutions tailored to your specific 
            operational challenges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
