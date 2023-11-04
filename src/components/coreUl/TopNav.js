import React, { useState } from 'react';
import Link from 'next/link';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu */}
      <div
        className="flex justify-end cursor-pointer md:hidden relative"
        onClick={handleToggle}
      >
        <div className="flex flex-col absolute">
          <span>Mobile Menu Toggle</span>
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
      <div className="hidden md:block">
        <ul className="flex justify-end p-3">
          <li className="pr-3 hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopNav;
