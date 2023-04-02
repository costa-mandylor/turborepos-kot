import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '../store';

type UserParams = {
  isLoggingIn: boolean;
  jwt: string;
};

export type UserState = {
  user: {
    isLoggingIn: boolean;
    jwt: string;
  };
};

const initialState: UserState = {
  user: {
    isLoggingIn: false,
    jwt: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserParams>) {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUserState = (state: AppState) => state.user;

export default userSlice.reducer;
