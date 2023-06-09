import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

import BaseLayout from '../components/BaseLayout';
import { personalDetails } from '../dataSource';

const MotionDiv = ({
  children,
  duration,
  x,
  delay,
}: {
  children: JSX.Element;
  duration: number;
  delay: number;
  x?: string;
}) => {
  return (
    <motion.div
      initial={{
        x: x ?? '-100%',
        opacity: 0,
        scale: 0.5,
      }}
      animate={{ x: '0', opacity: 1, scale: 1 }}
      transition={{ duration, delay: delay }}>
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <>
      <BaseLayout>
        <main className="max-width section container mx-auto flex flex-col items-center justify-between gap-10 sm:flex-col md:flex-row lg:flex-row">
          <div>
            <MotionDiv duration={1} delay={0.8}>
              <h1 className="text-dark-heading dark:text-light-heading text-2xl font-bold md:text-4xl xl:text-5xl xl:leading-tight">
                Hi,👋<br></br>My Name is<br></br>
              </h1>
            </MotionDiv>
            <MotionDiv duration={0.8} delay={0.5}>
              <h1 className="bg-gradient bg-clip-text text-2xl font-bold text-transparent md:text-4xl xl:text-5xl xl:leading-tight">
                {personalDetails.name}
              </h1>
            </MotionDiv>
            <MotionDiv duration={0.8} delay={0.5}>
              <h2 className="text-dark-heading dark:text-light-heading text-2xl font-bold md:text-4xl xl:text-5xl xl:leading-tight">
                {personalDetails.tagline}
              </h2>
            </MotionDiv>
          </div>
          <MotionDiv duration={0.8} delay={0.5} x="400%">
            <div
              style={{
                position: 'relative',
                width: '250px',
                height: '260px',
              }}>
              <Image
                src="/profile.png"
                alt="Kot"
                className="border-1 w-1/2 rounded-full border-solid bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:ml-auto"
                fill
              />
            </div>
          </MotionDiv>
        </main>
      </BaseLayout>
    </>
  );
};

export default Index;
