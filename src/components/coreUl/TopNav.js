import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburgerMenu from '../../../public/hamburger-menu.svg';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-lightBrown py-6">
      {/* Mobile Menu */}
      <div
        className="flex justify-end cursor-pointer relative"
        onClick={handleToggle}
      >
        <div className="w-6 h-6 mr-6 md:hidden">
          <Image src={hamburgerMenu} alt="mobile menu button" />
        </div>
        <nav
          className={`flex flex-col absolute mt-10 bg-lightBrown ${
            isOpen ? 'h-screen p-6 md:hidden' : ''
          }`}
        >
          <ul
            className={`text-right ${isOpen ? 'block' : 'hidden h-screen p-6'}`}
          >
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

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
    </div>
  );
};

export default TopNav;
