'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';
import Grid from '@/components/coreUl/Grid';
import { imagesData } from '@/data/imageData';

const Home = () => {
  return (
    <div className="h-screen">
      <TopNav />
      <HomepageCarousel />

      <Grid>
        <div className="col-start-1 col-end-13 pt-8 flex justify-center">
          <div className="flex flex-wrap">
            {imagesData.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt}
                className="w-32 h-32 m-2 rounded-sm object-cover"
              ></img>
            ))}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Home;
