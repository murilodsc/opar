import { Search, Heart } from "lucide-react";

interface HeroSectionProps {
  whatsapp?: string;
  title?: string;
  highlight?: string;
  titleEnd?: string;
  subtitle?: string;
  ctaLostLabel?: string;
  ctaAdoptLabel?: string;
}

export default function HeroSection({
  whatsapp,
  title,
  highlight,
  titleEnd,
  subtitle,
  ctaLostLabel,
  ctaAdoptLabel,
}: HeroSectionProps) {
  const whatsappNumber = whatsapp || "5512991234567";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Perdi meu pet / Encontrei um animal")}`;

  const displayTitle = title || "Cada vida importa.";
  const displayHighlight = highlight || "Ajude um animal";
  const displayTitleEnd =
    titleEnd || "a encontrar seu caminho de volta para casa.";
  const displaySubtitle =
    subtitle ||
    "A OPAR resgata e protege animais em situação de risco em São José dos Campos. Juntos, podemos fazer a diferença.";
  const displayCtaLost = ctaLostLabel || "Perdi meu Pet / Encontrei um Animal";
  const displayCtaAdopt = ctaAdoptLabel || "Quero Adotar";

  return (
    <section
      className="relative bg-linear-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            {displayTitle}{" "}
            <span className="text-accent-300">{displayHighlight}</span>{" "}
            {displayTitleEnd}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl">
            {displaySubtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-full shadow-lg hover:bg-primary-50 hover:shadow-xl transition-all duration-200 text-base"
              aria-label="Reportar animal perdido ou encontrado via WhatsApp"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
              {displayCtaLost}
            </a>

            <a
              href="#animais"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-full shadow-lg hover:bg-accent-600 hover:shadow-xl transition-all duration-200 text-base"
              aria-label="Ver animais disponíveis para adoção"
            >
              <Heart className="w-5 h-5" aria-hidden="true" />
              {displayCtaAdopt}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
