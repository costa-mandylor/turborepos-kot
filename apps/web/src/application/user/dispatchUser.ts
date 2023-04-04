import { useDispatch } from 'react-redux';

import { IUser } from '@/domain/user';
import { setUser } from '@/redux/reducer/userSlice';

export function useDispatchUser() {
  const dispatch = useDispatch();

  const dispatchUser = (user: IUser) => {
    dispatch(setUser({ ...user, isLoggingIn: true }));
  };

  return { dispatchUser };
}
