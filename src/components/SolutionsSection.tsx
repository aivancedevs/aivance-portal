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
    <div className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300">
      {/* Video Container */}
      <div className="mb-5 rounded-lg overflow-hidden bg-muted">
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
                  className="w-full h-full relative bg-primary/10 flex items-center justify-center group/play cursor-pointer"
                >
                  <img
                    src={`https://img.youtube.com/vi/${solution.videoSrc.split('/').pop()}/maxresdefault.jpg`}
                    alt={solution.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors" />
                  <div className="relative w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover/play:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-accent-foreground fill-current ml-1" />
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

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
          <solution.icon className="w-5 h-5 text-accent-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground">
          {solution.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {solution.description}
      </p>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">What We Build</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Automation that works for you
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            We design and implement solutions tailored to your specific 
            operational challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
