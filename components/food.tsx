import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface FoodItem {
  name: string;
  price: string;
  rating: string;
  imgSrc: string;
}

const foodItems: FoodItem[] = [
  {
    name: "Straw Cake",
    price: "$10",
    rating: "4.5",
    imgSrc: "Rectangle 12.png",
  },
  {
    name: "Straw Cake",
    price: "$8",
    rating: "4.5",
    imgSrc: "Rectangle 13.png",
  },
  {
    name: "Meat Ball",
    price: "$15",
    rating: "4.5",
    imgSrc: "Rectangle 10.png",
  },
  {
    name: "Pancake",
    price: "$15",
    rating: "4.5",
    imgSrc: "Rectangle 8.png",
  },
  {
    name: "Special Pizza",
    price: "$20",
    rating: "4.5",
    imgSrc: "Rectangle 7.png",
  },
];

const FoodSlide: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full relative h-[196px] text-center text-[3.93px] text-sandybrown font-montserrat">
      <div className="absolute top-[0px] left-[0px] w-[427.2px] h-[196.5px]">
        <div className="absolute top-[0px] left-[194.78px] font-medium">- Popular Delivery -</div>
        <b className="absolute top-[9.28px] left-[176.23px] text-[10.12px] text-gray-100">Trending food</b>

        <Slider {...settings} className="absolute top-[44.13px] left-[0px] w-[427.2px] h-[124.2px] text-left text-[5.62px] text-white">
          {foodItems.map((item, index) => (
            <div key={index} className="relative w-full h-[124.2px]">
              <img className="absolute top-[31.48px] left-[373.26px] rounded-8xs-5 w-[54px] h-[54px] object-cover" alt="" src={item.imgSrc} />
              <div className="absolute top-[21.64px] left-[33.73px] w-[74.8px] h-[74.8px]">
                <img className="absolute top-[0px] left-[0px] rounded-8xs-5 w-[74.8px] h-[74.8px] object-cover" alt="" src={item.imgSrc} />
                <div className="absolute top-[57.34px] left-[5.62px] w-[34.3px] h-[11.8px]">
                  <div className="absolute top-[0px] left-[0px] leading-[100%] font-semibold [text-shadow:0px_1.124267816543579px_8.43px_rgba(0,_0,_0,_0.15)]">{item.name}</div>
                  <div className="absolute top-[7.31px] left-[0.28px] text-[3.37px] font-semibold text-center [text-shadow:0px_1.124267816543579px_6.46px_rgba(0,_0,_0,_0.15)]">{item.rating}</div>
                  <img className="absolute top-[6.75px] left-[7.59px] w-[26.7px] h-[5.1px]" alt="" src="Group 6356089.svg" />
                </div>
                <div className="absolute top-[5.62px] left-[53.4px] rounded-[15.74px] border-white border-[0.3px] border-solid flex flex-row items-start justify-start py-[1.4px] px-[4.2px] text-center text-8xs-5">
                  <b className="relative [text-shadow:0px_1.124267816543579px_6.75px_rgba(0,_0,_0,_0.15)]">{item.price}</b>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Additional content can be added here, such as indicators */}
      </div>
      <div className="absolute top-[185.22px] left-[173.7px] flex flex-row items-center justify-start gap-[4.5px]">
        <img className="w-[11.2px] relative h-[11.2px] object-contain" alt="" src="Group 6356118.png" />
        <div className="flex flex-row items-start justify-start gap-[5.6px]">
          <div className="w-[3.4px] relative rounded-[50%] bg-gainsboro h-[3.4px]" />
          <div className="w-[3.4px] relative rounded-[50%] bg-gainsboro h-[3.4px]" />
          <div className="w-[3.4px] relative rounded-[50%] bg-sandybrown h-[3.4px]" />
          <div className="w-[3.4px] relative rounded-[50%] bg-gainsboro h-[3.4px]" />
          <div className="w-[3.4px] relative rounded-[50%] bg-gainsboro h-[3.4px]" />
          <div className="w-[3.4px] relative rounded-[50%] bg-gainsboro h-[3.4px]" />
        </div>
        <img className="w-[11.2px] relative h-[11.2px]" alt="" src="Group 6356117.svg" />
      </div>
    </div>
  );
};

export default FoodSlide;
