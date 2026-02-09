"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface BoxSliderProps {
  onDateChange?: (date: Date) => void;
}

const dates = Array.from({ length: 10 }).map((_, index) => {
  const date = new Date();
  date.setDate(date.getDate() - index);

  return {
    date,
    day: date.getDate(),
    month: date
      .toLocaleString("en-US", { month: "short" })
      .toUpperCase(),
    year: date.getFullYear(),
  };
});

const BoxSlider: React.FC<BoxSliderProps> = ({ onDateChange }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Slider {...settings} className="text-center">
      {dates.map((d, index) => (
        <div
          key={index}
          onClick={() => onDateChange?.(d.date)}
          className="
            bg-IcyBreeze dark:bg-darklight
            pt-5 pb-7 rounded-lg text-center
            cursor-pointer
            group hover:bg-primary
            transition-colors duration-300
          "
        >
          <h5 className="text-gray-400 text-[34px] leading-[2.76rem] font-normal group-hover:text-white">
            {d.day}
          </h5>
          <p className="text-xs font-medium text-gray-400 group-hover:text-white">
            {d.month} {d.year}
          </p>
        </div>
      ))}
    </Slider>
  );
};

export default BoxSlider;
