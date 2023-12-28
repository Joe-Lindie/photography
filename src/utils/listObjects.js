import { Storage } from '@google-cloud/storage';
const storage = new Storage();
const bucketName = 'bindus_photography';

const listObjects = async () => {
  try {
    const [files] = await storage.bucket(bucketName).getFiles();
    const objectNames = files.map((file) => file.name);
    return objectNames.slice(1);
  } catch (error) {
    console.error('Error listing objects:', error);
    throw error;
  }
};

export default listObjects;
