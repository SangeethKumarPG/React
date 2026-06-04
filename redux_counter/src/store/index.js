import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter.js";
import authSlice from "./auth.js";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
