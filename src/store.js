import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./features/mdParser/mdParserSlice.js";

export const store = configureStore({
  reducer: {
    mdParser: modalReducer
  }
});

export default store;
