import Link from 'next/link';

const StyledLinks = ({ linkText, href, isInternal }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target={`${isInternal ? '' : '_blank'}`}
      className="hover:underline"
    >
      {linkText}
    </Link>
  );
};

export default StyledLinks;
