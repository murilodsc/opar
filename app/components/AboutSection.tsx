import {
  Heart,
  Shield,
  Home,
  Stethoscope,
  Users,
  Megaphone,
  PawPrint,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { AboutFeature, FeatureIcon } from "@/sanity/types";

const ICON_MAP: Record<FeatureIcon, LucideIcon> = {
  shield: Shield,
  heart: Heart,
  home: Home,
  stethoscope: Stethoscope,
  users: Users,
  megaphone: Megaphone,
  pawprint: PawPrint,
};

const DEFAULT_FEATURES: AboutFeature[] = [
  {
    _key: "default-1",
    icon: "shield",
    title: "Resgate",
    description:
      "Resgatamos animais em situação de maus-tratos, abandono e risco nas ruas de São José dos Campos.",
  },
  {
    _key: "default-2",
    icon: "heart",
    title: "Cuidado",
    description:
      "Oferecemos atendimento veterinário, vacinação, castração e todo o suporte necessário para a recuperação.",
  },
  {
    _key: "default-3",
    icon: "home",
    title: "Adoção Responsável",
    description:
      "Encontramos lares amorosos e responsáveis para cada animal que passa pelo nosso abrigo.",
  },
];

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  features?: AboutFeature[];
}

export default function AboutSection({
  title,
  subtitle,
  features,
}: AboutSectionProps) {
  const displayTitle = title || "Sobre a OPAR";
  const displaySubtitle =
    subtitle ||
    "Somos uma Organização de Proteção Animal de Resgate, atuando desde 2015 em São José dos Campos com a missão de salvar vidas e promover o bem-estar animal.";
  const displayFeatures =
    features && features.length > 0 ? features : DEFAULT_FEATURES;

  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="about-heading"
          title={displayTitle}
          subtitle={displaySubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {displayFeatures.map((feature) => {
            const Icon = ICON_MAP[feature.icon] || Shield;
            return (
              <article
                key={feature._key}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-primary-50/50 border border-primary-100 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-5">
                  <Icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
