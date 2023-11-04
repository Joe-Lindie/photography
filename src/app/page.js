'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';

const Home = () => {
  return (
    <div className="bg-lightBrown h-screen">
      <TopNav />
      <HomepageCarousel />
    </div>
  );
};

export default Home;
