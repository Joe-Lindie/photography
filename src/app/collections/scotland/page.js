import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';
import listObjects from '@/utils/listObjects';

const scotlandImageDataArray = await listObjects('scotland');

const Scotland = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={scotlandImageDataArray}
        title="Scottish Highlands"
        alt="Scotland Collection"
      />
    </>
  );
};

export default Scotland;
