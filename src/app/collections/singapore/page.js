import TopNav from '@/components/coreUl/TopNav';
import AlbumBaseLayout from '@/components/imageLayouts/AlbumBaseLayout';

import listObjects from '@/utils/listObjects';

const singaporeImageDataArray = await listObjects('singapore');

const Singapore = () => {
  return (
    <>
      <TopNav />
      <AlbumBaseLayout
        imageData={singaporeImageDataArray}
        title="Singapore"
        alt="Singapore Collection"
      />
    </>
  );
};

export default Singapore;
