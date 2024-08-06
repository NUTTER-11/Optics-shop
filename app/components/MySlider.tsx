"use client";

import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import './MySlider.css'; // Import the CSS file
import Image from 'next/image';
interface MySliderProps {
  images: string[];
  id: string; // Add an id prop
}

const MySlider = ({ images, id }: MySliderProps) => {
  useEffect(() => {
    const splide = new Splide(`#${id}`, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3.5,
      autoScroll: {
        speed: 2,
      },
      autoplay: true,
      extensions: { AutoScroll },
    });

    splide.mount();
  }, [id]);

  return (
    <div className="slider-container">
      <div id={id} className="splide" aria-label="My Favorite Images">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((image, index) => (
              <li key={index} className="splide__slide my-slide">
                <Image src={image} alt={`Image ${index + 1}`} width={300} height={300} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
