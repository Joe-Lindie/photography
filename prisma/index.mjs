import { PrismaClient } from '@prisma/client';
import getImageData from './getImageData.mjs';

const prisma = new PrismaClient();

// The string passed to getImageData() is the prefix needed for the Amazon s3 Bucket
const homepageImageData = await getImageData('background/');
const UrlValuesArrayForDatabase = homepageImageData.map((image) => image.url);

// This will create a new entry in the database
// It will only create a new entry if the URL does not exist
const main = async () => {
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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// COMMANDS FOR PRISMA

// if you add a new model to schema.prisma: npx prisma migrate dev
// then apply migrations: npx prisma migrate deploy
// whenever the data object changes: npx node index.mjs
// To see a prisma visualization of tables run: npx prisma studio (http://localhost:5555/)
