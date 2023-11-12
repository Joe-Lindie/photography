'use client';
import TopNav from '@/components/coreUl/TopNav';
import Image from 'next/image';
import HomepageCarousel from '@/components/HomepageCarousel';
import { imagesData } from '@/data/imageData';

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1">
        <HomepageCarousel />
        <div className="absolute bottom-2.5 left-0 md:left-4 p-2 md:p-6 rounded-sm text-center text-white bg-blackrgba">
          <h1 className="pb-1">Photography Blog</h1>
          <p className="pb-2">The world through my lens</p>
          <p>Junior software engineer & keen photographer </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap pt-14">
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
    </>
  );
};

export default Home;
