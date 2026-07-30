import React from "react";

import { formations } from "./formations";
import FormationCard from "./FormationCard";
import MobileCarousel from "../ui/MobileCarousel";

import BackgroundGlow from "../ui/BackgroundGlow";
import BackgroundGrid from "../ui/BackgroundGrid";
import Reveal from "../animations/Reveal";

export default function Formations() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24"
      id="formations"
    >
      {/* Glow */}
      <BackgroundGlow />

      {/* Grid */}
      <BackgroundGrid />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-6 text-4xl font-black text-blue-950 lg:text-5xl">
              Choisissez le permis
              <span className="text-yellow-400"> qui vous correspond</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Des formations adaptées à votre rythme avec un accompagnement
              jusqu'à la réussite.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 lg:mt-16">
          <MobileCarousel className="lg:grid lg:grid-cols-3">
            {formations.map((formation, index) => (
              <Reveal
                key={formation.title}
                delay={index * 0.15}
                className="min-w-[100%] h-full snap-center lg:min-w-0"
              >
                <FormationCard {...formation} />
              </Reveal>
            ))}
          </MobileCarousel>
        </div>

        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#F8FAFC] to-transparent lg:hidden" />
      </div>
    </section>
  );
}
