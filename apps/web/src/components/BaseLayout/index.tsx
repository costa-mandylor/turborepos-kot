import { ToastContainer } from 'react-toastify';

import Header from '../Header';

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
