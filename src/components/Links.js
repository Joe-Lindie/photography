import Link from 'next/link';

const Links = ({ linkText, href, isInternal }) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      {...(isInternal ? null : { target: '_blank' })}
      className="hover:underline"
    >
      {linkText}
    </Link>
  );
};

export default Links;
