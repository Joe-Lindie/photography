import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburgerMenu from '../../../public/hamburger-menu.svg';
import lens from '../../../public/lens.png';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex justify-between items-center relative bg-lightBrown py-6"
        onClick={handleToggle}
      >
        <div className="w-8 h-8 ml-6">
          <Link href="/">
            <Image src={lens} alt="lens logo" />
          </Link>
        </div>

        <div className="w-6 h-6 mr-6 md:hidden">
          <Image src={hamburgerMenu} alt="mobile menu button" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block pr-10">
          <ul className="flex justify-end">
            <li className="pr-3 hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`z-10 absolute right-0 bg-brown ${
          isOpen ? 'w-full p-6 md:hidden animate-slide-in-top' : ''
        }`}
      >
        <ul className={`text-left ${isOpen ? 'block' : 'hidden h-screen p-6'}`}>
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
