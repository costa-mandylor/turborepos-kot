import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ABOUT_ME, IAboutMe } from "@/actions/about-me";
import { Title } from "@/src/components/atom";
import { Detail } from "../../molecules";

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

const Education = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  const educations = data?.attributes?.educations?.data;

  return (
    <section>
      <Title title="Education" />
      {React.Children.toArray(
        educations?.map(
          ({ attributes: { dateFrom, dateTo, location, name } }, i) => (
            <Detail
              key={i}
              position={name}
              company={""}
              location={location}
              type={""}
              dateTo={dateTo}
              dateFrom={dateFrom}
            />
          )
        )
      )}
    </section>
  );
};

export default Education;
