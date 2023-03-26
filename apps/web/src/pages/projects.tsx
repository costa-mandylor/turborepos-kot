import React from 'react';
import BaseLayout from '@components/baseLayout';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getProject, PROJECT } from '@/actions/project';
import { Programs, TechStack } from '@components/projects/organisms';

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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
