export interface Question {
  category: string;
  question: string;
  answer: string;
  icon: "car" | "cpf" | "exam" | "map" | "clock";
}

export const questions: Question[] = [
  {
    category: "Formation",
    question: "Comment se déroule une formation ?",
    answer:
      "Nous vous accompagnons du code jusqu'à l'examen avec un suivi personnalisé.",
    icon: "car",
  },

  {
    category: "CPF",
    question: "Puis-je utiliser mon CPF ?",
    answer:
      "Oui, nos formations sont éligibles au financement CPF selon vos droits.",
    icon: "cpf",
  },

  {
    category: "Examen",
    question: "Quand puis-je passer mon examen ?",
    answer: "Nous faisons le nécessaire pour vous obtenir une date rapidement.",
    icon: "exam",
  },

  {
    category: "Inscription",
    question: "Comment prendre rendez-vous ?",
    answer:
      "Appelez-nous ou rendez-vous directement à l'auto-école située au 14 rue des Acacias.",
    icon: "map",
  },

  {
    category: "Horaires",
    question: "Puis-je choisir mes horaires ?",
    answer: "Oui, nous proposons des créneaux adaptés à votre emploi du temps.",
    icon: "clock",
  },
  {
    category: "Agence",
    question: "Où se situe votre auto-école ?",
    answer:
      "Retrouvez-nous au 14 rue des Acacias, 75014 Paris. Notre équipe vous accueille directement sur place pour vous accompagner dans votre projet de permis.",
    icon: "map",
  },
];
