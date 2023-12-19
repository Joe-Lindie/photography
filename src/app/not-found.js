// Custom 404 page
import Link from 'next/link';
import Grid from '../components/coreUl/Grid.js';

const NotFound = () => {
  return (
    <Grid>
      <div className="col-start-1 col-end-13 flex flex-col item-center justify-center text-center h-screen">
        <h1 className="text-2xl pb-4">Page not found</h1>
        <p>
          Oops! The page you are looking for might be under construction or does
          not exist.
        </p>
        <div className="inline-block mt-4">
          <div className="border border-black p-2 inline-block cursor-pointer rounded-sm hover:bg-dark-cream">
            <Link href="/">Go back home</Link>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default NotFound;
