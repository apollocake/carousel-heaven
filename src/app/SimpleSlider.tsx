'use client';

import React, { useRef } from "react";
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
    <div style={{ position: 'relative', width: '100%' }}>
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div style={{ 
              padding: '2rem', 
              textAlign: 'center', 
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '2rem' }}>{item.title}</h3>
              {item.content && item.content.map((paragraph, pIndex) => (
                <p key={pIndex} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom arrows at the bottom */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '2rem',
        padding: '1rem 0'
      }}>
        <button 
          onClick={goToPrev}
          style={{
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.opacity = '1';
          }}
        >
          &#8249;
        </button>
        <button 
          onClick={goToNext}
          style={{
            background: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.opacity = '1';
          }}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}