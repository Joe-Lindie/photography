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
    <div className="flex flex-col items-center">
      {imageData.map((image, index) => (
        <div
          key={image.url}
          className={`w-2/4 h-2/4 ${
            index === currentIndex ? 'visible' : 'hidden'
          }`}
        >
          <img src={image.url} alt={image.alt}></img>
        </div>
      ))}
      <div className="flex">
        <button className="pr-2 hover:underline" onClick={handlePrevious}>
          Previous
        </button>
        <button className="pl-2 hover:underline" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomepageCarousel;
