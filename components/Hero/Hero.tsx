import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Glow jaune */}
      {/* Glow jaune */}
      <div className="absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-yellow-400/30 blur-[140px]" />

      {/* Glow bleu */}
      <div className="absolute -left-48 top-1/3 h-[550px] w-[550px] rounded-full bg-blue-500/25 blur-[140px]" />

      {/* Pattern discret */}
      <div
        className="absolute inset-0 opacity-[0.04] 
        [background-image:linear-gradient(#0B3A82_1px,transparent_1px),linear-gradient(90deg,#0B3A82_1px,transparent_1px)]
        [background-size:50px_50px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-4 lg:grid-cols-2">
        <HeroContent />

        <div className="relative">
          <HeroCard />
        </div>
      </div>

      {/* Ligne route en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        <div className="mx-auto mt-3 h-[3px] w-48 border-t-4 border-dashed border-yellow-400" />
      </div>
    </section>
  );
}
