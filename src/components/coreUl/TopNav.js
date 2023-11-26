'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import hamburger from '../../../public/hamburger.png';
import lens from '../../../public/lens.png';
import githubIcon from '../../../public/github.png';
import instagramIcon from '../../../public/instagram.png';
import globals from 'src/data/globals.js';
import Links from 'src/components/Links.js';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="z-20 flex justify-between items-center relative bg-lightBrown shadow-md py-6"
        onClick={handleToggle}
      >
        <div className="w-8 h-8 ml-6">
          <Links
            linkText={<Image src={lens} alt="lens logo" />}
            href="/"
            isInternal
          />
        </div>

        <div className="w-6 h-6 mr-6 md:hidden cursor-pointer">
          <Image src={hamburger} alt="mobile menu button" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block pr-10">
          <ul className="flex justify-end">
            <li className="pr-3">
              <Links linkText="Home" href="/" isInternal />
            </li>
            <li className="pr-3">
              <Links linkText="About" href="/about" isInternal />
            </li>

            <div className=" w-7 h-7 pl-2">
              <li>
                <Links
                  linkText={<Image src={githubIcon} alt="Github icon" />}
                  href={globals().externalLinks.Github}
                />
              </li>
            </div>

            <div className="w-7 h-7 pl-2">
              <li>
                <Links
                  linkText={<Image src={instagramIcon} alt="Instagram icon" />}
                  href={globals().externalLinks.Instagram}
                />
              </li>
            </div>
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
          <li>
            <Links linkText="Home" href="/" isInternal />
          </li>
          <li>
            <Links linkText="About" href="/about" isInternal />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
