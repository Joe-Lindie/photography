'use client';
import TopNav from '@/components/coreUl/TopNav';
import Image from 'next/image';
import HomepageCarousel from '@/components/HomepageCarousel';
import Grid from '@/components/coreUl/Grid';
import { imagesData } from '@/data/imageData';

const Home = () => {
  return (
    <div className="h-screen relative">
      <TopNav />
      <HomepageCarousel />
      <div className="absolute bottom-72 left-4 p-8 rounded-sm text-center bg-blackrgba">
        <h1 className="text-white pb-1">Photography Blog</h1>
        <p className="text-white">The world through my lens</p>
      </div>

      <Grid>
        <div className="col-start-1 col-end-13 pt-8 flex justify-center">
          <div className="flex flex-wrap">
            {imagesData.map((image) => (
              <Image
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
                className="w-32 h-32 m-2 rounded-sm object-cover"
              ></Image>
            ))}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Home;
