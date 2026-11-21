"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ProjectScreenshot } from "@/types/projectType";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type ProjectScreenshotCarouselProps = {
  projectName: string;
  screenshots: ProjectScreenshot[];
};

function ProjectScreenshotCarousel({
  projectName,
  screenshots,
}: ProjectScreenshotCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateSelectedIndex = () =>
      setSelectedIndex(api.selectedScrollSnap());

    updateSelectedIndex();
    api.on("select", updateSelectedIndex);
    api.on("reInit", updateSelectedIndex);

    return () => {
      api.off("select", updateSelectedIndex);
      api.off("reInit", updateSelectedIndex);
    };
  }, [api]);

  const plugins = useMemo(
    () =>
      prefersReducedMotion
        ? []
        : [
            Autoplay({
              delay: 5000,
              stopOnFocusIn: true,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [prefersReducedMotion],
  );

  return (
    <Carousel
      aria-label={`${projectName} screenshots`}
      className="group w-full"
      opts={{ loop: screenshots.length > 1 }}
      plugins={plugins}
      setApi={setApi}
    >
      <CarouselContent>
        {screenshots.map((screenshot) => (
          <CarouselItem key={screenshot.alt}>
            <figure>
              <div className="flex min-h-64 max-h-[72vh] items-center justify-center px-8 sm:px-12">
                <Image
                  className="h-auto max-h-[72vh] max-w-full rounded-2xl object-contain"
                  width={screenshot.src.width}
                  height={screenshot.src.height}
                  sizes="(min-width: 1024px) 56rem, 100vw"
                  src={screenshot.src}
                  alt={screenshot.alt}
                  priority
                />
              </div>
              {screenshot.caption && (
                <figcaption className="border-t border-gray-800 px-4 py-3 text-sm text-gray-300">
                  {screenshot.caption}
                </figcaption>
              )}
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>

      {screenshots.length > 1 && (
        <>
          <CarouselPrevious className="left-1 border-gray-600 bg-gray-900/90 text-white hover:bg-gray-800 sm:-left-2" />
          <CarouselNext className="right-1 border-gray-600 bg-gray-900/90 text-white hover:bg-gray-800 sm:-right-2" />
          <div
            className="mt-4 flex justify-center gap-2"
            role="tablist"
            aria-label="Select screenshot"
          >
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.alt}
                type="button"
                role="tab"
                aria-label={`Show screenshot ${index + 1}`}
                aria-selected={selectedIndex === index}
                className="h-2.5 w-2.5 rounded-full bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 aria-selected:bg-red-500"
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </>
      )}
    </Carousel>
  );
}

export default ProjectScreenshotCarousel;
