import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { BLOG_PAGE } from '@/constants/pages';
import { cmsAuth } from '@/service/cms-auth';

import { ISchemaAuth, IUseDispatchUser, IUseRemoveUser, IUseToggle } from '../port';
import { useToggle } from '../useToggle';
import { useDispatchUser } from '../user/dispatchUser';
import { useRemoveUser } from '../user/removeUser';

export function useAuthActions() {
  const router = useRouter();

  const { isToggle: isToggleAuthModal, onToggle: onToggleAuthModal }: IUseToggle = useToggle();
  const { dispatchUser }: IUseDispatchUser = useDispatchUser();
  const { removeUser }: IUseRemoveUser = useRemoveUser();

  const {
    mutate: login,
    error: errorLogin,
    reset: resetErrorLogin,
  } = useMutation({
    mutationFn: async (data: ISchemaAuth) => {
      return await cmsAuth(data);
    },
    onSuccess: async (data) => {
      dispatchUser(data);
      onToggleAuthModal();
      router.push(BLOG_PAGE);
    },
    onError: ({ error }) => {
      return error;
    },
  });

  const logout = () => {
    removeUser();
  };

  return { login, logout, errorLogin, resetErrorLogin, isToggleAuthModal, onToggleAuthModal };
}
