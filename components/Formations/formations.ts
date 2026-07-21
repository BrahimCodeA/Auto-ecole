import { Bike, CarFront, Zap } from "lucide-react";

export const formations = [
  {
    title: "Permis B Manuel",
    description:
      "Apprenez à conduire une boîte manuelle avec un accompagnement personnalisé.",
    price: "999€",
    icon: CarFront,
    popular: true,
    badge: "Le plus demandé",
    features: ["Code inclus", "Moniteur diplômé", "Présentation examen"],
  },

  {
    title: "Permis Automatique",
    description:
      "Une formation simplifiée idéale pour apprendre rapidement et gagner en confiance.",
    price: "899€",
    icon: Zap,
    badge: "Idéal débutant",
    features: [
      "Apprentissage facilité",
      "Parfait en ville",
      "Formation efficace",
    ],
  },

  {
    title: "Permis Moto",
    description:
      "Prenez la route en toute sécurité avec une formation adaptée aux deux-roues.",
    price: "799€",
    icon: Bike,
    badge: "Liberté sur deux roues",
    features: [
      "Permis A1, A2, A",
      "Préparation plateau",
      "Accompagnement examen",
    ],
  },
];
