'use client';
import Nav from '@/components/coreUl/Nav';
import HomepageCarousel from '@/components/HomepageCarousel';

const Home = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold">Bindus Photography</h1>
        <p className="mb-3">Some Information</p>
      </main>
      <HomepageCarousel />
    </>
  );
};

export default Home;
