import React from 'react';

import { Title } from 'ui';

import { BlogItem } from '@components/blog/organisms';

import BaseLayout from '@/components/BaseLayout';

const Blog = () => {
  return (
    <BaseLayout>
      <main className="max-width container mx-auto pt-10 pb-20 ">
        <section>
          <Title title="Blog" />
          <BlogItem />
        </section>
      </main>
    </BaseLayout>
  );
};

export default Blog;
