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
      'https://bindusphotographybucket.s3.amazonaws.com/scotland/IMG_6898.jpg',
  },
  {
    location: 'Japan',
    route: 'japan',
    cover:
      'https://storage.googleapis.com/bindus_photography/japan/IMG_0855.jpg',
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
      <Grid>
        <div className="col-start-1 col-end-13 py-4 text-lg sm:text-xl">
          <h1>Picture Galleries</h1>
        </div>
      </Grid>

      <Grid>
        {cards.map((card, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 h-60 relative">
            <Link href={`/collections/${card.route}`}>
              <Image
                src={card.cover}
                alt={card.location}
                width={500}
                height={500}
                className="object-cover w-full h-full blur-sm hover:blur-none"
              ></Image>
              <p className="pointer-events-none absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center bg-white-rgba p-2 rounded-sm">
                {card.location}
              </p>
            </Link>
          </div>
        ))}
      </Grid>
    </>
  );
};

export default Collections;
