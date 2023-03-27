import React from 'react';

import BaseLayout from '@components/BaseLayout';
import { Education, Info, Works } from '@components/about/organisms';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { ABOUT_ME, getAboutMe } from '@/service/about-me';

const About = () => {
  return (
    <BaseLayout>
      <main className="max-width container mx-auto pt-10 pb-20 ">
        <Info />
        <Works />
        <Education />
      </main>
    </BaseLayout>
  );
};

export default About;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([ABOUT_ME], getAboutMe);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
