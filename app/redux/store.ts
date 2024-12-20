import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
