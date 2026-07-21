import { LucideIcon, ArrowRight, Check } from "lucide-react";
import SmartLink from "../shared/SmartLink";

interface FormationCardProps {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export default function FormationCard({
  title,
  description,
  price,
  icon: Icon,
  features,
  popular,
  badge,
}: FormationCardProps) {
  return (
    <div className="relative">
      {popular && (
        <div className="absolute -top-4 left-1/2 z-10 w-max -translate-x-1/2 rounded-full border-4 border-[#F8FAFC] bg-yellow-400 px-4 py-1.5 text-[11px] font-black text-blue-950 shadow-lg">
          ⭐ LE PLUS CHOISI
        </div>
      )}

      <div
        className={`h-full rounded-[28px] border p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
          popular
            ? "border-yellow-300 bg-gradient-to-b from-yellow-50 to-white shadow-lg"
            : "border-blue-100 bg-white shadow-md"
        }`}
      >
        {/* Accent */}
        <div className="h-1 w-14 rounded-full bg-yellow-400" />

        {/* Badge */}
        {badge && (
          <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-950">
            {badge}
          </span>
        )}

        {/* Icon */}
        <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-yellow-400">
          <Icon size={23} />
        </div>

        {/* Titre */}
        <h3 className="mt-5 text-xl font-black text-blue-950">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>

        {/* Prix */}
        <div className="mt-6 rounded-2xl bg-blue-50 px-4 py-3">
          <p className="text-xs font-medium text-slate-500">
            Formation complète dès
          </p>

          <div className="flex items-end gap-1">
            <span className="text-3xl font-black tracking-tight text-blue-950">
              {price.replace("€", "")}
            </span>

            <span className="mb-1 text-lg font-black text-yellow-400">€</span>
          </div>
        </div>

        {/* Infos */}
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
            ✓ CPF accepté
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
            ✓ Paiement flexible
          </span>
        </div>

        {/* Features */}
        <ul className="mt-5 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400">
                <Check size={11} className="text-blue-950" />
              </span>

              {feature}
            </li>
          ))}
        </ul>

        {/* Button */}
        <SmartLink
          href="/contact"
          className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-yellow-400
          py-3
          text-sm
          font-bold
          text-blue-950
          transition
          hover:bg-yellow-300
          hover:shadow-[0_8px_20px_rgba(250,204,21,0.3)]
          "
        >
          Découvrir
          <ArrowRight size={16} />
        </SmartLink>
      </div>
    </div>
  );
}
