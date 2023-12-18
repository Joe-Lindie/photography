import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import ImageGridLayout from '@/components/ImageGridLayout';

const southKoreaImageData = await getImagesData('korea/');

const SouthKorea = () => {
  return (
    <>
      <TopNav />
      <ImageGridLayout
        imageData={southKoreaImageData}
        title="South Korea"
        alt="South Korean Collection"
      />
    </>
  );
};

export default SouthKorea;
