import { Storage } from '@google-cloud/storage';
const storage = new Storage();
const bucketName = 'bindus_photography';

const listObjects = async (folderName) => {
  try {
    const options = {
      prefix: `${folderName}/`,
    };

    const [files] = await storage.bucket(bucketName).getFiles(options);

    const objectNames = files.map((file) => file.name);

    return objectNames.slice(1);
  } catch (error) {
    console.error('Error listing objects:', error);
    throw error;
  }
};

export default listObjects;
