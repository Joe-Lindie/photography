'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { imagesData } from '@/data/imageData';

const HomepageModal = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageAltText, setImageAltText] = useState('');

  const openImage = (imageUrl, imageAltText) => {
    setSelectedImage(imageUrl);
    setImageAltText(imageAltText);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col items-center pt-14">
        <h2 className="pb-2 font-medium">Featured Images</h2>
        <div className="flex justify-center flex-wrap">
          {imagesData.map((image) => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.alt}
              width={500}
              height={500}
              className="w-32 h-32 m-2 rounded-sm object-cover cursor-pointer"
              onClick={() => openImage(image.url, image.alt)}
            ></Image>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="z-30 w-full h-full flex items-center justify-center top-0 left-0 fixed bg-black bg-opacity-70 backdrop-blur-md">
          <p
            onClick={() => closeImage()}
            className="text-white text-right cursor-pointer absolute top-0 right-0 pr-4 pt-4"
          >
            close
          </p>
          <Image
            src={selectedImage}
            alt={imageAltText}
            width={1000}
            height={1000}
            className="w-[45rem] h-[20rem] sm:h-[25rem] md:h-[28rem] object-cover"
          ></Image>
        </div>
      )}
    </>
  );
};

export default HomepageModal;
