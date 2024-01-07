import { NextResponse } from 'next/server';
import { Storage } from '@google-cloud/storage';

const storage = new Storage();
const bucketName = 'bindus_photography';

export async function GET() {
  try {
    const options = {
      prefix: `${'background'}/`,
    };

    const [files] = await storage.bucket(bucketName).getFiles(options);
    const objectNames = files.map((file) => file.name);
    return NextResponse.json(objectNames.slice(1));
  } catch (error) {
    console.error('Error listing objects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
