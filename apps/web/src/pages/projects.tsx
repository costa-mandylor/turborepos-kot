import React from 'react';

import BaseLayout from '@components/BaseLayout';
import { Programs, TechStack } from '@components/projects/organisms';
import { QueryClient, dehydrate } from '@tanstack/react-query';

import { ABOUT_ME, PROJECT, getAboutMe, getProject } from '@/service';

const Projects = () => {
  return (
    <>
      <BaseLayout>
        <main className="max-width container mx-auto pt-10 pb-20">
          <TechStack />
          <Programs />
        </main>
      </BaseLayout>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([PROJECT], getProject);
  await queryClient.prefetchQuery([ABOUT_ME], getAboutMe);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
