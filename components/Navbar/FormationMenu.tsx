import Link from "next/link";
import { ChevronDown, Car, Bike } from "lucide-react";

export default function FormationMenu() {
  return (
    <div className="relative group">
      <button
        className="
          flex
          items-center
          gap-1
          text-sm
          font-semibold
          uppercase
          tracking-wide
          text-slate-600
          hover:text-blue-900
          transition
        "
      >
        Formations
        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          top-full
          mt-4
          w-52
          rounded-xl
          bg-white
          border
          border-slate-200
          shadow-xl
          p-2
          opacity-0
          invisible
          translate-y-2
          group-hover:opacity-100
          group-hover:visible
          group-hover:translate-y-0
          transition-all
          duration-300
        "
      >
        <Link
          href="/formations/voiture"
          className="
    group/item
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-xl
    text-slate-700
    font-semibold
    hover:bg-blue-50
    hover:text-blue-900
    transition-all
    duration-300
  "
        >
          <div
            className="
    flex
    items-center
    justify-center
    w-9
    h-9
    rounded-lg
    bg-yellow-400
    text-blue-900
    group-hover/item:scale-110
    transition-transform
  "
          >
            <Car className="w-5 h-5" />
          </div>

          <span className="flex flex-col">
            <span className="text-sm">Permis voiture</span>
            <span className="text-xs text-slate-400 font-normal">
              Formation B
            </span>
          </span>
        </Link>

        <Link
          href="/formations/moto"
          className="
    group/item
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-xl
    text-slate-700
    font-semibold
    hover:bg-blue-50
    hover:text-blue-900
    transition-all
    duration-300
  "
        >
          <div
            className="
    flex
    items-center
    justify-center
    w-9
    h-9
    rounded-lg
    bg-yellow-400
    text-blue-900
    group-hover/item:scale-110
    transition-transform
  "
          >
            <Bike className="w-5 h-5" />
          </div>

          <span className="flex flex-col">
            <span className="text-sm">Permis moto</span>
            <span className="text-xs text-slate-400 font-normal">
              Formation A
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
