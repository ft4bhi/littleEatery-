import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "Ama Ampomah",
    title: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",
    imgSrc: "Rectangle 10.svg"
  },
  {
    name: "Kweku Annan",
    title: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque.",
    imgSrc: "Rectangle 10.svg"
  },
  // Add more reviews as needed
];

const Frame = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative h-[161.8px] text-center text-[4.02px] text-dimgray font-inter">
      <b className="absolute top-[0px] left-[7.23px] text-[15.06px] leading-[16.31px] inline-block font-david-libre text-gray text-left w-[161.9px]">Our Happy Customers</b>
      <Slider {...settings} className="absolute top-[47.75px] left-[0px] w-full">
        {reviews.map((review, index) => (
          <div key={index} className="shadow-[0px_0px_7.53px_rgba(0,_0,_0,_0.07)] w-[160.4px] h-[98.1px] mx-auto">
            <img className="w-full h-full" alt="" src={review.imgSrc} />
            <div className="absolute top-[31.87px] left-[0px] w-full text-left">
              <div className="leading-[7.28px]">
                <p className="m-0">{review.text}</p>
              </div>
              <b className="absolute top-[42.92px] left-[0px] leading-[7.28px] text-gray">{review.name}</b>
              <div className="absolute top-[48.69px] left-[0px] text-[3.76px] leading-[7.28px]">{review.title}</div>
            </div>
          </div>
        ))}
      </Slider>
      <img className="absolute top-[160px] left-[68.23px] w-[43.4px] h-[1.8px]" alt="" src="Dot.svg" />
    </div>
  );
};

export default reviews;
