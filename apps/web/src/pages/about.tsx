import React from 'react';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { ABOUT_ME, getAboutMe } from '@/actions/about-me';
import BaseLayout from '@components/baseLayout';
import { Info, Works, Education } from '@components/about/organisms';

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
