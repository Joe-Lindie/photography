import Link from 'next/link';

const StyledLinks = ({ linkText, href, isInternal }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target={`${isInternal ? '' : '_blank'}`}
      className="border-b-2 border-transparent hover:border-black transition duration-300 ease-in-out"
    >
      {linkText}
    </Link>
  );
};

export default StyledLinks;
