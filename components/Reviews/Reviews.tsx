import React from "react";
import { Star } from "lucide-react";

import BackgroundGrid from "../ui/BackgroundGrid";
import BackgroundGlow from "../ui/BackgroundGlow";
import ReviewCard from "./ReviewCard";
import { reviews } from "./reviews";
import Reveal from "../animations/Reveal";
import MobileCarousel from "../ui/MobileCarousel";

export default function Reviews() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-24"
      id="reviews"
    >
      <BackgroundGrid />
      <BackgroundGlow />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-6 text-4xl font-black text-blue-900 lg:text-5xl">
              Ils ont obtenu leur
              <span className="text-yellow-400"> permis</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Découvrez les retours de nos élèves qui nous ont fait confiance.
            </p>
          </div>
        </Reveal>

        {/* Note */}

        <Reveal delay={0.15}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="text-5xl font-black text-blue-900">4.9</div>

            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-1 text-sm text-slate-500">
                Plus de 1200 élèves accompagnés
              </p>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 lg:mt-16">
          <MobileCarousel className="lg:grid lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal
                key={review.name}
                delay={index * 0.15}
                className="min-w-[100%] snap-center lg:min-w-0"
              >
                <ReviewCard {...review} />
              </Reveal>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
