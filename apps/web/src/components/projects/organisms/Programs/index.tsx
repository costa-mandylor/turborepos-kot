import React from 'react';

import { Title } from 'ui';

import { useQuery } from '@tanstack/react-query';

import { IProject, PROJECT } from '@/service';

import { ProgramItem } from '../../molecules';

const Programs = () => {
  const { data } = useQuery<IProject>({
    queryKey: [PROJECT],
  });

  const projects = data?.attributes?.programs?.data;

  return (
    <section>
      <Title title="Projects" />
      <div className="grid grid-cols-1 gap-10 pt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {React.Children.toArray(
          projects?.map(({ attributes: { title, image, description, techstack, previewLink, githubLink } }, key) => (
            <ProgramItem
              key={key}
              title={title}
              image={image?.data?.[0]?.attributes?.url}
              description={description}
              techstack={techstack}
              previewLink={previewLink}
              githubLink={githubLink}
            />
          )),
        )}
      </div>
    </section>
  );
};

export default Programs;
