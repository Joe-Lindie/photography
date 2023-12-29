import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';
import listObjects from '@/utils/listObjects';

const japanImageDataArray = await listObjects('japan');

const Japan = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={japanImageDataArray}
        title="Japan"
        alt="Japan Collection"
      />
    </>
  );
};

export default Japan;
