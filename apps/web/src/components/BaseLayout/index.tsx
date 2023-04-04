import { ToastContainer } from 'react-toastify';

import AuthModal from '../AuthModal';
import Header from '../Header';

const BaseLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <AuthModal />
      <ToastContainer />
    </>
  );
};

export default BaseLayout;
