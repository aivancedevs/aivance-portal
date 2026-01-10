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
    <section id="problems" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">The Challenge</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
            Operations shouldn't slow you down
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Most companies are held back by the same operational challenges. 
            Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
