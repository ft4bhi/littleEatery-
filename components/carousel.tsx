"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  useEffect(() => {
    const interval = setInterval(next, 3000); // Automatically slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // No dependency for single initialization

  return (
    <div className="relative w-full md:h-[500px] h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="flex transition-transform ease-out duration-500 w-full h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{
              backgroundSize: "cover", // Adjust background size to cover screen
              backgroundPosition: "center",
              boxShadow: "-2px -4px 5px rgba(0, 0, 0, 0.5)",
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:block hidden sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute md:block hidden right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className={`cursor-pointer transition-all w-2 h-2 rounded-full ${
              curr === i ? "bg-[#EC994B] p-2" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
