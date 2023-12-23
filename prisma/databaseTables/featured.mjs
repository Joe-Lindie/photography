import { PrismaClient } from '@prisma/client';
import getImageData from '../utils/getImageData.mjs';
import getArrayOfUrlValues from '../utils/getArrayData.mjs';

const prisma = new PrismaClient();

const s3featuredImagesData = await getImageData('featured/');
const featuredUrls = getArrayOfUrlValues(s3featuredImagesData);

const featured = async (UrlValuesArrayForDatabase) => {
  for (const imageUrl of UrlValuesArrayForDatabase) {
    try {
      await prisma.featuredImages.createMany({
        data: {
          url: imageUrl,
          description: 'Edit value in GUI by running npx prisma studio',
          alt: 'Edit value in GUI by running npx prisma studio',
        },
      });
      console.log(`Image created with URL: ${imageUrl}`);
    } catch (error) {
      // Handle the error if the image already exists (unique constraint violation)
      console.error(
        `Error creating image with URL ${imageUrl}: ${error.message}`,
      );
    }
  }
};
featured(featuredUrls)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
