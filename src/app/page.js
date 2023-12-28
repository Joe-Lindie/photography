import TopNav from '@/components/coreUl/TopNav';
import getImageData from '@/utils/getImageData';
import HomepageCarousel from '@/components/imageLayouts/HomepageCarousel';
import ImageModal from '@/components/imageLayouts/ImageModal';
import Grid from '@/components/coreUl/Grid';
import listObjects from '@/utils/listObjects';

// Limits exceeded for free Postgres tier, so code commented out
// Making calls from Next app to Amazon S3 bucket directly.

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// // These variables will return all values from the Tables in the database ↓↓
// const homepageImageData = await prisma.homepageCarouselImages.findMany();
// const featuredImageData = await prisma.featuredImages.findMany();

const featuredImageData = await getImageData('featured/');
const homepageImageDataArray = await listObjects();

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1 flex items-center justify-center">
        <HomepageCarousel homepageImageData={homepageImageDataArray} />
      </div>
      {
        <div className="pb-2.5">
          <Grid>
            <div className="col-start-1 col-end-13 py-8">
              <h2 className="text-lg sm:text-xl">Featured Imagess</h2>
            </div>
          </Grid>
          <ImageModal imageData={featuredImageData} />
        </div>
      }
    </>
  );
};

export default Home;
