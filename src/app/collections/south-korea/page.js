import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';
import listObjects from '@/utils/listObjects';

const koreaImageDataArray = await listObjects('korea');

const SouthKorea = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={koreaImageDataArray}
        title="South Korea"
        alt="South Korean Collection"
      />
    </>
  );
};

export default SouthKorea;
