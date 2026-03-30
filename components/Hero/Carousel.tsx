"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({
  children,
}: {
  children: React.ReactNode[];
}) {
  // 1. Initialize Embla with 'loop' for infinite dragging
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [active, setActive] = useState(0);

  // 2. Sync Embla's internal index with our 'active' state
  const onSelect = useCallback((api: any) => {
    setActive(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect); // Listen for scroll/drag events
    onSelect(emblaApi); // Set initial dot
  }, [emblaApi, onSelect]);

  // 3. Dot click logic using Embla API
  const goTo = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="relative group">
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing rounded-[40px]"
        ref={emblaRef}
      >
        <div className="flex ">
          {children.map((child, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 ">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Logic  */}
      <div className="flex justify-center gap-2 max-sm:static max-sm:mt-4 absolute top-8 left-8">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full  ${
              i === active ? "bg-blue" : "bg-tertiary"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}
