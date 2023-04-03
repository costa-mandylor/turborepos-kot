import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { BLOG_PAGE } from '@/constants/pages';
import { cmsAuth } from '@/service/cms-auth';

import { ISchemaAuth, IUseDispatchUser, IUseRemoveUser, IUseToggleModal } from '../port';
import { useToggleModal } from '../toggleModal/useToggleModal';
import { useDispatchUser } from '../user/dispatchUser';
import { useRemoveUser } from '../user/removeUser';

export function useAuthenticate() {
  const router = useRouter();

  const { isToggleModal: isToggleAuthModal, onToggleModal: onToggleAuthModal }: IUseToggleModal = useToggleModal();
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
