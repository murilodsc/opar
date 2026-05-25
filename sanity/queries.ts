import { defineQuery } from "next-sanity";

export const PETS_QUERY = defineQuery(
  `*[_type == "pet" && adopted != true] | order(_createdAt desc) {
    _id,
    name,
    photo {
      ...,
      "alt": coalesce(alt, name + ", animal disponível para adoção")
    },
    species,
    size,
    sex,
    age,
    location,
    description,
    adopted
  }`,
);

export const SETTINGS_QUERY = defineQuery(
  `*[_type == "siteSettings"][0] {
    _id,

    // Geral
    announcement,
    whatsapp,
    email,

    // Hero
    heroTitle,
    heroHighlight,
    heroTitleEnd,
    heroSubtitle,
    heroCtaLostLabel,
    heroCtaAdoptLabel,

    // Sobre
    aboutTitle,
    aboutSubtitle,
    aboutFeatures[] {
      _key,
      icon,
      title,
      description
    },

    // Galeria
    galleryTitle,
    gallerySubtitle,
    galleryCtaLabel,

    // Doação
    donationTitle,
    donationSubtitle,
    donationCardTitle,
    donationCardDescription,
    pixKey,
    pixKeyLabel,
    qrCodeUrl,
    donationInstitutionInfo,

    // FAQ
    faqTitle,
    faqSubtitle,
    faqItems[] {
      _key,
      question,
      answer
    },

    // Rodapé
    footerDescription,
    footerAddress,
    instagramUrl,
    facebookUrl,
    footerSocialText
  }`,
);
