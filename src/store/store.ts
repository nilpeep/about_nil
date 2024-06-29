import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

// RootState türünü store'dan çıkarır
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch türünü store'dan çıkarır
export type AppDispatch = typeof store.dispatch;
