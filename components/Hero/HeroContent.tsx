import {
  ArrowRight,
  Phone,
  Star,
  Calendar,
  GraduationCap,
  WalletCards,
  CalendarCheck,
} from "lucide-react";

import SmartLink from "../shared/SmartLink";

export default function HeroContent() {
  return (
    <div>
      <h1 className="mt-8 text-5xl font-black tracking-tight text-blue-900 leading-[1.1] lg:text-7xl">
        Passez votre permis
        <br />
        avec sérénité.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        Apprenez à conduire avec des moniteurs expérimentés et un accompagnement
        personnalisé jusqu'à l'examen.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <SmartLink
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-yellow-400
            px-8
            py-4
            font-bold
            text-blue-900
            transition
            hover:bg-yellow-300
          "
        >
          Commencer
          <ArrowRight className="w-5 h-5" />
        </SmartLink>

        <SmartLink
          href="tel:0102030405"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-slate-300
            px-8
            py-4
            font-bold
            text-blue-900
            transition
            hover:border-blue-800
            hover:bg-slate-50
          "
        >
          <Phone className="w-5 h-5" />
          Nous appeler
        </SmartLink>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
            <WalletCards size={24} />
          </div>

          <div>
            <p className="font-bold text-blue-950">CPF accepté</p>

            <p className="text-sm text-slate-600">Financez votre permis</p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white/70 p-4 shadow-sm backdrop-blur">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
            <CalendarCheck size={24} />
          </div>

          <div>
            <p className="font-bold text-blue-950">Examen rapide</p>

            <p className="text-sm text-slate-600">
              Dates disponibles rapidement
            </p>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap gap-8">
        <div className="flex items-center gap-2 text-slate-600">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">95% de réussite</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <GraduationCap className="w-5 h-5 text-blue-900" />
          <span className="font-medium">Moniteurs diplômés</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <Calendar className="w-5 h-5 text-blue-900" />
          <span className="font-medium">Horaires flexibles</span>
        </div>
      </div>
    </div>
  );
}
