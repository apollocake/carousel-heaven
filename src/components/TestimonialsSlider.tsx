'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./TestimonialsSlider.module.css";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating?: number;
}

interface TestimonialsSliderProps {
  testimonials: TestimonialItem[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </span>
    ));
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className={styles.slideContainer}>
              <div className={styles.quoteIcon}>&quot;</div>
              <p className={styles.quote}>{testimonial.quote}</p>
              {testimonial.rating && (
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              )}
              <div className={styles.author}>
                <h4 className={styles.name}>{testimonial.name}</h4>
                <p className={styles.role}>{testimonial.role}</p>
                <p className={styles.company}>{testimonial.company}</p>
              </div>
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
