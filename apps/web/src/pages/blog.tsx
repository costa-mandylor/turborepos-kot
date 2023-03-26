import React from 'react';

import { Title } from 'ui';

import BaseLayout from '@components/baseLayout';
import { BlogItem } from '@components/blog/organisms';

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
