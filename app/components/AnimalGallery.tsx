import AnimalCard from "./AnimalCard";
import SectionTitle from "./SectionTitle";
import EmptyState from "./EmptyState";
import type { Pet } from "@/sanity/types";

interface AnimalGalleryProps {
  pets: Pet[];
  whatsapp?: string;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
}

export default function AnimalGallery({
  pets,
  whatsapp,
  title,
  subtitle,
  ctaLabel,
}: AnimalGalleryProps) {
  const whatsappLink = whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre adoção")}`
    : "https://wa.me/5512991234567?text=Olá! Gostaria de saber mais sobre adoção";

  const displayTitle = title || "Animais em Destaque";
  const displaySubtitle =
    subtitle ||
    "Conheça alguns dos nossos resgatados que estão prontos para encontrar um novo lar cheio de amor.";
  const displayCtaLabel = ctaLabel || "Ver todos os animais";

  return (
    <section
      id="animais"
      className="py-20 md:py-28 bg-slate-50"
      aria-labelledby="animals-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="animals-heading"
          title={displayTitle}
          subtitle={displaySubtitle}
        />

        {pets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {pets.map((pet) => (
              <AnimalCard key={pet._id} animal={pet} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

        <div className="mt-12 text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            aria-label="Entrar em contato via WhatsApp para saber mais sobre adoção"
          >
            {displayCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
