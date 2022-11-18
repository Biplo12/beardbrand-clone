import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserReducerInterface } from '@interfaces/index';

const initialState: IUserReducerInterface = {
  status: {
    loading: false,
    success: false,
    error: false,
  },
  menu: false,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<any>) {
      state.status = action.payload;
    },
    setMenuStatus(state, action: PayloadAction<any>) {
      state.menu = action.payload;
    },
  },
});

export const selectUser = (state: any) => state.user;

export const { setStatus, setMenuStatus } = userSlice.actions;

export default userSlice.reducer;
