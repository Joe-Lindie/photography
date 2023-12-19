import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/imageLayouts/HomepageCarousel';
import HomepageModal from '@/components/imageLayouts/HomepageModal';
import getImageData from '@/utils/getImageData';

// The string passed to getData() is the prefix needed for the s3 Bucket
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
