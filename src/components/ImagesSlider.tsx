'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImagesSlider.module.css";

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImagesSliderProps {
  images: ImageItem[];
}

export default function ImagesSlider({ images }: ImagesSliderProps) {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    adaptiveHeight: false,
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
        {images.map((image, index) => (
          <div key={index}>
            <div className={styles.slideContainer}>
              <div className={styles.imageContainer}>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={styles.image}
                />
                {(image.title || image.description) && (
                  <div className={styles.caption}>
                    {image.title && <h3 className={styles.title}>{image.title}</h3>}
                    {image.description && <p className={styles.description}>{image.description}</p>}
                  </div>
                )}
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
