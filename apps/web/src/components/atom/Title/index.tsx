import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="pt-10 text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
      {title}
    </h1>
  );
};

export default Title;
