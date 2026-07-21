import React from "react";
import { formations } from "./formations";
import FormationCard from "./FormationCard";
import BackgroundGlow from "../ui/BackgroundGlow";
import BackgroundGrid from "../ui/BackgroundGrid";

export default function Formations() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24">
      {/* Glow */}
      <BackgroundGlow />

      {/* Grid */}
      <BackgroundGrid />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

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

        {/* Cards */}

        <div
          className="
          mt-16
          flex
          snap-x
          snap-mandatory
          gap-6
          overflow-x-auto
          pb-6
          pt-4
          lg:grid
          lg:grid-cols-3
          lg:overflow-visible
        "
        >
          {formations.map((formation) => (
            <div
              key={formation.title}
              className="
                min-w-[90%]
                snap-center
                lg:min-w-0
              "
            >
              <FormationCard {...formation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
