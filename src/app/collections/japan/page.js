import getImagesData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';

const japanImageData = await getImagesData('japan/');

const Japan = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={japanImageData}
        title="Japan"
        alt="Japan Collection"
      />
    </>
  );
};

export default Japan;
