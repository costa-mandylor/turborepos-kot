import React from "react";
import BaseLayout from "../components/baseLayout";
import BlogItem from "../components/blogItem";

const Blog = () => {
  return (
    <BaseLayout>
      <main className="max-width container mx-auto pt-10 pb-20 ">
        <section>
          <h1 className="pb-10 text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Blog
          </h1>
          <BlogItem />
        </section>
      </main>
    </BaseLayout>
  );
};

export default Blog;
