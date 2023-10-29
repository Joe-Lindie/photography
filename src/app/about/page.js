import Nav from '@/components/coreUl/Nav';
import Grid from '@/components/coreUl/Grid';
import AboutPageData from '@/data/aboutPageData';

const About = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold">About Page</h1>
        <p className="pb-4">some information</p>
      </main>

      <Grid>
        <div className="col-start-1 col-end-13">
          <AboutPageData />
        </div>
      </Grid>
    </>
  );
};
export default About;
