import React from "react";
import Image from "next/image";
import BaseLayout from "../components/baseLayout";
import { projectDetails } from "../dataSource";
import ProjectItem from "../components/projectItem";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getProject, IProject, PROJECT } from "@/actions/project";

const Projects = () => {
  const { data } = useQuery<IProject>({
    queryKey: [PROJECT],
  });

  return (
    <>
      <BaseLayout>
        <main className="max-width container mx-auto pt-10 pb-20">
          <section>
            <h1 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
              Tech Stack
            </h1>
            <p className="text-content py-2 lg:max-w-3xl">
              Technologies I&apos;ve been working with recently
            </p>
          </section>
          <section className="grid grid-cols-4 items-center justify-center gap-10 pt-6 md:grid-cols-5 lg:grid-cols-6">
            {data?.attributes?.stack?.data?.map((item, i) => {
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
            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
              {React.Children.toArray(
                projectDetails.map(
                  (
                    {
                      title,
                      image,
                      description,
                      techstack,
                      previewLink,
                      githubLink,
                    },
                    i
                  ) => (
                    <ProjectItem
                      key={i}
                      title={title}
                      image={image}
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
  };
}
