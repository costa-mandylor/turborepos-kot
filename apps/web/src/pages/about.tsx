import React from "react";
import BaseLayout from "../components/baseLayout";
import Work from "../components/work";

// Enter your Personal Details here
const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Work Experience here
const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Udemy, YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Electronics & Communication",
    Company: `Your College Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Aug 2020 - Present",
  },
];

const About = () => {
  return (
    <BaseLayout>
      <main className="max-width container mx-auto pt-10 pb-20 ">
        <section>
          <h1 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            About Me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            {personalDetails.about}
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Work Experience
          </h1>
          {React.Children.toArray(
            workDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </section>
        <section>
          <h1 className="pt-10 text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
            Education
          </h1>
          {React.Children.toArray(
            eduDetails.map(
              ({ Position, Company, Location, Type, Duration }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                />
              )
            )
          )}
        </section>
      </main>
    </BaseLayout>
  );
};

export default About;
