import TopNav from '@/components/coreUl/TopNav';
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

const homepageImageDataArray = await listObjects('background');
const featuredImageDataArray = await listObjects('featured');

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
              <h2 className="text-lg sm:text-xl">Featured Images</h2>
            </div>
          </Grid>
          <ImageModal
            imageData={featuredImageDataArray}
            altText="Featured Images"
          />
        </div>
      }
    </>
  );
};

export default Home;
