import { createSlice } from "@reduxjs/toolkit";
interface User {
  userName?: string;
  password?: number | string;
}
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as User,
    isAuthentic: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthentic: (state, action) => {
      state.isAuthentic = action.payload;
    },
  },
});
export const { setUser, setIsAuthentic } = userSlice.actions;

export const userSelector = (state) => state.user;
