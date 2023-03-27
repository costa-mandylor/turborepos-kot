import React from 'react';

import { IfFeatureEnabled } from '@growthbook/growthbook-react';
import { Facebook, Github, Linkdein } from 'icons-web';
import Link from 'next/link';

import { socialMediaUrl } from '@/dataSource';

const NavBar = ({ isDesktop }: { isDesktop: boolean }) => {
  return (
    <nav className={`${isDesktop ? 'md:display hidden sm:hidden' : 'display'} justify-between text-center md:flex`}>
      <ul className="dark:text-light-content items-center font-medium md:mr-10 md:flex md:space-x-5">
        <li className="pb-1 md:pb-0">
          <Link href="/">Home</Link>
        </li>
        <li className="pb-1 md:pb-0">
          <Link href="/about">About</Link>
        </li>
        <li className="pb-1 md:pb-0">
          <Link href="/projects">Projects</Link>
        </li>
        <IfFeatureEnabled feature="blog">
          <li className="pb-1 md:pb-0">
            <Link href="/blog">Blog</Link>
          </li>
        </IfFeatureEnabled>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="my-5 flex items-center justify-evenly md:my-0 md:mr-5 md:space-x-5">
        <li>
          <Link href={socialMediaUrl.fb} target="_blank" rel="noreferrer noopener">
            <Facebook className="fill-dark-heading dark:fill-light-heading w-7 h-7" />
          </Link>
        </li>
        <li>
          <Link href={socialMediaUrl.linkdein} target="_blank" rel="noreferrer noopener">
            <Linkdein className="fill-dark-heading dark:fill-light-heading w-7 h-7" />
          </Link>
        </li>
        <li>
          <Link href={socialMediaUrl.github} target="_blank" rel="noreferrer noopener">
            <Github className="fill-dark-heading dark:fill-light-heading w-7 h-7" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
