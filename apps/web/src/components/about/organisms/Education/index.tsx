import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ABOUT_ME, IAboutMe } from '@/actions/about-me';
import { Title } from 'ui';
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
        educations?.map(({ attributes: { dateFrom, dateTo, location, name } }, i) => (
          <Detail
            key={i}
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
