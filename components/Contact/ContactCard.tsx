import { LucideIcon } from "lucide-react";
import BackgroundGlow from "../ui/BackgroundGlow";

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ContactCard({
  title,
  description,
  icon: Icon,
}: ContactCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Accent jaune */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />

      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl transition group-hover:bg-yellow-400/20" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-yellow-400 transition duration-300 group-hover:scale-110">
          <Icon size={24} />
        </div>

        <h3 className="mt-5 text-lg font-black text-blue-900">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
