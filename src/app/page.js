import TopNav from '@/components/coreUl/TopNav';
import getImageData from '@/utils/getImageData';
import HomepageCarousel from '@/components/imageLayouts/HomepageCarousel';
import HomepageModal from '@/components/imageLayouts/HomepageModal';

// Limits exceeded for free Postgres tier, so code commented out
// Calling images directly from S3 bucket

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// // These variables will return all values from the Tables in the database ↓↓
// const homepageImageData = await prisma.homepageCarouselImages.findMany();
// const featuredImageData = await prisma.featuredImages.findMany();

const homepageImageData = await getImageData('background/');
const featuredImageData = await getImageData('featured/');

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1 flex items-center justify-center">
        <HomepageCarousel homepageImageData={homepageImageData} />
      </div>

      <div className="pb-2.5">
        <HomepageModal featuredImageData={featuredImageData} />
      </div>
    </>
  );
};

export default Home;
