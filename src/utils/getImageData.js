import getObjects from '@/utils/s3';

const getImageData = async (prefix) => {
  const data = await getObjects(prefix);
  return data;
};

export default getImageData;
