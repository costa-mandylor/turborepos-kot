import React from "react";
import Image from "next/image";
import BaseLayout from "../components/baseLayout";
import { projectDetails, techStackDetails } from "./dataSource";
import ProjectItem from "../components/projectItem";

const Projects = () => {
  return (
    <>
      <BaseLayout>
        <main className="max-width container mx-auto pt-10 pb-20">
          <section>
            <h1 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
              Tech Stack
            </h1>
            <p className="text-content py-2 lg:max-w-3xl">
              Technologies I've been working with recently
            </p>
          </section>
          <section className="grid grid-cols-4 items-center gap-10 pt-6 md:grid-cols-5 lg:grid-cols-6">
            {Object.keys(techStackDetails).map((item, i) => {
              return (
                <div
                  style={{
                    position: "relative",
                    width: "75px",
                    height: "75px",
                  }}
                >
                  <Image
                    key={i}
                    src={techStackDetails[item].image}
                    title={techStackDetails[item].title}
                    alt=""
                    fill
                  />
                </div>
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
                  ({
                    title,
                    image,
                    description,
                    techstack,
                    previewLink,
                    githubLink,
                  }) => (
                    <ProjectItem
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
