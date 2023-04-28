import { configureStore } from "@reduxjs/toolkit";
import userStore from "./user";
import globalStore from "./global";

const store = configureStore({
  reducer: {
    global: globalStore.reducer,
    user: userStore.reducer,
  },
});
export default store;
