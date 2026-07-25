import { advantages } from "./advantages";
import WhyUsCard from "./WhyUsCard";

import BackgroundGrid from "../ui/BackgroundGrid";
import Reveal from "../animations/Reveal";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <BackgroundGrid />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-6 text-4xl font-black text-blue-900 lg:text-5xl">
              Pourquoi choisir
              <span className="text-yellow-400"> notre auto-école ?</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Une méthode moderne et un accompagnement complet jusqu'à votre
              réussite.
            </p>
          </div>
        </Reveal>

        {/* Cards */}

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.12}>
              <WhyUsCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
