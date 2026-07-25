import Formations from "@/components/Formations/Formations";
import Hero from "@/components/Hero/Hero";
import WhyUs from "@/components/WhyUs/WhyUs";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Formations />
      <WhyUs />
      <Reviews />
    </div>
  );
}
