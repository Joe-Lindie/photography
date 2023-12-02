import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';
import HomepageModal from '@/components/HomepageModal';
import getObjects from '@/utils/homepageImagesS3';
import getObjects2 from '@/utils/featuredImagesS3';

const getData = async () => {
  const data = await getObjects();
  return data;
};

const getOtherData = async () => {
  const data = await getObjects2();
  return data;
};

const homepageImageData = await getData();
const featuredImages = await getOtherData();

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1 flex items-center justify-center">
        <HomepageCarousel homepageImageData={homepageImageData} />
        <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center text-white bg-blackrgba">
          <h1 className="pb-1">Photography Blog</h1>
          <p className="pb-2.5">The world through my lens</p>
          <p>Junior developer & photographer</p>
        </div>
      </div>

      <div className="pb-2.5">
        <HomepageModal featuredImages={featuredImages} />
      </div>
    </>
  );
};

export default Home;
