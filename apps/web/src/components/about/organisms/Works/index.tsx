import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ABOUT_ME, IAboutMe } from "@/actions/about-me";
import { Detail } from "../../molecules";
import { Title } from "@/src/components/atom";

const Works = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  return (
    <section>
      <Title title="Work Experience" />
      {React.Children.toArray(
        data?.attributes?.works?.data?.map(
          (
            {
              attributes: {
                company,
                position,
                locations,
                title,
                dateTo,
                dateFrom,
                logo,
              },
            }: any,
            i: React.Key
          ) => (
            <Detail
              key={i}
              position={title}
              company={company}
              location={locations}
              type={position}
              dateTo={dateTo}
              dateFrom={dateFrom}
              logo={logo}
            />
          )
        )
      )}
    </section>
  );
};

export default Works;
