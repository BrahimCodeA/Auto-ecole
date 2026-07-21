import BackgroundGlow from "../ui/BackgroundGlow";
import BackgroundGrid from "../ui/BackgroundGrid";
import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Glow  */}
      <BackgroundGlow />

      {/* Pattern discret */}
      <BackgroundGrid />

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
