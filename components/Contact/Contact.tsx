import { PhoneCall } from "lucide-react";

import { contactInformations } from "./contactInforations";
import BackgroundGrid from "../ui/BackgroundGrid";
import ContactCard from "./ContactCard";
import BackgroundGlow from "../ui/BackgroundGlow";
import SmartLink from "../shared/SmartLink";
import Reveal from "../animations/Reveal";

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-24"
      id="contact"
    >
      <BackgroundGrid />
      <BackgroundGlow />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-6 text-4xl font-black text-blue-900 lg:text-5xl">
              Venez nous rencontrer
              <span className="text-yellow-400"> pour commencer</span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Notre équipe vous accompagne pour choisir la formation adaptée à
              votre projet.
            </p>
          </div>
        </Reveal>

        {/* Informations */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {contactInformations.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12}>
              <ContactCard {...item} />
            </Reveal>
          ))}
        </div>

        {/* Carte */}

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-xl">
            <iframe
              title="Google Maps"
              src="https://maps.google.com/maps?q=14%20rue%20des%20Acacias%2075014%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* CTA */}

        <Reveal delay={0.3}>
          <div className="relative mt-10 overflow-hidden rounded-[32px] border border-blue-800 bg-gradient-to-br from-blue-950 via-blue-900 to-[#041E42] px-8 py-10 shadow-2xl">
            {/* Glow jaune */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />

            {/* Glow bleu */}

            <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />

            {/* Grid */}

            <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:40px_40px]" />

            <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
              <div>
                <span className="inline-flex rounded-full bg-yellow-400/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-400">
                  🚗 Inscription rapide
                </span>

                <h3 className="mt-4 text-2xl font-black text-white lg:text-3xl">
                  Prêt à commencer
                  <span className="text-yellow-400"> votre permis ?</span>
                </h3>

                <p className="mt-3 max-w-xl text-blue-100">
                  Contactez-nous dès maintenant pour réserver votre formation et
                  commencer votre apprentissage dans les meilleures conditions.
                </p>
              </div>

              <SmartLink
                href="tel:0102030405"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-yellow-400
                  px-7
                  py-4
                  font-bold
                  text-blue-950
                  transition
                  hover:-translate-y-1
                  hover:bg-yellow-300
                "
              >
                <PhoneCall size={18} />
                Appeler maintenant
              </SmartLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
