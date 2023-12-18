import Link from 'next/link';
import Image from 'next/image';
import TopNav from '@/components/coreUl/TopNav';
import Grid from '@/components/coreUl/Grid';

const cards = [
  {
    location: 'South Korea',
    route: 'south-korea',
    cover:
      'https://bindusphotographybucket.s3.amazonaws.com/korea/IMG_4997.jpg',
  },
  {
    location: 'Scotland',
    route: 'scotland',
    cover:
      'https://bindusphotographybucket.s3.amazonaws.com/featured/IMG_6898.jpg',
  },
  {
    location: 'Japan',
    route: 'japan',
    cover:
      'https://bindusphotographybucket.s3.amazonaws.com/japan/IMG_5610.jpg',
  },
  {
    location: 'Singapore',
    route: 'singapore',
    cover:
      'https://bindusphotographybucket.s3.amazonaws.com/singapore/IMG_5251.jpg',
  },
];

const Collections = () => {
  return (
    <>
      <TopNav />
      <div className="mt-4">
        <Grid>
          {cards.map((card, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 h-60 relative"
            >
              <Link href={`/collections/${card.route}`}>
                <Image
                  src={card.cover}
                  alt={card.location}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full blur-sm hover:blur-none"
                ></Image>
                <p className="pointer-events-none absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-white text-center bg-black-rgba p-2 rounded-sm">
                  {card.location}
                </p>
              </Link>
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Collections;
