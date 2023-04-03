import { useSelector } from 'react-redux';

import { AppState } from '@/redux/store';

export function useGetUser() {
  const user = useSelector((reduxState: AppState) => reduxState.user);

  return { user };
}
