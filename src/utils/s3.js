import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { backgroundImages } from '../data/imageData';

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

    const objectUrls = data.Contents.map((obj, index) => {
      const imageData = backgroundImages[index] || {};
      const { alt } = imageData;

      return {
        alt: alt,
        url: `https://bindusphotographybucket.s3.amazonaws.com/${obj.Key}`,
      };
    });


    return objectUrls;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getObjects;
