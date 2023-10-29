import Link from 'next/link';

const Nav = () => {
  return (
    <ul className="flex justify-end p-3">
      <li className="pr-3 hover:underline">
        <Link href="/">Home</Link>
      </li>
      <li className="hover:underline">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default Nav;
