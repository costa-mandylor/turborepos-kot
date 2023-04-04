import { Slice, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { User } from '@/domain/user';

import { AppState } from '../store';

export const userSlice: Slice = createSlice({
  name: 'user',
  initialState: User,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
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

export const selectUserState = (state: AppState) => state;

export default userSlice.reducer;
