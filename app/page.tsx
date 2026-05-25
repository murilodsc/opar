import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PETS_QUERY, SETTINGS_QUERY } from "@/sanity/queries";
import type { Pet, SiteSettings } from "@/sanity/types";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AnimalGallery from "./components/AnimalGallery";
import DonationSection from "./components/DonationSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

// ISR: revalida a página a cada 60 segundos
export const revalidate = 60;

export default async function Home() {
  const [pets, settings] = await Promise.all([
    client.fetch<Pet[]>(PETS_QUERY).catch(() => [] as Pet[]),
    client.fetch<SiteSettings | null>(SETTINGS_QUERY).catch(() => null),
  ]);

  const qrCodeUrl = settings?.qrCodeUrl
    ? urlFor(settings.qrCodeUrl).width(400).height(400).auto("format").url()
    : undefined;

  return (
    <>
      <Header announcement={settings?.announcement} />
      <main id="conteudo-principal">
        <HeroSection
          whatsapp={settings?.whatsapp}
          title={settings?.heroTitle}
          highlight={settings?.heroHighlight}
          titleEnd={settings?.heroTitleEnd}
          subtitle={settings?.heroSubtitle}
          ctaLostLabel={settings?.heroCtaLostLabel}
          ctaAdoptLabel={settings?.heroCtaAdoptLabel}
        />
        <AboutSection
          title={settings?.aboutTitle}
          subtitle={settings?.aboutSubtitle}
          features={settings?.aboutFeatures}
        />
        <AnimalGallery
          pets={pets}
          whatsapp={settings?.whatsapp}
          title={settings?.galleryTitle}
          subtitle={settings?.gallerySubtitle}
          ctaLabel={settings?.galleryCtaLabel}
        />
        <DonationSection
          pixKey={settings?.pixKey}
          qrCodeUrl={qrCodeUrl}
          title={settings?.donationTitle}
          subtitle={settings?.donationSubtitle}
          cardTitle={settings?.donationCardTitle}
          cardDescription={settings?.donationCardDescription}
          pixKeyLabel={settings?.pixKeyLabel}
          institutionInfo={settings?.donationInstitutionInfo}
        />
        <FAQSection
          title={settings?.faqTitle}
          subtitle={settings?.faqSubtitle}
          items={settings?.faqItems}
        />
      </main>
      <Footer
        whatsapp={settings?.whatsapp}
        email={settings?.email}
        description={settings?.footerDescription}
        address={settings?.footerAddress}
        instagramUrl={settings?.instagramUrl}
        facebookUrl={settings?.facebookUrl}
        socialText={settings?.footerSocialText}
      />
    </>
  );
}
