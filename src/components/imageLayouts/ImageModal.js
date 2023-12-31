'use client';

import { useState } from 'react';
import Image from 'next/image';
import Grid from '../coreUl/Grid';

const ImageModal = ({ imageData, altText }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const baseUrl = 'https://storage.googleapis.com/bindus_photography/';

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Grid>
        {imageData.map((image) => (
          <div key={image} className="col-span-6 md:col-span-4 cursor-pointer">
            <Image
              src={`${baseUrl}${image}`}
              alt={altText}
              width={500}
              height={500}
              onClick={() => openImage(`${baseUrl}${image}`)}
            ></Image>
            <p className="text-sm sm:text-base">{image.description}</p>
          </div>
        ))}
      </Grid>

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
            alt={altText}
            width={1000}
            height={1000}
            className="w-[45rem] h-[20rem] sm:h-[25rem] md:h-[28rem] object-cover"
          ></Image>
        </div>
      )}
    </>
  );
};

export default ImageModal;
