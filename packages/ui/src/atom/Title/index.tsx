const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="text-dark-heading dark:text-light-heading text-2xl font-bold md:text-4xl xl:text-5xl xl:leading-tight">
      {title}
    </h1>
  );
};

export default Title;
