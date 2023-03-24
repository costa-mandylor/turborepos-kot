import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import React from "react";
import { ABOUT_ME, IAboutMe } from "@/actions/about-me";
import { Title } from "@/src/components/atom";

const Info = () => {
  const { data } = useQuery<IAboutMe>({
    queryKey: [ABOUT_ME],
  });

  return (
    <section>
      <Title title="About me" />
      <ReactMarkdown className="text-content grid gap-3 py-8">
        {data?.attributes?.desc || ""}
      </ReactMarkdown>
    </section>
  );
};

export default Info;
