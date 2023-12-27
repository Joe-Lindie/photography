'use client';

import { useState, useEffect } from 'react';
import Grid from '../coreUl/Grid';
import StyledLinks from '../coreUl/StyledLinks';
import LoadingSpinner from '../coreUl/LoadingSpinner';
import ImageModal from './ImageModal';

const AlbumBaseLayout = ({ imageData, title, alt }) => {
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
        <ImageModal imageData={imageData} altText={alt} />
      )}
    </>
  );
};

export default AlbumBaseLayout;
