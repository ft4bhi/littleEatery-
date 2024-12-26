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
    imgSrc: "/Rectangle 10.svg", // Adjusted path
  },
  {
    name: "Kweku Annan",
    title: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",
    imgSrc: "/Rectangle 10.svg", // Adjusted path
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [curr, setCurr] = useState(0);

  const next = () =>
    setCurr((curr) => (curr === reviews.length - 1 ? 0 : curr + 1));
  const prev = () =>
    setCurr((curr) => (curr === 0 ? reviews.length - 1 : curr - 1));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative h-auto text-center text-base text-dimgray font-inter mb-12">
      <b className=" leading-tight inline-block font-david-libre text-[40px] text-gray text-left">
        Our Happy Customers
      </b>
      <Slider {...settings} className="mt-12   mx-auto w-[50%] ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-2 p-4 rounded-md  relative  h-[250px] "
          >
            {/* <img className="w-20 h-20 rounded-full mx-auto" alt={review.name} src={review.imgSrc} /> */}
            <div
              className="mt-4  flex flex-col items-center justify-center  transition-transform ease-out duration-500 "
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              <p className="mb-2">{review.text}</p>
              <b className=" text-gray-900">{review.name}</b>
              <div className="text-sm text-gray-500">{review.title}</div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        onClick={prev}
        className="absolute left-72 top-[63%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-72 top-[63%] -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-30 hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Reviews;
