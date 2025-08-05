'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderItem {
  title: string;
  content?: string[];
}

interface SimpleSliderProps {
  items: SliderItem[];
}

export default function SimpleSlider({ items }: SimpleSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          {item.content && item.content.map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
        </div>
      ))}
    </Slider>
  );
}