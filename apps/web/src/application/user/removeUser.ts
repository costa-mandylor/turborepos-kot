import { useDispatch } from 'react-redux';

import { User } from '@/domain/user';
import { setUser } from '@/redux/reducer/userSlice';

export function useRemoveUser() {
  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(setUser(User));
  };

  return { removeUser };
}
