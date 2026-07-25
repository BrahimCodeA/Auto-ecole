import { MapPin, Phone, Clock3, Car, ArrowRight } from "lucide-react";

import { FaInstagram, FaTiktok } from "react-icons/fa";

import FooterColumn from "./FooterColumn";
import BackgroundGrid from "../ui/BackgroundGrid";
import SmartLink from "../shared/SmartLink";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950 px-6 py-20">
      {/* Glow jaune */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* Glow bleu */}
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />

      <BackgroundGrid />

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}

        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mt-5 max-w-3xl text-3xl font-black text-white lg:text-5xl">
            Prêt à prendre
            <span className="text-yellow-400"> le volant ?</span>
          </h2>

          <p className="mt-4 max-w-xl text-blue-100">
            Rejoignez AutoDrive et bénéficiez d'un accompagnement personnalisé
            jusqu'à l'obtention de votre permis.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identité */}

          <div>
            <SmartLink
              href="/"
              className="group flex items-center gap-3 text-xl font-black text-white"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-blue-950 transition duration-300 group-hover:rotate-6">
                <Car className="h-7 w-7" />
              </div>

              <span>
                Auto
                <span className="text-yellow-400">Drive</span>
              </span>
            </SmartLink>

            <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100">
              Apprenez à conduire sereinement avec une formation moderne et un
              accompagnement adapté à votre rythme.
            </p>

            <div className="mt-6 flex gap-3">
              <SmartLink
                href="https://www.instagram.com/"
                className="
                    flex h-12 w-12 items-center justify-center rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-white
                    transition
                    hover:-translate-y-1
                    hover:bg-yellow-400
                    hover:text-blue-950
                  "
              >
                <FaInstagram size={20} />
              </SmartLink>

              <SmartLink
                href="https://www.tiktok.com/"
                className="
                    flex h-12 w-12 items-center justify-center rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-white
                    transition
                    hover:-translate-y-1
                    hover:bg-yellow-400
                    hover:text-blue-950
                  "
              >
                <FaTiktok size={20} />
              </SmartLink>
            </div>
          </div>

          {/* Navigation */}

          <FooterColumn title="Navigation">
            <SmartLink
              href="/"
              className="block transition hover:text-yellow-400"
            >
              Accueil
            </SmartLink>

            <SmartLink
              href="#formations"
              className="block transition hover:text-yellow-400"
            >
              Formations
            </SmartLink>

            <SmartLink
              href="#faq"
              className="block transition hover:text-yellow-400"
            >
              FAQ
            </SmartLink>

            <SmartLink
              href="#contact"
              className="block transition hover:text-yellow-400"
            >
              Contact
            </SmartLink>
          </FooterColumn>

          {/* Formations */}

          <FooterColumn title="Formations">
            <p className="transition hover:text-yellow-400">Permis B Manuel</p>

            <p className="transition hover:text-yellow-400">
              Permis Automatique
            </p>

            <p className="transition hover:text-yellow-400">Permis Moto</p>
          </FooterColumn>

          {/* Contact */}

          <FooterColumn title="Nous trouver">
            <div className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-yellow-400" />

              <p>
                14 rue des Acacias
                <br />
                75014 Paris
              </p>
            </div>

            <div className="flex gap-3">
              <Phone size={18} className="shrink-0 text-yellow-400" />

              <p>01 02 03 04 05</p>
            </div>

            <div className="flex gap-3">
              <Clock3 size={18} className="shrink-0 text-yellow-400" />

              <p>
                Lun - Sam
                <br />
                9h - 19h
              </p>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-blue-200 md:flex-row">
          <p>© {new Date().getFullYear()} AutoDrive. Tous droits réservés.</p>

          <SmartLink
            href="#contact"
            className="flex items-center gap-2 font-bold text-yellow-400 transition hover:text-yellow-300"
          >
            Prendre rendez-vous
            <ArrowRight size={16} />
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
