import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';
import HomepageModal from '@/components/HomepageModal';
import getObjects from '@/utils/s3';

const getData = async (prefix) => {
  const data = await getObjects(prefix);
  return data;
};

// The string passed to getData() is the prefix needed for the s3 Bucket
const homepageImageData = await getData('background/');
const featuredImageData = await getData('featured/');

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1 flex items-center justify-center">
        <HomepageCarousel homepageImageData={homepageImageData} />
        <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center text-white bg-black_rgba">
          <h1 className="pb-1">Photography Blog</h1>
          <p className="pb-2.5">The world through my lens</p>
          <p>Software Developer & Photographer</p>
        </div>
      </div>

      <div className="pb-2.5">
        <HomepageModal featuredImageData={featuredImageData} />
      </div>
    </>
  );
};

export default Home;
