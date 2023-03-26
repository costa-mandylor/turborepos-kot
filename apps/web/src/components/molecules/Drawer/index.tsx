import React from "react";

type PROPS = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ children, isOpen, setIsOpen }: PROPS) => {
  return (
    <main
      className={
        " fixed inset-0 z-10 transform overflow-hidden ease-in-out " +
        (isOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500  "
          : " translate-x-full opacity-0 transition-all delay-500  ")
      }
    >
      <section
        className={
          "delay-400 absolute right-0 h-full w-screen max-w-sm transform bg-white shadow-xl transition-all duration-500 ease-in-out dark:bg-dark-mode  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex h-full w-screen max-w-sm flex-col space-y-6 overflow-y-scroll pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-10 w-10 stroke-dark-heading p-1 dark:stroke-white"
            onClick={() => setIsOpen((e: boolean) => !e)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {children}
        </article>
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
