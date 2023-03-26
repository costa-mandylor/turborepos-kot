import React from "react";
import Image from "next/image";
import BaseLayout from "../components/baseLayout";
import ProjectItem from "../components/projectItem";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getProject, IProject, PROJECT } from "@/actions/project";
import { Title } from "../components/atom";

const Projects = () => {
  const { data } = useQuery<IProject>({
    queryKey: [PROJECT],
  });

  const stacks = data?.attributes?.stack?.data;
  const projects = data?.attributes?.programs?.data;

  return (
    <>
      <BaseLayout>
        <main className="max-width container mx-auto pt-10 pb-20">
          <section>
            <Title title="Tech Stack" />
            <p className="text-content py-2 lg:max-w-3xl">
              Technologies I&apos;ve been working with recently
            </p>
          </section>
          <section className="grid grid-cols-4 items-center justify-center gap-10 pt-6 md:grid-cols-5 lg:grid-cols-6">
            {stacks?.map((item, i) => {
              return (
                <a
                  target="_blank"
                  href={item?.attributes?.caption}
                  key={i}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={item?.attributes?.url}
                    title={item?.attributes?.name}
                    alt={item?.attributes?.alternativeText || ""}
                    width={75}
                    height={75}
                  />
                </a>
              );
            })}
          </section>
          <section>
            <h1 className="pt-10 text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
              Projects
            </h1>
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
              {React.Children.toArray(
                projects?.map(
                  (
                    {
                      attributes: {
                        title,
                        image,
                        description,
                        techstack,
                        previewLink,
                        githubLink,
                      },
                    },
                    i
                  ) => (
                    <ProjectItem
                      key={i}
                      title={title}
                      image={image?.data?.[0]?.attributes?.url}
                      description={description}
                      techstack={techstack}
                      previewLink={previewLink}
                      githubLink={githubLink}
                    />
                  )
                )
              )}
            </div>
          </section>
        </main>
      </BaseLayout>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([PROJECT], getProject);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
