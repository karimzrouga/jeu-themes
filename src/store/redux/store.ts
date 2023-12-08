import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/fliterSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
