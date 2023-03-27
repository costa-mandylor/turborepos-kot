import React from 'react';

import { Title } from 'ui';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { IProject, PROJECT } from '@/actions/project';

const TechStack = () => {
  const { data } = useQuery<IProject>({
    queryKey: [PROJECT],
  });

  const stacks = data?.attributes?.stack?.data;

  return (
    <section className="pb-8">
      <Title title="Tech Stack" />
      <p className="text-content py-2 lg:max-w-3xl">Technologies I&apos;ve been working with recently</p>
      <div className="grid grid-cols-4 items-center justify-center gap-10 pt-6 md:grid-cols-5 lg:grid-cols-6">
        {stacks?.map((item, key) => {
          return (
            <a
              target="_blank"
              href={item?.attributes?.caption}
              key={key}
              className="flex items-center justify-center"
              rel="noreferrer"
            >
              <Image
                src={item?.attributes?.url}
                title={item?.attributes?.name}
                alt={item?.attributes?.alternativeText || ''}
                width={75}
                height={75}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
