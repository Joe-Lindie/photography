import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

const getObjects = async () => {
  const listObjectsParams = {
    Bucket: 'bindusphotographybucket',
    Prefix: 'background-Images/',
  };

  try {
    const data = await s3.send(new ListObjectsV2Command(listObjectsParams, {}));

    const objectUrls = data.Contents
      // Filter out only objects with .jpg extension
      .filter((obj) => obj.Key.endsWith('.jpg'))
      .map((obj) => ({
        url: `https://bindusphotographybucket.s3.amazonaws.com/${obj.Key}`,
      }));

    return objectUrls;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getObjects;
