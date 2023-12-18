import getImagesData from '@/utils/getImageData';
import Image from 'next/image';
import Grid from '@/components/coreUl/Grid';
import TopNav from '@/components/coreUl/TopNav';
import StyledLinks from '@/components/coreUl/StyledLinks';

const japanImageData = await getImagesData('japan/');

const Japan = () => {
  return (
    <>
      <TopNav />
      <Grid>
        <div className="col-start-1 col-end-13">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-lg sm:text-xl">Japan</h1>
            <span className="text-xs">
              <StyledLinks
                isInternal
                linkText="Go Back ←"
                href="/collections"
              />
            </span>
          </div>
        </div>
      </Grid>

      <Grid>
        {japanImageData.map((image) => (
          <div key={image.url} className="col-span-6 md:col-span-4">
            <Image
              src={image.url}
              alt="Japan Collection"
              width={500}
              height={500}
            ></Image>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Japan;
