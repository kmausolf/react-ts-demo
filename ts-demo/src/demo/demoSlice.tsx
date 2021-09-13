import { createSlice } from "@reduxjs/toolkit";

interface ICreateAccount {
    payload: {
        username: string;
        favoriteFood: string;
    }
}

export const demoSlice = createSlice({
  name: "demo",
  initialState: {
    username: "",
    favoriteFood: "",
  },
  reducers: {
    createAccount: (state, action: ICreateAccount) => {
      state.username = action.payload.username;
    },
  },
});