import { Car } from "lucide-react";

export default function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 font-black text-xl text-blue-900"
    >
      <Car className="w-7 h-7 text-yellow-500" />

      <span>
        Auto<span className="text-yellow-500">Drive</span>
      </span>
    </a>
  );
}
