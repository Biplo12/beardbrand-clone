import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import userReducer from '@state/user/userSlice';
import dialogReducer from '@state/dialog/dialogSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    dialog: dialogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
