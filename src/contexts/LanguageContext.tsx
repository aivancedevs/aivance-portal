import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.problems": "Problemas",
    "nav.solutions": "Soluciones",
    "nav.process": "Cómo Trabajamos",
    "nav.schedule": "Agendar Reunión",
    
    // HeroSection
    "hero.title.part1": "Automatiza procesos",
    "hero.title.part2": "Escala operaciones",
    "hero.badge.messaging": "Agentes de mensajería",
    "hero.badge.voice": "Agentes de voz",
    "hero.badge.metrics": "Panel de métricas",
    "hero.badge.automations": "Automatizaciones complejas",
    
    // ProblemsSection
    "problems.subtitle": "El Desafío",
    "problems.title": "Las operaciones no deberían frenarte",
    "problems.description": "La mayoría de las empresas se ven limitadas por los mismos desafíos operativos. ¿Te suena familiar?",
    "problems.manual.title": "Procesos Manuales",
    "problems.manual.description": "Los equipos pasan horas en tareas repetitivas que podrían automatizarse, drenando productividad y moral.",
    "problems.friction.title": "Fricción Operativa",
    "problems.friction.description": "La información se pierde entre sistemas y equipos, causando retrasos y errores en flujos de trabajo críticos.",
    "problems.scaling.title": "Limitaciones de Escalabilidad",
    "problems.scaling.description": "El crecimiento está limitado por procesos que no escalan, forzándote a contratar en lugar de optimizar.",
    "problems.integrations.title": "Integraciones Deficientes",
    "problems.integrations.description": "Herramientas desconectadas crean silos de datos y fuerzan entrada manual de datos en múltiples plataformas.",
    
    // SolutionsSection
    "solutions.subtitle": "Lo Que Construimos",
    "solutions.title": "Automatización que funciona para ti",
    "solutions.description": "Diseñamos e implementamos soluciones adaptadas a tus desafíos operativos específicos.",
    "solutions.automation.title": "Automatización de Procesos",
    "solutions.automation.description": "Transforma flujos de trabajo manuales en sistemas automatizados que funcionan 24/7 sin intervención.",
    "solutions.messaging.title": "Agentes de Mensajería",
    "solutions.messaging.description": "Chatbots inteligentes para WhatsApp, web y herramientas internas que manejan conversaciones a escala.",
    "solutions.voice.title": "Agentes de Voz",
    "solutions.voice.description": "Asistentes de voz con IA para atención al cliente, programación y llamadas salientes.",
    "solutions.integrations.title": "Integraciones de Sistemas",
    "solutions.integrations.description": "Conecta tus herramientas y bases de datos para crear un flujo de datos fluido en toda tu pila tecnológica.",
    "solutions.features.attention": "Atención inteligente 24/7",
    "solutions.features.kb": "Respuestas en base a KB",
    "solutions.features.ai": "AI integrada en cada interacción",
    "solutions.features.integration": "Conexión a sistemas de tu empresa",
    
    // ProcessSection
    "process.subtitle": "Nuestro Proceso",
    "process.title": "Cómo trabajamos juntos",
    "process.description": "Un enfoque estructurado que entrega resultados, no solo promesas.",
    "process.step1.title": "Entender el Problema",
    "process.step1.description": "Nos sumergimos profundamente en tus operaciones para identificar las causas raíz de la ineficiencia, no solo los síntomas.",
    "process.step2.title": "Diseñar Mejoras",
    "process.step2.description": "Mapeamos soluciones que brindan valor continuo, enfocándonos en cambios de alto impacto y baja fricción.",
    "process.step3.title": "Ejecutar en Sprints",
    "process.step3.description": "Planificamos y entregamos en sprints enfocados, enviando soluciones funcionales rápidamente e iterando basándonos en feedback.",
    "process.step4.title": "Validar con Métricas",
    "process.step4.description": "Cada cambio se mide. Los dashboards en tiempo real muestran el impacto en tus indicadores clave de rendimiento.",
    "process.step5.title": "Soporte Continuo",
    "process.step5.description": "No desaparecemos después del lanzamiento. Monitoreo continuo, actualizaciones y optimización son parte del paquete.",
    
    // CTASection
    "cta.title": "¿Listo para automatizar?",
    "cta.description": "Hablemos de cómo podemos eliminar el trabajo manual y ayudar a tu equipo a enfocarse en lo que importa.",
    
    // LogoCarousel
    "logos.subtitle": "Confiaron en nosotros",
    
    // Footer
    "footer.copyright": "© {year} AIVANCE. Todos los derechos reservados.",
    
    // Language
    "language.label": "Idioma:",
  },
  en: {
    // Navbar
    "nav.problems": "Problems",
    "nav.solutions": "Solutions",
    "nav.process": "How We Work",
    "nav.schedule": "Schedule a Meeting",
    
    // HeroSection
    "hero.title.part1": "Automate processes",
    "hero.title.part2": "Scale operations",
    "hero.badge.messaging": "Messaging agents",
    "hero.badge.voice": "Voice agents",
    "hero.badge.metrics": "Metrics panel",
    "hero.badge.automations": "Complex automations",
    
    // ProblemsSection
    "problems.subtitle": "The Challenge",
    "problems.title": "Operations shouldn't slow you down",
    "problems.description": "Most companies are held back by the same operational challenges. Sound familiar?",
    "problems.manual.title": "Manual Processes",
    "problems.manual.description": "Teams spend hours on repetitive tasks that could be automated, draining productivity and morale.",
    "problems.friction.title": "Operational Friction",
    "problems.friction.description": "Information gets lost between systems and teams, causing delays and errors in critical workflows.",
    "problems.scaling.title": "Scaling Limitations",
    "problems.scaling.description": "Growth is bottlenecked by processes that don't scale, forcing you to hire instead of optimize.",
    "problems.integrations.title": "Poor Integrations",
    "problems.integrations.description": "Disconnected tools create data silos and force manual data entry across multiple platforms.",
    
    // SolutionsSection
    "solutions.subtitle": "What We Build",
    "solutions.title": "Automation that works for you",
    "solutions.description": "We design and implement solutions tailored to your specific operational challenges.",
    "solutions.automation.title": "Process Automation",
    "solutions.automation.description": "Transform manual workflows into automated systems that run 24/7 without intervention.",
    "solutions.messaging.title": "Messaging Agents",
    "solutions.messaging.description": "Intelligent chatbots for WhatsApp, web, and internal tools that handle conversations at scale.",
    "solutions.voice.title": "Voice Agents",
    "solutions.voice.description": "AI-powered voice assistants for customer support, scheduling, and outbound calls.",
    "solutions.integrations.title": "System Integrations",
    "solutions.integrations.description": "Connect your tools and databases to create seamless data flow across your entire stack.",
    "solutions.features.attention": "Intelligent 24/7 support",
    "solutions.features.kb": "KB-based responses",
    "solutions.features.ai": "AI integrated in every interaction",
    "solutions.features.integration": "Connection to your company's systems",
    
    // ProcessSection
    "process.subtitle": "Our Process",
    "process.title": "How we work together",
    "process.description": "A structured approach that delivers results, not just promises.",
    "process.step1.title": "Understand the Problem",
    "process.step1.description": "We dive deep into your operations to identify the root causes of inefficiency, not just symptoms.",
    "process.step2.title": "Design Improvements",
    "process.step2.description": "We map out solutions that deliver continuous value, focusing on high-impact, low-friction changes.",
    "process.step3.title": "Execute in Sprints",
    "process.step3.description": "We plan and deliver in focused sprints, shipping working solutions quickly and iterating based on feedback.",
    "process.step4.title": "Validate with Metrics",
    "process.step4.description": "Every change is measured. Real-time dashboards show the impact on your key performance indicators.",
    "process.step5.title": "Ongoing Support",
    "process.step5.description": "We don't disappear after launch. Continuous monitoring, updates, and optimization are part of the package.",
    
    // CTASection
    "cta.title": "Ready to automate?",
    "cta.description": "Let's discuss how we can eliminate manual work and help your team focus on what matters.",
    
    // LogoCarousel
    "logos.subtitle": "Trusted by forward-thinking companies",
    
    // Footer
    "footer.copyright": "© {year} AIVANCE. All rights reserved.",
    
    // Language
    "language.label": "Language:",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    const translation = translations[language][key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    // Reemplazar placeholders como {year}
    return translation.replace("{year}", new Date().getFullYear().toString());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
