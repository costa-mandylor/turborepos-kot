import { combineReducers } from '@reduxjs/toolkit';

import { modalAuthSlice } from './modalAuthSlice';
import { userSlice } from './userSlice';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [modalAuthSlice.name]: modalAuthSlice.reducer,
});
