import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import ImageGridLayout from '@/components/imageLayouts/ImageGridLayout';

const singaporeImageData = await getImagesData('singapore/');

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
