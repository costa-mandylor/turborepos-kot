import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Title } from 'ui';

import { useQuery } from '@tanstack/react-query';

import { ABOUT_ME, IAboutMe } from '@/actions/about-me';

const Info = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  return (
    <section className="pb-8">
      <Title title="About me" />
      <ReactMarkdown className="text-content grid gap-3 pt-5">{data?.attributes?.desc || ''}</ReactMarkdown>
    </section>
  );
};

export default Info;
