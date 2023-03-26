import React from 'react';

import { Title } from 'ui';

import { useQuery } from '@tanstack/react-query';

import { ABOUT_ME, IAboutMe } from '@/actions/about-me';

import { Detail } from '../../molecules';

const Works = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  return (
    <section className="pb-8">
      <Title title="Work Experience" />
      {React.Children.toArray(
        data?.attributes?.works?.data?.map(
          ({ attributes: { company, position, locations, title, dateTo, dateFrom, logo } }: any, i: React.Key) => (
            <Detail
              key={i}
              position={title}
              company={company}
              location={locations}
              type={position}
              dateTo={dateTo}
              dateFrom={dateFrom}
              logo={logo}
            />
          ),
        ),
      )}
    </section>
  );
};

export default Works;
