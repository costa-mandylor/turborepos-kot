import { Slice, createSlice } from '@reduxjs/toolkit';

export const modalAuthSlice: Slice = createSlice({
  name: 'modalAuth',
  initialState: {
    isModalAuthOpen: false,
  },
  reducers: {
    setModalAuth(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setModalAuth } = modalAuthSlice.actions;

export default modalAuthSlice.reducer;
