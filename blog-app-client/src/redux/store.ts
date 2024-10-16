import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
