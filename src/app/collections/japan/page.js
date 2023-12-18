import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import ImageGridLayout from '@/components/ImageGridLayout';

const japanImageData = await getImagesData('japan/');

const Japan = () => {
  return (
    <>
      <TopNav />
      <ImageGridLayout
        imageData={japanImageData}
        title="Japan"
        alt="Japan Collection"
      />
    </>
  );
};

export default Japan;
