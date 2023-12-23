import getImageData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import ImageGridLayout from '@/components/imageLayouts/ImageGridLayout';

const singaporeImageData = await getImageData('singapore/');

const Singapore = () => {
  return (
    <>
      <TopNav />
      <ImageGridLayout
        imageData={singaporeImageData}
        title="Singapore"
        alt="Singapore Collection"
      />
    </>
  );
};

export default Singapore;
