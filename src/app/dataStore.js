import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import themeReducer from "../features/themeSlice";

export const dataStore = configureStore({
  reducer: {
    data: dataReducer,
    theme: themeReducer,
  },
});
