'use client';
import TopNav from '@/components/coreUl/TopNav';
import Grid from '@/components/coreUl/Grid';
import aboutPageData from '@/data/aboutPageData';

const About = () => {
  return (
    <>
      <TopNav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold py-4">About Page</h1>
        <p className="pb-4">Bindus Photography</p>
      </main>

      <Grid>
        <div className="col-start-2 col-end-12">
          {aboutPageData()}
        </div>
      </Grid>
    </>
  );
};
export default About;
