import React from 'react';
import { useSelector } from 'react-redux';

import { Title } from 'ui';

import { BlogItem } from '@components/blog/organisms';

import BaseLayout from '@/components/BaseLayout';
import { setUser } from '@/redux/reducer/userSlice';
import { AppState, wrapper } from '@/redux/store';

const Blog = () => {
  const user = useSelector((reduxState: AppState) => reduxState.user);

  console.log('user', user);
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
  // we can set the initial state from here
  await store.dispatch(setUser({ isLoggingIn: false, jwt: '' }));

  // const { user } = store.getState();

  console.log('user?.user?.isLoggingIn', store.getState());

  // if (!user?.user?.isLoggingIn) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      authState: false,
    },
  };
});
