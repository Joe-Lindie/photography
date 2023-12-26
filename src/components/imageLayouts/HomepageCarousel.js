'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import rightChevron from '../../../public/right-chevron.png';
import leftChevron from '../../../public/left-chevron.png';
import shuffle from '@/utils/shuffle';
import LoadingSpinner from '../coreUl/LoadingSpinner';

const HomepageCarousel = ({ homepageImageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledData, setShuffledData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const shuffledArray = shuffle(homepageImageData);
    setShuffledData(shuffledArray);
    setLoading(false);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % shuffledData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + homepageImageData.length) % shuffledData.length,
    );
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {homepageImageData.map((item, index) => (
            <Image
              className={`w-full h-full object-cover object-center absolute ${
                index === currentIndex
                  ? 'opacity-100 transition-opacity ease-in delay-150 duration-500'
                  : 'opacity-0'
              }`}
              key={index}
              src={item.url}
              alt="temp alt text"
              width={1000}
              height={1000}
              priority={true}
            ></Image>
          ))}
          <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center bg-white-rgba">
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
