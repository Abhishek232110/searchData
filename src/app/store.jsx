import { configureStore } from "@reduxjs/toolkit";
import apidata from "./slice";

const store = configureStore({
  reducer: {
    api: apidata,
  },
});

export default store;
