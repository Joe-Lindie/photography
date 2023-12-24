'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Grid from '../coreUl/Grid';
import StyledLinks from '../coreUl/StyledLinks';
import LoadingSpinner from '../coreUl/LoadingSpinner';

const ImageGridLayout = ({ imageData, title, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageAlt, setImageAlt] = useState('');

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const openImage = (imageUrl, imageAlt) => {
    setSelectedImage(imageUrl);
    setImageAlt(imageAlt);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setImageAlt('');
  };

  return (
    <>
      <Grid>
        <div className="col-start-1 col-end-13">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-lg sm:text-xl">{title}</h1>
            <span className="text-xs">
              <StyledLinks
                isInternal
                linkText="Go Back ←"
                href="/collections"
              />
            </span>
          </div>
        </div>
      </Grid>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid>
          {imageData.map((image) => (
            <div
              key={image.url}
              className="col-span-6 md:col-span-4 cursor-pointer"
            >
              <Image
                src={image.url}
                alt={alt}
                width={500}
                height={500}
                onClick={() => openImage(image.url, image.alt)}
              ></Image>
            </div>
          ))}
        </Grid>
      )}

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
            alt={imageAlt}
            priority
            width={1000}
            height={1000}
            className="w-[45rem] h-[20rem] sm:h-[25rem] md:h-[28rem] object-cover"
          ></Image>
        </div>
      )}
    </>
  );
};

export default ImageGridLayout;
