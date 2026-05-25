import { defineField, defineType } from "sanity";

export default defineType({
  name: "pet",
  title: "Animal",
  type: "document",
  icon: () => "🐾",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required().error("O nome do animal é obrigatório."),
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          description: "Descreva a imagem para acessibilidade (ex: 'Thor, cachorro caramelo de porte grande').",
        }),
      ],
      validation: (Rule) => Rule.required().error("A foto do animal é obrigatória."),
    }),
    defineField({
      name: "species",
      title: "Espécie",
      type: "string",
      options: {
        list: [
          { title: "Cachorro", value: "cachorro" },
          { title: "Gato", value: "gato" },
        ],
        layout: "radio",
      },
      initialValue: "cachorro",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Porte",
      type: "string",
      options: {
        list: [
          { title: "Pequeno", value: "pequeno" },
          { title: "Médio", value: "medio" },
          { title: "Grande", value: "grande" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required().error("O porte do animal é obrigatório."),
    }),
    defineField({
      name: "sex",
      title: "Sexo",
      type: "string",
      options: {
        list: [
          { title: "Macho", value: "macho" },
          { title: "Fêmea", value: "femea" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("O sexo do animal é obrigatório."),
    }),
    defineField({
      name: "age",
      title: "Idade",
      type: "string",
      description: "Ex: '2 anos', '6 meses', 'Filhote'",
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
      description: "Bairro ou região onde o animal foi resgatado.",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "array",
      of: [{ type: "block" }],
      description: "Descrição detalhada do animal, personalidade, necessidades especiais, etc.",
    }),
    defineField({
      name: "adopted",
      title: "Adotado?",
      type: "boolean",
      initialValue: false,
      description: "Marque quando o animal for adotado.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "species",
      media: "photo",
      adopted: "adopted",
    },
    prepare({ title, subtitle, media, adopted }) {
      return {
        title: `${adopted ? "✅ " : ""}${title}`,
        subtitle: `${subtitle === "cachorro" ? "🐕 Cachorro" : "🐈 Gato"}${adopted ? " — Adotado" : ""}`,
        media,
      };
    },
  },
});
