"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[]; // Type for the slides
}

const Carousel = ({ children: slides }: CarouselProps) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  useEffect(() => {
    const interval = setInterval(next, 3000); // Automatically slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [curr]); // Depend on `curr` to reset the interval when it changes

  return (
    <>
      <div className="relative rounded-tl-3xl rounded-br-3xl shadow-2xl">
        {/* Carousel slides */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-24 bottom-4 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-24 bottom-4 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-6 right-0 left-0 z-10">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurr(i)}
                className={`cursor-pointer transition-all w-2 h-2 rounded-full ${curr === i ? "bg-[#EC994B] p-2" : "bg-white bg-opacity-50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
