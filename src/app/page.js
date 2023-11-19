'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';
import HomepageModal from '@/components/HopepageModal';

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

      <HomepageModal />
    </>
  );
};

export default Home;
