'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import '../styles/menu.css'
import ImageOne from "../../public/Images/image.png";
import ImageTwo from "../../public/Images/one.png";
import ImageThree from "../../public/Images/two.png";
import ImageFour from "../../public/Images/three.png";

const ImageSlider = [
  ImageFour,
  ImageThree,
  ImageTwo,
  ImageOne,
];
let count: number = 0;

const CarouselTemplate: React.FC = () => {
  const [current, setCurrent] = useState(0);
  

  useEffect(()=> {
    startSlider()
  }, [])

  const startSlider = () => {
    setInterval(() => {
        handleNextClick();
    }, 5000)
  };

  const handleNextClick = () => {
    setCurrent(count)
    count = (count + 1) % ImageSlider.length;
  }
  const handlePreviousClick = () => {
    const ImageLength = ImageSlider.length;
    count = (current + ImageLength -1) % ImageLength;
    setCurrent(count);
  }
  return (
    <div>
      <section className="w-full select-none relative flex justify-center align-middle">
        <div className="aspect-w-16 aspect-h-9 w-[100%] h-[90vh] flex justify-center align-middle">
          <Image 
            src={ImageSlider[current]}
            alt=""
          />
        </div>
          <div className="absolute w-full top-1/2 transform traslate-y-1/2 px-2 flex justify-between items-center">
            <button className="bg-gray-light p-2" onClick={handlePreviousClick}>Previous</button>
            <button className="bg-gray-light p-2" onClick={handleNextClick}>Next</button>
          </div>
      </section>
    </div>
  );
};

export default CarouselTemplate;
