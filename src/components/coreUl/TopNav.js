'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import hamburger from '../../../public/hamburger.png';
import lens from '../../../public/lens.png';
import githubIcon from '../../../public/github.png';
import instagramIcon from '../../../public/instagram.png';
import linkedinIcon from '../../../public/linkedin.png';
import globals from 'src/data/globals.js';
import StyledLinks from 'src/components/coreUl/StyledLinks.js';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="z-20 flex justify-between relative bg-lightBrown shadow-md py-6"
        onClick={handleToggle}
      >
        <div className="w-8 h-8 ml-6">
          <StyledLinks
            linkText={<Image src={lens} alt={globals.appName} />}
            href="/"
            isInternal
          />
        </div>

        <div className="flex">
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex justify-end">
              <li className="pr-3">
                <StyledLinks linkText="Home" href="/" isInternal />
              </li>
              <li className="pr-3">
                <StyledLinks linkText="About" href="/about" isInternal />
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="flex items-center">
            <div className="w-7 h-7 pr-2">
              <StyledLinks
                linkText={<Image src={githubIcon} alt="" />}
                href={globals.externalLinks.Github}
              />
            </div>
            <div className="w-7 h-7 pr-2">
              <StyledLinks
                linkText={<Image src={linkedinIcon} alt="" />}
                href={globals.externalLinks.Linkedin}
              />
            </div>
            <div className="w-7 h-7 pr-2">
              <StyledLinks
                linkText={<Image src={instagramIcon} alt="" />}
                href={globals.externalLinks.Instagram}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="w-6 h-6 mr-6 md:hidden cursor-pointer">
            <Image src={hamburger} alt="" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`z-10 absolute right-0 bg-brown ${
          isOpen ? 'w-full p-6 md:hidden animate-slide-in-top' : ''
        }`}
      >
        <ul className={`text-left ${isOpen ? 'block' : 'hidden h-screen p-6'}`}>
          <li>
            <StyledLinks linkText="Home" href="/" isInternal />
          </li>
          <li>
            <StyledLinks linkText="About" href="/about" isInternal />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TopNav;
