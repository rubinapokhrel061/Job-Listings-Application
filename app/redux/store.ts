import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlice";
import favouriteJobsReducer from "./slices/favouriteJobsSlice";
export const store = configureStore({
  reducer: {
    jobs: jobReducer,
    favJob: favouriteJobsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
