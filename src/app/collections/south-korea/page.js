import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';
import listObjects from '@/utils/listObjects';

// Limits exceeded for free Postgres tier, so code commented out
// Making calls from Next app to Google Cloud directly.

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// const southKoreaImageData = await prisma.southKoreaImages.findMany();

const koreaImageDataArray = await listObjects('korea');

const SouthKorea = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={koreaImageDataArray}
        title="South Korea"
        alt="South Korean Collection"
      />
    </>
  );
};

export default SouthKorea;
