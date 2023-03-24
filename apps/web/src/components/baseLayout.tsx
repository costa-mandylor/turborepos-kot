import Header from "../header";
import { ToastContainer } from "react-toastify";

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <ToastContainer />
    </>
  );
};

export default BaseLayout;
