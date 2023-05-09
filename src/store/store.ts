import { configureStore } from "@reduxjs/toolkit";
import system from "./system/slice";

const store = configureStore({
  reducer: { System: system },
});
export default store;
