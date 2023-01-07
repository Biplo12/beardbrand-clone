import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserReducerInterface } from '@interfaces/index';
import { RootState } from '@store/store';

const initialState: IUserReducerInterface = {
  status: {
    loading: false,
    success: false,
    error: false,
  },
  cart: {
    products: [],
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
    setCartProducts(state, action: PayloadAction<any>) {
      state.cart.products = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;

export const { setStatus, setMenuStatus, setCartProducts } = userSlice.actions;

export default userSlice.reducer;
