import { useLanguage } from "@/contexts/LanguageContext";
import calacoopLogo from "@/assets/img/logos/logotipo-calacoop-web-e1682714914208-80x80.png";
import flosolLogo from "@/assets/img/logos/flosol.png";
import dalaSolutionsLogo from "@/assets/img/logos/dalasolutions.png";
import gbaLogo from "@/assets/img/logos/GBA-Importacions-1024x577.png";
import horizonLogo from "@/assets/img/logos/horizon.png";
import qualitaLogo from "@/assets/img/logos/qualita.png";
import disparLogo from "@/assets/img/logos/dispar.png";
import tegeteLogo from "@/assets/img/logos/Tipo_blanco.png";

const logos = [
  { name: "Calacoop", image: calacoopLogo },
  { name: "Tegete", image: tegeteLogo },
  { name: "Flosol Chevrolet", image: flosolLogo },
  { name: "Dala Solutions", image: dalaSolutionsLogo },
  { name: "GBA Importaciones", image: gbaLogo },
  { name: "Horizon", image: horizonLogo },
  { name: "Qualita", image: qualitaLogo },
  { name: "DisPar", image: disparLogo },
];

const LogoCarousel = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-14 md:py-18 border-y border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 mb-4 sm:mb-6">
        <p className="text-center text-sm sm:text-base md:text-xl font-semibold tracking-tight text-primary-foreground/80">
          {t("logos.subtitle")}
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-primary to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 px-6 sm:px-8 md:px-12 py-4 flex items-center justify-center"
            >
              <div 
                className="relative group cursor-pointer transition-all duration-300 z-10 w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 flex items-center justify-center"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  title={logo.name}
                  className="max-w-full max-h-full w-full h-full object-contain filter brightness-[2] opacity-80 grayscale transition-all duration-300 group-hover:brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
