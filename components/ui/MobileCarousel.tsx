"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileCarousel({ children, className = "" }: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = Array.isArray(children) ? children : [children];

  useEffect(() => {
    const element = carouselRef.current;

    if (!element) return;

    const handleScroll = () => {
      const index = Math.round(element.scrollLeft / element.offsetWidth);

      setActiveIndex(Math.min(index, items.length - 1));
    };

    element.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [items.length]);

  return (
    <>
      <div
        ref={carouselRef}
        className={`flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-[18%] lg:overflow-visible lg:pr-0 ${className}`}
      >
        {items}
      </div>

      <div className="mt-2 flex justify-center gap-2 lg:hidden">
        {items.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index ? "w-6 bg-blue-900" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}
