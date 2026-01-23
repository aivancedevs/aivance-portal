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
    "nav.problems": "Servicios",
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
    
    // ServicesSection (antes ProblemsSection)
    "problems.subtitle": "Nuestros Servicios",
    "problems.title": "Cómo podemos ayudarte",
    "problems.description": "Modelos de trabajo flexibles adaptados a tus necesidades y objetivos de negocio.",
    "problems.manual.title": "LaunchAI",
    "problems.manual.description": "Lo lanzamos por ti: diseño, desarrollo y despliegue completo de tu solución de IA. Desde la idea hasta producción, nosotros nos encargamos de todo el ciclo de vida del proyecto.",
    "problems.friction.title": "KeepAI",
    "problems.friction.description": "Lo mantenemos funcionando: operación y optimización 24/7 de tu infraestructura de IA. Monitoreo continuo, actualizaciones y soporte para que tu solución siempre esté al máximo rendimiento.",
    "problems.scaling.title": "GuideAI",
    "problems.scaling.description": "Te guiamos en el camino: estrategia, auditoría de procesos y mentoría personalizada. Identificamos oportunidades, optimizamos lo existente y te ayudamos a maximizar el ROI de tu inversión en IA.",
    "problems.integrations.title": "ScaleAI",
    "problems.integrations.description": "Escalamos tu equipo: expertos en IA que se integran a tu operación. ML Engineers, AI Architects y Data Scientists listos para impulsar tus proyectos sin las complicaciones de contratar full-time.",
    
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
    "nav.problems": "Services",
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
    
    // ServicesSection (antes ProblemsSection)
    "problems.subtitle": "Our Services",
    "problems.title": "How we can help you",
    "problems.description": "Flexible work models tailored to your business needs and goals.",
    "problems.manual.title": "LaunchAI",
    "problems.manual.description": "We launch it for you: complete design, development and deployment of your AI solution. From idea to production, we handle the entire project lifecycle.",
    "problems.friction.title": "KeepAI",
    "problems.friction.description": "We keep it running: 24/7 operation and optimization of your AI infrastructure. Continuous monitoring, updates and support to keep your solution at peak performance.",
    "problems.scaling.title": "GuideAI",
    "problems.scaling.description": "We guide you: strategy, process auditing and personalized mentorship. We identify opportunities, optimize existing systems and help you maximize ROI on your AI investment.",
    "problems.integrations.title": "ScaleAI",
    "problems.integrations.description": "We scale your team: AI experts who integrate into your operation. ML Engineers, AI Architects and Data Scientists ready to drive your projects without the complexities of full-time hiring.",
    
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