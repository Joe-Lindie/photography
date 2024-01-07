'use client';

import { useState, useEffect } from 'react';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/imageLayouts/HomepageCarousel';
import ImageModal from '@/components/imageLayouts/ImageModal';
import Grid from '@/components/coreUl/Grid';
import LoadingSpinner from '@/components/coreUl/LoadingSpinner';

const Home = () => {
  const [homepageImageDataArray, setHomepageImageDataArray] = useState([]);
  const [featuredImageDataArray, setFeaturedImageDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/background`);
        const featuredResponse = await fetch(`/api/featured`);

        if (!response.ok || !featuredResponse.ok) {
          throw new Error(
            `HTTP error! Status: ${response.status || featuredResponse.status}`,
          );
        }

        const data = await response.json();
        const featuredData = await featuredResponse.json();
        setFeaturedImageDataArray(featuredData);
        setHomepageImageDataArray(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // how to handel error is it 404s?
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TopNav />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="relative h-3/5 pt-1 flex items-center justify-center">
            <HomepageCarousel homepageImageDataArray={homepageImageDataArray} />
            <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center bg-white-rgba">
              <h1 className="text-lg sm:text-xl pb-1">Photography Blog</h1>
              <p className="text-lg sm:text-xl pb-2.5">
                The world through my lens
              </p>
              <p className="sm:text-lg">Software Developer & Photographer</p>
            </div>
          </div>

          <div className="pb-2.5">
            <Grid>
              <div className="col-start-1 col-end-13 py-8">
                <h2 className="text-lg sm:text-xl">Featured Images</h2>
              </div>
            </Grid>
            <ImageModal
              imageData={featuredImageDataArray}
              altText="Featured Images"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
