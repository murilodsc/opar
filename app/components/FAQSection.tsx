"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { FAQItem } from "@/sanity/types";

const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    _key: "default-1",
    question: "Encontrei um animal abandonado na rua. O que devo fazer?",
    answer:
      "Primeiro, verifique se o animal está ferido. Se estiver em perigo imediato, tente colocá-lo em um local seguro. Em seguida, entre em contato conosco pelo WhatsApp com a localização e fotos do animal. Nossa equipe irá orientá-lo sobre os próximos passos.",
  },
  {
    _key: "default-2",
    question: "Perdi meu animal de estimação. Como a OPAR pode ajudar?",
    answer:
      "Entre em contato imediatamente pelo nosso WhatsApp com fotos recentes do seu pet, a região onde ele foi visto pela última vez e suas características. Divulgaremos nas nossas redes sociais e verificaremos se algum animal com essas características foi resgatado por nossa equipe.",
  },
  {
    _key: "default-3",
    question: "Como funciona o processo de adoção?",
    answer:
      "O processo inclui: 1) Preencher um formulário de interesse; 2) Passar por uma entrevista com nossa equipe; 3) Visita ao abrigo para conhecer o animal; 4) Assinatura do termo de adoção responsável. Exigimos que o adotante tenha casa com telas de proteção (para gatos) ou muro alto (para cães).",
  },
  {
    _key: "default-4",
    question: "Posso ser voluntário na OPAR? Como?",
    answer:
      "Sim! Precisamos sempre de voluntários para lar temporário, transporte de animais para consultas veterinárias, ajuda em eventos de adoção e divulgação nas redes sociais. Entre em contato pelo nosso WhatsApp ou Instagram para saber como contribuir com seu tempo.",
  },
  {
    _key: "default-5",
    question: "A OPAR realiza castração gratuita?",
    answer:
      "Periodicamente realizamos mutirões de castração em parceria com clínicas veterinárias da região. Fique de olho nas nossas redes sociais para saber as datas. Todos os animais adotados por meio da OPAR são entregues já castrados e vacinados.",
  },
  {
    _key: "default-6",
    question: "Como minha doação é utilizada?",
    answer:
      "100% das doações são destinadas ao cuidado dos animais: ração, medicamentos, consultas veterinárias, cirurgias, vacinas e manutenção do abrigo. Publicamos mensalmente um relatório de transparência em nossas redes sociais.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <h3>
        <button
          type="button"
          className="flex items-center justify-between w-full px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="text-base font-medium text-slate-800 pr-4">
            {item.question}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {isOpen && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-slate-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

export default function FAQSection({
  title,
  subtitle,
  items,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayTitle = title || "Perguntas Frequentes";
  const displaySubtitle =
    subtitle ||
    "Tire suas dúvidas sobre resgate, adoção e como ajudar os animais.";
  const displayItems = items && items.length > 0 ? items : DEFAULT_FAQ_ITEMS;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          id="faq-heading"
          title={displayTitle}
          subtitle={displaySubtitle}
        />

        <div
          className="mt-12 flex flex-col gap-3"
          role="region"
          aria-label="Perguntas frequentes sobre resgate animal"
        >
          {displayItems.map((item, index) => (
            <FAQAccordionItem
              key={item._key}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
