'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import rightChevron from '../../public/right-chevron.png';
import leftChevron from '../../public/left-chevron.png';
import { homepageImageInformation } from '../data/imageData';

const HomepageCarousel = ({ homepageImageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const modifiedData = homepageImageData.map((item) => ({
    url: item.url,
    alt: '',
    description: '',
  }));

  const updatedModifiedData = modifiedData.map((modifiedData, item) => {    
      return {...modifiedData, ...homepageImageInformation[item]}
  })

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % updatedModifiedData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + modifiedData.length) % updatedModifiedData.length,
    );
  };

  return (
    <>
      {updatedModifiedData.map((item, index) => (
        <Image
          className={`w-full h-full object-cover object-center absolute ${
            index === currentIndex
              ? 'opacity-100 transition-opacity ease-in delay-150 duration-500'
              : 'opacity-0'
          }`}
          key={index}
          src={item.url}
          alt={item.alt}
          width={1000}
          height={1000}
          priority={true}
        ></Image>
      ))}

      <div className="flex justify-between inset-x-0 absolute">
        <button
          className="w-8 h-8 mt-2.5 ml-2.5 p-2 rounded-full bg-blackrgba"
          onClick={handleNext}
        >
          <Image src={leftChevron} alt="left arrow" />
        </button>
        <button
          className="w-8 h-8 mt-2.5 mr-2.5 p-2 rounded-full bg-blackrgba"
          onClick={handlePrevious}
        >
          <Image src={rightChevron} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default HomepageCarousel;
