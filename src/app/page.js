'use client';
import TopNav from '@/components/coreUl/TopNav';
import HomepageCarousel from '@/components/HomepageCarousel';

const Home = () => {
  return (
    <>
      <TopNav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold">Bindus Photography</h1>
        <p className="mb-3">The world through my lens</p>
      </main>
      <HomepageCarousel />
    </>
  );
};

export default Home;
