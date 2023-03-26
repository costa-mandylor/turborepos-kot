import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import { ABOUT_ME, IAboutMe } from '@/actions/about-me';
import { Title } from 'ui';

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
