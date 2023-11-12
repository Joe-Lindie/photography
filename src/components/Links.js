import Link from 'next/link';

const Links = ({ linkText, href }) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank" className='font-bold hover:underline'>
      {linkText}
    </Link>
  );
};

export default Links;
