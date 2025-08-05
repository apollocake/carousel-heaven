'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SimpleSlider.module.css";

interface SliderItem {
  title: string;
  content?: string[];
}

interface SimpleSliderProps {
  items: SliderItem[];
}

export default function SimpleSlider({ items }: SimpleSliderProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className={styles.slideContainer}>
              <h3 className={styles.slideTitle}>{item.title}</h3>
              {item.content && item.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.slideParagraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom arrows at the bottom */}
      <div className={styles.arrowsContainer}>
        <button 
          onClick={goToPrev}
          className={styles.arrowButton}
        >
          &#8249;
        </button>
        <button 
          onClick={goToNext}
          className={styles.arrowButton}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}