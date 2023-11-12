import React, { useState } from 'react';
import { backgroundImages } from '@/data/imageData';
import Image from 'next/image';
import rightChevron from '../../public/right-chevron.png';
import leftChevron from '../../public/left-chevron.png';

const HomepageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % backgroundImages.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + backgroundImages.length) % backgroundImages.length,
    );
  };

  return (
    <>
      {backgroundImages.map((image, index) => (
        <Image
          className={`w-full h-full object-cover object-center ${
            index === currentIndex ? 'visible' : 'hidden'
          }`}
          key={image.url}
          src={image.url}
          alt={image.alt}
          width={1000}
          height={1000}
          priority={true}
        ></Image>
      ))}

      <div className="flex justify-center items-center pt-4">
        <button className="w-8 h-8 pr-1" onClick={handleNext}>
          <Image src={leftChevron} alt="left arrow" />
        </button>
        <button className="w-8 h-8 pl-1" onClick={handlePrevious}>
          <Image src={rightChevron} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default HomepageCarousel;
