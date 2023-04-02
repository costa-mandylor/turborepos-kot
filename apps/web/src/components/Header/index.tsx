import React, { useState } from 'react';

import Link from 'next/link';

import Drawer from '../Drawer';
import NavBar from '../NavBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="max-width container mx-auto justify-between py-2 md:flex">
        <div className="flex items-center justify-between py-2 md:py-10">
          <Link href="/">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xl font-extrabold uppercase text-transparent">
              Kot DEV
            </div>
          </Link>
          <div className="cursor-pointer" onClick={() => setIsOpen((value) => !value)}>
            <svg
              className="stroke-dark-heading dark:stroke-white md:hidden"
              width="25"
              height="20"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <NavBar isDesktop />
      </header>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <NavBar isDesktop={false} />
      </Drawer>
    </>
  );
};

export default Header;
