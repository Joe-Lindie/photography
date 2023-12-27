import getImageData from '@/utils/getImageData';
import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';

const singaporeImageData = await getImageData('singapore/');

const Singapore = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={singaporeImageData}
        title="Singapore"
        alt="Singapore Collection"
      />
    </>
  );
};

export default Singapore;
