import React from "react";
import { Title } from "../components/atom";
import BaseLayout from "../components/baseLayout";
import BlogItem from "../components/blogItem";

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
