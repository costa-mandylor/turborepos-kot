import React from 'react';

import { useAuthActions } from '@/application/auth/authActions';
import { useGetUser } from '@/application/user/getUser';
import { IUser } from '@/domain/user';

const ButtonAuth = () => {
  const { user }: { user: IUser } = useGetUser();

  const { logout, onToggleAuthModal } = useAuthActions();

  return (
    <button
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      type="button"
      className="inline-block border border-current px-6 py-2 text-xs font-medium dark:text-light-content"
      onClick={() => {
        user?.isLoggingIn ? logout() : onToggleAuthModal();
      }}>
      {user?.isLoggingIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default ButtonAuth;
