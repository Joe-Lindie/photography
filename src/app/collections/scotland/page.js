import getImagesData from '@/utils/getImageData';
import Image from 'next/image';
import Grid from '@/components/coreUl/Grid';
import TopNav from '@/components/coreUl/TopNav';
import StyledLinks from '@/components/coreUl/StyledLinks';

const scotlandImageData = await getImagesData('scotland/');

const Scotland = () => {
  return (
    <>
      <TopNav />
      <Grid>
        <div className="col-start-1 col-end-13">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-lg sm:text-xl">Scottish Highlands</h1>
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
        {scotlandImageData.map((image) => (
          <div className="col-span-4">
            <Image
              key={image.url}
              src={image.url}
              alt="Scottish Highlands Collection"
              width={500}
              height={500}
            ></Image>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Scotland;
