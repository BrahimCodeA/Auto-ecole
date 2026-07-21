import { Bike, CarFront, Check } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400/30 blur-[100px]" />

      {/* Badge offre */}
      <div className="absolute -right-5 -top-5 z-20 rotate-6 rounded-full bg-yellow-400 px-5 py-3 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>

          <div>
            <p className="text-xs font-bold text-blue-950">OFFRE DU MOMENT</p>
          </div>
        </div>
      </div>

      {/* Carte principale */}
      <div className="relative rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        <h2 className="mt-6 text-3xl font-black text-blue-950">
          Votre permis,
          <br />
          en toute confiance
        </h2>

        {/* Permis voiture */}
        <div className="mt-8 flex items-center justify-between rounded-2xl bg-blue-50 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
              <CarFront />
            </div>

            <div>
              <p className="font-bold text-blue-950">Permis B</p>

              <p className="text-sm text-slate-500">Formation voiture</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400 line-through">1299€</p>

            <p className="text-3xl font-black text-blue-950">999€</p>
          </div>
        </div>

        {/* Permis moto */}
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-blue-50 p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
              <Bike />
            </div>

            <div>
              <p className="font-bold text-blue-950">Permis Moto</p>

              <p className="text-sm text-slate-500">A1 • A2 • A</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400 line-through">1099€</p>

            <p className="text-3xl font-black text-blue-950">799€</p>
          </div>
        </div>

        {/* Avantages */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Check className="text-yellow-500" />
            Code inclus
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Check className="text-yellow-500" />
            Accompagnement examen
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Check className="text-yellow-500" />
            Paiement en plusieurs fois
          </div>
        </div>

        <button className="mt-8 w-full rounded-2xl bg-yellow-400 py-4 font-bold text-blue-950 transition hover:bg-yellow-300">
          Voir les offres
        </button>
      </div>
    </div>
  );
}
