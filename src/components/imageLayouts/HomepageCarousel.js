'use client';

import { useState } from 'react';
import Image from 'next/image';
import rightChevron from '../../../public/right-chevron.png';
import leftChevron from '../../../public/left-chevron.png';
import shuffle from '@/utils/shuffle';

const HomepageCarousel = ({ homepageImageDataArray }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  shuffle(homepageImageDataArray);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % homepageImageDataArray.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + homepageImageDataArray.length) %
        homepageImageDataArray.length,
    );
  };

  return (
    <>
      {homepageImageDataArray.map((imageUrl, index) => (
        <Image
          className={`w-full h-full object-cover object-center absolute ${
            index === currentIndex
              ? 'opacity-100 transition-opacity ease-in delay-150 duration-500'
              : 'opacity-0'
          }`}
          key={index}
          src={`https://storage.googleapis.com/bindus_photography/${imageUrl}`}
          alt="Homepage Carousel images"
          width={1000}
          height={1000}
          priority={true}
        ></Image>
      ))}

      <div className="flex justify-between inset-x-0 absolute">
        <button
          className="w-8 h-8 mt-2.5 ml-2.5 p-2 rounded-full bg-black-rgba"
          onClick={handleNext}
        >
          <Image src={leftChevron} alt="left arrow" />
        </button>
        <button
          className="w-8 h-8 mt-2.5 mr-2.5 p-2 rounded-full bg-black-rgba"
          onClick={handlePrevious}
        >
          <Image src={rightChevron} alt="right arrow" />
        </button>
      </div>
    </>
  );
};

export default HomepageCarousel;
