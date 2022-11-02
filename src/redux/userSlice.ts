import { createSlice } from '@reduxjs/toolkit';
interface User {
  userName?: string;
  password?:number | string

}
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as User,
    isAuthentic: false,
  },
  reducers: {
    userSignup: (state, action) => {
      state.user = action.payload;
    },
    isAuthenticUser: (state, action) => {
      if (
        action.payload.userName === state.user.userName &&
        action.payload.password === state.user.password
      ) {
        state.isAuthentic = true;
      } else {
        state.isAuthentic = false;
      }
    },
    setIsAuthentic: (state, action) => {
      state.isAuthentic = action.payload;
    },
  },
})
export const { userSignup, isAuthenticUser, setIsAuthentic } =
  userSlice.actions;

export const userSelector = (state) => state.user;
