'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';

const Home = () => {
  return (
    <div className="bg-lightBrown h-screen ">
      <TopNav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold">Bindus Photography</h1>
        <p className="mb-3">The world through my lens</p>
      </main>
      <HomepageCarousel />
    </div>
  );
};

export default Home;
