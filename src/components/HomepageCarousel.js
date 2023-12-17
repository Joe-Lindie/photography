'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import rightChevron from '../../public/right-chevron.png';
import leftChevron from '../../public/left-chevron.png';
import { homepageImageInformation } from '../data/imageData';
import shuffle from '@/utils/shuffle';

const HomepageCarousel = ({ homepageImageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const [loading, setLoading] = useState(true);

  const modifiedData = homepageImageData.map((item) => ({
    url: item.url,
    alt: '',
    description: '',
  }));

  const updatedModifiedData = modifiedData.map((modifiedData, item) => {
    return { ...modifiedData, ...homepageImageInformation[item] };
  });

  useEffect(() => {
    const shuffledArray = shuffle(updatedModifiedData);
    setShuffledData(shuffledArray);
    setLoading(false);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % shuffledData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + modifiedData.length) % shuffledData.length,
    );
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center">
          <div className="animate-spin h-5 w-5 border-t-2 border-black-rgba border-solid rounded-full"></div>
          <p className="ml-2">Loading</p>
        </div>
      ) : (
        <>
          {shuffledData.map((item, index) => (
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
          <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center text-white bg-black-rgba">
            <h1 className="text-lg sm:text-xl pb-1">Photography Blog</h1>
            <p className="text-lg sm:text-xl pb-2.5">
              The world through my lens
            </p>
            <p className="sm:text-lg">Software Developer & Photographer</p>
          </div>
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
      )}
    </>
  );
};

export default HomepageCarousel;
