import { PrismaClient } from '@prisma/client';
import getImageData from '../utils/getImageData.mjs';
import getArrayOfUrlValues from '../utils/getArrayData.mjs';

const prisma = new PrismaClient();

// The string passed to getImageData() is the prefix needed for the Amazon s3 Bucket
const s3homepageImageData = await getImageData('background/');
const homepageUrls = getArrayOfUrlValues(s3homepageImageData);

// This will create a new entry in the database
// It will only create a new entry if the URL does NOT exist
const homepageCarousel = async (UrlValuesArrayForDatabase) => {
  for (const imageUrl of UrlValuesArrayForDatabase) {
    try {
      await prisma.homepageCarouselImages.createMany({
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

homepageCarousel(homepageUrls)
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
