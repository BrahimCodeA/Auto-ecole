import { Car, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blue-950 px-6">
      {/* Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-400/20 blur-[120px]" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />

      <div className="relative max-w-xl text-center">
        {/* Logo */}

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400 text-blue-950">
          <Car size={32} />
        </div>

        {/* 404 */}

        <h1 className="mt-8 text-8xl font-black text-white">404</h1>

        <h2 className="mt-4 text-3xl font-black text-white">
          Vous avez pris
          <span className="text-yellow-400"> une mauvaise route ?</span>
        </h2>

        <p className="mt-5 text-blue-100">
          Cette page n'existe pas. Revenez sur la bonne voie et retrouvez nos
          formations pour obtenir votre permis.
        </p>

        <Link
          href="/"
          className="
            mt-8 inline-flex items-center gap-2 rounded-2xl
            bg-yellow-400 px-6 py-4
            font-black text-blue-950
            transition
            hover:bg-yellow-300
          "
        >
          <ArrowLeft size={18} />
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
