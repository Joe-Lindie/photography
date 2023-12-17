import getImagesData from '@/utils/getImageData';
import Image from 'next/image';
import Grid from '@/components/coreUl/Grid';
import TopNav from '@/components/coreUl/TopNav';
import StyledLinks from '@/components/coreUl/StyledLinks';

const southKoreaImageData = await getImagesData('korea/');

const SouthKorea = () => {
  return (
    <>
      <TopNav />
      <Grid>
        <div className="col-start-1 col-end-13">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-lg sm:text-xl">South Korea</h1>
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
        {southKoreaImageData.map((image) => (
          <div key={image.url} className="col-span-6 md:col-span-4">
            <Image
              src={image.url}
              alt="South Korea"
              width={500}
              height={500}
            ></Image>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default SouthKorea;
