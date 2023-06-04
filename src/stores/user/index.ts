import { createSlice } from "@reduxjs/toolkit";

export interface IUserStore {
  user: object;
}

const initialState: IUserStore = {
  user: {},
};
const userStore = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, payload) => {
      state.user = payload;
    },
  },
});

export const { setUser } = userStore.actions;
export default userStore;
