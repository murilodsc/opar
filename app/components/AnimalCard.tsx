import Image from "next/image";
import { MapPin } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { Pet } from "@/sanity/types";
import { SIZE_LABELS, SEX_LABELS } from "@/sanity/types";
import { urlFor } from "@/sanity/image";

interface AnimalCardProps {
  animal: Pet;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  const imageUrl = animal.photo
    ? urlFor(animal.photo)
        .width(600)
        .height(600)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const altText =
    animal.photo?.alt ||
    `${animal.name}, ${animal.species} disponível para adoção`;

  return (
    <article
      className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
      aria-label={`${animal.name}, ${animal.species}, ${SIZE_LABELS[animal.size]}, ${animal.age || "idade não informada"}, ${SEX_LABELS[animal.sex]}`}
    >
      {/* Foto do animal */}
      <div className="relative aspect-square bg-slate-200 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={altText}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary-100 to-primary-200">
            <span className="text-6xl" aria-hidden="true">
              {animal.species === "cachorro" ? "🐕" : "🐈"}
            </span>
          </div>
        )}
      </div>

      {/* Conteúdo do card */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary-600 transition-colors">
          {animal.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
            {animal.species === "cachorro" ? "Cachorro" : "Gato"}
          </span>
          <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
            {SIZE_LABELS[animal.size]}
          </span>
          <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
            {SEX_LABELS[animal.sex]}
          </span>
          {animal.age && (
            <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full">
              {animal.age}
            </span>
          )}
        </div>

        {animal.location && (
          <div className="mt-3 flex items-center gap-1 text-sm text-slate-500">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{animal.location}</span>
          </div>
        )}

        {animal.description && animal.description.length > 0 && (
          <div className="mt-3 text-sm text-slate-600 line-clamp-2">
            <PortableText value={animal.description} />
          </div>
        )}
      </div>
    </article>
  );
}
