import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import ImageGridLayout from '@/components/imageLayouts/ImageGridLayout';

const scotlandImageData = await getImagesData('scotland/');

const Scotland = () => {
  return (
    <>
      <TopNav />
      <ImageGridLayout
        imageData={scotlandImageData}
        title="Scottish Highlands"
        alt="Scotland Collection"
      />
    </>
  );
};

export default Scotland;
