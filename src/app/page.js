'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';
import HomepageModal from '@/components/HomepageModal';

const Home = () => {
  return (
    <>
      <TopNav />
      <div className="relative h-3/5 pt-1 flex items-center justify-center">
        <HomepageCarousel />
        <div className="absolute p-2 text-sm md:text-base md:p-6 rounded-sm text-center text-white bg-blackrgba">
          <h1 className="pb-1">Photography Blog</h1>
          <p className="pb-2.5">The world through my lens</p>
          <p>Junior developer & photographer</p>
        </div>
      </div>

      <div className="pb-2.5">
        <HomepageModal />
      </div>
    </>
  );
};

export default Home;
