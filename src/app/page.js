import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/imageLayouts/HomepageCarousel';
import HomepageModal from '@/components/imageLayouts/HomepageModal';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// These variables will return all values from the Tables in the database ↓↓
const homepageImageData = await prisma.homepageCarouselImages.findMany();
const featuredImageData = await prisma.featuredImages.findMany();

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
