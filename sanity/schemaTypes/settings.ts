import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  icon: () => "⚙️",
  groups: [
    { name: "general", title: "Geral", default: true },
    { name: "hero", title: "Hero (Topo)" },
    { name: "about", title: "Sobre a OPAR" },
    { name: "gallery", title: "Galeria de Animais" },
    { name: "donation", title: "Doação / Pix" },
    { name: "faq", title: "FAQ" },
    { name: "footer", title: "Rodapé" },
  ],
  fields: [
    // ── Geral ──────────────────────────────────────────
    defineField({
      name: "announcement",
      title: "Aviso no Topo do Site",
      type: "string",
      description:
        "Mensagem de destaque exibida no topo da página (deixe vazio para esconder).",
      group: "general",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp de Contato",
      type: "string",
      description:
        "Número completo com DDD e código do país (ex: 5512991234567).",
      validation: (Rule) => Rule.required().error("O WhatsApp é obrigatório."),
      group: "general",
    }),
    defineField({
      name: "email",
      title: "E-mail de Contato",
      type: "string",
      validation: (Rule) =>
        Rule.required().email().error("Informe um e-mail válido."),
      group: "general",
    }),

    // ── Hero ───────────────────────────────────────────
    defineField({
      name: "heroTitle",
      title: "Título Principal",
      type: "string",
      description: 'Primeira parte do título (ex: "Cada vida importa.").',
      group: "hero",
    }),
    defineField({
      name: "heroHighlight",
      title: "Texto em Destaque",
      type: "string",
      description: 'Trecho colorido do título (ex: "Ajude um animal").',
      group: "hero",
    }),
    defineField({
      name: "heroTitleEnd",
      title: "Final do Título",
      type: "string",
      description:
        'Trecho depois do destaque (ex: "a encontrar seu caminho de volta para casa.").',
      group: "hero",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtítulo do Hero",
      type: "text",
      rows: 3,
      description: "Texto de apoio abaixo do título principal.",
      group: "hero",
    }),
    defineField({
      name: "heroCtaLostLabel",
      title: 'Texto do Botão "Perdi / Encontrei"',
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroCtaAdoptLabel",
      title: 'Texto do Botão "Quero Adotar"',
      type: "string",
      group: "hero",
    }),

    // ── Sobre ──────────────────────────────────────────
    defineField({
      name: "aboutTitle",
      title: "Título da Seção",
      type: "string",
      group: "about",
    }),
    defineField({
      name: "aboutSubtitle",
      title: "Subtítulo da Seção",
      type: "text",
      rows: 3,
      group: "about",
    }),
    defineField({
      name: "aboutFeatures",
      title: "Pilares / Destaques",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          name: "feature",
          title: "Pilar",
          fields: [
            defineField({
              name: "icon",
              title: "Ícone",
              type: "string",
              options: {
                list: [
                  { title: "🛡️ Escudo (Resgate)", value: "shield" },
                  { title: "❤️ Coração (Cuidado)", value: "heart" },
                  { title: "🏠 Casa (Adoção)", value: "home" },
                  { title: "🩺 Estetoscópio (Saúde)", value: "stethoscope" },
                  { title: "👥 Pessoas (Voluntários)", value: "users" },
                  { title: "📢 Megafone (Divulgação)", value: "megaphone" },
                  { title: "🐾 Pata (Animal)", value: "pawprint" },
                ],
                layout: "dropdown",
              },
              initialValue: "shield",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Título",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Descrição",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", icon: "icon" },
            prepare({ title, icon }) {
              const iconMap: Record<string, string> = {
                shield: "🛡️",
                heart: "❤️",
                home: "🏠",
                stethoscope: "🩺",
                users: "👥",
                megaphone: "📢",
                pawprint: "🐾",
              };
              return {
                title: `${iconMap[icon] || "•"} ${title}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),

    // ── Galeria ────────────────────────────────────────
    defineField({
      name: "galleryTitle",
      title: "Título da Seção",
      type: "string",
      group: "gallery",
    }),
    defineField({
      name: "gallerySubtitle",
      title: "Subtítulo da Seção",
      type: "text",
      rows: 3,
      group: "gallery",
    }),
    defineField({
      name: "galleryCtaLabel",
      title: "Texto do Botão",
      type: "string",
      description: 'Ex: "Ver todos os animais"',
      group: "gallery",
    }),

    // ── Doação / Pix ──────────────────────────────────
    defineField({
      name: "donationTitle",
      title: "Título da Seção",
      type: "string",
      group: "donation",
    }),
    defineField({
      name: "donationSubtitle",
      title: "Subtítulo da Seção",
      type: "text",
      rows: 3,
      group: "donation",
    }),
    defineField({
      name: "donationCardTitle",
      title: "Título do Card",
      type: "string",
      description: 'Ex: "Doe via Pix"',
      group: "donation",
    }),
    defineField({
      name: "donationCardDescription",
      title: "Descrição do Card",
      type: "string",
      group: "donation",
    }),
    defineField({
      name: "pixKey",
      title: "Chave Pix",
      type: "string",
      description: "CNPJ, e-mail ou chave aleatória para receber doações.",
      validation: (Rule) => Rule.required().error("A chave Pix é obrigatória."),
      group: "donation",
    }),
    defineField({
      name: "pixKeyLabel",
      title: "Rótulo da Chave",
      type: "string",
      description: 'Ex: "Chave Pix (CNPJ)"',
      group: "donation",
    }),
    defineField({
      name: "qrCodeUrl",
      title: "QR Code do Pix",
      type: "image",
      description: "Imagem do QR Code para doação via Pix.",
      options: { hotspot: false },
      group: "donation",
    }),
    defineField({
      name: "donationInstitutionInfo",
      title: "Informações da Instituição",
      type: "string",
      description:
        'Texto abaixo do botão (ex: "OPAR — Banco: Nubank | CNPJ: …").',
      group: "donation",
    }),

    // ── FAQ ────────────────────────────────────────────
    defineField({
      name: "faqTitle",
      title: "Título da Seção",
      type: "string",
      group: "faq",
    }),
    defineField({
      name: "faqSubtitle",
      title: "Subtítulo da Seção",
      type: "text",
      rows: 3,
      group: "faq",
    }),
    defineField({
      name: "faqItems",
      title: "Perguntas e Respostas",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "Pergunta",
          fields: [
            defineField({
              name: "question",
              title: "Pergunta",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Resposta",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),

    // ── Rodapé ─────────────────────────────────────────
    defineField({
      name: "footerDescription",
      title: "Descrição da OPAR",
      type: "text",
      rows: 3,
      description: "Texto curto sobre a organização exibido no rodapé.",
      group: "footer",
    }),
    defineField({
      name: "footerAddress",
      title: "Endereço",
      type: "text",
      rows: 2,
      description: 'Ex: "São José dos Campos - SP\\nCEP 12240-000"',
      group: "footer",
    }),
    defineField({
      name: "instagramUrl",
      title: "Link do Instagram",
      type: "url",
      group: "footer",
    }),
    defineField({
      name: "facebookUrl",
      title: "Link do Facebook",
      type: "url",
      group: "footer",
    }),
    defineField({
      name: "footerSocialText",
      title: "Texto das Redes Sociais",
      type: "string",
      description: 'Ex: "Siga-nos para acompanhar os resgates e eventos!"',
      group: "footer",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Configurações do Site",
        subtitle: "Textos, contatos, doação, FAQ e redes sociais",
      };
    },
  },
});
