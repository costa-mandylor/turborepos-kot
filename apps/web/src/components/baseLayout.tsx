import { ToastContainer } from 'react-toastify';

import Header from './header';

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
