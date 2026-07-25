import { LucideIcon } from "lucide-react";
import BackgroundGrid from "../ui/BackgroundGrid";

interface WhyCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WhyUsCard({
  number,
  title,
  description,
  icon: Icon,
}: WhyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <BackgroundGrid />
      {/* Numéro décoratif */}
      <span className="absolute -right-2 -top-6 text-8xl font-black text-blue-950/[0.04]">
        {number}
      </span>

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-yellow-400 transition group-hover:scale-110">
        <Icon size={26} />
      </div>

      {/* Content */}
      <h3 className="mt-6 text-xl font-black text-blue-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
