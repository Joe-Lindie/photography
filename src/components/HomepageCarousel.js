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
          className={`w-full h-full object-cover object-center absolute ${
            index === currentIndex
              ? 'visible animate-slide-in-left'
              : 'invisible'
          }`}
          key={image.url}
          src={image.url}
          alt={image.alt}
          width={1000}
          height={1000}
          priority={true}
        ></Image>
      ))}

      <div className="flex justify-between inset-x-0 absolute">
        <button className="w-8 h-8 mt-2.5 ml-2.5" onClick={handleNext}>
          <Image src={leftChevron} alt="left arrow" />
        </button>
        <button className="w-8 h-8 mt-2.5 mr-2.5" onClick={handlePrevious}>
          <Image src={rightChevron} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default HomepageCarousel;
