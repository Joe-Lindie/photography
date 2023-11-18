import Links from '@/components/Links';
import globals from './globals';

const aboutPageData = () => {
  return (
    <>
      <p className="pb-4">
        Hello from London, England! I'm Joe, a coffee enthusiast, junior
        software developer, and avid photographer. My journey started with a
        passion for landscape photography, which evolved into this website—an
        exhibition of my captured moments. Explore Bindus Photography for a
        diverse collection of landscapes, cityscapes, and street photography
        from around the world, with a special focus on South Korea, Japan, and
        Singapore. My trusty Canon is always by my side, ready to capture the
        natural world around me. Join me on a visual and coding adventure!
      </p>

      <p className="pb-4">
        Keen to learn more about my coding journey? Check out my{' '}
        <span className="font-bold">
          <Links
            linkText="GitHub profile"
            href={globals().externalLinks.Github}
          />
        </span>{' '}
        for a closer look at my projects.
      </p>

      <p className="pb-4">
        I successfully completed the Founders & Coders Bootcamp and currently
        contribute as a junior software engineer at the Wellcome Trust, working
        on exciting projects.
      </p>

      <p>
        As I continue to code and capture moments, I invite you to stay{' '}
        <span className="font-bold">
          <Links linkText="connected." href={globals().contacts.Main} />
        </span>
      </p>
    </>
  );
};

export default aboutPageData;
