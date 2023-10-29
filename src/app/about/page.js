import Nav from '@/components/Nav';
import Grid from '@/components/Grid';

const About = () => {
  return (
    <>
      <Nav />
      <main className="flex flex-col items-center">
        <h1 className="font-bold">About Page</h1>
        <p className="pb-4">some information</p>
      </main>

      <Grid>
        <div className="col-start-1 col-end-13"></div>
      </Grid>
    </>
  );
};
export default About;
