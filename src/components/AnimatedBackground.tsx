export interface CircleConfig {
  size: number; // width and height in pixels
  position: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
    transform?: string;
  };
  opacity: {
    from: string;
    via: string;
    to: string;
  };
  animation: "breathe" | "breathe-2" | "breathe-3" | "move-x" | "move-y";
  delay?: string;
}

interface AnimatedBackgroundProps {
  circles: CircleConfig[];
  className?: string;
}

const animationClasses = {
  breathe: "animate-breathe",
  "breathe-2": "animate-breathe-2",
  "breathe-3": "animate-breathe-3",
  "move-x": "animate-move-x",
  "move-y": "animate-move-y",
};

const AnimatedBackground = ({ circles, className = "" }: AnimatedBackgroundProps) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {circles.map((circle, index) => {
        const positionStyle: React.CSSProperties = {
          ...circle.position,
          width: `${circle.size}px`,
          height: `${circle.size}px`,
        };

        if (circle.delay) {
          positionStyle.animationDelay = circle.delay;
        }

        // Create gradient stops for radial gradient
        const gradientStops = [
          `${circle.opacity.from} 0%`,
          `${circle.opacity.via} 50%`,
          `${circle.opacity.to} 100%`,
        ].join(", ");

        return (
          <div
            key={index}
            className={`absolute rounded-full blur-3xl ${animationClasses[circle.animation]}`}
            style={{
              ...positionStyle,
              background: `radial-gradient(circle, ${gradientStops})`,
            }}
          />
        );
      })}
    </div>
  );
};

// Predefined configurations for different sections
export const heroBackgroundConfig: CircleConfig[] = [
  {
    size: 600,
    position: { top: "-200px", left: "-200px" },
    opacity: { from: "hsl(173 58% 39% / 0.5)", via: "hsl(173 58% 39% / 0.25)", to: "transparent" },
    animation: "breathe",
  },
  {
    size: 500,
    position: { top: "-150px", right: "-150px" },
    opacity: { from: "hsl(173 58% 39% / 0.45)", via: "hsl(173 58% 39% / 0.2)", to: "transparent" },
    animation: "breathe-2",
    delay: "2s",
  },
  {
    size: 600,
    position: { bottom: "120px", left: "100px" },
    opacity: { from: "hsl(173 58% 39% / 0.4)", via: "hsl(173 58% 39% / 0.15)", to: "transparent" },
    animation: "breathe-3",
    delay: "4s",
  },
  {
    size: 400,
    position: { top: "50%", right: "10%", transform: "translateY(-50%)" },
    opacity: { from: "hsl(173 58% 39% / 0.35)", via: "hsl(173 58% 39% / 0.12)", to: "transparent" },
    animation: "breathe",
    delay: "6s",
  },
];

export const problemsBackgroundConfig: CircleConfig[] = [
  {
    size: 450,
    position: { top: "10%", left: "-100px" },
    opacity: { from: "hsl(173 58% 39% / 0.3)", via: "hsl(173 58% 39% / 0.15)", to: "transparent" },
    animation: "move-x",
    delay: "1s",
  },
  {
    size: 400,
    position: { bottom: "20%", right: "-80px" },
    opacity: { from: "hsl(173 58% 39% / 0.25)", via: "hsl(173 58% 39% / 0.12)", to: "transparent" },
    animation: "move-y",
    delay: "3s",
  },
];

export const solutionsBackgroundConfig: CircleConfig[] = [
  {
    size: 500,
    position: { top: "15%", left: "-100px", transform: "translateY(-50%)" },
    opacity: { from: "hsl(173 58% 39% / 0.35)", via: "hsl(173 58% 39% / 0.18)", to: "transparent" },
    animation: "breathe-2",
    delay: "0.5s",
  },
  {
    size: 350,
    position: { top: "40%", right: "-100px" },
    opacity: { from: "hsl(173 58% 39% / 0.28)", via: "hsl(173 58% 39% / 0.14)", to: "transparent" },
    animation: "breathe-3",
    delay: "2.5s",
  },
  {
    size: 420,
    position: { bottom: "20%", right: "5%" },
    opacity: { from: "hsl(173 58% 39% / 0.3)", via: "hsl(173 58% 39% / 0.15)", to: "transparent" },
    animation: "move-x",
    delay: "4s",
  },
];

export const processBackgroundConfig: CircleConfig[] = [
  {
    size: 480,
    position: { top: "70px", right: "-100px" },
    opacity: { from: "hsl(173 58% 39% / 0.32)", via: "hsl(173 58% 39% / 0.16)", to: "transparent" },
    animation: "breathe",
    delay: "1.5s",
  },
  {
    size: 380,
    position: { bottom: "80px", left: "-90px" },
    opacity: { from: "hsl(173 58% 39% / 0.28)", via: "hsl(173 58% 39% / 0.14)", to: "transparent" },
    animation: "move-y",
    delay: "3.5s",
  },
  {
    size: 320,
    position: { top: "60%", left: "8%", transform: "translateY(-50%)" },
    opacity: { from: "hsl(173 58% 39% / 0.25)", via: "hsl(173 58% 39% / 0.12)", to: "transparent" },
    animation: "breathe-3",
    delay: "5s",
  },
];

export default AnimatedBackground;
