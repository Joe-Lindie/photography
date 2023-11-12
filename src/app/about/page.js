'use client';
import TopNav from '@/components/coreUl/TopNav';
import Grid from '@/components/coreUl/Grid';
import AboutPageData from '@/data/aboutPageData';

const About = () => {
  return (
    <>
      <TopNav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold pb-2">About Page</h1>
        <p className="pb-4">Bindus Photography</p>
      </main>

      <Grid>
        <div className="col-start-2 col-end-12">
          <AboutPageData />
        </div>
      </Grid>
    </>
  );
};
export default About;
