import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hamburgerMenu from '../../../public/hamburgerMenu.svg';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-brown py-6">
      {/* Mobile Menu */}
      <div
        className="flex justify-end cursor-pointer md:hidden relative"
        onClick={handleToggle}
      >
        <div className="w-6 h-6 mr-6">
          <Image src={hamburgerMenu} alt="Hamburger Menu" />
        </div>

        <div className={`flex flex-col absolute mt-10 bg-brown ${!isOpen ? 'h-screen p-6' : ""}`}>
          <ul className={`text-right ${isOpen ? 'hidden' : 'block'}`}>
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block pr-10">
        <ul className="flex justify-end">
          <li className="pr-3 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
