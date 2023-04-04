import { useDispatch, useSelector } from 'react-redux';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { BLOG_PAGE } from '@/constants/pages';
import { setModalAuth } from '@/redux/reducer/modalAuthSlice';
import { AppState } from '@/redux/store';
import { cmsAuth } from '@/service/cms-auth';

import { ISchemaAuth, IUseDispatchUser, IUseRemoveUser } from '../port';
import { useDispatchUser } from '../user/dispatchUser';
import { useRemoveUser } from '../user/removeUser';

export function useAuthActions() {
  const router = useRouter();
  const dispatch = useDispatch();

  const isModalAuthOpen = useSelector((reduxState: AppState) => reduxState.modalAuth.isModalAuthOpen);

  const { dispatchUser }: IUseDispatchUser = useDispatchUser();
  const { removeUser }: IUseRemoveUser = useRemoveUser();

  const onToggleAuthModal = () => {
    dispatch(setModalAuth({ isModalAuthOpen: !isModalAuthOpen }));
  };

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

  return { login, logout, errorLogin, resetErrorLogin, isModalAuthOpen, onToggleAuthModal };
}
