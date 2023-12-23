'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Grid from '../coreUl/Grid';
import StyledLinks from '../coreUl/StyledLinks';
import LoadingSpinner from '../coreUl/LoadingSpinner';

const ImageGridLayout = ({ imageData, title, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
            <div key={image.url} className="col-span-6 md:col-span-4">
              <Image src={image.url} alt={alt} width={500} height={500}></Image>
            </div>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ImageGridLayout;
