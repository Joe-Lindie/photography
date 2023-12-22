import getObjectsFromS3 from './getObjectsFromS3.mjs';

const getImageData = async (prefix) => {
  const data = await getObjectsFromS3(prefix);
  return data;
};

export default getImageData;
