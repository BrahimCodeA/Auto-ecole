import { LucideIcon, Quote, Star } from "lucide-react";
import BackgroundGrid from "../ui/BackgroundGrid";

interface ReviewCardProps {
  name: string;
  permit: string;
  rating: number;
  comment: string;
  icon: LucideIcon;
}

export default function ReviewCard({
  name,
  permit,
  rating,
  comment,
  icon: Icon,
}: ReviewCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <BackgroundGrid />

      <Quote className="absolute right-6 top-6 h-16 w-16 text-blue-950/5" />

      <div className="relative flex items-center gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="relative mt-6 leading-8 text-slate-600">"{comment}"</p>

      <div className="relative mt-8 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-yellow-400">
          <Icon size={26} />
        </div>

        <div>
          <h3 className="font-black text-blue-900">{name}</h3>

          <span className="mt-1 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-700">
            {permit}
          </span>
        </div>
      </div>
    </div>
  );
}
