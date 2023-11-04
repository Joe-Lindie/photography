import React, { useState } from 'react';
import imageData from '@/data/imageData';

const HomepageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imageData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + imageData.length) % imageData.length);
  };

  return (
    <>
      {imageData.map((image, index) => (
        <img
          className={`w-full h-3/5 object-cover object-center ${
            index === currentIndex ? 'visible' : 'hidden'
          }`}
          key={image.url}
          src={image.url}
          alt={image.alt}
        ></img>
      ))}

      <div className="flex">
        <button className="pr-2 hover:underline" onClick={handlePrevious}>
          Previous
        </button>
        <button className="pl-2 hover:underline" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default HomepageCarousel;
