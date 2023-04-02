import { Slice, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '../store';

// type User = {
//   user: {
//     blocked: false;
//     confirmed: false;
//     createdAt: Date;
//     email: string;
//     id: number;
//     provider: string;
//     updatedAt: Date;
//     username: string;
//   };
// };

// type UserPayload = {
//   isLoggingIn: boolean;
//   jwt: string;
//   blocked: false;
//   confirmed: false;
//   createdAt: Date;
//   email: string;
//   id: number;
//   provider: string;
//   updatedAt: Date;
//   username: string;
// };

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

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
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
