"use client";

import { useState } from "react";
import {
  ChevronDown,
  CarFront,
  CreditCard,
  CalendarCheck,
  MapPin,
  Clock3,
} from "lucide-react";

interface FAQItemProps {
  category: string;
  question: string;
  answer: string;
  icon: "car" | "cpf" | "exam" | "map" | "clock";
}

const icons = {
  car: CarFront,
  cpf: CreditCard,
  exam: CalendarCheck,
  map: MapPin,
  clock: Clock3,
};

export default function FAQItem({
  category,
  question,
  answer,
  icon,
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  const Icon = icons[icon];

  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white transition duration-300 hover:border-blue-200 hover:shadow-md">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
            <Icon size={20} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-yellow-600">
              {category}
            </p>

            <h3 className="mt-1 text-base font-bold text-blue-900">
              {question}
            </h3>
          </div>
        </div>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-blue-100 bg-slate-50 px-5 py-4">
            <p className="text-sm leading-7 text-slate-600">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
