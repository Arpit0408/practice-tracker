import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";

export const dataStore = configureStore({
  reducer: {
    data: dataReducer,
  },
});
