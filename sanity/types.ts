import type { PortableTextBlock } from "next-sanity";

export interface PetImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

// ── Pet ────────────────────────────────────────────────

export interface Pet {
  _id: string;
  name: string;
  photo: PetImage;
  species: "cachorro" | "gato";
  size: "pequeno" | "medio" | "grande";
  sex: "macho" | "femea";
  adopted: boolean;
  age?: string;
  location?: string;
  description?: PortableTextBlock[];
}

/** Mapeamento de porte para exibição */
export const SIZE_LABELS: Record<Pet["size"], string> = {
  pequeno: "Pequeno",
  medio: "Médio",
  grande: "Grande",
};

/** Mapeamento de sexo para exibição */
export const SEX_LABELS: Record<Pet["sex"], string> = {
  macho: "Macho",
  femea: "Fêmea",
};

// ── About Features ─────────────────────────────────────

export type FeatureIcon =
  | "shield"
  | "heart"
  | "home"
  | "stethoscope"
  | "users"
  | "megaphone"
  | "pawprint";

export interface AboutFeature {
  _key: string;
  icon: FeatureIcon;
  title: string;
  description: string;
}

// ── FAQ ────────────────────────────────────────────────

export interface FAQItem {
  _key: string;
  question: string;
  answer: string;
}

// ── Site Settings ──────────────────────────────────────

export interface SiteSettings {
  _id: string;

  // Geral
  announcement?: string;
  whatsapp: string;
  email: string;

  // Hero
  heroTitle?: string;
  heroHighlight?: string;
  heroTitleEnd?: string;
  heroSubtitle?: string;
  heroCtaLostLabel?: string;
  heroCtaAdoptLabel?: string;

  // Sobre
  aboutTitle?: string;
  aboutSubtitle?: string;
  aboutFeatures?: AboutFeature[];

  // Galeria
  galleryTitle?: string;
  gallerySubtitle?: string;
  galleryCtaLabel?: string;

  // Doação
  donationTitle?: string;
  donationSubtitle?: string;
  donationCardTitle?: string;
  donationCardDescription?: string;
  pixKey: string;
  pixKeyLabel?: string;
  qrCodeUrl?: PetImage;
  donationInstitutionInfo?: string;

  // FAQ
  faqTitle?: string;
  faqSubtitle?: string;
  faqItems?: FAQItem[];

  // Rodapé
  footerDescription?: string;
  footerAddress?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  footerSocialText?: string;
}
