import TopNav from '@/components/coreUl/TopNav';
import getImageData from '@/utils/getImageData';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';

// Limits exceeded for free Postgres tier, so code commented out
// Calling images directly from S3 bucket

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
// const southKoreaImageData = await prisma.southKoreaImages.findMany();

const southKoreaImageData = await getImageData('korea/');

const SouthKorea = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={southKoreaImageData}
        title="South Korea"
        alt="South Korean Collection"
      />
    </>
  );
};

export default SouthKorea;
