import React from 'react';

import { Title } from 'ui';

import { useQuery } from '@tanstack/react-query';

import { ABOUT_ME, IAboutMe } from '@/actions/about-me';

import { Detail } from '../../molecules';

const Education = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  const educations = data?.attributes?.educations?.data;

  return (
    <section>
      <Title title="Education" />
      {React.Children.toArray(
        educations?.map(({ attributes: { dateFrom, dateTo, location, name } }, key) => (
          <Detail
            key={key}
            position={name}
            company={''}
            location={location}
            type={''}
            dateTo={dateTo}
            dateFrom={dateFrom}
          />
        )),
      )}
    </section>
  );
};

export default Education;
