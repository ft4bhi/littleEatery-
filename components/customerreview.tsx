"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ama Ampomah",
    title: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",
    imgSrc: "/images/Rectangle 10.svg", // Adjusted path
  },
  {
    name: "Kweku Annan",
    title: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",
    imgSrc: "/images/Rectangle 10.svg", // Adjusted path
  },
];

const Reviews = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  return (
    <div className="w-full relative h-auto text-center text-base text-dimgray font-inter my-20">
      <b className="leading-tight inline-block font-david-libre md:text-[40px] text-[28px]">
        Our Happy Customers
      </b>
      <Slider
        {...settings}
        ref={setSliderRef}
        className="mt-12 mx-auto md:w-[60%] w-[75%]"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-2 p-8 rounded-md relative flex flex-col items-center h-[250px]"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt={`${review.name}'s photo`}
              src={review.imgSrc}
            />
            <p className="mb-2 text-sm text-gray-700">{review.text}</p>
            <b className="text-gray-900">{review.name}</b>
            <div className="text-sm text-gray-500">{review.title}</div>
          </div>
        ))}
      </Slider>
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => sliderRef?.slickPrev()}
        className="absolute md:left-20 left-4 top-[50%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => sliderRef?.slickNext()}
        className="absolute md:right-20 right-4 top-[50%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Reviews;

