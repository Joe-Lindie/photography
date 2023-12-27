import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';

const scotlandImageData = await getImagesData('scotland/');

const Scotland = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={scotlandImageData}
        title="Scottish Highlands"
        alt="Scotland Collection"
      />
    </>
  );
};

export default Scotland;
