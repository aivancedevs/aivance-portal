import { Search, Lightbulb, Rocket, BarChart3, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand the Problem",
    description: "We dive deep into your operations to identify the root causes of inefficiency, not just symptoms.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design Improvements",
    description: "We map out solutions that deliver continuous value, focusing on high-impact, low-friction changes.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execute in Sprints",
    description: "We plan and deliver in focused sprints, shipping working solutions quickly and iterating based on feedback.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Validate with Metrics",
    description: "Every change is measured. Real-time dashboards show the impact on your key performance indicators.",
  },
  {
    number: "05",
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Continuous monitoring, updates, and optimization are part of the package.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent mb-4">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-balance">
            How we work together
          </h2>
          <p className="text-lg text-primary-foreground/70 text-balance">
            A structured approach that delivers results, not just promises.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary-foreground/10 md:-translate-x-px" />
            
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-sm font-semibold text-accent-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <step.icon className="w-5 h-5 text-accent md:hidden" />
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <step.icon className="w-5 h-5 text-accent hidden md:block" />
                    </div>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
