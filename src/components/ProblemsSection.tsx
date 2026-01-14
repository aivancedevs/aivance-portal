import { AlertCircle, RefreshCcw, TrendingDown, Unplug } from "lucide-react";

const problems = [
  {
    icon: RefreshCcw,
    title: "Manual Processes",
    description: "Teams spend hours on repetitive tasks that could be automated, draining productivity and morale.",
  },
  {
    icon: AlertCircle,
    title: "Operational Friction",
    description: "Information gets lost between systems and teams, causing delays and errors in critical workflows.",
  },
  {
    icon: TrendingDown,
    title: "Scaling Limitations",
    description: "Growth is bottlenecked by processes that don't scale, forcing you to hire instead of optimize.",
  },
  {
    icon: Unplug,
    title: "Poor Integrations",
    description: "Disconnected tools create data silos and force manual data entry across multiple platforms.",
  },
];

const ProblemsSection = () => {
  return (
    <section id="problems" className="py-16 sm:py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-medium text-accent mb-3 sm:mb-4">The Challenge</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 sm:mb-6 text-balance">
            Operations shouldn't slow you down
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70 text-balance">
            Most companies are held back by the same operational challenges. 
            Sound familiar?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="p-4 sm:p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:shadow-card transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent flex items-center justify-center mb-3 sm:mb-4">
                <problem.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-primary-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
